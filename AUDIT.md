# MBAassist — Audit & Build Plan

*Managerial Finance (MBA512) study app. Reviewed 28 July 2026, before any changes.*

This is a review of the app as it stands, then a plan for the changes you asked for: more warmth and an Ashesi presence, better usability, a bigger question bank, and the learning principles underneath it all. Nothing has been changed yet — this is for your sign-off.

---

## 1. Where the app is already strong (leave these alone)

Before the criticism, it's worth being clear about what not to break. The engine is good.

- **385 questions across 20 topics**, six lecture modules plus four support modes (Teach, Formula map, Case room, Calculator). That is real coverage.
- **Spaced-repetition retirement.** A question retires after two correct answers in a row and stops appearing until everything else is retired; missed items return to the front of the queue. This is a genuine mastery-learning loop, not a static quiz.
- **35 worked calculators** that show every step, plus a guided "which formula do I need?" wizard.
- **Explanations on every question**, not just a right/wrong mark.
- **Honest academic-integrity framing** — the app repeatedly tells you it is for private practice, not graded work. Good judgement, and it protects you.
- **Solid technical base** — dark mode, offline PWA, device-local progress, keyboard entry on the calculator.

The bones are sound. The problem is not the machine; it is that the machine has no face.

---

## 2. Usability audit

Reviewed against standard heuristics (Nielsen) and mobile-first practice. Ordered by impact.

### High impact

1. **No emotional or institutional identity.** The interface is competent but cold — grey, monospaced eyebrows, abstract line-icons. Nothing says *Ashesi*, nothing says *you*. The two hero images already sitting in `/assets` (`study-hero.png`, `finance-bg.png`) are never loaded. This is the core of what you flagged, and it is the biggest single lever.

2. **Feedback is not announced to assistive tech.** When you answer a question the verdict box appears, but there is no `aria-live` region, so a screen-reader user gets no confirmation. Zero `alt` text anywhere. For a public university tool this is both an accessibility gap and, in some contexts, a compliance one.

3. **First-run experience is empty.** A new user lands on 0% everywhere with no orientation — no "start here", no sense of how long a drill takes, no welcome. The "Next up" strip only populates after you already have progress, so the emptiest moment gets the least guidance.

4. **The drill is a fixed 10 with no choice of length.** You cannot do a quick 5 before class or a long 20 before an exam. One size only.

### Medium impact

5. **Progress is silently tied to one device and one session.** If you clear your browser or switch phones, everything is gone with no warning and no export. Months of retirement history is one cache-clear from zero.

6. **No sense of streak, effort, or time.** The app tracks accuracy and retirement but never reflects *consistency* back to you — the single strongest driver of study-app habit.

7. **Thin motion and state feedback.** Correct/incorrect is a colour change; there is no micro-confirmation, and `prefers-reduced-motion` is only partially handled.

8. **Search and recents on the calculator are good but undiscoverable** — a first-time user won't know the "?" opens a guided finder.

### Low impact / polish

9. Focus-visible styling is minimal; keyboard-only navigation works but is hard to see.
10. No "why am I seeing this question" affordance beyond the topic label.
11. The "Learning use only" notice is important but visually heavy on every visit; it could be acknowledged once and then softened.

---

## 3. Senior learning-designer audit

Reviewed against Bloom's taxonomy (cognitive demand), Kirkpatrick (does it change behaviour, not just knowledge), and the mastery/retrieval-practice literature.

**What is pedagogically excellent already:**

- **Retrieval practice + spaced repetition** is the highest-evidence study method there is, and it is the spine of this app. Well done.
- **Immediate elaborated feedback** (the `e:` explanation on every item) is exactly right — it corrects the misconception in the moment.
- **Worked examples with full steps** in the calculator reduce cognitive load for novices, which is correct for early learning.

**Where it under-delivers as a learning experience:**

1. **Almost everything sits at Bloom's "Remember/Understand".** The multiple-choice bank tests recognition. There is little that pushes to *Apply* under time pressure or *Analyse* (compare two instruments, spot the flawed reasoning). The Case room is the one place that reaches higher — it is underused as a result.

2. **No stated learning objectives per topic.** Each topic has a nice `ex:` overview and `tips:`, but never a "by the end you can…" in observable, testable verbs. Without objectives, the learner can't self-assess against a target, and you can't tell whether the bank actually covers the objective.

3. **No confidence or self-explanation step.** Mastery research (and Kirkpatrick Level 2) improves sharply when learners rate confidence *before* seeing the answer, or explain *why*. Right now the loop is recognise → tap → told. Adding a light "how sure are you?" turns a guess into metacognition and surfaces the dangerous "confidently wrong" cases.

4. **Feedback is corrective but not adaptive at the topic level.** Missed items return, which is good, but the app never says "your Bonds pricing is weak — read this first, then drill." The diagnosis exists in the data; it isn't surfaced as guidance.

5. **Coverage is uneven against exam weight** (see §4). Some heavily-tested computational topics have the fewest questions.

6. **No transfer to the real deliverable.** The Case room bridges toward the actual MBA decision case, but the drills don't. A learner can be at 100% retired and still freeze on a novel worded problem. One or two "apply it" items per topic would close the gap between recognition and the exam.

---

## 4. Question bank — targeted gaps (your "targeted only" choice)

Current counts per topic (20 topics, 385 items):

| Topic | Count | Note |
|---|---|---|
| Multiple & uneven cash flows (`t_multi`) | **15** | Thinnest, and core computational TVM skill |
| Stock market & returns (`t_sbasic`) | 16 | Thin |
| Applications (`t_app`) | 18 | Retirement/mortgage/MBA — high transfer value |
| Bond market & terms (`t_bbasic`) | 18 | |
| Interest-rate risk, tax & ratings (`t_brisk`) | 18 | |
| Compounding, APR & EAR (`t_comp`) | 18 | Common exam trap |
| Returns: ROA/ROC/ROE (`t_ret`) | 18 | Numeric variety possible |
| Growth, income stocks & PVGO (`t_growth`) | 18 | |
| Value added: MVA & EVA (`t_val`) | 18 | |
| Single sums (`t_sing`) | 22 | Adequate |
| DDM (`t_ddm`) | 22 | Adequate |
| Annuities & perpetuities (`t_ann`) | 24 | Well covered |
| (all conceptual topics: goals, decisions, markets, efficiency, EMH) | 20 each | Well covered — leave |

**Targeted plan (roughly +70–90 items, not a blanket expansion):** add ~8–12 fresh items each to the nine thin *and* computationally rich topics — `t_multi`, `t_comp`, `t_sbasic`, `t_ret`, `t_val`, `t_growth`, `t_brisk`, `t_app`, `t_bbasic`. Bias the new items toward **numeric/applied variants and "spot the flawed reasoning" analysis questions**, which is exactly where the bank is weakest on Bloom's ladder. The conceptual topics already at 20 are left untouched.

Every new item follows the existing schema (`{i, t, q, a[], c, e}`) with a worked explanation, and every numeric answer is verified programmatically before it ships — a wrong answer key in a study app teaches the wrong thing.

---

## 5. Making it feel human + Ashesi (photos sourced online)

You asked for real campus imagery. Safe, legal source confirmed: **Wikimedia Commons has a freely-licensed [Ashesi University category](https://commons.wikimedia.org/wiki/Category:Ashesi_University)** (CC-licensed campus photography — the Berekuso campus, Founders' courtyard, etc.), which is fine to use on a public GitHub Pages site *with attribution*. Plan:

- A **warm hero on the course home** — an Ashesi campus photo with a soft overlay, a real greeting ("Welcome back, Ed" when a name is set), and the mastery bar sitting on top of it rather than floating in grey.
- An **Ashesi-informed palette** — move off the cool blue-grey toward the university's warmer maroon/earth/gold range, kept accessible in both light and dark mode.
- **Human microcopy** — encouragement that sounds like a person, tuned to a Ghanaian-English MBA register rather than generic app-speak.
- **Proper attribution + licence** recorded in the README and a small on-page credit, so it's clean to publish.
- Photos are downloaded into `/assets` (not hot-linked), so the app still works offline as a PWA.

If any specific photo licence turns out to be restrictive, I fall back to the two hero images already in `/assets` plus a hand-built campus banner — so this ships either way.

---

## 6. What I'll do on your approval

1. **Identity & warmth** — Ashesi palette, campus hero + credit, human copy, load the unused assets. *(Highest visible impact.)*
2. **Usability fixes** — `aria-live` feedback + `alt` text, a short first-run welcome, selectable drill length (5 / 10 / 20), a visible streak, and a progress export/import so a cache-clear can't wipe months of work.
3. **Learning depth** — per-topic objectives ("by the end you can…"), an optional confidence tap before the answer, and a "read this first" nudge when a topic is weak.
4. **Targeted questions** — the +70–90 items in §4, answer keys verified in code.
5. **Verify** — numeric-answer check, a pass on both light/dark and mobile width, then a short changelog.
6. **Push to GitHub** once you've seen it.

Tell me which of the six to keep, cut, or reorder — or just say go and I'll do all of it.
