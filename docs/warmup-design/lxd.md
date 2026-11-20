# Managerial Economics warm-up: a standalone pre-course workspace

Learning experience design spec for the builder. Author: LXD. Date: 20 Nov 2026 (revised after the scope change).
App: `/home/claude/MBAassist/index.html`, one offline PWA file.

**Scope:**
- Cross-Border is **removed**.
- The recap becomes **its own course card** on the hub, for an upcoming course whose name is not yet known. The name is set in one line of config.
- Managerial Finance and Sustainable Leadership stay exactly as they are.

The spec states one decision for each choice. Where the economist must supply content, it says so.

---

## 0. What I found in the code (and what this workspace reuses)

- **Finance's mastery engine is the asset to copy.**
  - Each question has a record `{n,k,s,d,w}`, and `RETIRE=2`.
  - A scheduler orders questions in bands: missed, then unseen, then part-way, then retired. It applies a cool-down round and least-recently-served order (`buildQueue`, ~line 4475).
  - `topicState()` works out each topic's state (new / taught / shaky / practising / fading / solid).
  - Lessons are made of typed blocks (`idea`, `check`, `think`, `eg`, `trap`, `recap`) and rendered by `lessonBlock()` (~line 6860).
- **The removed Cross-Border code is a pattern to copy and a set of mistakes to avoid.**
  - Copy: content held in data arrays tagged with `w:"w1"`; a `CB_RENDER[tab]` table that picks the renderer for each tab; one state object saved under its own `localStorage` key and carried in the backup.
  - Avoid: quiz answers stored by array index (`quiz.picks[qi]`); "Mastery" that is only a self-reported "Mark read"; a single hash route, so the back button leaves the course; a hidden tab bar.
- **Each course is hand-wired into the shell in about 7 places**:
  1. the hub markup (`data-course=`, ~line 1045)
  2. the click router (~line 7239)
  3. `show()`, including its eyebrow and title ternaries (~line 5592)
  4. `routeFromHash`
  5. the `hashchange` handler
  6. the backup and restore code (~line 7537)
  7. "Begin a fresh session"

  The new course needs the same wiring. Section 5 says how to make that cheaper.

---

## 1. Where it lives and how a learner enters it

### Decision: a fourth course card on the hub, with its own workspace view

The course id is `econprep`, the view is `#econprepView`, and the route is `#econprep`.

One line of config, placed right after the block comment that marks the start of the workspace:

```js
const PREP = {
  id:"econprep",
  course:"Upcoming course",          // <- THE ONE LINE TO EDIT when the course name is announced
  prereq:"Managerial Economics",
  starts:null,                        // optional "YYYY-MM-DD": turns on the countdown and the warm-up timing
  hue:"#8A4A78"
};
```

Every visible string is built from `PREP`:

| Where | Text |
|---|---|
| Hub card title | **Managerial Economics warm-up** |
| Hub card subtitle | *Before ${PREP.course} · 11 short topics, about 75 min* |
| Top-bar eyebrow | *Before ${PREP.course}* |
| Ready message | *Ready for ${PREP.course}* |

No other string names the course. A test for this: grep the file for "Upcoming course". It should match exactly once.

**Why a card and not a sub-page of Finance or the hub:**
- It has its own audience and timing. It is used in the weeks *before* a new course, by people who may never open Finance.
- A card gives it a clear front door, a status chip and an archive option. These are the hub behaviours learners already know.

### Entry flow for a first-time learner

**Trigger.** The learner opens the card and `PREPSTATE.started` is false.

**Screen 1: "Before you start"** (one screen, no scrolling at 360×640)
- Heading: *${PREP.course} assumes you're comfortable with Managerial Economics.*
- Lede (two lines): *You'll price deals, weigh risk and negotiate with people who know things you don't. This warm-up refreshes the 11 ideas you'll lean on.*
- An inline SVG illustration: stepping stones from "Econ toolkit" to "Day 1". It uses only theme variables.
- Two stacked buttons:
  1. **Check what I already know**: about 10 min, marked *Recommended*.
  2. **Teach me from the start**: about 75 min, in 11 short topics.
- A text link, *Look around first*, which opens the Plan tab without a diagnostic.

**Screen 2: the diagnostic** (section 3). It takes 8-10 minutes and can be paused at any item.

**Screen 3: "Your plan"**, which becomes the **Plan** tab from then on.
- A short summary line, for example *You tested out of 6 topics. 5 to go, about 32 min.*
- An ordered topic list. Each row shows a state chip: *Priority*, *To do* or *Tested out*.
- A **Start topic 1** button.
- A reassurance line: *One topic per trip. Your place is saved after every step.*

On later visits, the workspace opens wherever the learner was last (`PREPSTATE.last`), or on the Plan tab.

### Workspace tabs (its own flow)

A sticky bottom tab bar with **5 tabs**. Each is reachable with one thumb tap and has its own route.

| Tab | Route | What it holds |
|---|---|---|
| **Plan** | `#econprep` | Progress ring (topics Ready out of 11). A countdown if `PREP.starts` is set. A **Continue** card that names the one next topic. Due warm-ups. The Readiness check button. |
| **Topics** | `#econprep/topics` | Units, each with its topic rows and state chips. A topic opens at `#econprep/topic/pt_elast`. |
| **Practise** | `#econprep/practise` | Warm-up sets of 6 mixed questions. Single-topic sets of 5. Mini-case drills. The Readiness check. |
| **Shelf** | `#econprep/shelf` | The resources shelf (section 4.5), filtered by type and topic, with "New" badges. |
| **Progress** | `#econprep/me` | Topic states, the ready date, a list of confident-but-wrong answers so far, and a backup reminder. |

The Android back button moves back through these routes, because each tab and topic is its own history entry.

### Time budget

| Path | Time |
|---|---|
| Diagnostic | 8-10 min (11-22 items) |
| One topic | 5-8 min, target 6.5 |
| Everything, nothing tested out | 11 × 6.5 + 5-min Readiness check = **about 77 min** (cap is 90) |
| Typical learner, about 40% tested out | 10 + 7 × 6.5 + 5 = **about 60 min** |

### "Ready" is a defined state, not a feeling

- **A topic is Ready** once the learner has answered **2 different questions on it correctly without a hint**. Those answers can come from the diagnostic, the topic's quick checks or warm-ups, in any mix. This is Finance's `RETIRE=2` rule applied per topic.
- **The learner is Ready** when all topics are Ready **and** they score **at least 8 out of 10 on the Readiness check**.
  - The check is 10 mixed questions with no topic labels.
  - It is weighted towards the learner's weakest topics.
- What the learner sees when they become Ready:
  - The ring turns green and shows *Ready for ${PREP.course} · 14 Nov*.
  - The hub chip changes to match.
  - A one-time panel lists their three "pocket rules" from the topics that were most recently weak.
- **Readiness can fade.** If a topic's last correct answer is more than 14 days old, its chip reads *Ready · warm-up due*. The learner is nudged, not demoted.

---

## 2. Anatomy of one recap topic

Each topic covers **one idea** in **6.5 minutes (8 at most)**. It has to work on a phone held in one hand in a taxi:
- body text at least 16px
- no table wider than 340px
- a large Continue button in thumb reach
- the learner's place saved after every block

Blocks appear one at a time, the same way Finance's `renderLesson` works. The builder should copy `lessonBlock()` as `prepBlock()` and add the four block types marked *new*. Finance's own lesson code stays untouched.

| # | Block (`k`) | What it is | Limit | Time |
|---|---|---|---|---|
| 1 | `hook` *new* | A business question set in Ghana or Africa, with 2-3 one-tap gut answers. **Not scored**. The pick is stored to calibrate the explanation. | 30 words | 20s |
| 2 | `fig` *new* | **The illustration.** One idea per figure, an inline SVG built from a figure template (section 4.4), with a caption and alt text. It may have **one** optional control, such as a price slider that shows the revenue rectangle changing. | caption ≤ 20 words | 40s |
| 3 | `idea` | The core explanation (the 90-second part). Key terms in bold. If the learner's gut answer was wrong, it opens with the `hookReply` line: *"Most people guess X. Here's why it's Y."* | **120 words max** | 90s |
| 4 | `plain` *new* | **In plain terms**: one sentence with no jargon, then a collapsed line, *"The formula, if you need it"*. | 25 words + 1 formula | 15s |
| 5 | `eg` | Worked example in GH₵ or US$, with Ghanaian or African firms. Reuses the existing `eg` shape (`problem`, `steps[]`). | 4 steps max | 90s |
| 6 | `check` | **2 quick questions drawn by the scheduler** from the topic's question bank: one recall (L1) and one apply (L2). They are **gating**: the learner cannot continue until they answer. They are not hard-coded, so a second visit brings fresh questions, and every answer feeds mastery. | | 60s |
| 7 | `trap` | Watch out: a real, common mistake. Optional. | 40 words | 15s |
| 8 | `bridge` *new* | **"You'll use this when…"**: 1-2 concrete situations from the upcoming course or from work. Each is tagged with a context (section 4.2). Once that course's content is known, a bridge can also link to a shelf item. | 2 × 25 words | 20s |
| — | done | A "Topic done" panel with the one-line **pocket rule**, a primary **Next topic** button, and *Back to plan*. | | 5s |

**Left out on purpose:**
- No "think first" reveal blocks. They are too slow in a taxi.
- No audio or video.
- No raster images. They cost mobile data and break the offline promise.
- No recap bullet list. The `plain` line and the pocket rule do that job.

### Proposed topics: 11 topics in 4 units

This is a scope proposal from the source notes. The economist owns the final content and can merge or split topics within the 90-minute budget.

| Unit (source) | Topic | Mini-case anchor | Bridge context |
|---|---|---|---|
| **A. Decisions and demand** (Weekend 1) | 1. Think at the margin: MR = MC, marginal profit, comparative statics | — | decide |
| | 2. Demand, supply and shocks: a shift versus a movement along the curve | Petroleum market | market |
| | 3. Elasticity: price, income, cross-price | Monsanto Roundup; China power Q1-2 | price |
| | 4. Taxes, tariffs and who really pays: incidence, price controls, regulation | China power Q4 | policy |
| **B. Cost** (Weekend 2) | 5. Relevant cost: opportunity, sunk, fixed vs variable, break-even | — | invest |
| | 6. Scale, scope, the learning curve; short run vs long run | Monsanto (patent expiry) | market, invest |
| **C. Markets and pricing** (Weekends 2-3) | 7. Market structure and market power: entry erodes profit | — | market |
| | 8. Oligopoly and strategy: Cournot, Bertrand, cartels, Nash, credible threats, entry deterrence | Petroleum (OPEC) | compete, negotiate |
| | 9. Pricing practices: the mark-up rule, price discrimination, two-part and block tariffs | China power; ECG guest session | price, policy |
| **D. Risk, information, bargaining** (Weekend 3 + guest session) | 10. Uncertainty and information: expected value, risk aversion, adverse selection, moral hazard | — | risk |
| | 11. Bargaining: BATNA, incomplete information, take-or-pay vs take-and-pay, relationship value | ECG negotiation session | negotiate |

---

## 3. Readiness self-check (diagnostic), routing and spacing

### Diagnostic: adaptive, about 10 minutes

**Stage 1, breadth.** One apply-level (L2) question per topic, so 11 questions, shuffled across units. After picking an answer, the learner taps how sure they are, **before** seeing feedback: *Sure / Think so / Guessing*. That one extra tap is the confidence step the AUDIT asked for.

**Stage 2, confirm.** A second question (L2 or L3) for each topic, only where it is needed. The table also shows what the learner sees afterwards.

| Stage 1 result | Stage 2 | Outcome |
|---|---|---|
| Correct and Sure | 1 confirming question | right → **Tested out**; wrong → To do |
| Correct and Think so / Guessing | 1 question | right → **Tested out**; wrong → To do |
| Wrong and Think so / Guessing | none | **To do** |
| Wrong and **Sure** | none | **Priority**: a confident misconception, listed first and flagged inside the topic |

How it plays:
- "Tested out" means 2 different questions answered correctly without help. That is the same rule as Ready, so the diagnostic is simply the fastest way to Ready.
- 11-22 questions in total, typically about 16, at about 30 seconds each.
- After each question, show the verdict and a one-line reason in an `aria-live="polite"` region.
- No overall score is shown, only the plan.
- *Re-check what I know* (on the Plan tab) reruns the diagnostic, but only for topics that are not yet Ready.

### Routing

- **Plan order:** Priority topics first, then To do in unit order (later topics build on earlier ones), then Tested out.
- Tested-out topics stay openable as *Tested out · review anytime*.
- **Continue** picks the next topic with `prepTopicState()`, a copy of `topicState()`. Ranking: `priority > new > shaky > taught > practising > fading > ready`.

### How it fits the existing mastery engine

- **Same record shape and rules as Finance.**
  - Each question keeps `{n,k,s,d,w}`, and `RETIRE=2`.
  - A hinted correct answer does not move the record forward.
  - Same priority bands, cool-down and least-recently-served order.
- **Separate store.** Records live in `PREPSTATE.m` under the key `mbaassist-econprep-v1`, **not** in Finance's `M`.
  - Copy about 40 lines (`rec`, `priority`, `recordAnswer`, `buildQueue`) as `prepRec` and the like, working on `PREPSTATE`.
  - Do **not** make Finance's functions generic. Duplicating 40 lines is cheaper than any risk to Finance.
- **Own cool-down counter**, `PREPSTATE.drill`. A question seen in the diagnostic sits out the next set, so a correct answer later shows recall rather than short-term memory.
- **Topic states:**

| State | Meaning |
|---|---|
| `new` | not started |
| `priority` | confidently wrong in the diagnostic |
| `taught` | all blocks done, but fewer than 2 different correct answers |
| `shaky` | 4 or more answered, under 60% right |
| `practising` | some correct answers, not yet Ready |
| `ready` / `testedOut` | 2 or more different correct answers without help |
| `fading` | Ready, but last correct answer more than 14 days ago |

### Spacing

- **Warm-ups.** "Econ warm-up · 6 questions · about 3 min", built with `prepBuildQueue` across Ready topics. It brings back the questions seen longest ago, mixed across topics.
- **When warm-ups are due:**
  - 2 days and 7 days after a topic becomes Ready.
  - If `PREP.starts` is set, one more at **T-3 days** and one at **T-1 day** before the course starts: *"Class starts Saturday · 5-min warm-up"*. This is the spacing that matters most, with retrieval right before the class that needs it.
- **No push notifications and no streak pressure.** Due warm-ups appear only on the Plan tab and the hub chip.
- **After the course starts:** the workspace stays useful as a reference. The Shelf and Topics stay open, and warm-ups keep working.

---

## 4. Data schema (add data, not code)

All content sits in one block after the config:

```js
/* ==== ECON PREP: content. Add here; no code changes needed. ==== */
```

**Rules that keep it extendable:**
- **Ids are permanent.** Never rename or reuse an id. Progress, links and backups are keyed by id, never by position in an array. That position-keying was Cross-Border's mistake.
- **Order comes from an `order` field.** New items can be added anywhere in the array.
- **To remove something, set `retired:true`. Do not delete it.** It stays in old backups but is no longer served.
- **Children declare their parent.** A topic says `unit:"u_cost"` and a question says `t:"pt_elast"`, and the parent lists are worked out from that. Adding a topic is therefore one object plus its questions.
- **Bump a topic's `v` when its blocks change a lot.** The saved resume position resets for that topic, but the question records are kept.

### 4.1 Pack and units

```js
const PREP_PACK = {
  v:1,
  budgetMins:90,     // the validator warns if total topic minutes + 15 exceeds this
  ready:{perTopic:2, checkSize:10, checkPass:8, fadeDays:14},
  reviewAfterDays:[2,7],
  preStartDays:[3,1]
};

const PREP_UNITS = [
  {id:"u_demand", order:1, n:"Unit A", t:"Decisions and demand",              src:["wkd1"]},
  {id:"u_cost",   order:2, n:"Unit B", t:"Cost",                              src:["wkd2"]},
  {id:"u_market", order:3, n:"Unit C", t:"Markets and pricing",               src:["wkd2","wkd3"]},
  {id:"u_risk",   order:4, n:"Unit D", t:"Risk, information and bargaining",  src:["wkd3","neg"]}
];
```

### 4.2 Topics

```js
const PREP_TOPICS = [
 {id:"pt_elast", unit:"u_demand", order:3, v:1, mins:7,
  title:"Elasticity: how much buyers react",
  goal:"Predict whether a price change raises or lowers revenue, and who reacts most.",
  pocket:"Elastic demand: cutting price raises revenue. Inelastic demand: raising price raises revenue.",
  src:["wkd1","case_monsanto","case_china"],
  blocks:[
   {k:"hook", q:"GRIDCo raises bulk tariffs 20%. Who cuts usage more: households or the Tema smelter?",
    o:["Households","The smelter","About the same"],
    hookReply:"Most people say households. Industry often has fewer quick substitutes…"},
   {k:"fig", fig:"sd_elastic",
    caption:"Same price rise, two demand slopes: revenue moves in opposite directions.",
    alt:"Steep and flat demand curves, each with a price rise and the revenue rectangles compared."},
   {k:"idea", h:"Elasticity is a reaction ratio", p:"…120 words max…"},
   {k:"plain", p:"If buyers can easily walk away, raising your price loses you money.", formula:"E = %ΔQ ÷ %ΔP"},
   {k:"eg", problem:"A Kumasi cement distributor…", steps:[["Elasticity","…"],["Revenue effect","…"]]},
   {k:"check", n:2},          // the scheduler draws 2 questions where t==="pt_elast" and use includes "check"
   {k:"trap", p:"Elasticity is not the slope. One straight demand line is elastic at the top and inelastic at the bottom."},
   {k:"bridge", to:[
     {ctx:"price",  why:"Setting a price in a new market where buyers have cheaper informal alternatives."},
     {ctx:"policy", why:"Judging whether a tariff cut will actually grow trade volume.", ref:"res:me_wkd1"}]}
  ]}
];
```

**Bridge context tags** (fixed list; the chip label is in brackets): `decide` (Making a call), `market` (Entering a market), `price` (Pricing), `invest` (Investing), `compete` (Competitors), `policy` (Government and regulation), `risk` (Risk), `negotiate` (Negotiating).
- The Progress tab can then say, for example, *"You're strongest on Pricing, weakest on Negotiating."*
- When the upcoming course's materials arrive, add `ref:"res:<id>"` to the relevant bridges. No code change is needed.

**Link formats** (all resolved by `prepResolveRef()`):

| Format | Points to |
|---|---|
| `res:<id>` | a shelf item |
| `topic:<id>` | another topic |
| `tab:practise` | a workspace tab |

### 4.3 Questions

Same shape as Finance's questions, plus `use` and an optional `src`.

```js
const PREP_ITEMS = [
 {i:"pq_elast_01", t:"pt_elast", L:1, use:["check","review"], q:"…", a:["…","…","…","…"], c:1, e:"…why…"},
 {i:"pq_elast_02", t:"pt_elast", L:2, use:["diag","check","review","exit"], q:"…", a:[…], c:2, e:"…", src:"case_china"}
];
```

**Minimum per topic: 5 questions.**
- At least 2 tagged `diag`, at level L2 or L3, one for each diagnostic stage.
- At least 3 tagged `check` or `review`, so a second visit sees new questions.
- Answer options are shuffled each time a question is drawn.

### 4.4 Illustrations: templates filled with data

The builder writes **7 template renderers** once. After that, the economist adds a figure by adding data.

Rules for every template:
- Draw only with `currentColor`, `var(--accent)`, `var(--gold)` and `var(--ink-3)`, so dark mode works automatically.
- Use a `viewBox` and no fixed width.
- Labels must be at least 12px when the figure renders 340px wide.

```js
const PREP_FIGS = {
  sd_elastic: {kind:"sd", curves:[{type:"D",slope:"steep",label:"Inelastic"},{type:"D",slope:"flat",label:"Elastic"}],
               moves:[{from:"P0",to:"P1",show:"revenueBox"}], control:{type:"slider",param:"P"}},
  sd_oil73:   {kind:"sd", curves:[{type:"S",label:"S 1972"},{type:"S",label:"S 1974",shift:"left"},{type:"D"}], note:"OPEC embargo"},
  cost_lr:    {kind:"curves", series:["AC","MC"], marks:["MES"]},
  game_entry: {kind:"matrix", rows:["Fight","Accommodate"], cols:["Enter","Stay out"],
               cells:[["-2,-1","5,0"],["2,2","5,0"]], highlight:[[1,0]]},
  ev_bid:     {kind:"tree", nodes:[…]},
  ppa_terms:  {kind:"compare", cols:["Take-or-pay","Take-and-pay"], rows:[["Buyer pays if unused","Yes","No"]]},
  brk_even:   {kind:"flow", steps:["Fixed cost","÷ margin per unit","= break-even volume"]},
  one_off:    {kind:"svg", svg:"<svg viewBox='0 0 320 180'>…</svg>"}   // escape hatch for a one-off figure
};
```

The seven kinds:

| Kind | Draws |
|---|---|
| `sd` | supply and demand, with shifts and an optional revenue box |
| `curves` | cost or revenue curves |
| `matrix` | a 2×2 payoff table with the equilibrium highlighted |
| `tree` | a decision tree with expected values |
| `compare` | two items side by side |
| `flow` | a short chain of steps |
| `svg` | raw SVG for a one-off figure |

These seven cover every figure the source material needs.

### 4.5 Resources shelf: future materials are data

```js
const PREP_RESOURCES = [
 {id:"me_wkd1", order:1, kind:"Lecture notes", t:"Optimal economic decision making", source:"Adom & Awuku, Weekend 1",
  why:"Demand, elasticity, marginal analysis. Go here when a topic feels thin.",
  topics:["pt_margin","pt_demand","pt_elast","pt_tax"],   // also appears inside those topics as "Go deeper"
  reader:null,               // or {sections:[["Heading","Text"],…]}: an in-app reader, like the old CB_ARTICLES
  url:null,                  // an external link; marked "needs data" and hidden when offline
  mins:25, added:"2026-11-20", level:"core"},              // level: core | optional | extension
 {id:"case_monsanto", order:10, kind:"Mini-case", t:"Monsanto's Roundup", source:"Firms and Markets mini-case",
  why:"Elasticity and pricing after patent expiry.", topics:["pt_elast","pt_scale","pt_pricing"],
  case:{facts:[["US patent expiry","2000"],…], qs:["How do you know cutting price was a good idea?",…],
        how:["Estimate elasticity from the price and volume change…"]},   // same shape as Finance CASES
  mins:15, added:"2026-11-20", level:"core"},
 {id:"neg_ecg", order:20, kind:"Guest session", t:"Bargaining and negotiation: the ECG experience", source:"Guest lecture, Dec 2025",
  why:"Power purchase agreements, take-or-pay, and negotiating with incomplete information.", topics:["pt_bargain","pt_pricing"],
  mins:10, added:"2026-11-20", level:"core"}
];
```

**How the shelf behaves:**
- Grouped by `kind`. The kinds are open-ended; today's are Lecture notes, Mini-case, Guest session, Reading, Video link, Reference and Course material.
- Filter chips by topic.
- A **"New"** badge shows when `added` is within the last 14 days and the item is not yet in `PREPSTATE.opened`.
- `extension` items sit under a collapsed "Going further" section, so the shelf can grow without crowding.
- Mini-cases show facts, questions and method only. Never reproduce case text.
- Lecture notes are listed as "distributed in class" unless the instructor approves an in-app reader.
- When the upcoming course's own pre-reads arrive, add them as `kind:"Course material"`. They then appear on the shelf straight away.

**How to add content:**

| To add | Do this |
|---|---|
| A reading | Append one object to `PREP_RESOURCES`. |
| A case | One `PREP_RESOURCES` object with a `case` block, plus at least 2 `PREP_ITEMS` with `src` set to that case's id. |
| A topic | One `PREP_TOPICS` object, at least 5 `PREP_ITEMS`, and 1 `PREP_FIGS` entry. |
| A unit | One `PREP_UNITS` object. |

Then bump `CACHE` in `sw.js`.

### 4.6 State

Stored under `localStorage["mbaassist-econprep-v1"]`.

```js
PREPSTATE = {
  started:false, last:"#econprep",
  m:{ "pq_elast_02":{n:1,k:1,s:1,d:3,w:20412} },             // same record shape as Finance M
  drill:0,
  conf:{ "pq_elast_02":"sure" },                             // diagnostic confidence taps
  hook:{ "pt_elast":0 },                                     // gut answers, for calibration only
  topics:{ "pt_elast":{v:1,pos:4,done:false,at:20412} },     // resume position for each topic
  diag:{at:null, out:[], priority:[]},
  exit:{best:0, at:null}, readyAt:null,
  opened:[], reviews:{lastAt:null}
}
```

- Use the same pattern as the old `cbDefault`, `cbNormalize`, `cbLoad` and `cbSave`. Save at most once every 400ms.
- **Backup:** add `econPrep:PREPSTATE` to the export and bump the format to `v:7`. Restore runs `prepNormalize(d.econPrep||{})`, so an old v6 file restores cleanly with an empty prep state.
- **Validator:** add `prepValidate()`, run only when the URL has `?debug`. It writes to the console:
  - topics with fewer than 5 questions, or fewer than 2 tagged `diag`
  - figures that don't exist
  - links that don't resolve
  - unknown bridge contexts
  - duplicate ids
  - total minutes over budget

  This lets the economist check a content drop without reading code.

---

## 5. Global navigation and hub critique: redesign recommendations, in priority order

**Finance stays fully intact.** Do not touch:
- `MODULES`, `LESSONS`, `M`, `BY_TOPIC`, `RETIRE`
- the drill, teach mode, calculator and case room
- the `#finance` and `#<module>/<pane>` routes

Every change below either adds to the shell or replaces Cross-Border's wiring. **Regression pass before shipping:**
- a Finance drill and a Finance lesson
- the calculator and the case room
- Sustainable Leadership tabs and its date logic
- backup and restore, including an old v6 file

1. **Replace per-course hand-wiring with a small course registry.**
   - *Problem:* each course is wired into about 7 places, as listed in section 0. Removing Cross-Border and adding `econprep` means editing all of them, and one will be missed.
   - *Fix:* one `COURSES=[{id,view,hash,eyebrow,title,render,chip}]` array.
     - `show()`, both hash handlers, the hub and the top bar loop over it.
     - Finance's entry points at the existing `show("home")` and `renderHome()`, so Finance's behaviour does not change.
2. **Remove Cross-Border cleanly without destroying learner data.**
   - Delete `#crossborderView`, the `CB_*` data, the `cb*` functions, the `data-cb-*` click and input handlers, the hub tile and all `crossborder` branches.
   - **But:** existing learners have their own-words capstone and case notes under `mbaassist-crossborder-v1`. Don't delete that key.
     - Keep passing the old `crossBorder` field through backups unchanged, as `legacy.crossBorder`.
     - Add a one-time hub notice: *"Cross-Border has been retired. Your notes are kept. [Download them]"*. This exports that object as readable text.
   - Remove `crossborder` from `COURSE_ARCHIVE`.
   - Redirect old `#crossborder` links to the hub.
3. **Give every course deep links and a working back button.**
   - *Problem:* Cross-Border and Sustainable Leadership each have one route, so a phone's back button leaves the course. Only Finance has sub-routes.
   - *Fix:*
     - Use the registry to parse `#<course>/<tab>/<item>`.
     - Store each course's `last` location and resume there.
     - `econprep` ships with full routes from day one (section 1).
     - Adding Sustainable Leadership sub-routes is optional. Keep its time-based default screen.
4. **Show a status chip and a visible menu on every hub card.**
   - *Problem:* the cards show no progress or next action.
   - *Fix:* add a status chip per card:
     - Finance: *"3 concepts going cold"*
     - Sustainable Leadership: its current state
     - Econ prep: *"Start here · about 10 min"*, then *"4 topics left · about 25 min"*, then *"Ready · warm-up due"*
5. **Make "Remove from workspace" discoverable.**
   - *Problem:* it is only on a hidden long-press, which no one finds and screen readers can't reach.
   - *Fix:* add a visible **⋯** button on each card. Keep long-press as a shortcut.
6. **Make first run course-aware.**
   - *Problem:* "What's inside" is an MBA512-only tour shown to every new learner, so a learner who only wants the econ warm-up meets formula maps and drills.
   - *Fix:*
     - Show the Finance tour on the learner's first entry into Finance. Its content is unchanged.
     - The econ prep course has its own first run, the "Before you start" screen.
     - After the name is entered, a first launch lands on the hub.
7. **Make "Begin a fresh session" safe and scoped.**
   - *Problem:* it currently wipes Finance mastery **and** all Cross-Border state, including written notes, but not Sustainable Leadership. The confirm dialog only mentions "mastery progress".
   - *Fix:*
     - Show a per-course checklist in the confirm: *Finance mastery / Econ warm-up progress / Sustainable Leadership notes*.
     - Leave anything containing the learner's own writing **unchecked** by default.
8. **Make the ☰ menu and backups app-wide, not MBA512-only.**
   - The backup file is named `mba512-progress-…`, and the restore error mentions "MBA512". Rename them to `mbaassist-backup-…` and "MBAassist backup".
   - Group the menu by course, with session and backup at the top.
   - Show a "last backed up N days ago" line. Progress lives only in this browser, and these learners change phones.
9. **Make the top bar always tell the learner where they are.**
   - *Problem:* the `#homeEyebrow` and `#homeTitle` ternaries hard-code names. The courses back button reads "‹ Courses" even three levels deep.
   - *Fix:* the eyebrow should name the course (driven by `PREP.course` for econ prep). The title should name the current tab or topic. Back goes back one level using history, and "Courses" stays available as a separate home action.
10. **Make it readable on a phone in a taxi, and accessible.**
    - Text: body at least 15-16px and small meta text at least 13px. The old Cross-Border tiles used 12.5px and 11px. Tap targets at least 44px.
    - Feedback: an `aria-live` region on every answer verdict.
    - Focus and scroll: restore them after `innerHTML` re-renders.
    - Motion: respect `prefers-reduced-motion` for figure animations.
    - Markup: fix the stray duplicate `<body>` / `</head>` near the top of `index.html`, around line 937.

---

## 6. Acceptance criteria

- The hub shows 3 cards: Managerial Finance, Sustainable Leadership, and Managerial Economics warm-up. Changing `PREP.course` in one line updates every label.
- No `crossborder` route or view remains, and the `#crossborder` hash redirects to the hub. Old Cross-Border notes can still be downloaded, and they survive a backup round trip.
- A first-time learner sees "Before you start". All three paths work offline: Diagnostic, Teach me, and Look around.
- The diagnostic takes 22 questions or fewer. The Plan lists Priority topics first.
- Each topic resumes at the exact block where the learner left off, and takes 8 minutes or less at 200 words per minute. The full path takes 90 minutes or less, which the validator enforces.
- `?debug` → `prepValidate()` reports no errors.
  - Appending one `PREP_RESOURCES` object makes it appear on the Shelf, badged "New", with no code change.
  - Appending a topic with its questions and figure makes it appear in Topics, the diagnostic and the Plan.
- Ready shows only when all topics are Ready and the Readiness check is at least 8 out of 10.
- A v6 backup restores cleanly, with empty prep state. A v7 backup round-trips `econPrep`.
- The Finance and Sustainable Leadership regression pass is green.
- `sw.js` `CACHE` is bumped to `mbaassist-v29`.
