# MBAassist UX audit: Managerial Economics warm-up (#econprep)

Auditor role: senior UX / learning-product designer. Date: Fri 27 Nov 2026 (MBA645 Weekend 1 starts tonight, 17:30).
Method: scripted Playwright walk-throughs at 390x844 (touch, mobile), fresh localStorage, clock pinned to the persona's day. Screenshots are in `/home/claude/audit/shots/ux-*.png`. No project files were edited.

---

## 1. Verdict (5 lines)

1. The content is strong: plain language, Ghanaian examples (ECG/PURC, kenkey), accurate checked diagrams, and good "watch out" and "where you'll use this" blocks. The diagnostic with confidence taps is the best-designed piece.
2. The app does not know what matters this weekend. On the day class starts it says "0 days until MBA645 begins" and sends a new user to *Think at the margin*. Monopoly, deadweight loss and HHI are needed by Sunday, and they sit at topic 8 of 14 and inside topic 9.
3. A student can mark Monopoly "Ready" without ever working out a deadweight loss (seen in both the lesson path and the card path). The Problem Set 1 skill is left to which questions the random draw picks.
4. There are two ways to learn a topic: a lesson ("Continue" on the Plan) and a card deck ("Learn this with visuals", filed under *Practise*). They share content but not progress or rewards. XP exists only in decks. Finance has a day streak, Sustainable Leadership has nothing, and none of these connect.
5. One blocker breaks the headline feature: in the card deck, dragging an explorer's slider on a phone swipes to the next card. There is also a dead end where the Plan keeps sending you back into a lesson you've already finished.

---

## 2. The four journeys

Tap = one deliberate touch (choosing an answer counts as one tap). Times are estimates for a reader on a phone.

### (a) Brand-new user: hub to first finished topic. 13 taps, about 7 min

| # | Screen | Action | Friction |
|---|---|---|---|
| 0 | Hub (`ux-a01-landing.png`) | — | The warm-up is the **third tile, below the fold**, under a large decorative hero card. The most time-critical course starts today and still says "New · pre-course" and "Before MBA645". Nothing shows that it is urgent. |
| 1 | Hub | Tap *Managerial Economics warm-up* | — |
| — | Welcome (`ux-a02-welcome.png`) | Three choices | Clear and calm, with a good "Akwaaba, Ama". But the course is named three different ways: hub says "Managerial Economics warm-up", header says "Economics warm-up", headline says "Managerial Economics, refreshed". The Plan headline then becomes "Resources, Incentives and Market Failures", which is MBA645's title, not the warm-up's. |
| 2 | Welcome | *Teach me from the start* | Goes to topic 1, *Think at the margin*, which tonight's class doesn't need. There is no "what do I need for this weekend" option. |
| 3 | Lesson, gut check (`ux-a03`) | Pick a guess | *Continue* already shows before you guess, so the prediction step can be skipped. A "Learn this with visuals ›" link sits above it, offering a second way in before the user has learned how the first one works. |
| 4–8 | Lesson blocks (`ux-a04-block2/4`) | *Continue* ×5 | The figure block shows a static chart and the interactive explorer stacked together (two graphs in one block, and the sticky *Continue* covers the explorer). The idea block packs MR, MC, marginal profit, fixed cost and **shadow price** into one paragraph, which is heavy for "the basics". |
| 9–10 | Quick check | Answer 2 questions | Good: you can't continue until both are answered, and each gets an explanation. |
| 11–13 | Watch out, Where you'll use this, Finish | *Continue* ×3 | — |
| — | Done panel (`ux-a05`) | — | Says "done" with the pocket rule. It doesn't say the topic is now **Ready**, gives **no XP** (the same topic in the deck gives 45–55), shows no "1 of 14", and has no celebration. The first win goes unnoticed. |

### (b) Diagnostic all the way through. 2 taps to start, then 69 taps (23 questions × 3), about 11–13 min

| Step | Observation |
|---|---|
| Start | Promised as "About 10 minutes · recommended". The "No score, nothing graded" note is good. |
| Each question (`ux-b02`, `ux-b03`) | Answer, then a "How sure are you?" tap (Sure / Think so / Guessing), then *Next question*: **3 taps per question**. Feedback with the explanation appears immediately, which is good. |
| Q14 to Q15 (`ux-b04`) | The counter jumps from **"Question 14 of 14" to "Question 15 of 23"**. The goal moves just as the user thinks they're done. This is the most likely point to quit. |
| Pause | The back arrow is labelled "Pause and go to plan". On the Plan the button still reads **"Check what I already know"**, and tapping it **restarts at Question 1 of 14**. There's no resume (verified). The earlier answers count toward mastery, but the user doesn't know that. |
| Result (`ux-b05`) | Good: "You tested out of 6 topics · 8 to go · about 50 min · 2 marked Priority", unit lists with chips, and one main button ("Start: Competition, surplus and efficiency"). Gaps: **no reward** for testing out (6 topics passed and 0 XP), and topics the user only got wrong in the test are labelled **"In progress"** although they've never opened them. On the Plan they then show as **"Continue"**. |

### (c) Returning user on day 3 (Sun 29 Nov, 06:40, Problem Set 1 due today) with 10 minutes. 27 taps, about 10 min

State: diagnostic done on Friday, *Competition* lesson finished, nothing on Saturday (Saturday is a full 09:00–18:00 class day).

| # | Screen | Action | Friction |
|---|---|---|---|
| 0 | Hub (`ux-c01`) | — | The chip reads "7/14 TOPICS READY". **Nothing says Problem Set 1 is due today.** |
| 1 | Hub | Open warm-up | — |
| — | Plan (`ux-c02`) | — | Two CTAs compete: a big black "Continue: Monopoly…" card and a thin "Warm-up due · 3 min" row. No time budget ("I have 10 min"). The countdown has disappeared, and there's no "today" banner. The schedule timeline does know PS1 is today, but it is 12 rows further down. |
| 2–14 | Warm-up run | 6 questions × (answer + next), then *See result* | The result (`ux-c05`) is just "6 of 6 correct" on a blank page. No XP, no streak, no topics strengthened. A perfect score feels like nothing happened. |
| 15–16 | Back to plan, then Continue Monopoly | — | — |
| 17–27 | Monopoly lesson | 11 taps | Finished, but the user was never asked to compute a deadweight loss (see d). |
| — | Finance (`ux-c03`) | — | The streak shows **"Day 1"**. Friday's study counted, but missing Saturday (when they were *in class*) reset it. Warm-up study only counts when it happens to touch Finance's home screen render. A streak that punishes attending class is worse than none. |

### (d) "I just need to understand monopoly deadweight loss for Problem Set 1 tonight." Lesson: 15 taps. Deck: 20 taps. DWL calculation practised: **0 times in both runs**

| Path | Taps | Observation |
|---|---|---|
| Hub, warm-up, *Look around first*, *Topics* tab, scroll about 1,100 px, *Monopoly…* | 4 taps + scroll | No search and no "jump to topic" on the welcome screen. The user has to guess that DWL lives under "Monopoly and regulated utilities". HHI is even harder: it sits inside *Oligopoly* and the glossary (collapsed at the bottom of Topics). A shorter route exists (the Plan timeline row "Problem Set 1 … Warm up: Monopoly") but it is about 2,000 px down. |
| Lesson (`ux-d02`–`d04`) | 11 more | The figure is excellent: it labels DWL = ½ × 40 × 40 = 800 (`ux-d102`). But the **DWL formula is collapsed** behind "The formula, if you need it". The **worked example is about regulated utility pricing, not DWL**. The quick check drew `pq_monop_07` and `pq_monop_01` (conceptual), so the numeric DWL item `pq_monop_06` is left to chance. **No DWL explorer.** Topic marked Ready. |
| Card deck (`ux-d101`–`d112`) | 20 | The cover promises "Concept and interactive first" (`ux-d101`), but Monopoly has **no interactive**: only 4 of 14 topics do. The gut check ("Why does PURC review ECG's tariffs…") comes **after** the concept has been taught (`ux-d108`), so it is no longer a prediction. The checks drew 01, 04 and 02. "Topic ready! 55 XP" (`ux-d112`), still without one DWL computed. |

Bottom line for (d): the user leaves feeling ready and still can't do the Problem Set 1 calculation.

---

## 3. Findings

| id | flow / screen | severity | problem (evidence) | recommendation (specific enough to build) |
|---|---|---|---|---|
| F1 | Card deck, explorer card | **blocker** | The document-level `touchend` swipe handler (`_pcTouch`, near line 6053) fires when the user drags the `.xx-range` slider. A horizontal drag on the elasticity slider moved the deck from card 3 (explore) to card 4 (plain). The interactive can't be used on a phone. | In the `touchstart` handler, ignore touches that start inside `input, button, .econx, [data-noswipe]`: `if(e.target.closest('input,.econx,button')) {_pcTouch=null;return;}`. Add `touch-action: pan-y` to `.pdcardwrap`. |
| F2 | Plan, next action | **major** | The Plan has no deadline awareness. On 27 Nov the first action is "Start next: Think at the margin" (`ux-a06`). `prepNext()` ranks only by state and then by topic order. PS1 (DWL, HHI) is due Sunday, but Monopoly is #8 and Oligopoly #9. | Add a deadline boost to `prepNext()`. For any `PREP_SCHEDULE` event within the next 3 days, its `topics` that aren't ready rank first (before `priority`), in event-date order. Label the card "**For Problem Set 1 · Sun**" instead of "Start next". |
| F3 | Plan, countdown and hub | **major** | "**0** days until MBA645 begins" shows on the day it begins (`ux-a06`). From day 2 the countdown vanishes, and nothing marks "PS1 due today" on the Plan or the hub (`ux-c01`, `ux-c02`). | Replace the countdown with a "Next deadline" strip from `PREP_SCHEDULE`: "Today 17:30 · Weekend 1 class", "**Today · Problem Set 1**", "Tomorrow · Case Analysis 1". Mirror the same one line on the hub tile in place of "7/14 topics ready". |
| F4 | Monopoly topic, PS1 | **major** | A topic can become Ready without the numeric DWL skill. The two runs drew 07+01 and 01+04+02. The worked example covers regulation, the formula is collapsed, and HHI is only an oligopoly quiz item. | (1) Add a `must:true` flag to `pq_monop_06` (DWL) and `pq_oligop_03` (HHI), and always include `must` items in the topic's quick check and deck. (2) Add a second `eg` block to `pt_monop`: "Compute DWL" with the figure's numbers (P = 100 − Q, MC = 20 → Q_m = 40, P_m = 60, Q_c = 80, DWL = ½·40·40 = 800). (3) Open the formula `<details>` by default when the topic is linked to a deadline within 7 days. |
| F5 | Explorers | **major** | Only 4 of 14 topics have an interactive (`PREP_EXPLORE`), and **none for monopoly DWL or HHI**, the two Weekend 1 skills. The deck cover still promises "Concept and interactive first" on every topic. | Build `ECONX.dwl`: a slider for the number of firms or a price control between P = MC and the monopoly price. Shade consumer surplus, profit and the DWL triangle, with live numbers. Build `ECONX.hhi`: 3–5 share sliders that always sum to 100, showing a live HHI and its band label. Map them to `pt_monop` and `pt_oligop`. Only show "and interactive" on the cover when `PREP_EXPLORE[t.id]` exists. |
| F6 | Lesson done, Plan | **major** | Dead end, verified. Finish a lesson with both checks wrong → state "Learned · check due". The Plan's "Continue" reopens the finished lesson, whose panel has only *Back to plan* or *Go through it again*. The "check" the label refers to can't be found. | In `prepDonePanel`, when `prepState==="taught"`, the primary button becomes "**Lock it in · 3 questions**", which runs `prepRunStart("topic",t.id)` with n = 3. On the Plan, a `taught` topic's card label reads "Lock in: <topic>" and goes straight to that run, not to the lesson. |
| F7 | Diagnostic | **major** | The total jumps from "Question 14 of 14" to "15 of 23" (`ux-b04`). 69 taps against a promised "about 10 minutes". | Before Q1, say: "14 questions, then up to 14 quick follow-ups." Show progress as two segments (Part 1 / Part 2). Between parts, add a break screen: "You got 9 right. 9 quick follow-ups confirm them, or stop here and start learning." Offer *Stop here* as a ghost button. |
| F8 | Diagnostic pause | **major** | Pausing then tapping the Plan's "Check what I already know" restarts at Q1 (`prepDiagStart` overwrites `PREPSTATE.diag`). | If `diag && !diag.done`, the button reads "**Resume check · Q6 of 14**" and routes to `#econprep/diag` without resetting. Offer "Start over" only as a link. |
| F9 | Lesson vs deck | **major** | Two learning paths with overlapping content and different progress. The deck doesn't set `ts.block` or `ts.done`, so after a deck the Plan's "Continue" opens the lesson at block 0. The deck is filed under *Practise*. The deck's back arrow always goes to the lesson. | Merge them (see section 4). |
| F10 | Gamification coherence | **major** | XP is earned only in decks (+10 for a new correct answer, +25 for finishing a deck, including when the checks are **skipped**). Lessons, the diagnostic, warm-ups and the readiness check give 0. XP doesn't appear on the Plan or Progress. Finance shows a day streak that only updates when its home screen renders, and it reset to "Day 1" after a Saturday spent in class. | Replace with the shared system in section 5: one key, used by all courses, rewarding the same actions everywhere. Remove the +25 for skipped checks. |
| F11 | Hub | minor | The warm-up tile is third and below the fold (`ux-a01`), under a large decorative hero. | Sort tiles by urgency (the course with the nearest deadline first). Shrink the hero to one line ("Akwaaba, Ama · next: PS1 Sun"). |
| F12 | Naming | minor | "Managerial Economics warm-up", "Economics warm-up", "Managerial Economics, refreshed" and "Resources, Incentives and Market Failures" (as the Plan's H1) all name the same thing. | Use "Economics warm-up for MBA645" everywhere. The Plan's H1 should be the next action or "Your warm-up", not MBA645's title. |
| F13 | Skip a topic | minor | "Skip — I know this" is ignored by `prepNext`: the Plan's next action is still "Start next: Think at the margin" right after skipping it. | Skipping offers "Prove it · 2 questions" (a topic run). If both are right the topic is Tested out. If not, `prepNext` puts skipped topics after `new`. |
| F14 | State labels | minor | Topics only *answered wrong in the diagnostic* show as "In progress", and the Plan says "Continue" for topics never opened. Practise says "0/5 questions answered correctly" while Progress says "0 of 2 different correct answers needed" for the same rule. | Add a state `unseen-wrong` labelled "Start here" (or reuse "To do"), and use "Continue" only when `ts.block>0`. Use one meter everywhere: "1 of 2 correct to be Ready". |
| F15 | Lesson gut check | minor | *Continue* is active before the guess, so the prediction can be skipped. In the deck the gut check comes after the teaching, which defeats it. | Hide *Continue* until the hook is answered (as checks already do). In `prepDeckModel`, put `hook` immediately after `cover`. |
| F16 | Lesson figure block | minor | The static figure and the explorer are stacked in one block, and the sticky *Continue* covers the explorer (`ux-a04-block2`). | Make the explorer its own block (`k:"explore"`) after the figure, with its own prompt, as the deck already does. |
| F17 | Plan length | minor | The Plan is about 4,000 px: hero, countdown, readiness, next, a 12-row timeline, all 14 topics, and two more CTAs. | See section 4: collapse the timeline to the next 3 events plus a "See all" link, and move the full topic list to the Topics tab. |
| F18 | Result screens | minor | The warm-up result is "6 of 6 correct" on an empty page (`ux-c05`). The lesson done panel doesn't say "Ready". | Use one shared result card everywhere: score, which topics moved state (for example "Elasticity → Ready"), progress points earned, and the next action. |
| F19 | Idea density | minor | Idea blocks pack 5–7 bold terms into one paragraph (margin: MR, MC, marginal profit, fixed cost, shadow price). | Hold idea blocks to 3 bold terms or fewer. Move secondary terms (shadow price, the λ items) into an optional "Going further" block that's off the path to Ready. |
| F20 | Diagnostic result | minor | Testing out of 6 topics gets no acknowledgement beyond a headline. | Show "6 topics cleared · about 40 min saved", plus progress points (section 5). |
| F21 | Network | minor | One 404 in the console on every load (probably the favicon). | Add a `<link rel="icon">` that points to an existing asset. |

---

## 4. Information architecture

### Should the lesson view and the card deck merge? Yes.

They're built from the same blocks (`hook, fig, idea, plain, eg, check, trap, bridge`). The only real differences are the layout (scroll versus one card at a time) and the rewards. Having both creates the problems found above: F9 (progress doesn't carry over), F10 (XP only in one), the deck filed under Practise, and the "which one do I use?" link at the top of every lesson.

**Build one topic player with one progress record:**
- The route is `#econprep/topic/:id`. The **card layout is the default on phones** (one block per screen, swipe or *Next*, the dot bar). It fits short sessions in a car or at lunch and shows the explorers well.
- Add a small toggle "**Show as one page**" (stored as `PREPSTATE.view="page"`) for people who want to scroll and skim. Both layouts read and write `ts.block`, `ts.done`, `ts.checks` and `ts.hook`. The deck's `ts.cards` is retired: its question ids become `ts.checks[k]`.
- Block order for both: cover → gut check (before teaching) → figure → explore (if one exists) → idea → plain → worked example(s) → check (including `must` items) → watch out → where you'll use it → finish.
- Rewards come from the actions themselves (section 5), never from which layout was used.
- Remove "Learn with visual cards" from Practise. Practise is for retrieval only: warm-up, topic sets, readiness check.
- The diagnostic moves out of Practise, appearing only on the welcome screen and on the Plan (as "Resume" or "Re-check").

### The Plan tab's one primary action

**"Do the next thing for your next deadline."** It is one large card, and its target is computed:

1. If a diagnostic is in progress: **Resume check · Q6 of 14**.
2. Otherwise, if a `PREP_SCHEDULE` event is within 3 days and any of its topics aren't Ready: **For Problem Set 1 (Sun) · Monopoly & deadweight loss · 6 min**. It opens the topic at the user's block.
3. Otherwise, if a topic is in the `taught` state: **Lock in Elasticity · 3 questions**.
4. Otherwise, if a warm-up is due: **Keep it warm · 6 questions · 3 min**.
5. Otherwise, `prepNext()`. When everything is Ready, the readiness check.

Below the card: a one-line deadline strip (F3), a readiness bar, and **"I have 5 / 10 / 20 min"** chips. These only change the primary card. 5 min gives a warm-up, 10 min the next topic, 20 min the next topic plus a topic set. Everything else (the full timeline, all 14 topics, re-check, readiness check) goes to Topics and Progress or sits behind "See the whole road". Target Plan height: 1.5 screens or less.

---

## 5. A "fun" system: honest, adult, shared across courses, cheap to build

Principles: reward **learning actions that are actually evidence** (a correct answer on the first try, a topic made Ready, a review on time). Never reward tapping through. Never punish attending class. Use **one** localStorage key, `mbaassist-momentum-v1`, read by every course (Finance, Economics warm-up, Sustainable Leadership), so the hub can show it. Six mechanics:

**M1. Study days, not streaks**
- Rule: a day counts as a *study day* when the user, in any course, records at least 5 answers **or** finishes 1 lesson, topic or card set. It's stored as `days:["2026-11-27",…]`, using the device date (Ghana is GMT all year).
- Display: "**4 of the last 7 days**", shown as 7 dots on the hub and on each course home. There is no number that resets to zero.
- Calendar rule: `PREP_SCHEDULE` events tagged *Class* (and the Sustainable Leadership weekend dates) count as study days automatically, so going to class never breaks anything.
- This replaces `touchStreak()`, which only counts days the Finance home screen rendered.

**M2. Progress points (one currency, replaces XP)**
- +10 for a correct answer on a question's first attempt anywhere (lesson check, deck, run, diagnostic). +4 for a correct answer on a question that was missed before (rewards recovery). 0 for a wrong answer, with no loss.
- +30 when a topic or lecture turns **Ready**, Tested out or Retired (Finance). Awarded once per topic, per version.
- +15 for each spaced review answered on time (a warm-up taken while "due", or Finance's "keep it warm").
- Nothing for opening a deck, skipping checks, or rereading. Points always show *why*: "+30 · Monopoly is Ready".
- Shown on the hub and in each course's Progress tab. The total is lifetime and never decreases.

**M3. The weekend target (the weekly goal)**
- Rule: each course defines `target(deadline)`, the list of topics linked to the next deadline (`PREP_SCHEDULE.topics`, Finance's upcoming quiz modules). The hub and Plan show "**Problem Set 1: 2 of 3 topics Ready · Sun**".
- When the target is met before its deadline: a one-time card, "Ready for Problem Set 1, 1 day early", plus 50 points. If the deadline passes without it, nothing is said and the next target appears.
- Cheap to build: it reuses `prepIsReady` and the schedule data that already exists.

**M4. "Sure but wrong" turned into a win (calibration)**
- Every question with a confidence tap (the diagnostic, and optionally the readiness check) is logged as sure/unsure × right/wrong.
- When a question that was once "Sure but wrong" is later answered right: a toast, "**Misconception fixed:** monopolies don't charge the highest price", plus 20 points. The question also leaves the Progress list "Sure, but off".
- Progress shows "Calibration: when you're sure, you're right 82% of the time". That figure is honest and useful for MCQ exams like Problem Set 2.

**M5. Pocket-rule collection**
- Each topic's `pocket` rule unlocks when the topic turns Ready. Progress shows a "**Pocket rules 6/14**" grid of cards, and locked ones show only their topic name.
- Tapping an unlocked card shows the rule plus its figure thumbnail. "Revise before class" opens the 3 weakest unlocked rules as flip cards (≤ 1 min).
- This is a collection based on real mastery, and it doubles as a revision tool on the way to campus.

**M6. A finishing moment, done once and done well**
- One shared result component for a lesson finish, run result, diagnostic result or topic becoming Ready. It shows: score, **which topics changed state** ("Elasticity: In progress → Ready"), points earned with their reasons, study-day dots, and **one** next action.
- Confetti only when a topic or target becomes Ready, never for completing a set. Respect `prefers-reduced-motion`.
- No mascots, no hearts or lives, no leaderboard (device-local data and adult learners), and no loss messages ("You'll lose your streak!").

**Storage sketch** (about 120 lines of vanilla JS in all):
```
mbaassist-momentum-v1 = {v:1, pts:0, log:[{at,course,why,pts}] /*last 50*/, days:[], awarded:{"econ:pt_monop:v1":1,"fin:L3":1}, sureWrong:{"pq_monop_09":1}, conf:{sr:0,sw:0}}
momentum.award(course, key, pts, why)  // checks awarded[key] so an award happens once
momentum.studyDay(course)              // called from prepRecord, the Finance drill record and SL check answers once 5 answers have been recorded today
```
Migration: convert existing `PREPSTATE.xp` once at a ratio of 1:1, and seed `days` from the last date in `mba512-streak`.
