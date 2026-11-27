# Interactive learning audit: Managerial Economics warm-up (MBA645 prep)

Auditor role: interaction designer with an economics background. Scope: the 4 existing ECONX explorers, specs for 10 new ones, and other interaction patterns.
Method: read `ECONX`, `PREP_EXPLORE`, `PREP_TOPICS`, `PREP_FIGS` in `/home/claude/MBAassist/index.html` (lines ~5225–5910), `/home/claude/team/economist.md` and `/home/claude/src/syllabus_MBA645.txt`. I drove every explorer in Chromium at 390×844 with touch emulation, both in topic mode (`#econprep/topic/<id>`) and card mode (`#econprep/cards/<id>`), and recomputed every number.
Screenshots: `/home/claude/audit/shots/ix-*.png`.

Timing: MBA645 Weekend 1 started today (Fri 27 Nov). **Problem Set 1 (DWL and HHI from African market data) runs on Sunday 29 Nov.** Case Analysis 1 (ECG/Eskom natural monopoly) runs Saturday and Case Analysis 2 (lemons) runs Sunday. That sets the build order in section 2.

---

## 0. Findings that block learning today (fix before anything new)

| # | Severity | Finding | Evidence | Fix |
|---|---|---|---|---|
| B1 | **High** | **In card mode, dragging any explorer slider flips to the next card.** The document-level swipe handler (`touchstart`/`touchend`, ~line 6054) ignores the touch target. A 45 px horizontal drag on the range input counts as a swipe. Measured: the kicker changed from "EXPLORE IT" to "IN PLAIN TERMS" and the explorer unmounted. | `ix-cards-elast.png` → `ix-cards-after-drag.png` | In `touchstart`: `if(e.target.closest('.econx'))\{_pcTouch=null;return;\}`. Also add `touch-action:none` on any draggable SVG element and `touch-action:pan-y` on `.econx-svg`. |
| B2 | **High (wrong economics shown)** | **Demand explorer, "Own price ↑":** the dot moves to (Q 70, P 30), **down-right**, which is a price *fall*. The hint says "slide UP-LEFT". | `place(70,30,false)`; `ix-demand-own.png` (dot below and right of start) | `place(30,70,false)` |
| B3 | Medium (wrong economics shown) | **Demand explorer, shift buttons:** the dot sits **off** the new curve D₁ (P = 125 − Q). "Income ↑" places it at (75, 55), but D₁ gives 50 there (8 px off). "New season" places it at (78, 58), but D₁ gives 47 (16 px off). The price also rises, which blurs the lesson that the shift means more is bought **at the same price**. | lines 5860–5861 | Put both at (75, 50) so the price is unchanged and Q goes from 50 to 75. Better still, see the redesign below. |
| B4 | Medium | **Margin explorer seeds a quiz error.** The explorer draws MR = 100 − 2q with MC 20 and celebrates **Q = 40**. Quiz `pq_margin_01` asks about *demand* P = 100 − 2Q with MC 20 (answer 20) and offers **40** as a distractor. The explorer never draws demand, so "100 − 2Q → 40" is what sticks. | `ix-margin-40.png`; PREP_ITEMS `pq_margin_01` | Use the lecture's microchip numbers, which match the topic's figure and worked example (spec below), and always draw demand next to MR. |
| B5 | Medium | **The sticky "Continue" bar hides the hint line** of every explorer in topic mode. The feedback sentence, which is the payoff of the interaction, sits under the bar until the user scrolls. | `ix-pt_*-topic.png`, `ix-oligop-comp.png` | Put the hint **above** the control (between SVG and slider), or add `scroll-margin-bottom`/bottom padding equal to the bar height on `.econx`. |
| B6 | Low | The `prompt` (the instruction) appears only in card mode. In topic mode the explorer appears under the figure with no instruction. | `econxHTML` vs card `case "explore"` | Render `prompt` inside `econxHTML` itself. |

---

## 1. Review of the 4 existing explorers

**Problems common to all four**
- **No numbers on the axes.** Price and quantity have no ticks, so the student cannot connect the dot to the worked example. Add 3–4 ticks per axis in `--mono` at 11 px or larger. The current 9 px viewBox text renders at about 10 px on a 390 px phone.
- **Touch targets.** The range input is 26 px tall (measured), below the 44 px minimum. The dot is decoration (12 px) and cannot be dragged. Make the slider row 44 px tall, and for curve explorers let the user **drag the dot itself**: a 44 px invisible hit circle with pointer events and `setPointerCapture`.
- **No goal.** Each explorer is "move it and read". None asks the student to *find* something, so nothing confirms understanding. Add a challenge line with a success state (pattern in section 3, P1).
- **Button layout.** With 4 segment buttons, `flex-wrap` leaves the 4th alone on a full-width row (`ix-demand-own.png`). Use a 2×2 grid (`grid-template-columns:1fr 1fr`).
- **Accessibility.** Readouts should carry `aria-live="polite"`, and range inputs need `aria-valuetext` (for example, "Price GH₵70, revenue GH₵2,100").

### 1.1 `elast` (pt_elast): price slider on Q = 100 − P

- **Correctness: OK.** TR = P(100 − P), with its peak of 2,500 at P = 50. Elastic above 50, inelastic below: correct. The model matches the topic figure `elastic_tr` (P = 100 − Q, 1,600 → 2,100 → 1,600), which is good. Verified by touch drag: P 50 → Q 50, TR 2,500, "Unit elastic"; P 20 → TR 1,600, inelastic; P 95 → TR 475, elastic.
- **Does it reveal the insight? Partly.** The rectangle changes size, but the student never sees *why*: the strip lost on units already sold against the strip gained from new buyers. Those are exactly the red −200 and green +700 boxes in the figure above it. Also, elasticity itself is never shown as a number.
- **Touch.** Hitting exactly P = 50 takes ±1.25 px precision (2.5 px per GH₵ step), so the "unit elastic" message is hard to reach on a phone.
- **Change:**
  1. Show the |E| readout: |E| = P/(100 − P). Test values: P 70 → 2.33, P 50 → 1.00, P 20 → 0.25.
  2. While dragging, keep the *previous* rectangle as an outline. Shade the lost strip (ΔP × old Q) red and the gained strip (new P × ΔQ) green, using the same colours as the figure.
  3. Add a 60 px-tall **TR hump** strip under the chart, with a tracking dot (TR = 100Q − Q²). The peak and the midpoint then line up visually.
  4. Use step 5 with snap. Treat 48–52 as "close to unit elastic" and show the exact message at 50.
  5. Challenge: **"Find the price that earns the most revenue."** Success: P = 50 (TR GH₵2,500).

### 1.2 `margin` (pt_margin): output slider, MR = 100 − 2q, MC = 20

- **Correctness:** the arithmetic is right (MR = MC at 40). However, (a) the model differs from the topic's figure and worked example (microchips, P = 170 − 20Q, MC = 38, Q* = 3.3), and (b) it collides with quiz `pq_margin_01` (B4). "Next unit earns MR" is a continuous approximation. The discrete 41st unit adds 19, not 20; this is fine to ignore, but say "about".
- **Insight:** this one shows only the marginal condition. The topic's aha is "profit peaks at MR = MC, *not* where revenue peaks", and the explorer shows neither profit nor revenue.
- **Change: rebuild on the lecture numbers.**
  - Model: P = 170 − 20Q, MR = 170 − 40Q, MC = 38, π = 132Q − 20Q² − 100. Slider Q 0–8.5, step 0.1. Units: $ (as in the notes; the figure is unitless).
  - Two stacked panels with a shared x-axis, like the `profit_hill` figure: the top panel shows TR, TC and the profit hill with a dot; the bottom shows D, MR and MC with a dot on MR and a ghost dot on D (the price).
  - Readouts: MR, MC, price, **profit**.
  - Tests: Q 2 → MR 90, π 84. Q 3.3 → MR 38 = MC, P 104, π 117.8. Q 4.25 → MR 0, TR max 361.25, π 99.75. Q 5 → MR −30, π 60.
  - Challenge: **"Find the output with the highest profit — then check: is revenue at its peak there?"** Success: Q = 3.3 (±0.05). Then show: "Revenue peaks later, at 4.25. A revenue-maximiser (the franchisor) would overproduce."

### 1.3 `demand` (pt_demand): 4 tap buttons

- **Correctness:** two bugs (B2, B3). "Income ↑" and "New season" do the same thing, so one button is wasted. There is no leftward shift, although the figure has D₁ (shock or income ↓).
- **Insight:** tapping a button and watching an animation is *showing*, not *figuring out*. The student never has to decide.
- **Change: turn it into predict-then-reveal (section 3, P2).**
  - The card shows an event, for example "MTN cuts data prices", "Schools reopen", "COVID lockdown", "Kenkey price rises". The student taps one of three options: "slide along", "shift right", "shift left". Then the animation plays.
  - Use 6–8 events in shuffled order. Score each, and show the explanation only after the student has committed.
  - Match the figure: at P 40 the quantity is 30 on D₁, 50 on D₀ and 70 on D₂ (a ±20 shift). Read D₀'s exact equation from the `demand_shift` SVG so the curves sit exactly where the figure draws them.

### 1.4 `oligopoly` (pt_oligop): 4 tap presets on P = 1,600 − Q, MC = 100

- **Correctness: all four points are right.** Monopoly 750 @ 850; Cournot 1,000 @ 600; Stackelberg 1,125 @ 475; competition 1,500 @ 100. Two small issues: the explorer labels these in GH₵, while the notes' example is in $. And the MC line at 100 is not drawn.
- **Insight: weak.** It moves a dot along demand. The topic goal is "spot why cartels are tempted to cheat", and Weekend 1 Session 1 recaps "collusion: game theory basics". Neither is touched. HHI, which Problem Set 1 needs on Sunday, has no interaction anywhere.
- **Change:**
  1. Keep the four presets, but draw MC = 100 and add a profit readout. Monopoly or joint profit: 562,500 in total (281,250 each if split). Cournot: 250,000 each. Stackelberg: A 281,250, B 140,625. Competition: 0.
  2. **Add a "Cheat on the cartel" mode.**
     - Start both firms at the cartel quota of 375 each (P = 850, profit 281,250 each).
     - Slider: "Your output, q_A", 0–1,000, step 12.5. B stays at 375.
     - Live: P = 1,600 − q_A − 375; π_A = (P − 100)·q_A; π_B = (P − 100)·375.
     - Challenge: **"Find the output that pays you most while B keeps the deal."** Success: q_A = 562.5 (π_A 316,406; P 662.5; B falls to 210,938).
     - Then show: "B can do the same. That is why cartels crack, and why OPEC quotas need policing."
     - Tests: q_A 375 → P 850, π_A 281,250. q_A 500 → P 725, π_A 312,500. q_A 562.5 → P 662.5, π_A 316,406. q_A 750 → P 475, π_A 281,250.
  3. **Add the HHI explorer here (top priority for Sunday's Problem Set 1).** Spec in 2.3.

---

## 2. Specs for the 10 new explorers (plus HHI)

Ids confirmed in `PREP_TOPICS`: pt_prod, pt_relcost, pt_costs, pt_comp, pt_monop, pt_pricing, pt_games, pt_bargain, pt_uncert, pt_info.

**Build conventions for every explorer**
- **Plot area:** the shared `_XP/_YB/_XW/_YH` geometry. Add a `_ticks(xs,ys)` helper.
- **Two-panel layouts:** use viewBox 0 0 300 260.
- **Draggable point:** reuse a `drag(el,{axis,min,max,step,onMove})` helper on pointer events, with a 44 px hit radius.
- **Challenge component:** `<div class="econx-goal">` holds a one-line task. When the success condition holds, it turns green with a ✓ and a one-line "why".
  - After 3 wrong attempts *or* 45 s, show a "Show me" link that animates to the answer.
  - Store solved state in `PREPSTATE` (not required for v1).
- **Units:** follow the topic's figure and worked example. "Illustrative" models use GH₵ (as the figures do). Lecture examples keep the notes' $/US$.
- **Hint:** place it directly under the SVG (B5).

### Ranked build order (MBA645 Weekend 1 first)

| Rank | Topic | Explorer | Needed for |
|---|---|---|---|
| 1 | pt_monop | Monopoly: find the deadweight triangle | Session 1 recap; Problem Set 1 (DWL); Case Analysis 1 |
| 2 | pt_comp | Size of the pie vs split of the pie (+ pollution tab) | Session 1 efficiency; Problem Set 1 (private vs social cost); Session 3 taxes |
| — | pt_oligop add-on | HHI: merge firms, watch concentration | Problem Set 1 (HHI) |
| 3 | pt_games | Can you make the cartel stick? | Session 1 collusion; Weekend 2 OPEC |
| 4 | pt_info | The lemons unravelling | Case Analysis 2; Session 3 info failures |
| 5 | pt_costs | Should the firm open today? (+ how many plants) | Case Analysis 1 (natural monopoly, falling AC) |
| 6 | pt_pricing | One price vs a fee plus a price | Project Maji water pricing; Case Analysis 4 tariffs |
| 7 | pt_relcost | Does the sunk cost change the answer? | Session 2 sunk costs and entry; Case Analysis 3 |
| 8 | pt_uncert | When is a test worth buying? | Weekend 2 uncertainty; Zipline case |
| 9 | pt_bargain | Optimists go to court | Case Analysis 5 negotiation (Weekend 3) |
| 10 | pt_prod | Hire one more? (MRP = wage) | Weekend 3 returns to scale |

---

### 2.1 pt_monop: "Where does the triangle come from?" (Rank 1)

- **Aha:** a monopolist makes most money by *holding output back*. The trades it blocks (worth more to buyers than they cost to make) are the deadweight loss, and no one gets that value.
- **Model** (matches figure `monopoly`/`monopoly_dwl`, GH₵, illustrative):
  - Demand P = 100 − Q; MR = 100 − 2Q; MC = AC = 20 (constant).
  - Q_C = 80, P_C = 20. Q_M = 40, P_M = 60.
  - For a chosen Q (0–100):
    - P = 100 − Q
    - Profit = (P − 20)·Q
    - CS = ½·Q·(100 − P) = ½Q²
    - DWL = ½·(80 − Q)² (this formula also covers Q > 80 as over-production, where P < MC)
  - Check: CS + profit + DWL = 3,200 for every Q.
- **Controls:**
  - (1) Drag the dot along the demand curve, or use the slider "Output Q", 0–100, step 1.
  - (2) Two-state toggle: **"Be the monopolist" / "Be the regulator"**. It only changes the challenge text and the highlight colour.
- **Live updates:**
  - Blue profit rectangle: from 20 to P, width Q.
  - Light CS triangle above P.
  - Red DWL triangle: between demand and MC, from Q to 80.
  - MR line, dashed.
  - Readouts: Price, Profit, Consumer surplus, Deadweight loss (GH₵).
  - Formula line under the chart, filled live: `DWL = ½ × (80 − Q) × (P − 20) = ½ × 40 × 40 = 800`. This is the Problem Set 1 formula, written as in the topic's `plain.formula`.
- **Challenges:**
  - Monopolist: **"Find the output that maximises your profit."** Success: Q = 40 → P 60, profit 1,600, DWL 800.
  - Regulator: **"Make the deadweight loss disappear. What happens to the firm's profit?"** Success: Q = 80 → P 20, profit 0, DWL 0. Message: "Efficient, but no profit. That is why regulators of natural monopolies (ECG) use average-cost pricing."
- **Tests:**

| Q | P | Profit | CS | DWL |
|---|---|---|---|---|
| 40 | 60 | 1,600 | 800 | 800 |
| 30 | 70 | 1,500 | 450 | 1,250 |
| 60 | 40 | 1,200 | 1,800 | 200 |
| 80 | 20 | 0 | 3,200 | 0 |
| 90 | 10 | −900 | 4,050 | 50 |

- **Level 2 (optional, Case Analysis 1): the ECG-style regulator.** Tap toggles on the lecture utility (US$; P = 270 − 0.00048Q; TC = 3.75m + 70Q + 0.00002Q²):

| Setting | Q | P | Profit |
|---|---|---|---|
| Unregulated | 200,000 | $174 | $16.25m (13% on $125m) |
| 12% return cap | 250,000 | $150 | $15.0m |
| P = MC | 384,615 | $85.38 | −$0.79m (subsidy or fixed fee needed) |

  Check for P = MC: MC = 70 + 0.00004Q = 85.38, and AC = 87.44 there.

### 2.2 pt_comp: "Size of the pie vs split of the pie" (Rank 2)

- **Aha:** the *quantity* traded sets how big the gains are (largest where MB = MC). The *price* only decides who gets them. With pollution, the market's quantity is too big.
- **Three tabs** (segmented control at the top): **Pie size | Pie split | Pollution**.

**Tab A, Pie size** (matches figure `pc_surplus`, GH₵):
- Model: D: P = 100 − Q; S: P = 20 + Q; equilibrium Q* = 40, P* = 60.
- Total surplus at traded quantity Q = 80Q − Q². DWL = 1,600 − (80Q − Q²) = (40 − Q)².
- Control: slider "Quantity traded", 0–60, step 1, or drag a vertical line.
- Live: green area between D and S from 0 to min(Q,40). Red triangle between D and S from Q to 40 (or 40 to Q if over-producing). At Q = 40, also split it into CS (above 60) and PS (below 60): 800/800.
- Challenge: **"Make the pie as big as it can be."** Success: Q = 40, total 1,600.
- Tests:

| Q | Total surplus | DWL |
|---|---|---|
| 40 | 1,600 | 0 |
| 30 | 1,500 | 100 (matches the figure) |
| 20 | 1,200 | 400 |
| 50 | 1,500 | 100 |
| 60 | 1,200 | 400 |

**Tab B, Pie split** (the worked example: tutoring, 15 h/week, parents' max GH₵100/h, teacher's min GH₵60/h):
- Control: slider "Hourly fee", GH₵60–100, step 1.
- CS = (100 − fee)·15. PS = (fee − 60)·15. Total = 600.
- Live: a horizontal bar split blue/amber; the total readout stays at 600, highlighted.
- Challenge: **"Predict first: at GH₵90, is the total gain higher, lower or the same?"** Tap one, then the slider unlocks. Success: "same".
- Tests:

| Fee | CS | PS | Total |
|---|---|---|---|
| 75 | 375 | 225 | 600 |
| 90 | 150 | 450 | 600 |
| 60 | 600 | 0 | 600 |
| 100 | 0 | 600 | 600 |

**Tab C, Pollution** (Problem Set 1 "private and social cost"; Session 3; illustrative GH₵):
- Model: private MC: P = 20 + Q; external cost slider e = 0–40 GH₵/unit (step 5, default 20); social MC: P = 20 + e + Q.
- Market Q = 40 (ignores e). Social optimum Q_s = (80 − e)/2.
- DWL of the market outcome = ½·(40 − Q_s)·e = e²/4.
- Second control: toggle "Tax = external cost". When on, the market quantity moves to Q_s and the red triangle vanishes.
- Challenge: **"Set a tax that removes the over-production."** Success: tax on with e = 20 → Q = 30, P = 70.
- Tests:

| e | Q_s | DWL |
|---|---|---|
| 20 | 30 | 100 |
| 40 | 20 | 400 |
| 0 | 40 | 0 |
| 10 | 35 | 25 |

### 2.3 pt_oligop add-on: "HHI: merge firms, watch concentration" (Problem Set 1)

- **Aha:** HHI squares shares, so big firms count far more than small ones. A merger raises HHI by exactly 2 × s₁ × s₂.
- **Model:** HHI = Σ sᵢ² (shares in %). Bands, as in the app's `plain.formula`: below 1,000 low; 1,000–1,800 moderate; **above 1,800** high. CR4 = the sum of the top 4 shares.
- **Visual (the key idea):** each firm is a **square whose area equals sᵢ²**, laid out in a row and scaled so that 10,000 fills the plot. A 70% firm's square dwarfs the others. A band meter (0–10,000) shows the 1,000 and 1,800 marks.
- **Controls:**
  - (1) Preset chips: "Mobile data (illustr.) 70/20/10", "4 firms 40/30/20/10", "10 equal firms", "Challenge market".
  - (2) **Tap two firms to merge them.** They animate into one square. An undo button restores them.
- **Live:** HHI, band label (colour), CR4, and "ΔHHI from this merger = 2 × a × b = …".
- **Challenge market:** 20, 15, 15, 10, 10, 10, 10, 10 (HHI 1,350, moderate).
  - Task: **"Find the one merger that tips this market into 'highly concentrated' (above 1,800)."**
  - Success: merge 20 + 15 → 1,950.
  - Other merges stay at or below 1,800: 15+15 → 1,800 (still moderate: show "exactly on the line, not above"); 20+10 → 1,750; 15+10 → 1,650; 10+10 → 1,550.
- **Tests:** 70/20/10 → 5,400, high. 40/30/20/10 → 3,000, high. 10×10% → 1,000, moderate (the band starts at 1,000). 100 → 10,000.
- **Second step:** a "Try your own data" input row (up to 8 share fields) that computes HHI step by step, showing each square. This directly rehearses Problem Set 1.

### 2.4 pt_games: "Can you make the cartel stick?" (Rank 3)

- **Aha:** in a one-shot game, cheating is each firm's best reply, so the cartel collapses. Only the *shadow of the future* (meeting again) or a credible penalty makes cooperation pay.
- **Step 1, best replies** (matches figure `payoff_matrix`; payoffs are (Coke, Pepsi): DD (4,2), DR (8,1), RD (2,5), RR (6,4)):
  - The student taps Coke's best row for each Pepsi column, then Pepsi's best column for each Coke row. Each correct tap stars that payoff.
  - The cell with two stars lights up: **Nash = Discount/Discount (4,2)**.
  - Success: all 4 best replies starred correctly. Wrong taps shake and show "Compare 8 with 6".
- **Step 2, repeated game** (lecture price war, W2 p.70; profit in the notes' $ units):
  - Payoffs: both High (10,10); both Low (7,7); cheat (12) against a co-operator (5).
  - Slider: **"Chance you meet again next round", δ = 0–95%, step 5.** Rule: grim trigger (one cheat → low prices for ever).
  - Value of keeping the deal: 10/(1 − δ). Value of cheating now: 12 + 7δ/(1 − δ). The deal holds when δ ≥ 0.40.
  - Live: two bars (keep vs cheat); a verdict "Cartel holds / Cartel cracks"; and a 10-round strip of coins (H/L) that animates the outcome.
  - Challenge: **"Find the smallest chance of meeting again that keeps the cartel together."** Success: δ = 40%.
  - Tests:

| δ | Keep | Cheat | Verdict |
|---|---|---|---|
| 0 | 10 | 12 | cracks |
| 30% | 14.29 | 15.0 | cracks |
| 40% | 16.67 | 16.67 | holds (tie counts as hold) |
| 50% | 20 | 19 | holds |
| 90% | 100 | 75 | holds |

- **Level 2 (worked example, credibility):** a gold-mine tree. Slider "Penalty if the state expropriates", US$0–50m, step 5. The government honours if 50 > 80 − F.
  - Tests: F 0 → expropriate, so the firm stays out (0,0). F 30 → tie, so the state still expropriates (the notes say "above $30m"), and the firm stays out. F 35 → honour, so invest (50,50).
  - Challenge: **"Find a penalty that gets the mine built."** Success: F > 30.

### 2.5 pt_info: "The lemons unravelling" (Rank 4)

- **Aha:** at an average price, the best cars leave. The average falls, so the price falls, and more good cars leave, until only the lemons trade.
- **Model** (worked example and figure `lemons`, US$ thousands):
  - Seller values are uniform on [8, 14]. Buyer premium b (default 1).
  - At price p, the cars offered are v ≤ p, with average (8 + p)/2. Buyers pay at most (8 + p)/2 + b.
  - Next-round price: p' = (8 + p)/2 + b. Fixed point: **p\* = 8 + 2b**, capped at 14.
  - Share of cars traded = (p\* − 8)/6.
- **Visual:** a horizontal value bar 8→14 made of 30 small car icons. Cars at or below p are shaded "offered", cars above are greyed "withdrawn". Markers show the average offered value and buyers' maximum price.
- **Controls:**
  - (1) Button **"Next round"**: steps p from 14 → 12 → 11 → 10.5 → 10.25 → 10.125… (b = 1). After 6 taps, "auto" snaps to 10.
  - (2) Slider "Buyer premium b", US$0–3k, step 0.25k. It resets to p = 14 and shows p\*.
  - (3) Toggle **"Add a mechanic's inspection (screening)"**: all cars trade at their own value + ½b, with 100% traded.
- **Live:** price, % of cars still traded, "good cars lost", and a lost-gains readout: (1 − share traded) × 100%.
- **Challenge:** **"Set the buyer premium so at least half the cars still sell."** Success: b ≥ 1.5 → p\* ≥ 11, 50% traded.
- **Tests:**

| b | p\* | Share traded |
|---|---|---|
| 1 | 10 | 33% (the worked example's US$10,000) |
| 0 | 8 | 0% (the market collapses) |
| 2 | 12 | 67% |
| 3 | 14 | 100% |

  Step check (b = 1, starting at 11): next price 10.5, as in the worked example.

### 2.6 pt_costs: "Should the firm open today?" (Rank 5)

- **Aha:** a firm making a loss should stay open while the price covers average *variable* cost. Below AVC's minimum, closing loses less. MC cuts AVC and ATC at their lowest points.
- **Model** (exact figure `cost_curves`; GH₵ per unit, illustrative):
  - FC = 60. AVC = 30 − 6Q + 0.5Q². MC = 30 − 12Q + 1.5Q². ATC = 60/Q + AVC. AFC = 60/Q.
  - The firm picks Q on the rising part of MC where P = MC: **Q\* = 4 + √(6P − 36)/3** (P ≥ 6).
  - Profit if open = P·Q\* − (60 + 30Q\* − 6Q\*² + 0.5Q\*³). Profit if closed = −60.
  - Open if P ≥ min AVC = 12 (at Q = 6). Break-even at min ATC ≈ 21.05 (Q ≈ 7.17).
- **Controls:** drag a horizontal **price line**, or use the slider "Market price", GH₵5–40, step 0.5.
- **Live:**
  - Shaded rectangle (P − ATC)·Q\*: green for profit, red for loss.
  - Thin amber band (P − AVC)·Q\* labelled "covers part of rent".
  - A dot at (Q\*, P) on MC.
  - Readouts: Output, AVC, ATC, "Profit if open", "Profit if closed (−60)", verdict **OPEN / CLOSE**.
- **Challenges:**
  - (1) **"Find the lowest price at which it should still open."** Success: P = 12.
  - (2) **"Find the break-even price."** Success: P within 21.0–21.5.
- **Tests** (2 dp):

| P | Q\* | AVC | ATC | Profit if open | Verdict |
|---|---|---|---|---|---|
| 10 | 5.63 | 12.07 | 22.72 | −71.65 | close (−60 is better) |
| 12 | 6.00 | 12.00 | 22.00 | −60.00 | indifferent; show "shutdown point" |
| 18 | 6.83 | 12.34 | 21.13 | −21.37 | open |
| 21.5 | 7.22 | 12.74 | 21.05 | +3.22 | open |
| 30 | 8.00 | 14.00 | 21.50 | +68.00 | open |

- **Level 2 (worked example): "How many plants?"** Tap a stepper from 1 to 6 plants (US$; P = 940 − 0.02Q; each plant TC = 250,000 + 40q + 0.01q²; output split equally).
  - Q = 900/(0.04 + 0.02/n).
  - Results:

| Plants | Q | P | Profit |
|---|---|---|---|
| 1 | 15,000 | $640 | $6.50m |
| 2 | 18,000 | $580 | $7.60m |
| 3 | 19,286 | $554.29 | $7.93m |
| **4** | **20,000** | **$540** | **$8.00m** |
| 5 | 20,455 | $530.91 | $7.95m |
| 6 | 20,769 | $524.62 | $7.85m |

  - Challenge: **"Pick the number of plants that maximises profit."** Success: 4. Then show "each plant runs at 5,000, its lowest-AC size (AC = MC = $140)".

### 2.7 pt_pricing: "One price vs a fee plus a price" (Rank 6)

- **Aha:** with one price, a firm with market power prices high and loses trades (DWL). Add an entry fee and the best per-unit price falls to MC. Profit doubles and the deadweight loss vanishes.
- **Model** (figure `price_disc`; identical buyers; GH₵ illustrative):
  - Demand P = 100 − Q; MC = 20; unit price p.
  - Q = 100 − p. Usage profit = (p − 20)(100 − p). CS = ½(100 − p)². DWL = ½(p − 20)².
  - With fee on: fee = CS, and profit = usage profit + CS.
- **Controls:** (1) slider "Price per unit", GH₵20–100, step 1. (2) Toggle "Charge an entry fee too".
- **Live:** profit rectangle; CS triangle (turns into "fee you collect" when the toggle is on); DWL triangle; readouts Profit, Fee, DWL.
- **Challenges:**
  - (1) Fee off: **"Find the best single price."** Success: p = 60 → profit 1,600, DWL 800.
  - (2) Fee on: **"Now find the best price per unit."** Success: p = 20 → fee 3,200, profit 3,200, DWL 0.
- **Tests:**

| p | Profit, no fee | Profit, with fee | DWL |
|---|---|---|---|
| 60 | 1,600 | 2,400 | 800 |
| 40 | 1,200 | 3,000 | 200 |
| 20 | 0 | 3,200 | 0 |
| 80 | 1,200 | 1,400 | 1,800 |

- **Level 2 (worked example, third-degree discrimination, US$):** two sliders, public price and student price.
  - Public: Q = 60,000 − 50P. Students: Q = 15,000 − 16.67P. MC 20; FC $10m.
  - Challenge: **"Maximise profit."** Success: P_public = 610 and P_student = 460 (±10) → $10.63m.
  - "Lock to one price" toggle: best = $572.50 → $10.35m.
  - Tests: (610, 460) → 10,631,667; (572.5, 572.5) → 10,350,417; (600, 600) → 10,300,000; (500, 500) → 10,000,000.

### 2.8 pt_relcost: "Does the sunk cost change the answer?" (Rank 7)

- **Aha:** a cost that is the same under every option cannot change the choice, however big it is. A cost with no cash (opportunity cost) can.
- **Model** (figure `relevant_cost`, GH₵ thousands):

| | Sunk | Fixed | Cash | Opportunity | Total |
|---|---|---|---|---|---|
| Option A | S | 25 | 40 | 20 | S + 85 |
| Option B | S | 25 | 55 | 0 | S + 80 |

  B is cheaper by 5 whatever S is.
- **Controls:** (1) slider "Already spent (sunk)", 0–200, step 10 (default 30). (2) Toggle "Count the rent you give up (opportunity cost)".
- **Live:** two stacked bars grow together; the bracket "difference = 5, choose B" stays fixed. With the opportunity toggle off, A reads 65 vs B 80 and the verdict flips to "A (wrong)" with a red marker.
- **Challenge:** **"Find a sunk cost big enough to make A the better choice."** The answer is a button: **"It can't be done"**. Success: tapping it (after moving the slider at least once). Explanation: "Both bars carry it."
- **Tests:** S 30 → A 115, B 110, choose B. S 200 → 285 vs 280, B. Opportunity off, S 30 → A 95, B 110: verdict "A" (flagged wrong).
- **Level 2 (worked example):** slider "Rate on the 90% loan", 9.0–10.5%, step 0.1. Incremental rate = (r × 90,000 − 7,200)/10,000.
  - Tests: 9.0% → 9.0%; 9.5% → 13.5%; 10.0% → 18.0%.
  - Challenge: **"At what headline rate does the extra US$10,000 cost 15%?"** Success: 9.67% (allow 9.6–9.7).

### 2.9 pt_uncert: "When is a test worth buying?" (Rank 8)

- **Aha:** information has value only if it can *change your decision*. A test is worthless when you would drill (or walk away) whatever it says.
- **Model** (worked example and figure `ev_tree`; US$ thousands):
  - Payoffs: drill & oil = +600, drill & dry = −200, no drill = 0.
  - Test reliability (from the notes' table): P(good | oil) = 0.75, P(good | dry) = 1/3.
  - Prior π (slider).
  - P(G) = 0.75π + (1 − π)/3. P(oil | G) = 0.75π/P(G). P(oil | B) = 0.25π/(1 − P(G)).
  - EV without test = max(0, 800π − 200).
  - EV with test = P(G)·max(0, 800·P(oil|G) − 200) + P(B)·max(0, 800·P(oil|B) − 200).
  - EVI = EV with test − EV without test.
- **Controls:** (1) slider "Chance of oil", 0–100%, step 5 (default 40). (2) Button "Drill once and see" plays a random outcome. It teaches "good decision ≠ good outcome": a dry hole at π = 40% is still the right call.
- **Live:** a compact tree where the slashed (rejected) branches update; readouts EV without, EV with, **Value of test** (big). A small EVI-vs-π sparkline marks the current π.
- **Challenge:** **"Find a chance of oil where this accurate test is worth nothing."** Success: EVI = 0 with π ≤ 10% or π ≥ 50%. The step-5 grid has no 0–10% values with EVI > 0. Message: "The test can't change your decision there."
- **Tests:**

| π | EV without | EV with | EVI | P(oil\|G) | P(oil\|B) |
|---|---|---|---|---|---|
| 40% | 120 | 140 | **20** (worked example) | 0.60 | 0.20 |
| 25% | 0 | 62.5 | 62.5 | 0.43 | 0.11 |
| 50% | 200 | 200 | 0 | 0.69 | 0.27 |
| 70% | 360 | 360 | 0 | | |
| 10% | 0 | 0 | 0 | | |

  EVI > 0 exactly for 12.9% < π < 47.1%.

### 2.10 pt_bargain: "Optimists go to court" (Rank 9)

- **Aha:** a case settles when the defendant expects to lose more than the plaintiff expects to win. Legal costs *widen* that zone; over-optimism *shrinks* it.
- **Model** (worked example and figure `bargain_zone`; US$ thousands):
  - Claim 1,000. Plaintiff's (Government's) legal cost 400. Defendant's (contractor's) cost 300.
  - p = the plaintiff's belief that it wins; q = the defendant's belief that the plaintiff wins.
  - Plaintiff's floor = 1,000p − 400. Defendant's ceiling = 1,000q + 300. Zone = 700 + 1,000(q − p).
  - Settle if zone ≥ 0.
- **Controls:** (1) slider "Government's belief it wins" p, 0–100%, step 5 (default 60). (2) Slider "Contractor's belief the Government wins" q, 0–100%, step 5 (default 60). (3) Toggle "Legal bills ×2" (costs 800/600; zone = 1,400 + 1,000(q − p)).
- **Live:** a number line from −500 to 1,500. Two markers (floor, ceiling) and the shaded zone, green, or a red gap labelled "no deal: trial".
- **Challenge:** **"Make both sides optimistic enough that the case goes to trial."** Success: zone < 0, i.e. p − q > 0.70. Follow-up: "Now double the legal bills. Does it still go to trial?"
- **Tests:**

| p | q | Floor | Ceiling | Zone | Result |
|---|---|---|---|---|---|
| 0.6 | 0.6 | 200 | 900 | 700 | settle (worked example) |
| 0.9 | 0.3 | 500 | 600 | 100 | settle |
| 0.95 | 0.2 | 550 | 500 | −50 | trial |
| 0.95 | 0.2, ×2 | 150 | 800 | 650 | settle |

- **Warm-up strip above it (machine example):** price slider $80k–120k. Buyer gain = 120 − P, seller gain = P − 80, total 40 constant.

### 2.11 pt_prod: "Hire one more?" (Rank 10)

- **Aha:** after a point, each extra worker adds less output. Keep hiring while the worker brings in more than the wage. MRP = wage happens twice; only the second crossing, on the falling MP, is the answer.
- **Model** (figure `production_mp`; illustrative GH₵):
  - TP = 6L² − 0.2L³. MP = 12L − 0.6L². AP = 6L − 0.2L².
  - Output price GH₵5. Wage GH₵192/day. MRP = 5·MP.
  - Profit from labour = 5·TP − 192L.
  - MRP = wage at L = 4 (MP rising) and **L = 16** (MP falling).
- **Controls:** slider "Workers", 0–20, step 1, or drag the dot along TP.
- **Live:**
  - Top panel: TP with a dot.
  - Bottom panel: MRP curve and a wage line at 192, with a dot on MRP.
  - Readouts: output, MRP of the last worker, wage, profit.
  - Hint switches between "Add a worker: brings in more than the wage", "Stop: this worker costs more than she brings in" and, at L ≤ 10, "MP is still rising: keep going".
- **Challenge:** **"Find the team size with the highest profit."** Success: L = 16. If the student stops at L = 4, show "MRP = wage here too, but each next worker adds *more*. Keep going."
- **Tests:**

| L | TP | MP | MRP | Profit |
|---|---|---|---|---|
| 4 | 83.2 | 38.4 | 192 | −352 |
| 10 | 400 | 60 | 300 | 80 |
| 15 | 675 | 45 | 225 | 495 |
| 16 | 716.8 | 38.4 | 192 | **512** |
| 17 | 751.4 | 30.6 | 153 | 493 |

- **Level 2 (worked example; equal-marginal rule):** slider "Crude to gasoline", 0–20 (the rest goes to fibre).
  - Marginal profits: gasoline 36 − 1.5M_G, fibre 60 − 3M_F. Total π = 36M_G − 0.75M_G² + 60M_F − 1.5M_F².
  - Success: 8/12 → 744, marginal profit 24 = 24.
  - Tests: 10/10 → 735 (shows "equal split isn't optimal"); 0/20 → 600; 20/0 → 420.

---

## 3. Beyond explorers: interaction patterns for understanding

| # | Pattern | What it does | Where it fits | Build cost |
|---|---|---|---|---|
| P1 | **Challenge-with-success** wrapper (reusable) | One-line task, live success check, ✓ and why, "Show me" after 3 misses or 45 s. Turns every explorer from "move a dot" into a puzzle. | All 14 explorers; retrofit the 4 existing ones first. | ~0.5 day for the component; ~30 min per explorer to wire |
| P2 | **Predict, then reveal** | Before an animation or result, the student commits to an option (tap). Only then does the curve move or the number show, with "You said X". Commitment makes the surprise stick. | Demand shift vs movement (replaces the current buttons); elasticity "will revenue rise?"; tutoring "is the total higher?"; lemons "which sellers stay?"; EVI "is the test worth anything at 70%?" | ~0.5 day for a generic `predict` block in the content schema (`{k:"predict",q,o,c,reveal:"econx-state"}`) |
| P3 | **Drag-to-sort (two bins)** | 6–8 chips are dragged (or tapped, then bin tapped, for one-hand use) into two bins, then checked together. Targets misconceptions directly. | Relevant vs ignore (sunk, fixed common, opportunity); adverse selection vs moral hazard (NHIS, WorldCom, maternity plan, warranty); shift vs movement; signalling vs screening; elastic vs inelastic goods. | ~1 day for the component (tap-to-place fallback is essential on phones); content is cheap |
| P4 | **Build the graph** | The student places key points on an empty chart: tap where MR meets MC, then tap up to demand for the price, then shade the DWL by tapping its 3 corners. Each step checks with a ±tolerance snap. | Monopoly DWL (Problem Set 1); third-degree discrimination; Cournot (tap the reaction-line crossing); break-even chart. | ~1.5 days (tap-to-place with snapping and step state) |
| P5 | **Problem Set rehearsal calculators ("step it with me")** | The student enters their own numbers (shares, demand intercept/slope, MC). The page works the method step by step, with each step hidden until tapped, and states the band or verdict. It teaches the method, not just the answer. | HHI and DWL for Problem Set 1 (Sunday); private vs social optimum with an external cost per unit. | ~0.5 day each (reuse the HHI/DWL explorer maths) |

**Recommended sequence for this weekend (by Saturday night if possible):**
1. Fix B1–B5.
2. pt_monop explorer.
3. HHI add-on.
4. pt_comp (tabs A and C).
5. P1 wrapper.
6. pt_games.
7. pt_info.

The rest can follow during Weekend 2's gap.
