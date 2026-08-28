# MBAassist

A scalable MBA course learning workspace. Three courses are mounted in the app:
**MBA512 Managerial Finance**, **Sustainable Leadership & Ethical Business**
(Module 3, Seminar 673), and **Cross-Border Business**. Managerial Finance and
Sustainable Leadership have built learning tools; Cross-Border Business has a
modular v1 workspace for Week 1 and the course-long capstone arc. Everything is in one self-contained
`index.html` — no build step, no dependencies, works offline.

---

# Cross-Border Business

The Cross-Border workspace follows the course assessment shape rather than the
Managerial Finance question-bank model. Learners first land on a clean course
dashboard with only the essentials: what the course is about, expectations, the
four-week schedule, week boxes, and learner action tiles.

| Area | Purpose |
|---|---|
| Course | Course purpose, schedule, expectations, week boxes, and action tiles |
| Week | The selected week's hub, with resources, mastery, testing, structures and deliverables |
| Resources | Assigned readings, cases, and in-app study readers where available |
| Mastery | Flashcard-style concept and case prep cards |
| Testing | Objective MCQs plus written judgment prompts with counterargument practice |
| Structures | Entry-mode comparator, risk allocation matrix, and negotiation prep |
| Deliverables | Own-words canvases for interim deliverables and the capstone |
| My Work | Device-local progress summary and next recommended move |

V1 includes Week 1 content from the course outline, AfCFTA and FDI tralac
guides, plus prompt-level preparation for MTN Investing in Africa, Attijariwafa
Bank: Egypt Expansion, and Peak Investment Capital. The tralac guides have
in-app study readers; copyrighted case text is not reproduced, so the app gives
frameworks and questions to prepare with. Weeks 2-4 are mounted as modular
placeholders so their resources and practice can be added without changing the
course navigation model.

Cross-Border notes and progress are saved in the same browser and included in
the existing backup/restore flow. The workspace is intentionally a study aid:
it structures thinking but does not draft graded case analyses or capstone
submissions.

On the course hub, long-press a course card to remove it from the personal
workspace. Removed courses can be shown and restored from the same hub; no
course data is deleted.

---

# Sustainable Leadership & Ethical Business

A weekend intensive, so this course works nothing like the finance one. There
is no question bank to grind and no score. It opens on whatever is next, holds
the frameworks and case facts, and gives you somewhere to keep **your own
words** for the two written deliverables.

## It knows what day it is

The course reads the device clock and decides which of five states you are in.
Time picks the **default screen only** — it never hides anything. Any tab is
always one tap away, and **Jump to another day** cycles the states manually if
the clock is wrong or you want to read ahead.

| State | What opens |
|---|---|
| Before Friday | Reflection one, due before the Friday session |
| Friday | The lens grid and the compass |
| Saturday | The live studio block, with the run sheet and build timers |
| Sunday | The culture and governance cards Part A diagnoses with |
| After | The group case report, then the individual strategy report, counting down |

On Saturday it goes finer than the day. Between 09h20 and 09h50 you are in the
Part A build window and it opens on the storyboard sheet; at 10h20 it rolls to
Part B. Those timings come from the student pack — the facilitators keep the
real clock.

### If the dates move

One line, near the top of the Sustainable Leadership block in `index.html`:

```js
const SL_DATES={fri:"2026-08-14",sat:"2026-08-15",sun:"2026-08-16"};
```

Both report deadlines are derived from the Sunday date (two weeks and three
weeks), so changing these three dates fixes everything downstream. Ghana is on
GMT year-round with no daylight saving, so the device clock is safe to trust.

## The six course modules

**Now** — one card, one action. Built for a phone on the way to campus rather
than a dashboard. It also carries the weekend map and export reminder.

**Before** — 23 cards across the three days, two to four minutes each. Each has
the idea, why it matters and what to watch for. Twenty carry a quick check with
a real answer; the three that don't are the ones where the reading itself says
there is no single right answer. Checks give coaching feedback: correct answers
explain the reasoning, and inaccurate answers explain the misconception and let
the student revise.

**In Class** — the live class workspace. It links Friday's decision work,
Saturday's Material World group studio and Sunday's diagnosis cards, then turns
Saturday into a group sheet once the student picks a material: anchor case,
guiding question, six chain stages, seven enterprise elements, thirty-minute
build timers and a three-minute pitch timer.

**Decisions** — the HBR Vestenborg/Greenspan supplier case, worked through the
Markkula framework. You choose which option each of the six lenses favours, and
the app shows you where they split, because the framework states plainly that
the lenses may lead to different answers. Only after all six are placed does it
offer the publicity test and reveal what the two practitioners actually said —
neither of whom terminated the relationship. Below that, O'Toole's compass as a
hard budget of twenty tokens, so liberty, equality, efficiency and community
cannot all be funded; and Wells Fargo's two competing diagnoses side by side.
Lens choices are coached rather than marked right or wrong: each option tells
the student what that argument must defend.

**Reports** — where most of the marks are. The group case report structured as
symptom, root, frameworks applied or not, and a remedy with a named owner and a
first move. Then Part A: stated values against enacted behaviour, the structures
sustaining the gap, and interventions that each need a level, an owner, a
sequence and an indicator — with the level picked from Taylor's five. Then Part
B's eight governance areas.

**My Work** — a quiet device-local summary: cards read, checks answered,
value-chain stages drafted, enterprise elements drafted, report fields started,
governance areas started, and export.

## What it will not do

It holds frameworks, case facts and your own notes. It does not write your
reflections or your reports, and nothing in it is a grade or an estimate of one.
Progress is device-local; export before clearing your browser.

## Known gap

Part B benchmarks against GRI, ISSB, IFRS S1 and S2, TCFD and the Ghana Stock
Exchange ESG Disclosure Manual. No reading for these had been circulated when
this was built, and Giving Voice to Values is named as a required framework for
Part A with no source either. Both are flagged in the app.

---

# Managerial Finance

## What it does

The landing page is a course hub. Inside Managerial Finance, the home screen is
split into two clearly separated sections: **Lectures** (the masterable weekly
content, shown as progress cubes) and **Study tools** (cross-cutting utilities,
shown as a list — they are not the same as a lecture and no longer look like
one).

### Lectures

| Module | Source | Questions |
|---|---|---|
| Foundations | Lecture 1 — introduction & financial markets | 60 |
| Performance | Lecture 2 — measuring corporate performance | 87 |
| Time value | Lecture 3 — time value of money & applications | 113 |
| Bonds | Lecture 4 — bond valuation & analysis | 86 |
| Stocks | Lecture 5 — stock valuation & market efficiency | 88 |
| Cost of Capital | Lecture 6 — cost of capital estimation | 62 |
| Capital Budgeting | Lecture 7 — capital budgeting analysis | 75 |
| Project Cash Flows | Lecture 8 — cash-flow estimation | 60 |
| Risk & Return | Lecture 9 — introduction to risk and return | 60 |
| Mergers & Acquisitions | Lecture 10 — M&A as a capital-investment decision | 60 |

### Study tools

| Tool | What it is |
|---|---|
| Quiz 2 prep | 25-question simulator for bonds, stocks, cost of capital, capital budgeting techniques, and project cash flows |
| Final exam prep | 25-question full-course mixed simulator across every Managerial Finance lecture |
| Teach mode | 41 lessons — one per topic, covering Lectures 1-10 — that explain each idea from scratch |
| Formula map | A framework for selecting the right formula |
| Case room | 11 current cases — the MBA Decision minicase plus lecture breakouts through Lecture 10 |
| Calculator | 67 formulas with step-by-step workings |

**751 drill questions in total**, across 41 topics.

## First run

The first time someone enters their name they get a short **What's inside**
screen — a scannable tour of where everything lives, grouped into the weekly
loop (lectures, teach mode, drill), what to reach for when stuck (formula map,
calculator, case room), and how progress is kept (the ☰ menu, backups, adding
the app to a phone home screen). It closes with the academic-integrity rule.

It appears once, then never again. Anyone can reopen it from **☰ → What's
inside**. Deep links are never interrupted by it, and clearing progress with
"Begin a fresh session" does not replay it. All the counts on that screen are
read from the data at render time, so they stay correct as content is added.

## Teach mode

Teach mode is where the material gets *explained* rather than tested. There is
one lesson per topic — **41 lessons covering Lectures 1-10**, roughly four to
six minutes each.

A lesson is a sequence of blocks revealed one at a time, so you read a little,
then do something:

- **Idea** — a short chunk of plain-language explanation.
- **Quick check** — a multiple-choice question with instant feedback and a short
  why. You cannot continue until you answer it, so the retrieval practice can't
  be skipped past.
- **Think first** — an open question you consider before tapping to reveal the
  answer, for the "why" questions where naming your own reasoning is the point.
- **Worked example** — a full computation with a cash-flow timeline where the
  topic calls for one. Conceptual topics simply don't have these.
- **Watch out** — the mistake the exam actually punishes.
- **Worth remembering** — the closing recap.

Finishing a lesson marks it complete, and the lesson list shows per-lecture
progress. Every lesson ends with a **Drill this topic** button that drops you
straight into that topic's questions while it is fresh.

Teach mode is also a standalone study tool that lists all 41 lessons grouped by
lecture, for when you want to browse them independently of a concept.

## Inside a lecture: the concept page

A lecture is **one scrolling page of concepts**, not a set of tabs. Everything
about a single idea lives in one place, because that is the unit students
actually think in ("I'm weak on YTM").

The page opens with how far through the lecture you are and a **Continue** card
naming the one concept most worth opening next — so a lecture never opens on a
screen with nothing to do.

Then one row per concept, each showing its state at a glance through three pips
(notes · lesson · practice) and a mastery bar. Tapping a row opens everything
for that concept:

- the coaching note and the "by the end you can…" objectives
- the key points
- **Lesson** — that concept's guided lesson
- **Practise** — 10 questions on this concept alone
- **Formulas** — the step-by-step calculators this concept uses

At the foot of the page is a **whole-lecture** drill that deliberately mixes
every concept together, at 5 / 10 / 20 questions. That separation is on purpose:
practising one concept right after learning it helps consolidate it, but the
exam won't tell you which idea a question is testing, so the mixed drill is
where that skill gets built.

### What the states mean

A concept is never just a percentage. The app distinguishes:

| State | Meaning |
|---|---|
| Not started | Neither taught nor practised |
| Learned — not practised yet | Lesson done, no questions answered — the gap retrieval practice exists to close |
| In practice · n/m retired | Working through it |
| Needs another look | Answered a fair number, accuracy still low |
| Solid · all retired | Every question retired |
| Solid — last practised n days ago | Retired but going cold |

The middle two states are the point: previously a concept you had been taught
but never tested on displayed as `0%`, identical to one you had never opened.

Because formula sheets are usually provided, drill questions should emphasise
setup, computation, and interpretation rather than asking students to identify
or recite formulas.

## Prep modes

Two simulator tools sit at the top of Study tools:

- **Quiz 2 prep** draws 25 multiple-choice questions from the 371-question Quiz 2
  scope: bond valuation, stock valuation, cost of capital calculation, capital
  budgeting techniques, and capital budgeting cash flows.
- **Final exam prep** draws 25 mixed questions from the full 751-question Managerial Finance
  bank.

Both reuse the same mastered-question records as normal drills, so missed items
stay high priority. Hints stay available because prep is meant to teach as well
as test: a hinted correct answer is still marked correct, but it does not retire
the question until the student can answer it unaided. The flag-question option
remains available.

## Hints

Every drill question has a **Hint** button, in two stages.

1. **Think it through** — a method prompt for that topic: what to ask yourself,
   where the trap usually is. It never names the answer. There is one for each
   of the 41 topics.
2. **Narrow the options** — strikes out two wrong answers, leaving a choice of
   two.

There is a deliberate cost. Answering correctly after a hint is still marked
correct, but it does not advance the streak, so the question comes back to be
answered unaided before it retires. Your existing streak holds rather than
resetting — a hint costs progress, not ground. The drill summary reports how
many you used.

## Difficulty

Every question carries a level, shown as dots beside the question number:

- **Recall** — definitions and identification
- **Apply** — a single-step calculation, or applying a rule to a case
- **Analyse** — multi-step calculations, traps, and questions where two rules
  conflict

Levels are assigned by ranking each question against the others *in its own
topic* on calculation depth, scenario length and trap markers, then splitting
into thirds. They measure relative difficulty within a topic, not an absolute
standard.

Drills adapt. When a lecture is new to you the batch runs roughly 6 recall, 3
apply, 1 analyse. As questions retire that inverts to 1 / 3 / 6. The target
level never crowds the others out entirely, so the basics stay warm and you
meet the occasional hard question early.

Difficulty only ever breaks ties. Questions you missed still come first,
whatever their level.

## Academic integrity notice

This app is for learning and revision only. The MBA512 syllabus does not allow
ChatGPT, Claude, or any other AI chatbot for graded deliverables, including
quizzes, assignments, case analysis, and the final exam. Use the app to prepare
beforehand, then complete course deliverables on your own.

## How the question rotation works

Progress is tracked per question, not per topic. Every question sits in one of
four bands, and the drill queue is filled from the top down:

1. **Missed** — you answered it wrong. Comes back first.
2. **Never seen** — not yet served in this session.
3. **Part-way** — answered right once, needs one more.
4. **Retired** — right twice in a row. Only reappears once everything else is
   retired, for maintenance.

Within a band the least recently served question comes first, so nothing
repeats until the rest of the band has had its turn. Anything served in the
drill just gone sits out one round, so a correct answer means you recalled it
rather than remembered it from two minutes ago.

In practice: you will see every question in a module once before any of them
repeat, the second correct pass retires them, and questions you miss return at
the next opportunity.

Answer options are shuffled every time a question is drawn, so there is no
position to memorise.

## Progress and sessions

Progress lives in this browser under a session ID, shown in the ☰ menu. It
survives closing the tab and reloading. **Begin a fresh session** clears every
mastery record and completed lesson, and restarts the rotation. Classmates using
the app on their own devices keep separate progress.

Because that progress lives only in one browser, the ☰ menu also has **Save a
backup file** and **Restore from a file**. Export a small JSON file to keep your
mastery, completed lessons and flags safe, and restore it after clearing site
data or on another
device. A day counter (streak) on the home screen tracks consecutive days of
practice.

Question flags also stay local to the current browser session. They are meant
as a review aid for suspected faulty questions, not as automatic submissions.

## Use it locally

Open `index.html` in any browser.

## Publish with GitHub Pages

1. Push this folder to the repository root.
2. **Settings → Pages**.
3. **Deploy from a branch**, `main`, `/ (root)`.

Then open the page on your phone and use **Share → Add to Home Screen**. It
installs as a standalone app and works with no signal after the first visit.

## Notes

- Enter rates as percentages in the calculator: type `11` for 11%.
- Numeric answers were checked against the lecture slides and recomputed
  independently; the calculator engine is the previously tested one, unchanged.
- The home hero (`assets/study-hero.png`) is a study-scene image evoking the
  Ashesi hillside campus. To swap in a real campus photograph, drop it in
  `assets/` under the same name; freely-licensed options are available on the
  Wikimedia Commons Ashesi University category, which should be credited if used.
- The case room gives you the facts, the questions and the method — not filled-in
  answers. Build the timeline and run the numbers yourself.
- Your syllabus bars AI tools on graded work. Drill with this beforehand, then
  sit the quiz on your own.
