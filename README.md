# MBAassist

A scalable MBA course learning workspace. The first live course is MBA512
Managerial Finance; Cross-Border Business is present as a coming-soon course.
Everything is in one self-contained `index.html` — no build step, no
dependencies, works offline.

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
| Cost of Capital | Lecture 6 — cost of capital estimation | 61 |
| Capital Budgeting | Lecture 7 — capital budgeting analysis | 75 |

### Study tools

| Tool | What it is |
|---|---|
| Teach mode | 29 lessons — one per topic, covering all seven lectures — that explain each idea from scratch |
| Formula map | A framework for selecting the right formula |
| Case room | 8 cases — the MBA Decision minicase plus one for every lecture |
| Calculator | 56 formulas with step-by-step workings |

**570 drill questions in total**, across 29 topics.

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
one lesson per topic — **29 lessons covering all seven lectures**, roughly four
to six minutes each.

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

Teach mode is also a standalone study tool that lists all 29 lessons grouped by
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
