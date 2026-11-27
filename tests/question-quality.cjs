const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');
function bank(name, endMarker) {
  const start = html.indexOf(`const ${name}=`);
  const end = html.indexOf(endMarker, start);
  assert(start >= 0 && end > start, `Cannot extract ${name}`);
  return vm.runInNewContext(html.slice(start, end) + (endMarker === '\n];' ? '\n];' : '') + `;${name}`);
}
const qb = bank('QB', '/* ===== Case room ===== */');
const prep = bank('PREP_ITEMS', 'const PREP_RESOURCES=');
const sl = bank('SL_CARDS', '\n];').filter(c => c.check);
const lessons = bank('LESSONS', '/* ---- lesson engine ----');
const checks = [
  ...qb.map(q => ({id: `QB:${q.i}`, options: q.a, key: q.c, explanation: q.e})),
  ...prep.map(q => ({id: `PREP:${q.i}`, options: q.a, key: q.c, explanation: q.e})),
  ...sl.map(c => ({id: `SL:${c.id}`, options: c.check.opts, key: c.check.a, explanation: c.check.x})),
  ...lessons.flatMap(l => l.blocks.filter(b => b.k === 'check').map((b, i) => ({id: `${l.id}:${i}`, options: b.o, key: b.c, explanation: b.e})))
];
assert.equal(qb.length, 571, 'Finance bank must not lose questions');
assert.equal(prep.length, 78, 'Economics bank must not lose questions');
assert.equal(new Set(checks.map(q => q.id)).size, checks.length);
const lengthFlags = [];
for (const q of checks) {
  assert.equal(q.options.length, 4, `${q.id}: expected four options`);
  assert(Number.isInteger(q.key) && q.key >= 0 && q.key < 4, `${q.id}: invalid key`);
  assert(q.explanation && q.explanation.trim(), `${q.id}: missing explanation`);
  const normalised = q.options.map(o => o.trim().toLowerCase());
  assert(normalised.every(Boolean), `${q.id}: empty option`);
  assert.equal(new Set(normalised).size, 4, `${q.id}: duplicate options`);
  const words = q.options.map(o => o.trim().split(/\s+/).length);
  if (words[q.key] >= 8 && words[q.key] > Math.max(...words.filter((_, i) => i !== q.key)) * 1.7) lengthFlags.push(q.id);
}
assert.deepEqual(lengthFlags, [], 'Review correct answers conspicuously longer than every distractor');
// Verify display permutations retain original grading indexes and remain stable on rerender.
const helperStart = html.indexOf('const CHECK_ORDERS=');
const helperEnd = html.indexOf('/* ===== Module 1 ===== */', helperStart);
const shuffleStart = html.indexOf('function shuffled(n)');
const shuffleEnd = html.indexOf('function renderQ()', shuffleStart);
const order = vm.runInNewContext(html.slice(helperStart, helperEnd) + html.slice(shuffleStart, shuffleEnd) + ';checkOrder');
const item = {};
const first = order(item, 4);
assert.deepEqual([...first].sort(), [0, 1, 2, 3]);
assert.strictEqual(order(item, 4), first, 'Rerender must not move the options');
assert.notStrictEqual(order({}, 4), first, 'Different questions need their own order');
const blockStart = html.indexOf('function lessonBlock(b,i)');
const blockEnd = html.indexOf('\nfunction ', blockStart + 1);
const render = vm.runInNewContext(html.slice(blockStart, blockEnd) + ';lessonBlock', {
  LESSON_ANS: {0: 2}, checkOrder: () => [2, 0, 3, 1]
});
const rendered = render({k: 'check', q: 'Test', o: ['one', 'two', 'three', 'four'], c: 2, e: 'Reason'}, 0);
assert.match(rendered, /class="optbtn right"[^>]*data-opt="2"/);
assert.match(rendered, /<span class="k">A<\/span><span>three<\/span>/);
assert.match(rendered, /Correct/);
const incorrect = render({k: 'check', q: 'Test', o: ['one', 'two', 'three', 'four'], c: 1, e: 'Reason'}, 0);
assert.match(incorrect, /class="optbtn wrong"[^>]*data-opt="2"/);
assert.match(incorrect, /class="optbtn right"[^>]*data-opt="1"/);
assert.match(incorrect, /Not quite/);
assert.equal(qb.find(q => q.i === 'ir10').q.includes('twice'), false);
assert.match(qb.find(q => q.i === 'pi06').q, /divisible/);
assert.match(lessons.find(l => l.id === 'ls_emh').blocks.find(b => b.k === 'check').q, /weakest/);
console.log(`Validated ${checks.length} questions: keys, options, explanations, length cues and shuffled grading.`);
