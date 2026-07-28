# MBAassist

A scalable MBA course learning workspace. The first live course is MBA512
Managerial Finance; Cross-Border Business is present as a coming-soon course.
Everything is in one self-contained `index.html` — no build step, no
dependencies, works offline.

## What it does

The landing page is a course hub. Inside Managerial Finance, there are nine
learning modules.

| Module | Source | Questions |
|---|---|---|
| Foundations | Lecture 1 — introduction & financial markets | 60 |
| Performance | Lecture 2 — measuring corporate performance | 76 |
| Time value | Lecture 3 — time value of money & applications | 97 |
| Bonds | Lecture 4 — bond valuation & analysis | 76 |
| Stocks | Lecture 5 — stock valuation & market efficiency | 76 |
| Teach mode | Guided computation walkthroughs | — |
| Formula map | Framework for selecting the right formula | — |
| Case room | The MBA Decision + three lecture breakouts | — |
| Calculator | 35 formulas with step-by-step workings | — |

**385 drill questions in total**, across 20 topics.

Inside a lecture module there are up to three tabs:

- **Learn** — a short coaching note and four key points per topic, then a
  button to drill that topic on its own.
- **Drill** — ten questions at a time, one per screen, with an explanation
  after every answer. Students can flag a question locally if the wording,
  answer, or explanation looks faulty.
- **Formulas** — the calculator, filtered to the formulas that lecture uses.
- **Formula map** — a decision framework for choosing the right formula before
  opening the calculator.
- **Teach mode** — step-by-step computation practice with timelines, variable
  extraction, formula selection, computation, and answer interpretation.

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
mastery record and restarts the rotation. Classmates using the app on their own
devices keep separate progress.

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
- The case room gives you the facts, the questions and the method — not filled-in
  answers. Build the timeline and run the numbers yourself.
- Your syllabus bars AI tools on graded work. Drill with this beforehand, then
  sit the quiz on your own.
