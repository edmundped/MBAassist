# Question and answer audit

## Scope

Reviewed the four static multiple-choice banks: 571 finance drill questions,
78 economics warm-up questions, 20 leadership checks and 48 finance lesson
checks (717 total). Revised 257 items: 186, 29, 13 and 29 respectively.
Free-text reflections, navigation prompts and open-ended case choices are not
scored multiple-choice questions and are outside these totals.

## Changes

- Shortened explanatory correct options; explanation stays in post-answer feedback.
- Replaced unrelated or unreasonable distractors with nearby concepts, plausible
  decision errors, or alternative calculations. Parallel options use comparable
  detail and grammatical structure, not artificial identical word counts.
- Preserved original question IDs and correct-option indexes for saved work.
- Randomised lesson and leadership display order, stable for each question during
  the page session. Display positions do not change grading indexes. Finance
  drills and economics checks already had their own order randomisation.
- Clarified that weak-form efficiency is the weakest sufficient form for ruling
  out systematic abnormal returns from historical prices.
- Corrected the non-conventional cash-flow example: -350, +75, -100, +120 has
  three sign reversals, not two. Sign reversals permit rather than guarantee
  multiple IRRs.
- Specified conventional investment flows for the IRR-bracketing check and
  positive receipts/rates for the discounted-payback comparison.
- Qualified PI ranking with independent, divisible projects and a single-period
  constraint; indivisible proposals require comparing feasible combinations.
- Updated leadership misconception feedback affected by revised distractors.

## Verification

Run `node tests/question-quality.cjs` from the repository root. The test checks
all 717 items for four unique nonempty options, valid keys and explanations;
flags a correct option of eight or more words that is over 1.7 times the length
of every distractor; checks stable display permutations and original-index
grading; and protects the corrected efficiency/IRR/PI examples.

The length threshold is an editorial warning, not a measure of learning quality.
Passing these checks does not establish item difficulty or discrimination.
Those require student response data and follow-up review of distractor selection.
No browser end-to-end test or full independent recomputation of every numerical
example was performed in this audit.

## Content cross-checks

- [OpenStax: Internal Rate of Return](https://openstax.org/books/principles-finance-2e/pages/16-3-internal-rate-of-return-irr-method)
- [OpenStax: Choosing between Projects](https://openstax.org/books/principles-finance-2e/pages/16-5-choosing-between-projects)
- [ICAN: Strategic Financial Management study text](https://icanig.org/students/pro-study-texts-2021/SFM.pdf)

These support the IRR and capital-rationing clarifications; they are not a
claim of independent source validation for the entire question bank.
