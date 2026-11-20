# Managerial Economics: Pre-Course Recap (Economist's content source)

Prerequisite recap for a new standalone course card. The course title is not known yet; its prerequisite is Managerial Economics.

**Sources.** The only authority is the course material:
- **W1**: `LECTURE_NOTES_WKD_1` (Optimal decision making, Demand, Production). Only the extracted text exists; there is no PDF. Citations give the slide title, and every number below was recomputed.
- **W2**: `LECTURE_NOTES_WKD_2_update.pdf` (Cost, Market structures, Oligopoly). Citations give the PDF page, e.g. W2 p.53.
- **W3**: `LECTURE_NOTES_WKD_3updated.pdf` (Pricing, Game theory, Uncertainty, Information). Citations give the PDF page.
- **ECG**: guest session on Bargaining and Negotiation (ECG), 6 slides.
- **Cases**: Monsanto Roundup, the Petroleum Market 1970-2001, and Resolving China's Power Shortage. Case facts below are summarised in my own words.

**Conventions for the build**
- A price elasticity is written `E` and is negative. Wherever a rule needs the size of the effect, use `|E|`.
- "(fixed)" means I corrected an obvious typo in the notes. Every correction is also listed in Section 4.
- "CONSTRUCTED" marks an example I built. It is not in the notes.
- Money units follow the notes: $ in most examples, GH¢ (Ghc) where the notes use it.

**Scope change, applied.** The coordinator relayed that the recap is now a standalone course card, not part of Cross-Border. Each unit therefore ends with a **"Where you'll use this"** line tied to real managerial decisions. None of them refers to Cross-Border weeks.

---

## 0. Topic map at a glance

| Unit (follows the weekends) | # | Topic |
|---|---|---|
| **A. Thinking at the margin: demand and production** (W1) | 1 | Marginal analysis and optimal decisions (incl. constrained optimisation) |
| | 2 | Demand: drivers, shifts and estimation |
| | 3 | Elasticities and revenue |
| | 4 | Production and input choice |
| **B. Costs and market structure** (W2) | 5 | Relevant cost: opportunity, sunk and incremental |
| | 6 | Cost curves, scale, scope, break-even and shutdown |
| | 7 | Perfect competition, efficiency and surplus |
| | 8 | Monopoly and natural monopoly regulation |
| | 9 | Oligopoly: Cournot, Stackelberg, Bertrand, cartels and concentration |
| **C. Pricing and strategy** (W3, part 1, plus the ECG session) | 10 | Pricing with market power: mark-ups, discrimination, two-part and joint products |
| | 11 | Game theory and competitive strategy |
| | 12 | Bargaining, negotiation and settlement |
| **D. Uncertainty and information** (W3, part 2) | 13 | Decisions under uncertainty and the value of information |
| | 14 | Asymmetric information: adverse selection, signalling and moral hazard |

---

# UNIT A: Thinking at the margin: demand and production (Weekend 1)

**Where you'll use this:**
- Deciding how many units to produce or which contracts to accept, by asking whether the next unit adds more revenue than cost.
- Allocating a fixed budget, capacity or input across plants, markets or products until the marginal return is equal everywhere.
- Using demand estimates and elasticities to forecast sales after a price change, an income shock or a new tax.
- Judging whether hiring one more worker (MRP vs wage) or buying more machines pays off.

---

## Topic 1: Marginal analysis and optimal decisions

**Core idea.** A manager should keep increasing an activity as long as the extra (marginal) benefit is greater than the extra cost, and should stop where they are equal. For a profit-maximising firm, this means producing where marginal revenue equals marginal cost (MR = MC), which is where marginal profit is zero.

**Key definitions**
- **Profit**: π = TR − TC = P·Q − C(Q).
- **Marginal profit**: Mπ = dπ/dQ. It is positive while expanding output adds profit.
- **Marginal revenue (MR)**: dTR/dQ. **Marginal cost (MC)**: dTC/dQ.
- **Unconstrained vs constrained optimisation.** Constrained means the choice must satisfy a binding limit, such as a supply contract (q ≤ Q) or a fixed total to share between markets, plants or products. Such problems are solved with a **Lagrangian**. The multiplier **λ is the shadow price**: the extra profit from relaxing the constraint by one unit.
- **Incremental analysis**: the change in revenue, cost or profit from a discrete managerial decision, such as a new product line or a 25% price change. It generalises marginal analysis.
- **Steps of managerial decision-making** (W1, "Steps to Managerial Decision making"):
  1. Define the problem.
  2. Determine the objective.
  3. Explore alternatives.
  4. Predict the consequences.
  5. Make a choice.
  6. Run a sensitivity analysis.

**Formulas (as in W1, typos fixed)**
- π = TR − TC.
- Mπ = dπ/dQ = MR − MC. At the optimum Mπ = 0, so **MR = MC**.
- Linear case: inverse demand P = a − bq, cost C = F + cq.
  - First-order condition (FOC): dπ/dq = a − 2bq − c = 0, so **q\* = (a − c)/(2b)**.
  - Second-order condition (SOC): d²π/dq² = −2b < 0, so this is a maximum.
  - With linear demand, MR = a − 2bq: same intercept as demand, twice the slope.
- Contract constraint (q ≤ Q): L = aq − bq² − F − cq + λ(Q − q).
  - ∂L/∂q = a − 2bq − c − λ = 0 and ∂L/∂λ = Q − q = 0.
  - So **q\* = Q** and **λ\* = a − 2bQ − c**.
- Two markets sharing a fixed total Q: L = π_A + π_B + λ(Q − q_A − q_B).
  - The conditions give **a_A − 2b_A q_A − c = a_B − 2b_B q_B − c**: equal marginal profit in both markets.
  - **q_A\* = (a_A − a_B + 2b_B Q) / [2(b_A + b_B)]** and **q_B\* = (a_B − a_A + 2b_A Q) / [2(b_A + b_B)]**.
- Multiple plants sharing a fixed input: set the marginal products equal, **MP_A = MP_B**.
- Multiple products sharing a fixed input: set the marginal profits equal.
- Franchise conflict: the parent company (paid on revenue) wants Q where **MR = 0**. The franchisee (keeps the profit) wants Q where **MR = MC**.
- Pure selling problem (MC ≈ 0, e.g. airline seats or old inventory): sell until MR = 0.

**Canonical diagram: "Profit hill and MR = MC"** (two stacked panels, shared horizontal axis Q from 0 to 8.5)
- **Top panel.**
  - Vertical axis: $ (total).
  - TR = 170Q − 20Q² is a hump: it starts at 0, peaks at Q = 4.25 (TR = 361.25) and returns to 0 at Q = 8.5.
  - TC = 100 + 38Q is a straight line with intercept 100.
  - π = TR − TC is a hump with maximum π = 117.8 at Q = 3.3. Mark this with a dot.
  - Draw a vertical dashed line at Q = 3.3 through both panels.
- **Bottom panel.**
  - Vertical axis: $ per unit.
  - Demand P = 170 − 20Q is a straight line from (0, 170) to (8.5, 0).
  - MR = 170 − 40Q is a straight line from (0, 170) to (4.25, 0), twice as steep as demand.
  - MC = 38 is horizontal.
  - MR crosses MC at Q = 3.3. Read the price up on the demand curve: P = 104.
- **Reader should see:** the top of the profit hill sits exactly above the MR = MC crossing, not at the top of the TR curve (Q = 4.25).

**Worked example (W1, "Revenue", "Costs", "Computing Profit", "Marginal Analysis"; microchips)**
1. Demand is Q = 8.5 − 0.05P, so the inverse demand is P = 170 − 20Q.
2. Cost is C = 100 + 38Q.
3. π = 170Q − 20Q² − 100 − 38Q = 132Q − 20Q² − 100.
4. Mπ = 132 − 40Q = 0 gives **Q\* = 3.3**.
5. Then P\* = 170 − 66 = **104** and π\* = 435.6 − 217.8 − 100 = **117.8**. The notes stop at Q\*; I computed P\* and π\*.
6. Check: MR = 170 − 40(3.3) = 38 = MC. ✓

Second example (W1 constrained): a = 20, b = 0.5, c = 5, contract cap Q = 10.
- The unconstrained optimum would be (20 − 5)/1 = 15, so the cap binds and q\* = 10.
- **λ\* = 20 − 2(0.5)(10) − 5 = $5**. Each extra unit the contract allowed would add $5 of profit.

Third example (W1, "Multiple Plant Decisions"): Q_A = 24M_A − 0.5M_A², Q_B = 20M_B − M_B², and M_A + M_B = 10.
- Set MP_A = MP_B: 24 − M_A = 20 − 2M_B.
- Solving gives **M_A = 8, M_B = 2**.

**Common misconceptions**
- "Maximise revenue" is the same as "maximise profit". It is not: revenue peaks where MR = 0, which is beyond the profit-maximising output whenever MC > 0. This is the franchise conflict.
- "Fixed cost changes the optimal output." It does not. F drops out of dπ/dq; it only affects whether total profit is positive.
- "Equal split across markets or plants is fair, so it must be optimal." It is not. The optimum equalises the *marginal* return, not the quantities.

**Case link**
- **Monsanto**: cutting Roundup's price about 9% a year raised volume about 22% a year. Price had been above the MR = MC level, so moving down the demand curve raised profit.

**Retrieval checks**
1. A firm faces P = 100 − 2Q and MC = 20 (constant). The profit-maximising output is:
   - (a) 40
   - **(b) 20 ✓**
   - (c) 25
   - (d) 10
   - Why: MR = 100 − 4Q; setting it equal to 20 gives Q = 20. The formula q\* = (a − c)/2b gives the same answer.
2. In the contract-constrained problem, λ\* = $5 means:
   - (a) the firm loses $5 per unit sold
   - **(b) relaxing the contract cap by one unit would raise profit by about $5 ✓**
   - (c) the price is $5
   - (d) the constraint does not bind
   - Why: the Lagrange multiplier is the shadow price of the binding constraint.
3. A franchisor paid a share of sales pushes for longer opening hours and discounts that the franchisee resists, because the franchisor effectively targets:
   - **(a) MR = 0 ✓**
   - (b) MR = MC
   - (c) P = AC
   - (d) P = MC
   - Why: a revenue-maximiser sets MR = 0, while the franchisee who bears the costs sets MR = MC (W1, fast-food franchising).

---

## Topic 2: Demand: drivers, shifts and estimation

**Core idea.** Demand links the quantity buyers want to the price and to other drivers such as income, related goods' prices, advertising, population, season and shocks. A change in own price moves the firm *along* the demand curve; a change in any other driver *shifts* the whole curve. Firms estimate these links with regression so they can forecast and simulate policy changes.

**Key definitions**
- **Law of demand**: all else equal, a higher price means a lower quantity demanded.
- **Desired vs effective demand.** Desired demand is willingness only. Effective demand is willingness backed by purchasing power, and it is the one managers should plan on.
- **Individual vs market demand.** Market demand is the *horizontal* sum of individual demands: add the quantities at each price.
- **Shift factors**: income, advertising, population, prices of related goods, exogenous shocks (e.g. COVID-19), climate and seasonality, regulation.
- **Data sources**:
  - consumer surveys (response and sample bias);
  - controlled consumer experiments;
  - controlled market studies;
  - uncontrolled market data.
- **Identification (simultaneity) problem.** Observed price–quantity points come from both demand and supply moving. To trace out demand you need *supply* shifts with demand stable, or an instrumental variable for price.
- **OLS diagnostics and problems**: R², SSE, standard errors, F-statistic; multicollinearity (VIF < 10 is acceptable), heteroscedasticity (use robust SE), autocorrelation, omitted variables.

**Formulas (W1)**
- Linear demand: Q = a − bP. Inverse demand: P = a − bQ. In the notes the letters are reused; in each equation they are just "an intercept and a slope".
- Expanded demand (time series): Q_dt = δ + β·Pown_t + φ·Inc_t + κ·AExp_t + ξ·Pr_t + θ·seas_t + ε_t.
  - Panel version: add firm effects σ_i and time effects σ_t.
- Log-log form: ln Q = δ + β ln P + φ ln Inc + κ ln AExp + ξ ln Pr + … The **coefficients are elasticities**.
- Forecast from elasticities (fixed): %ΔQ ≈ PED·%ΔP + YED·%ΔInc + AED·%ΔAExp + CPED·%ΔPr. The notes repeat the YED term where the CPED term should be; see Section 4.
- Tax pass-through simulation: P_new = P + φ·t, Cost/unit = c + t, Profit = P_new·Q(P_new) − [(c + t)·Q + F].

**Canonical diagram: "Movement vs shift"** (one panel)
- Axes: Price (vertical), Quantity (horizontal).
- **Movement.** Draw demand D₀ as a downward-sloping straight line. Mark point A at (Q₀, P₀) and point B lower-right at (Q₁, P₁) on D₀. Join them with an arrow along the curve labelled "own-price change = movement along".
- **Shift.** Draw D₂ parallel to D₀ and to its right, and D₁ parallel and to its left.
  - At the fixed price P₀, draw a horizontal dashed line. Mark Q₁′ on D₁, Q₀ on D₀ and Q₂ on D₂.
  - Add arrows D₀ → D₂ labelled "income ↑ / advertising ↑ / population ↑ (normal good)" and D₀ → D₁ labelled "e.g. COVID-19 shock, income ↓".
- **Reader should see:** price changes slide along one curve; everything else moves the curve, changing the quantity bought at the *same* price.

Optional second diagram: market demand as the horizontal sum. Panel 1 shows D_A and panel 2 shows D_B. Panel 3 shows the market demand D, where at a given price P the quantity is q_A + q_B.

**Worked example (W1, "Textile Demand Elasticities", log-log OLS, 800 observations, robust SE)**

Estimated coefficients:
- ln price: **−1.131\*\*\***
- ln income: **0.832\*\*\***
- ln advertising expenditure: **0.130** (not significant)
- ln price of the related good: **0.353\*\*\***

Applying them:
- A 10% price rise lowers quantity by about 11.3%, so demand is elastic.
- 5% annual income growth raises demand by about 0.832 × 5 ≈ 4.2% a year, holding the other drivers fixed. This is the notes' 10-year forecast logic.
- The positive cross-price coefficient means the related good is a **substitute** (the slide itself says "βr>0 (substitute)").

**Common misconceptions**
- "A price fall shifts demand right." No: it is a movement along the curve. Only non-price drivers shift it.
- "Market demand = individual demands added vertically." No: add *quantities* at each price, i.e. horizontally.
- "Regressing quantity on price always gives the demand curve." Not when supply also shifts. The estimated slope can be a mix of supply and demand (identification problem, W1 "OLS regression Problems").

**Case link**
- **Petroleum market**: the 1973 embargo, the 1979–80 Iran crises and the 1990 Kuwait invasion each cut supply.
  - Price moved along a fairly stable short-run demand curve: $5.12 → $11.65 in 1973; then $24 by end-1979 and $32 by end-1980.
  - The Asian crisis of 1998 and the slowdown after 9/11 shifted *demand* left.

**Retrieval checks**
1. Consumers' incomes rise and they buy more of a normal good at every price. On a demand diagram this is:
   - (a) a movement down the curve
   - **(b) a rightward shift of the curve ✓**
   - (c) a leftward shift
   - (d) no change
   - Why: income is a shift factor; only own price moves you along the curve.
2. In ln Q = δ + β ln P + …, an estimate β = −1.131 means:
   - **(a) a 1% price rise lowers quantity by about 1.13% ✓**
   - (b) a $1 price rise lowers quantity by 1.131 units
   - (c) demand is inelastic
   - (d) the good is inferior
   - Why: in a log-log model the coefficients are elasticities.
3. To identify (estimate) a demand curve from market data, you ideally need:
   - (a) demand shifting while supply is fixed
   - **(b) supply shifting while demand is stable ✓**
   - (c) no price variation
   - (d) only consumer surveys
   - Why: supply shifts trace out points along a stable demand curve (W1, identification).

---

## Topic 3: Elasticities and revenue

**Core idea.** Elasticity measures the *percentage* response of quantity to a percentage change in price, income or a related good's price. It tells a manager whether a price cut will raise or lower revenue. Revenue rises when price falls in the **elastic** region (|E| > 1) and falls in the **inelastic** region (|E| < 1), because MR = P(1 + 1/E).

**Key definitions**
- **Own-price elasticity (PED)**: %ΔQ / %ΔP. It is negative.
  - |E| > 1: elastic
  - |E| < 1: inelastic
  - |E| = 1: unit elastic
  - E = 0: perfectly inelastic
  - |E| = ∞: perfectly elastic
- **Point elasticity** = (dQ/dP)·(P/Q). **Arc elasticity** uses midpoints, which makes it symmetric for price rises and falls.
- **Linear demand.** The slope is constant but the elasticity is not. Demand is elastic on the upper part, unit elastic at the midpoint and inelastic on the lower part.
- **What drives |E|**:
  - necessity vs luxury;
  - availability of substitutes;
  - budget share;
  - time to adjust (more elastic in the long run);
  - habit formation (less elastic).
- **Income elasticity (YED)** = %ΔQ/%ΔY. YED > 0 means a normal good, with 0 < YED < 1 a necessity and YED > 1 a luxury. YED < 0 means an inferior good.
- **Cross-price elasticity (CPED)** = %ΔQ_x/%ΔP_y. **CPED > 0: substitutes. CPED < 0: complements.** The notes print this reversed; see Section 4.

**Formulas (W1)**
- Point: PED = (dQ/dP)·(P₁/Q₁).
- Arc (fixed): APED = (ΔQ/ΔP)·[(P₁ + P₂)/2] / [(Q₁ + Q₂)/2].
- YED = (dQ/dY)·(Y/Q). CPED = (dQ/dP_r)·(P_r/Q).
- **MR = P(1 + 1/PED)**.
  - PED = −2 gives MR = P/2 > 0.
  - PED = −1 gives MR = 0, so revenue is at its maximum.
  - PED = −0.5 gives MR = −P < 0.
- Log-log regression: the coefficient on ln P is the PED.

**Canonical diagram: "Elasticity along a straight-line demand and the TR hump"** (two stacked panels, shared horizontal axis Q)
- **Top panel.**
  - Axes: P (vertical), Q (horizontal).
  - Demand is a straight line from (0, a) to (a/b, 0). Use P = 170 − 20Q: intercepts (0, 170) and (8.5, 0).
  - MR runs from (0, 170) to (4.25, 0) and continues below the axis.
  - Mark the demand midpoint (4.25, 85).
  - Shade the demand segment above the midpoint and label it "|E| > 1 elastic: MR > 0".
  - Label the midpoint "|E| = 1, MR = 0".
  - Label the segment below the midpoint "|E| < 1 inelastic: MR < 0".
- **Bottom panel.**
  - TR = 170Q − 20Q² is a hump peaking at Q = 4.25 directly under the midpoint.
  - Label the rising side "cut price → TR ↑" and the falling side "cut price → TR ↓".
- **Reader should see:** revenue peaks exactly where demand is unit elastic. A price cut helps revenue only on the elastic upper half.

**Worked example (built from W1 numbers)**
- Microchips at the optimum (Q = 3.3, P = 104): E = −0.05 × 104/3.3 = **−1.58**, which is elastic, as profit maximisation with MC > 0 requires.
- Revenue rule (W1, "Price elasticity and revenue maximization"): with PED = −2, MR = P(1 − 1/2) = 0.5P > 0, so cutting price raises revenue. With PED = −0.5, MR = P(1 − 2) = −P < 0, so raising price raises revenue.

**Common misconceptions**
- "A steeper curve means a less elastic curve everywhere." On a straight line the slope is constant but the elasticity changes at every point.
- "Elastic demand means you should always cut price." Only if MR at the lower price still exceeds MC. Revenue rising is not the same as profit rising.
- "A positive cross-price elasticity means complements." No: positive means substitutes (more Pepsi bought when Coke's price rises).

**Case links**
- **China power**: Indian electricity demand elasticities are cited as −0.65 for residential and −0.45 for industrial users. Both are inelastic, so a tariff rise cuts residential use proportionally more than industrial use but raises revenue from both.
- **Monsanto**: a 9% a year price cut came with a 22% a year volume rise, so revenue rose about 11% a year.
  - The naive ratio of about −2.4 overstates the true elasticity, because demand was also shifting out (conservation tillage, Roundup Ready crops).
  - Roundup and Roundup Ready seed are **complements** (CPED < 0).

**Retrieval checks**
1. At a point on demand where PED = −0.5, a small price *increase* will:
   - (a) lower total revenue
   - **(b) raise total revenue ✓**
   - (c) leave TR unchanged
   - (d) make MR positive
   - Why: demand is inelastic, so MR = P(1 + 1/E) = −P < 0. Selling fewer units at a higher price raises TR.
2. Two goods have CPED = +0.35. They are:
   - **(a) substitutes ✓**
   - (b) complements
   - (c) unrelated
   - (d) inferior goods
   - Why: a rise in the other good's price raises demand for this one. The notes' textile result βr = 0.353 is labelled a substitute.
3. On the straight-line demand P = 170 − 20Q, revenue is maximised at:
   - (a) Q = 8.5
   - **(b) Q = 4.25 ✓**
   - (c) Q = 3.3
   - (d) Q = 0
   - Why: MR = 170 − 40Q = 0 at Q = 4.25, the unit-elastic midpoint.

---

## Topic 4: Production and input choice

**Core idea.** In the short run some inputs (usually capital) are fixed, so adding more of a variable input (labour) eventually yields diminishing marginal returns. The firm should hire until the extra revenue from a worker (MRP) equals the wage. In the long run all inputs vary: choose the least-cost mix where output per cedi is equal across inputs (MP_L/w = MP_K/r), and choose the scale based on returns to scale.

**Key definitions**
- **Production function**: Q = A·f(L, K). A is total factor productivity (TFP), shifted by technology, AI, regulation, pandemics and similar forces.
- **Short run** means at least one input is fixed. **Long run** means all inputs are variable.
- **Law of diminishing marginal returns**: as variable input is added to a fixed input, MP first rises, reaches a maximum, then falls.
- **MRP_L** = MR × MP_L: the revenue from the last worker.
- **Returns to scale**: double all inputs and see what happens to output.
  - Constant (CRS): output exactly doubles.
  - Increasing (IRS): output more than doubles.
  - Decreasing (DRS): output less than doubles.
- **Isoquant**: the input combinations giving the same output. **MRTS** = MP_L/MP_K, the slope of the isoquant in absolute value.
- **Isocost**: combinations with the same cost. Its slope is w/r.
- **Production function types**:
  - Linear: perfect substitutes.
  - Leontief (fixed proportions, e.g. a driver and a car): no substitution.
  - Quadratic / cubic.
  - Cobb-Douglas.

**Formulas (W1)**
- MRP_L = MR·MP_L. Hire until **MRP_L = MC_L = w**. The notes first say "until MRP = 0", which is wrong; see Section 4.
- Least cost: minimise TC = wL + rK + F subject to Q₀ = A·F(K, L). The Lagrangian conditions give **w/r = MP_L/MP_K**, equivalently **MP_L/w = MP_K/r**.
- Linear: Q = aK + bL + c. Leontief: Q = min(K/a, L/b).
- Cobb-Douglas: Q = cL^α K^β.
  - MP_L = αcL^(α−1)K^β.
  - α + β = 1 is CRS, > 1 is IRS, < 1 is DRS.
  - Log form: ln Q = ln c + α ln L + β ln K.
- Multi-plant (fixed input split): MP_A = MP_B. Multi-product: equal marginal profit.

**Canonical diagram: "Least-cost input mix"** (one panel)
- Axes: Capital K (vertical), Labour L (horizontal).
- Draw three convex isoquants Q₁ < Q₂ < Q₃, bowed toward the origin and not crossing.
- Draw an isocost line with vertical intercept C/r and horizontal intercept C/w; its slope is −w/r.
- The isocost is tangent to Q₂ at point E (L\*, K\*). Label it "MRTS = MP_L/MP_K = w/r".
- Optional "wage rises" variant: pivot the isocost so it is steeper. The new tangency on the same Q₂ lies up and to the left, showing the firm substitutes capital for labour.
- **Reader should see:** the cheapest way to make Q₂ is where the isoquant just touches the lowest attainable isocost.

Optional short-run diagram:
- Top panel: total product TP rises steeply, then gently, peaks and falls.
- Bottom panel: MP rises, peaks and then falls, crossing AP at AP's maximum.

**Worked examples**
- **Regression (W1, Cobb-Douglas fixed-effects regression, 200 firms, 1,000 observations).**
  - ln L coefficient = **0.556** and ln K coefficient = **0.295**. Their sum is **0.85 < 1**, so returns to scale are decreasing. (The sum is my computation; the notes only say labour contributes more.)
  - The regulation dummy R = −0.067, significant only at 10%: tighter regulation lowers output.
- **Multi-product allocation (W1, "Multiple Products Decision").** Twenty units of crude are split between gasoline (G = 72M_G − 1.5M_G², price $0.5) and fibre (F = 80M_F − 2M_F², price $0.75).
  - π = 36M_G − 0.75M_G² + 60M_F − 1.5M_F².
  - Setting marginal profits equal gives 36 − 1.5M_G = 60 − 3M_F with M_G + M_F = 20.
  - So **M_G = 8, M_F = 12**. Check: both marginal profits = 24 = λ.

**Common misconceptions**
- "Diminishing returns means output falls." No: *marginal* product falls first, while total output still rises for a while.
- "Diminishing marginal returns and decreasing returns to scale are the same thing." The first is short run (one input varied); the second is long run (all inputs scaled).
- "Hire until the marginal worker adds zero revenue." No: hire until MRP equals the wage.

**Case link**
- **China power**: the plants' fuel (coal) is the variable input. When mines divert coal to the spot market, plants cannot run, so output falls even though the capital (generating capacity) is there.

**Retrieval checks**
1. A profit-maximising firm should hire labour up to the point where:
   - (a) MP_L is at its maximum
   - (b) MRP_L = 0
   - **(c) MRP_L = w ✓**
   - (d) AP_L = MP_L
   - Why: beyond that point the extra worker costs more (w) than they bring in (MR × MP_L).
2. A Cobb-Douglas estimate gives α = 0.556 and β = 0.295. The technology has:
   - (a) increasing returns to scale
   - (b) constant returns to scale
   - **(c) decreasing returns to scale ✓**
   - (d) no diminishing returns
   - Why: α + β = 0.85 < 1, so doubling inputs raises output by less than double.
3. If MP_L/w > MP_K/r, the firm can cut cost for the same output by:
   - **(a) using more labour and less capital ✓**
   - (b) using more capital and less labour
   - (c) cutting both
   - (d) changing nothing
   - Why: the last cedi spent on labour yields more output, so shift spending toward labour until the ratios are equal.

---

# UNIT B: Costs and market structure (Weekend 2)

**Where you'll use this:**
- Accept-or-reject decisions that should ignore sunk costs and include opportunity costs: special orders, keeping a loss-making line open, setting a minimum sales target.
- Deciding plant size, number of plants and break-even volume, and reading operating-leverage risk.
- Recognising which market structure you face (competitive, monopoly, oligopoly) and therefore how much pricing power you really have.
- Working with or for regulated utilities such as ECG, where tariffs follow average-cost or rate-of-return rules.

---

## Topic 5: Relevant cost: opportunity, sunk and incremental

**Core idea.** Only costs that *differ between the options* belong in a decision. Opportunity cost (the value of the next best alternative given up) is relevant even though no cash changes hands, while sunk cost (already spent and unrecoverable) is irrelevant.

**Key definitions**
- **Relevant cost**: a cost that varies across the alternatives being compared.
- **Opportunity (implicit) cost**: the benefit forgone from the next best alternative. Example (W2 p.4): the true cost of an MBA = fees + the salary forgone.
- **Sunk cost**: already incurred and not recoverable. Ignore it.
- **Fixed cost**: does not change across the alternatives, so it does not affect the choice between them (W2 p.6).
- **Accounting profit** = TR − explicit costs. **Economic profit** = TR − (explicit + implicit costs).
- **Incremental cost/profit**: the change caused by a decision (W1).

**Formulas**
- Accounting profit π_A = TR − ETC.
- Economic profit π_E = TR − (ETC + ITC). The notes label both π_A; see Section 4.
- Incremental financing cost = (rate₂ × loan₂) − (rate₁ × loan₁). Incremental rate = incremental cost ÷ incremental amount borrowed.

**Canonical diagram: "What goes in the decision"** (a bar or stack graphic, not axes)
- Two side-by-side stacked bars, **Option A** and **Option B**.
- Each bar has these segments:
  - "Explicit cash cost" in a solid colour;
  - "Opportunity cost" hatched;
  - "Sunk cost" in grey with a strike-through, identical in both bars;
  - "Fixed cost common to both" in grey, identical in both bars.
- A bracket spans only the segments that differ, labelled "Relevant (incremental) cost".
- **Reader should see:** the grey segments cancel out; the decision turns on the coloured differences.

**Worked example (W1, "Example: Incremental Analysis")**
- A buyer must finance a $100,000 purchase and has two loan offers.
  - Option 1 borrows 80% at 9%: annual interest = 0.09 × 80,000 = $7,200.
  - Option 2 borrows 90% at 9.5% (fixed; the notes print 0.95%): annual interest = 0.095 × 90,000 = $8,550.
- Incremental interest = **$1,350** on an incremental **$10,000** borrowed. The incremental rate is **13.5%**, not 9.5%.
- The real cost of the extra $10,000 is 13.5%. Compare that with the return on keeping the cash.

**Common misconceptions**
- "We've already spent GH¢2m on this, so we must finish it." That is sunk-cost reasoning; only future costs and benefits matter.
- "No cash out means no cost." Using your own warehouse or time has an opportunity cost.
- "Accounting profit > 0 means the business creates value." Not if economic profit (after implicit costs) is negative.

**Case link**
- **China power**: for a coal mine, the true (opportunity) cost of supplying a power plant at the contract price is the *spot* price it gives up.
  - Spot prices rose 25% against 10% for the contract price in 2003–04.
  - That gap is why mines broke their contracts and sold on the spot market.

**Retrieval checks**
1. A firm spent $500k on market research for a product. Deciding today whether to launch, the $500k should be:
   - (a) added to launch costs
   - **(b) ignored, because it is sunk ✓**
   - (c) spread over unit costs
   - (d) treated as opportunity cost
   - Why: it cannot be recovered whatever the firm decides, so it does not differ between the options.
2. Under the W1 financing example, the incremental cost of borrowing the extra $10,000 is:
   - (a) 9%
   - (b) 9.5%
   - **(c) 13.5% ✓**
   - (d) 1.35%
   - Why: $8,550 − $7,200 = $1,350 extra interest on $10,000.
3. Economic profit differs from accounting profit because it also subtracts:
   - **(a) implicit (opportunity) costs ✓**
   - (b) taxes
   - (c) sunk costs
   - (d) depreciation
   - Why: π_E = TR − (explicit + implicit costs) (W2 p.5).

---

## Topic 6: Cost curves, scale, scope, break-even and shutdown

**Core idea.** Short-run costs split into fixed and variable costs. Diminishing returns give the U-shaped average variable cost (AVC), average cost (AC) and marginal cost (MC) curves, with MC cutting AVC and AC at their minimums. In the long run every input varies: the long-run AC (LAC) shows economies and diseconomies of scale, its minimum is the minimum efficient scale (MES), and managers use these curves to decide plant size, multi-plant operation, shutdown and break-even volume.

**Key definitions**
- TC = TFC + TVC. AFC = TFC/Q falls continuously. AVC = TVC/Q. AC = TC/Q = AFC + AVC. MC = dTC/dQ = w/MP_L.
- **Economies of scale**: LAC falls as output rises. Diseconomies: LAC rises. Cost elasticity ε_c = LMC/LAC. ε_c < 1 means economies, > 1 diseconomies, = 1 constant.
- **MES**: the lowest output at which LAC reaches its minimum. Market demand ÷ MES ≈ the number of firms the market can support.
- Typical empirical shape: L-shaped LAC. Natural monopolies have continuously falling LAC.
- **Economies of scope**: making goods jointly is cheaper than making them separately.
- **Learning curve**: AC falls with cumulative experience, shown as a downward *shift* of LAC.
- **Shutdown rule**: in the short run, keep producing if P > AVC, i.e. the contribution covers part of the fixed cost.
- **Break-even**: TR = TC. **Degree of operating leverage (DOL)**: the % change in profit per 1% change in output.

**Formulas (W2)**
- TC = F + aQ + bQ²; AC = F/Q + a + bQ; MC = a + 2bQ (p.9).
- ε_c = (dTC/dQ)(Q/TC) = LMC/LAC (p.12).
- Minimum AC: set dAC/dQ = 0 (p.15).
- ES = [C(Q₁) + C(Q₂) − C(Q₁, Q₂)] / [C(Q₁) + C(Q₂)]. ES > 0 means economies of scope (p.16).
- Learning rate = (1 − AC₂/AC₁) × 100 (p.23).
- Short-run profit: π = (P − AVC)·Q − F. Shut down only if P < AVC (p.18).
- Multi-product: π = (R₁ − VC₁) + (R₂ − VC₂) − F. Keep each line whose contribution R_i − VC_i > 0 (p.19).
- Break-even: **Q_BE = TFC/(P − AVC)** (p.24).
- DOL = (dπ/π)/(dQ/Q) = **Q(P − AVC) / [Q(P − AVC) − TFC]** (p.25).

**Canonical diagram 1: "Short-run cost family"**
- Axes: $ per unit (vertical), Output (horizontal).
- AFC is a rectangular hyperbola falling toward the axis.
- AVC and AC are both U-shaped, with AC above AVC. The vertical gap between them equals AFC and shrinks as output rises.
- MC is a U or J shape that cuts AVC at AVC's minimum and then AC at AC's minimum. AVC's minimum lies to the left of AC's minimum.
- Add a horizontal line at P₁ below AC but above AVC. Label the gap between P₁ and AVC "contribution > 0: keep operating"; label the gap between AC and P₁ "loss per unit".
- **Reader should see:** MC passes through the bottom of both U's, and a loss-making firm can still rationally stay open while P > AVC.

**Canonical diagram 2: "LAC as the envelope of SACs"** (W2 p.11 right panel)
- Axes: $ per unit (vertical), Output (horizontal).
- Draw three small U-shaped short-run curves SAC₁, SAC₂, SAC₃ and a large U-shaped LAC that is tangent to each from below.
  - SAC₁ is tangent on LAC's falling side, *to the left of* SAC₁'s own minimum.
  - SAC₂ is tangent at LAC's minimum (Q_min = MES).
  - SAC₃ is tangent on LAC's rising side, to the right of SAC₃'s own minimum.
- LMC is a dashed curve passing through LAC's minimum.
- Label the falling part "economies of scale (ε_c < 1)" and the rising part "diseconomies (ε_c > 1)".
- Inset: an L-shaped LAC, and a continuously falling LAC labelled "natural monopoly".

**Canonical diagram 3: "Break-even chart"** (W2 p.24)
- Axes: Cost/Revenue (vertical), Output (horizontal).
- TFC is horizontal. TC is a straight line starting at TFC on the vertical axis. TR is a straight line from the origin and steeper than TC.
- They cross at Q_BE. Label the region left of Q_BE "loss" and the region right of it "profit".

**Worked examples**
- **Minimum AC (W2 p.15).** TC = 0.16Q² − 1.73Q + 15, so AC = 0.16Q − 1.73 + 15/Q.
  - dAC/dQ = 0.16 − 15/Q² = 0 gives **Q\* = 9.682**. The second derivative, 30/Q³, is positive, so this is a minimum.
  - **AC_min = 1.368**. With market demand of 100, about **10 firms** fit (100/9.682).
- **Plant size (W2 pp.20–22).** P = 940 − 0.02Q and TC per plant = 250,000 + 40Q + 0.01Q².
  - One plant: dπ/dQ = 900 − 0.06Q = 0 gives **Q = 15,000, P = $640, π = $6.5M**.
  - A plant's AC is minimised at Q = 5,000, where MC = AC = **$140**.
  - With several plants each run at 5,000, set MR = 140: 940 − 0.04Q = 140 gives **Q = 20,000**, so **4 plants**, P = $540.
  - π = 540 × 20,000 − 4(250,000 + 200,000 + 250,000) = **$8.0M** (vs $6.5M with one plant).
- **CONSTRUCTED break-even and DOL.** A Ghanaian bakery has TFC = GH¢12,000 a month, P = GH¢10 per loaf and AVC = GH¢6.
  - Q_BE = 12,000/4 = **3,000 loaves**.
  - At Q = 5,000: contribution = 20,000 and profit = 8,000, so DOL = 20,000/8,000 = **2.5**. A 10% rise in sales lifts profit by 25%.

**Common misconceptions**
- "If we're losing money we should close today." Not while P > AVC: shutting down would lose the whole fixed cost instead of part of it.
- "Producing at minimum efficient scale is always profit-maximising." Not if demand is too small (W2 p.17). MR = MC decides output.
- "LAC touches every short-run curve at that curve's minimum." Only at the bottom of the LAC. Elsewhere the tangency is off the SAC minimum (the notes' wording on p.10 is wrong; see Section 4).

**Case links**
- **Monsanto**: high market share kept volumes up, letting Roundup exploit economies of scale and move down the learning curve even after patents expired. Shares in 2001 were 82% in Brazil and 95% in Canada.
- **China power** (the case is assigned on W2 p.26): fixed generating capacity combined with fuel-constrained variable cost.

**Retrieval checks**
1. In the short run P = GH¢8, AVC = GH¢6 and AC = GH¢9. The firm should:
   - (a) shut down immediately
   - **(b) keep producing, because each unit contributes GH¢2 to fixed cost ✓**
   - (c) raise output until P = AC
   - (d) exit the industry today
   - Why: shut down only if P < AVC; here the loss is smaller by operating.
2. A cost elasticity ε_c = LMC/LAC = 0.8 indicates:
   - **(a) economies of scale ✓**
   - (b) diseconomies of scale
   - (c) constant returns
   - (d) economies of scope
   - Why: ε_c < 1 means cost rises proportionally less than output, so LAC is falling.
3. In the W2 plant-size example, moving from one plant (Q = 15,000) to four plants each producing 5,000 raises profit because:
   - (a) price rises
   - **(b) each plant runs at minimum AC, which lowers MC from $340 to $140 ✓**
   - (c) fixed cost falls to zero
   - (d) demand shifts out
   - Why: a single plant at 15,000 is on the rising part of its AC curve; splitting output exploits MES.

---

## Topic 7: Perfect competition, efficiency and surplus

**Core idea.** In perfect competition many firms sell a homogeneous product, so each firm is a **price taker** facing a *horizontal* (perfectly elastic) demand at the market price. It produces where P = MR = MC. Free entry pushes economic profit to zero in the long run, with P = min LAC, and the market outcome maximises total surplus (MB = MC), unless there is an externality or a trade barrier.

**Key definitions**
- **Conditions**: many buyers and sellers, a homogeneous product, perfect information, free entry and exit, normal profit in the long run.
- **Short-run supply** is the firm's MC curve above AVC.
- **Long run**: P = MR = LAC = MC. The long-run industry supply is horizontal at min LAC (constant-cost industry).
- **Consumer surplus (CS)**: willingness to pay minus price. **Producer surplus (PS)**: price minus the cost of supplying. **Efficiency**: maximum CS + PS, which occurs where MB = MC.
- **Equity**: competitive markets exclude those who are willing but cannot pay, which gives the government a role.
- **Externality**: with pollution E = σX and a tax τ per unit of emission, the firm sets P = C′(x) + τσ, internalising the external cost.
- **Trade barriers** (tariffs, quotas) move the market away from the efficient "one price" outcome and create deadweight loss.

**Formulas (W2)**
- Price taker: π = Px − C(x), so dπ/dx = P − C′(x) = 0 and **P = MC** (p.35).
- Polluting good: π = Px − C(x) − τσx, so **P = C′(x) + τσ** (p.45).
- CS = Σ(WTP − P)·Q. PS = Σ(P − MC)·Q. For linear curves, use triangle areas: ½ × base × height.

**Canonical diagram: "Market and firm, side by side"** (W2 p.34)
- **Left panel (market).** Axes: P (vertical), Q_industry (horizontal). Downward D and upward S cross at P\*. A dashed horizontal line runs from P\* across to the right panel.
- **Right panel (firm).** Same price scale; horizontal axis q (firm).
  - A horizontal line at P\* labelled "d = AR = MR = P". Note on the diagram: this is perfectly **elastic**.
  - A U-shaped AC and an upward-sloping MC that crosses P\* at q\*.
  - If P\* > AC at q\*, shade the profit rectangle (P\* − AC) × q\*.
- **Long-run inset.** Entry shifts S right in the left panel, so P falls to min LAC, and the firm's rectangle disappears.
- **Reader should see:** the market sets the price; the firm only chooses quantity; profit attracts entry until it is zero.

Second diagram, **surplus**:
- Linear D and S. Shade CS (the triangle above P\* under D) and PS (the triangle below P\* above S).
- Add a quantity Q₁ < Q\* with MB > MC there, and shade the lost triangle as "deadweight loss".

**Worked examples**
- **Tutoring (W2 p.40, numbers fixed).** Parents value tutoring at GH¢100/hour for 15 hours a week; the retired teacher's cost is GH¢60/hour. The notes say "per week" and "between 40 and 100"; see Section 4.
  - Any fee between 60 and 100 benefits both sides. At the agreed **GH¢75**:
  - CS = (100 − 75) × 15 = **GH¢375**.
  - PS = (75 − 60) × 15 = **GH¢225**.
  - Total = **GH¢600**, and it would be 600 at any agreed fee: the fee only *splits* the gains.
- **Day care (W2 p.41).** Demand runs from P = 12 down to zero at about 12 million hours. Supply of "store-bought" care is flat at GH¢2.50, so PS = 0.
  - At Q = 9.5 million hours, total benefit = ½(12 − 2.50)(9.5) = **45.125 ≈ 45.13** (units as in the notes).
- **Firm supply (W2 p.36 graph).** P = $8, AC = $6.50 at q = 6 (thousand units), so profit = 1.50 × 6,000 = $9,000.

**Common misconceptions**
- "A competitive firm faces perfectly *inelastic* demand." No: it is perfectly **elastic** (horizontal). W2 p.34 has this wrong; W3 p.4 has it right.
- "Zero economic profit means the owners earn nothing." They earn a *normal* return; economic profit already subtracts the opportunity cost.
- "The negotiated price determines how much value is created." The price only divides the surplus; the quantity traded determines its size.

**Case link**
- **Petroleum**: before 1970 prices were set by negotiation among the major oil companies. OPEC's rise moved the market *away* from competitive pricing toward cartel supply control. Without OPEC's power, supply shocks would have been absorbed by competitive entry.

**Retrieval checks**
1. A perfectly competitive firm's demand curve is:
   - (a) downward-sloping
   - **(b) horizontal at the market price ✓**
   - (c) vertical
   - (d) the market demand curve
   - Why: it is a price taker and can sell any amount at P, so P = AR = MR.
2. In long-run competitive equilibrium:
   - **(a) P = MC = min LAC and economic profit = 0 ✓**
   - (b) P > LAC
   - (c) P = AVC
   - (d) MR > MC
   - Why: free entry erodes profit until price equals the minimum long-run average cost.
3. In the tutoring example, if the fee were GH¢90 instead of GH¢75, total surplus would be:
   - (a) higher
   - (b) lower
   - **(c) unchanged at GH¢600 ✓**
   - (d) zero
   - Why: CS falls to 150 and PS rises to 450; only the split changes.

---

## Topic 8: Monopoly and natural monopoly regulation

**Core idea.** A monopolist faces the whole market demand curve. It chooses Q where MR = MC and charges the higher price that demand allows, so it produces less than a competitive market, charges more and creates a deadweight loss. When LAC falls over the whole market (a natural monopoly, such as power distribution), one firm is cheapest, and regulators push price toward average cost (fair rate of return) or marginal cost.

**Key definitions**
- **Monopoly**: a single seller, no close substitutes, barriers to entry, and economic profit that can persist.
- **Barriers to entry**:
  - economies of scale;
  - patents and other legal barriers;
  - control of a critical resource;
  - capital requirements;
  - product differentiation;
  - strategic barriers (pricing wars, branding);
  - cost advantages.
- **Deadweight loss**: the surplus lost because Q_M < Q_C. **Wealth transfer**: the part of consumer surplus that becomes monopoly profit.
- **Natural monopoly**: AC declines over the relevant output range.
- **Average-cost (rate-of-return) pricing**: the regulator lets price cover AC including a fair return on capital.
- **Marginal-cost pricing**: P = MC is efficient but makes a loss, which is covered by subsidy or by **two-part pricing** (a fixed fee plus P = MC).
- **Monopolistic competition**: differentiated products and free entry. There is short-run profit, but in the long run the demand curve is tangent to AC, so profit = 0.

**Formulas (W2)**
- dπ/dx = P′(x)x + P(x) − C′(x) = 0, so **P = C′(x) − P′(x)·x** (fixed).
  - Since P′ < 0, the term −P′x > 0 is the monopoly mark-up ("rent").
  - The notes write "+P′(x)x"; see Section 4.
- Polluting monopolist (fixed): **P = C′(x) − P′(x)·x + τσ**.
- Equivalent mark-up form: P = MC/(1 + 1/E). See Topic 10.

**Canonical diagram: "Monopoly vs competition"** (W2 p.50)
- Axes: P (vertical), Q (horizontal).
- Linear industry demand D from A on the vertical axis down to the horizontal axis. MR from A, twice as steep. MC = AC is horizontal at P_C.
- MR meets MC at Q_M. Go up to D at point M and mark the price P_M.
- D meets MC at E: (Q_C, P_C).
- Shade the triangle M–D–E (between Q_M and Q_C, under demand and above MC) and label it "deadweight loss".
- Shade the rectangle P_C–P_M–M–D and label it "transfer from consumers to monopolist (profit)".
- **Reader should see:** the monopoly price is above MC, output is below the competitive level, and the triangle is value nobody gets.

Second diagram, **natural monopoly regulation**:
- Downward D and MR; LAC falling throughout; LMC below LAC.
- Mark three points:
  - unregulated (Q_m, P_m) where MR = LMC;
  - average-cost price (Q_AC, P_AC) where D crosses LAC;
  - marginal-cost price (Q_MC, P_MC) where D crosses LMC.
- At Q_MC, shade the loss rectangle between LAC and P_MC and label it "subsidy or fixed fee needed".

**Worked example (W2 pp.52–53, electricity utility; prices recomputed)**
1. Industry demand P = 270 − 0.00048Q and TC = 3,750,000 + 70Q + 0.00002Q².
2. π = 200Q − 0.0005Q² − 3,750,000. Then dπ/dQ = 200 − 0.001Q = 0 gives **Q = 200,000** and **π = $16.25M**.
3. Investment is $125M, so the return is 16.25/125 = **13%**.
4. The regulator allows 12%: π = 0.12 × 125,000,000 = **$15,000,000**. (The notes print "15,250,000 × 0.12".)
5. Solve 200Q − 0.0005Q² − 3,750,000 = 15,000,000: Q = **150,000 or 250,000**. The regulator picks **250,000** (more service).
6. Prices from the same demand curve:
   - unregulated P = 270 − 0.00048(200,000) = **$174**;
   - regulated P = 270 − 0.00048(250,000) = **$150**.
   - The notes compute $14.50 and $12.50 from a second, inconsistent demand line, P = 22.5 − 0.0004Q. Flagged in Section 4.
7. AC is minimised only at Q ≈ 433,000, beyond the relevant range, so AC is falling here: it is a natural monopoly.

**Common misconceptions**
- "A monopolist charges the highest price it can." It charges the profit-maximising price on the demand curve at MR = MC; a higher price would lose too many sales.
- "A monopolist always earns profit." It does only if P > AC at the chosen output.
- "Marginal-cost pricing solves natural monopoly." It is efficient but loss-making, so it needs a subsidy or a two-part tariff. That is why regulators usually prefer average-cost pricing, despite its weak incentive to cut cost.

**Case links**
- **ECG**: the guest session names *average-cost pricing in the regulated market* and *marginal-cost pricing and price discrimination in a deregulated market* as the theory behind tariff negotiations.
- **China power**: the State Power Corporation owns five of the six grids and about half of generating capacity. It is regulated so as not to abuse its monopoly power.
- **Monsanto**: the US glyphosate patent gave Roundup an effective monopoly until September 2000.

**Retrieval checks**
1. Compared with perfect competition with the same MC, a monopoly produces:
   - **(a) less output at a higher price ✓**
   - (b) more output at a lower price
   - (c) the same output at a higher price
   - (d) more output at a higher price
   - Why: it stops where MR = MC, below the competitive Q where P = MC.
2. A regulator sets a natural monopoly's price where demand meets average cost. This:
   - (a) yields the efficient P = MC outcome
   - **(b) lets the firm just cover costs, including a fair return, with output closer to competitive ✓**
   - (c) maximises monopoly profit
   - (d) requires a subsidy
   - Why: average-cost pricing gives zero excess profit and output between monopoly and efficient levels.
3. In the W2 electricity example, the 12% regulated return is consistent with two outputs, 150,000 and 250,000. The regulator picks 250,000 because:
   - (a) profit is higher
   - **(b) it delivers more service at a lower price for the same allowed profit ✓**
   - (c) AC is lower at 150,000
   - (d) MC is zero
   - Why: both give π = $15M; the larger Q means a lower price for consumers.

---

## Topic 9: Oligopoly: Cournot, Stackelberg, Bertrand, cartels and concentration

**Core idea.** In oligopoly a few firms are **interdependent**, so each firm's best output or price depends on what its rivals do. Models differ in whether firms choose quantity or price, and whether they move simultaneously or in sequence, and their outcomes sit between monopoly and competition. Firms gain by colluding, but each has an incentive to cheat.

**Key definitions**
- **Cartel**: formal collusion (OPEC is the textbook case); informal collusion is the alternative. Industry output is set where MR = ΣMC, and each member produces where its MC = the common MC. Allocating quotas causes conflict.
- **Model map** (W2 p.59):

  | | Simultaneous | Sequential |
  |---|---|---|
  | **Quantity** | **Cournot** | **Stackelberg** (quantity leader) |
  | **Price** | **Bertrand** | **Price leadership** (dominant or barometric) |

- **Reaction (best-response) function**: a firm's best output or price as a function of its rival's.
- **Bertrand with identical products**: undercutting drives P = MC. **Bertrand with differentiated products**: prices settle above MC.
- **Kinked demand (Sweezy)**: rivals match price cuts but not rises. MR has a gap, so prices stay sticky while MC moves between MC₁ and MC₂.
- **Concentration ratio**: CR_n = (sum of the top n firms' sales / industry sales) × 100.
- **HHI** = Σ(market share in %)². A monopoly has HHI = 10,000. Bands per the notes: < 1,000 not concentrated; 1,000–1,800 moderately concentrated; > 1,800 highly concentrated.

**Formulas (W2, duopoly with P = 1,600 − Q and MC = 100)**
- Cournot reaction functions: Q_A = 750 − 0.5Q_B and Q_B = 750 − 0.5Q_A.
- Stackelberg leader's revenue after substituting the follower's reaction: TR_A = 850Q_A − 0.5Q_A², so MR_A = 850 − Q_A.
- Bertrand differentiated (Q_A = 60 − 2P_A + P_B, MC = 0): reaction P_A = 15 + 0.25P_B, and symmetrically for B.
- Dominant-firm price leadership: D_L = D_T − S_f, and the leader sets MR_L = MC_L.

**Canonical diagram: "Cournot reaction functions"**
- Axes: Q_B (vertical), Q_A (horizontal), both 0–1,600.
- Firm A's reaction line, Q_A = 750 − 0.5Q_B, runs from (750, 0) to (0, 1,500).
- Firm B's reaction line, Q_B = 750 − 0.5Q_A, runs from (0, 750) to (1,500, 0).
- They cross at **N = (500, 500)**, labelled "Cournot–Nash".
- Mark **S = (750, 375)** on B's line and label it "Stackelberg (A leads)".
- Optional: a dashed line Q_A + Q_B = 750 labelled "joint monopoly output", and a dashed line Q_A + Q_B = 1,500 labelled "competitive output".
- **Reader should see:** each firm's best output falls as its rival's rises, and the equilibrium is where both are best-responding at once.

Alternative or second diagram, **kinked demand**:
- Demand is flatter above P and steeper below P, so it kinks at (Q, P).
- MR has a vertical gap directly under the kink.
- MC₁ and MC₂ both pass through the gap, so Q and P are unchanged.

**Worked example (W2 pp.61–63, 67–68; comparison rows computed by me)**

| Outcome | Industry Q | P | Profits |
|---|---|---|---|
| Monopoly / joint profit (MR = 1,600 − 2Q = 100) | 750 | 850 | 562,500 in total |
| **Cournot** | 1,000 (500 each) | **600** | 250,000 each |
| **Stackelberg** (A leads) | 1,125 (A 750, B 375) | **475** | A 281,250; B 140,625 |
| Competition (P = MC) | 1,500 | 100 | 0 |

- **Bertrand, differentiated**: P_A = P_B = **$20**, Q = 40 each, π = **$800** each.
  - Joint profit maximisation would give P = 30, Q = 30 each, π = 900 each (graph on W2 p.68).
  - So Bertrand has a *lower price and higher output* than monopoly.

**Common misconceptions**
- "Oligopoly always ends in a price war at P = MC." That is only Bertrand with identical products. Cournot and differentiated Bertrand keep P > MC.
- "Moving first is always a disadvantage." In Stackelberg the leader commits to a high output and earns double the follower's profit.
- "A high CR4 tells you how competitive the leaders are among themselves." It does not; HHI captures size inequality within the top group.

**Case link**
- **Petroleum**: OPEC behaves as a cartel. Agreed production cuts raised prices (25% cut in 1973; repeated cuts in 1998–99 and after 2001).
- Oil prices fell to about $11 by the mid-1980s. Analysts cited alternative energy and conservation (more elastic long-run demand); the cartel incentive to cheat is the standard extra explanation.
- Non-OPEC producers (Russia, Norway, Mexico) sometimes joined the cuts.

**Retrieval checks**
1. With P = 1,600 − Q and MC = 100 for both firms, the Cournot price is:
   - (a) $850
   - **(b) $600 ✓**
   - (c) $475
   - (d) $100
   - Why: the reaction functions give 500 each; P = 1,600 − 1,000 = 600.
2. Relative to Cournot, the Stackelberg outcome has:
   - **(a) higher total output and a lower price ✓**
   - (b) lower output and a higher price
   - (c) the same output
   - (d) the follower producing more than the leader
   - Why: the leader expands to 750 while the follower cuts back to 375, so Q = 1,125 and P = 475.
3. Four firms have shares of 40%, 30%, 20% and 10%. The HHI is:
   - (a) 100
   - (b) 1,000
   - **(c) 3,000 ✓**
   - (d) 10,000
   - Why: 1,600 + 900 + 400 + 100 = 3,000, which is highly concentrated (> 1,800).

---

# UNIT C: Pricing and strategy (Weekend 3, part 1, plus the ECG guest session)

**Where you'll use this:**
- Setting mark-ups from elasticity, designing student or bulk discounts, membership-plus-usage tariffs and bundles.
- Anticipating rival reactions on price, capacity or entry, and making threats and commitments credible.
- Negotiating supply, power-purchase or bulk-customer contracts (as ECG does).
- Deciding whether to settle a legal dispute or go to court.

---

## Topic 10: Pricing with market power: mark-ups, discrimination, two-part and joint products

**Core idea.** A firm with market power maximises profit by setting MR = MC. Since MR = P(1 + 1/E), the best price is a mark-up over marginal cost that is larger the less elastic demand is. When customer groups have different elasticities and resale can be blocked, charging them different prices (price discrimination), or using a lump-sum fee plus a per-unit charge (two-part pricing), captures more consumer surplus.

**Key definitions**
- **Competitive pricing rule**: P = MR = MC (W3 p.4).
- **Mark-up on cost (MOC)** = (P − MC)/MC. **Mark-up on price (MOP)** = (P − MC)/P, the **Lerner index** of market power.
- **First-degree price discrimination**: each customer pays their maximum willingness to pay, so all consumer surplus is extracted. This needs the reservation price of every customer.
- **Second-degree**: price depends on the quantity bought (block tariffs, bulk discounts).
- **Third-degree**: different prices for identifiable groups (students, age, employment status). Charge a higher price to the less elastic group.
- **Two-part pricing**: a lump-sum fee plus a per-unit fee. With fee = CS and per-unit price = MC, all surplus is captured.
- **Multiple products**: MR_A = ∂TR_A/∂Q_A + ∂TR_B/∂Q_A. The cross term is positive for complements and negative for substitutes.
- **Joint products in fixed proportions**: one Q yields one unit of A and one of B. Set MR_A + MR_B = MC.
- **Full-cost pricing** (W1): P = (1 + m)·AC.

**Formulas (W3 pp.5–6, 8–9, 11; W1 "Optimal Mark-up Pricing")**
- MR = P(1 + 1/ε_p), so **P\* = MC / (1 + 1/ε_p)**, equivalently P = [E/(1 + E)]·MC.
- **MOP = (P − MC)/P = −1/ε_p** (Lerner).
- **MOC = (P − MC)/MC = −1/(ε_p + 1)**. Valid for ε_p < −1.
- Third-degree price discrimination: set MR₁ = MR₂ = MC.
- Two-part pricing: per-unit price = MC; fee = CS at that price = ½ × Q × (P_max − MC) for linear demand.
- Joint products: TR = TR_A + TR_B in terms of the common Q; set MR = MC.

**Canonical diagram: "Two-part pricing vs a single monopoly price"** (W3 p.9, two panels, same axes)
- Axes: P (vertical, 0–100), Q (horizontal, 0–100). Demand P = 100 − Q, MC = 20 (horizontal).
- **Panel 1, single price.**
  - MR = 100 − 2Q crosses MC at Q = 40, giving P = 60.
  - Shade CS (the triangle from (0, 100) to (0, 60) to (40, 60)) and label it "CS = $800".
  - Shade the profit rectangle 40 × 40 = $1,600.
  - Shade the deadweight-loss triangle from (40, 60) to (40, 20) to (80, 20).
- **Panel 2, two-part pricing.**
  - Per-unit price = 20, so Q = 80.
  - Shade the whole triangle under demand above 20, from (0, 100) to (0, 20) to (80, 20). Label it "fixed fee = CS = $3,200".
  - There is no deadweight loss.
- **Reader should see:** two-part pricing doubles profit ($3,200 vs $1,600) *and* removes the deadweight loss, because output rises to where P = MC.

Optional diagram, **third-degree discrimination**: two side-by-side markets with different demand slopes, a common MC line, MR₁ = MC and MR₂ = MC, giving a higher price in the steeper (less elastic) market.

**Worked examples**
- **Third-degree price discrimination (W3 p.8).** Football tickets: public P_P = 1,200 − 0.02Q_P; students P_S = 900 − 0.06Q_S; TC = 10,000,000 + 20Q.
  - 1,200 − 0.04Q_P = 20 gives **Q_P = 29,500, P_P = $610**.
  - 900 − 0.12Q_S = 20 gives **Q_S = 7,333, P_S = $460**.
  - **π ≈ $10.63M**.
  - CONSTRUCTED check of the notes' exercise ("show one price is worse"): pooled demand is P = 1,125 − 0.015Q, MR = 20 gives Q = 36,833, P = $572.50, π ≈ **$10.35M** < $10.63M.
- **Two-part pricing (W3 p.9).**
  - Single price: Q = 40, P = 60, π = $1,600 (the notes print "220×40" for "20×40").
  - Two-part: fee **$3,200** + **$20** per unit, Q = 80, π = **$3,200**.
- **Joint products (W3 p.11).** Newsprint P_A = 400 − 0.01Q and packaging P_B = 350 − 0.015Q, made in fixed proportions; TC = 2,000,000 + 50Q + 0.01Q².
  - TR = 750Q − 0.025Q², so MR = 750 − 0.05Q. Setting MR = 50 + 0.02Q gives **Q = 10,000**, **P_A = $300, P_B = $200**.
  - **π = TR − TC = 5,000,000 − 3,500,000 = $1.5M**. The notes write "π = TR_A + TR_B", which is a label error.
- **Mark-up from elasticity (W1 microchips).** E = −1.58, so the Lerner index = 1/1.58 = 0.635 = (104 − 38)/104. ✓

**Common misconceptions**
- "Higher elasticity means a higher mark-up." It is the reverse: the mark-up is inversely related to |E|.
- "Price discrimination just means charging different prices." It requires different elasticities *and* no resale between groups. Different prices that reflect different costs are not discrimination.
- "A single price is fairer, so it must be more efficient." First-degree and two-part pricing can *raise* output to the efficient level.

**Case links**
- **Monsanto**: Roundup was priced lower outside the US, where patents expired earlier and demand was more elastic. That is third-degree discrimination across countries.
- **ECG**: the session lists "marginal cost pricing and price discrimination (deregulated)" and bulk-customer pricing. Block tariffs are second-degree discrimination (W3 p.7 uses electricity block pricing as the example).

**Retrieval checks**
1. MC = GH¢30 and PED = −3. The profit-maximising price is:
   - (a) GH¢40
   - **(b) GH¢45 ✓**
   - (c) GH¢90
   - (d) GH¢30
   - Why: P = MC/(1 + 1/E) = 30/(1 − 1/3) = 30/(2/3) = 45.
2. Under third-degree price discrimination, the firm charges the higher price to the group whose demand is:
   - (a) more elastic
   - **(b) less elastic ✓**
   - (c) larger
   - (d) unit elastic
   - Why: the mark-up is inversely related to |E| (W3 pp.6–7).
3. With P = 100 − Q and MC = 20, the optimal two-part tariff is:
   - (a) fee $800 + $60/unit
   - **(b) fee $3,200 + $20/unit ✓**
   - (c) fee $1,600 + $20/unit
   - (d) $60/unit only
   - Why: price at MC (Q = 80) and set the fee equal to the resulting CS, ½ × 80 × 80 = 3,200.

---

## Topic 11: Game theory and competitive strategy

**Core idea.** When payoffs depend on what rivals do, a manager should predict their best responses. A **Nash equilibrium** is a set of choices where no player gains by switching on their own. Equilibria can be bad for everyone (the prisoner's dilemma), there can be more than one (coordination and entry games), and outcomes change with sequencing, credible commitment and repetition.

**Key definitions**
- **Game elements**: players, strategies and payoffs, shown in a payoff matrix or a game tree. Games are classified as:
  - zero-sum, positive-sum or negative-sum;
  - cooperative or non-cooperative;
  - one-shot or repeated;
  - simultaneous or sequential.
- **Dominant strategy**: best whatever the rival does. **Nash equilibrium**: each player's choice is a best response to the others'.
- **Prisoner's dilemma**: both players have a dominant strategy (confess or discount) that leaves both worse off than cooperating.
- **Coordination ("battle of the sexes")**: two equilibria. Both prefer to match, but they disagree on which; bargaining decides.
- **First-mover advantage and credible threats**: a commitment (e.g. a binding lease) can lock in the preferred equilibrium.
- **Sequential games** are solved by **backward induction**. A threat is credible only if carrying it out is in the threatener's own interest when the time comes.
- **Repeated games**: grim-trigger ("punitive") or tit-for-tat strategies can sustain cooperation.

**Formulas**
- None algebraic. The method is:
  1. For each rival strategy, find the best reply (mark it with \*).
  2. A cell where both payoffs are starred is a Nash equilibrium.
  3. For sequential games, start at the last move and work backward.

**Canonical diagram 1: "Prisoner's dilemma matrix"** (W3 p.20, Coke vs Pepsi; payoffs are (Coke, Pepsi))

| | Pepsi: Discount | Pepsi: Regular |
|---|---|---|
| **Coke: Discount** | **(4\*, 2\*)**, highlighted, Nash | (8, 1) |
| **Coke: Regular** | (2, 5) | (6, 4), dashed outline, "better for both, but unstable" |

- Draw arrows showing each firm's deviation incentive out of (Regular, Regular): Coke gains 8 > 6 and Pepsi gains 5 > 4.

**Canonical diagram 2: "Game tree: Ghana gold-mine investment"** (W3 p.24)
- A decision square "MNF" (the multinational firm) has two branches:
  - "Do not invest" → (0, 0).
  - "Invest" → decision square "Gov't" with two branches: "Honour" → (50, 50) and "Expropriate" → (−20, 80).
- Draw a slash through "Honour" (the government prefers 80 > 50), then a slash through "Invest" (the firm prefers 0 > −20).
- Side box showing the fixes:
  - a penalty above $30m for defecting, which makes Honour the better choice;
  - or an 81/19 split in the government's favour (81 > 80).
- **Reader should see:** without a credible commitment, a mutually beneficial deal (50, 50) never happens.

**Worked examples**
- **Zero-sum market-share game (W3 p.18).** Firm 1 plays R2 and Firm 2 plays C2, payoff (2, −2). This is the Nash equilibrium, a saddle point. Neither firm has a dominant strategy.
- **Battle of standards (W3 p.21).** Tesla vs CCS.
  - Both adopt Tesla: (100, 50). Both adopt CCS: (60, 90).
  - Mismatches pay (30, 20) and (0, 0).
  - The two Nash equilibria are both on the diagonal.
- **Entry deterrence (W3 p.25).** Payoffs are (entrant, incumbent).
  - If the entrant moves first: after entry the incumbent prefers to maintain price (6) over cutting (4). The threat to cut is not credible, so the entrant enters and gets (4, 6).
  - If the incumbent commits first: cutting price before entry makes "stay out" the entrant's best reply, giving (0, 9). The incumbent prefers 9 > 6, so it commits.
- **Price war (W2 p.70).** P = $8 or $6, MC = AC = $4.
  - Both high: (10, 10). Both low: (7, 7). One high, one low: (5, 12).
  - Low is dominant for both, so (7, 7) is the equilibrium. Repetition with punishment can sustain (10, 10).

**Common misconceptions**
- "The Nash equilibrium is the best outcome for the players." The prisoner's dilemma shows it can be worse for both than cooperation.
- "Any threat deters." Only a threat the player would rationally carry out (a credible one) changes the rival's behaviour; commitment devices make it credible.
- "Every game has one equilibrium." Coordination and entry games have two, and which one happens depends on commitment, timing or bargaining.

**Case links**
- **Petroleum**: OPEC members face a repeated prisoner's dilemma. Each gains by producing above quota, so cuts hold only with credible punishment, and non-OPEC producers' pledges were needed in 1999 and 2001.
- **ECG**: the session's takeaway "continuous and sustained relationship is the key" is repeated-game logic. Continuity (the PFC case) supports cooperation; a termination relationship (Goldfields Dameng) removes the shadow of the future.

**Retrieval checks**
1. In the Coke–Pepsi game, discounting is a dominant strategy for both. The outcome is:
   - (a) both regular, (6, 4)
   - **(b) both discount, (4, 2), even though both prefer (6, 4) ✓**
   - (c) Coke regular, Pepsi discount
   - (d) no equilibrium
   - Why: each firm does better discounting whatever the other does, which is the prisoner's-dilemma trap.
2. In the Ghana gold-mine game, the firm does not invest because:
   - (a) the expected profit is negative in all cases
   - **(b) backward induction shows the government would expropriate (80 > 50), leaving the firm at −20 ✓**
   - (c) the government cannot expropriate
   - (d) the game is zero-sum
   - Why: anticipating the government's best reply, investing yields −20 < 0.
3. An incumbent threatens to cut price if a rival enters, but after entry it earns more by keeping price high. The threat is:
   - (a) credible
   - **(b) not credible, so the rival enters ✓**
   - (c) a dominant strategy
   - (d) a Nash equilibrium in all cases
   - Why: a rational incumbent will not carry out a threat that lowers its own payoff (W3 p.25).

---

## Topic 12: Bargaining, negotiation and settlement

**Core idea.** When a deal creates surplus (the buyer values the good more than it costs the seller), bargaining decides how that surplus is split. Many splits are equilibria; which one occurs depends on information, alternatives, relationships and commitment. The same expected-value logic tells parties when settling a dispute beats litigating.

**Key definitions**
- **Bargaining zone / surplus**: the range between the seller's cost (reservation price) and the buyer's maximum willingness to pay.
- **Bargaining equilibria** (W3 p.23): several compatible offer pairs are stable; the 50/50 split is the "fair" focal point.
- **Settlement logic** (W3 pp.42–43): a case settles when the defendant's expected loss exceeds the plaintiff's expected gain. The size of that gap is the room for settlement.
- **ECG negotiation parameters** (ECG slide 4):
  - knowledge of the industry;
  - demand/capacity;
  - pricing/commercial terms;
  - regulation;
  - current/future relationship;
  - corporate (government of Ghana) goals;
  - theoretical basis.
- **Power purchase agreement (PPA) terms** (ECG slide 3): take-and-pay, take-or-pay, fuel acquisition, tolling. The slides only list them; the explanations below are standard industry meanings, not from the session.
  - *Take-or-pay*: the buyer pays for contracted capacity or volume whether or not it takes it.
  - *Take-and-pay*: the buyer pays only for what it takes.
  - *Tolling*: the buyer supplies the fuel and pays a fee to convert it into power.
- **ECG takeaways**:
  - "Knowledge is power" (information asymmetry);
  - Pareto optimality (no one can be made better off without making someone worse off);
  - continuous relationships;
  - government policy as a key driver.

**Formulas (W3 pp.23, 42–43)**
- Bargaining payoffs (when the offers are compatible):
  - Buyer = max price − (buyer offer + seller offer)/2.
  - Seller = (buyer offer + seller offer)/2 − cost.
- Plaintiff's expected gain from litigation: E[L]_p = p·s_p − C_G.
- Defendant's expected loss: E[L]_d = q·s_d + C_E.
- **Settlement range = E[L]_d − E[L]_p = (q·s_d − p·s_p) + C_E + C_G > 0** (fixed; the notes print "CD + CE").

**Canonical diagram: "Bargaining zone"** (a horizontal number line, not axes)
- Draw a line from $70k to $130k.
- Mark the seller's cost at **$80k** and the buyer's maximum at **$120k**. Shade the band between them and label it "surplus = $40k".
- Mark three tick prices, $90k, $100k and $110k, each with its split:
  - $90k: buyer 30 / seller 10;
  - $100k: buyer 20 / seller 20;
  - $110k: buyer 10 / seller 30.
- Below the line, a second line shows the litigation example: plaintiff's expected gain $200k and defendant's expected loss $900k, with the band between them labelled "settlement zone (any amount here beats going to court for both)".
- **Reader should see:** the deal creates a fixed pie; the negotiated price only slices it, and a dispute settles whenever the zone is positive.

**Worked examples**
- **Bargaining matrix (W3 p.23).** Seller cost is $80k and buyer value $120k; offers are $90k, $100k or $110k.
  - If both bid $90k, the price is $90k: buyer gets 120 − 90 = $30k and seller 90 − 80 = $10k.
  - The three diagonal outcomes (30, 10), (20, 20) and (10, 30) are all equilibria. Incompatible offers (buyer below seller) pay (0, 0).
- **Litigation (W3 pp.42–43).** The Government of Ghana sues a contractor for $1m.
  - Plaintiff: p = 0.6, costs $400k, so E[L]_p = 0.6(1m) − 400k = **$200k**.
  - Defendant: q = 0.6, costs $300k, so E[L]_d = 600k + 300k = **$900k**.
  - Any settlement between **$200k and $900k** leaves both better off. With equal beliefs, the zone equals the combined legal costs, **$700k**.

**Common misconceptions**
- "Bargaining is zero-sum, so whoever wins, the other loses." The deal creates the surplus; failing to agree destroys it for both (the (0, 0) cells).
- "Higher legal costs make settlement less likely." They make it *more* likely, because they widen the settlement zone.
- "Optimism helps your case." If the plaintiff overestimates p or s_p, the zone shrinks and costly trials become more likely.

**Case link**
- **ECG**: the two negotiation cases differ mainly in industry knowledge (PFC high vs Goldfields Dameng low) and the future relationship (continuity vs termination). Information and the repeated-game horizon shaped the outcome as much as price did.

**Retrieval checks**
1. Seller cost is $80k and buyer value $120k. At an agreed $100k, the surplus split is:
   - (a) buyer 40, seller 0
   - **(b) buyer 20, seller 20 ✓**
   - (c) buyer 10, seller 30
   - (d) buyer 30, seller 10
   - Why: buyer 120 − 100 = 20; seller 100 − 80 = 20.
2. In the litigation example, the parties should settle for any amount between:
   - (a) $0 and $200k
   - **(b) $200k and $900k ✓**
   - (c) $600k and $1m
   - (d) $700k and $1m
   - Why: the plaintiff expects $200k net from trial and the defendant expects to lose $900k.
3. Holding beliefs fixed, if both sides' legal costs rise, settlement becomes:
   - **(a) more likely ✓**
   - (b) less likely
   - (c) impossible
   - (d) unaffected
   - Why: the settlement range includes C_E + C_G, so it widens.

---

# UNIT D: Uncertainty and information (Weekend 3, part 2)

**Where you'll use this:**
- Go/no-go investment decisions and R&D portfolios (decision trees, sequencing options).
- Deciding whether to pay for a survey, feasibility study or test before committing.
- Setting stock levels when demand is uncertain.
- Designing contracts, warranties, screening and incentive pay when the other side knows more than you (supplier quality, borrower risk, employee effort).

---

## Topic 13: Decisions under uncertainty and the value of information

**Core idea.** When an action can lead to several outcomes, list them, attach probabilities and compare actions by expected value (EV), using decision trees for multi-stage choices. Information is worth buying only if the expected value of the improved decision exceeds the information's cost.

**Key definitions**
- **Probability**: objective (from relative frequency) or subjective (from judgement). **Expected value**: E[X] = Σ pᵢ·xᵢ.
- **Decision tree**: squares are decisions, circles are chance events. Solve by *rolling back* from the tips: take expectations at circles and the best branch at squares.
- **Sequential decisions / real options**: doing R&D projects simultaneously, or one first, can beat choosing one up front.
- **Uncertainty and output**:
  - uncertain demand: set E[MR] = MC;
  - uncertain cost: set MR = E[MC];
  - both uncertain: set E[MR] = E[MC].
- **Inventory under random demand**: stock another unit while E[MB] ≥ E[MC] of that unit.
- **Expected value of (perfect or imperfect) information (EVI)** = expected profit with information − expected profit without it. Buy information if EVI > its cost.
- **Bayes' theorem**: revises the prior P(W) to the posterior P(W|G) after a signal.

**Formulas (W3 pp.29–49)**
- E[SR] = Σ Pᵢ·salesᵢ.
- E[MB] = (P − C)·Prob(Q^D ≥ Q\*) and E[MC] = (C − P_s)·Prob(Q^D < Q\*). The optimum sets them equal.
- **EVI = E[π with info] − E[π without info]**.
- **P(W|G) = P(W & G)/P(G) = [P(G|W)/P(G)]·P(W)**. Information is worthless if P(G|W) = P(G), i.e. the posterior equals the prior.

**Canonical diagram: "Drill or not, with and without a seismic test"** (W3 pp.30, 46, 48)
- **Tree 1.**
  - Square → "Do not drill" → $0.
  - Square → "Drill" → circle (EV = 120) with branches "Wet" 0.4 → $600 and "Dry" 0.6 → −$200.
  - Slash through "Do not drill".
- **Tree 2 (imperfect test).**
  - The root circle "Test" has EV 140.
  - "Good" (0.5) → square → "Drill" → circle (EV 280) with Wet 0.6 → 600 and Dry 0.4 → −200. "Do not drill" → 0 is slashed.
  - "Bad" (0.5) → square → "Drill" (EV −40: Wet 0.2 → 600, Dry 0.8 → −200) is slashed; "Do not drill" → 0.
- Annotation: "EVI = 140 − 120 = 20 (i.e. $20,000)".
- Units: $000 throughout.
- **Reader should see:** the test is valuable because it changes the decision after a bad result (don't drill), not because it guarantees oil.

Alternative diagram, **E[MR] = MC under demand uncertainty** (W3 p.36):
- Axes: P (vertical), Q (horizontal).
- Horizontal lines P_H = MR_H, E[P] = E[MR] and P_L = MR_L, with an upward MC crossing each at Q_H, Q and Q_L.
- Label the chosen output Q at E[MR] = MC.

**Worked examples**
- **Expected sales (W3 p.29).** E = 0.1(10) + 0.3(7) + 0.2(3) + 0.4(1) = **$4.1m**.
- **Oil drilling (W3 pp.30–31).** E[π] = 0.4(600k) − 0.6(200k) = **$120k** > 0, so drill. If the well then turns out dry, it was still a good decision.
- **Perfect information (W3 p.46).** E = 0.4(600k) = $240k, so **EVI = $120k**. A $50k test nets $70k.
- **Imperfect information (W3 pp.47–48).** From the 100-test table: P(W|G) = 30/50 = 0.6 and P(W|B) = 10/50 = 0.2.
  - Drill after a good test: 0.6(600) − 0.4(200) = **$280k**. After a bad test: 0.2(600) − 0.8(200) = **−$40k**, so don't drill.
  - E = 0.5(280) + 0.5(0) = 140, so **EVI = $20k**.
- **R&D sequencing (W3 pp.33–35).**
  - Biochemical alone: 0.7(90) + 0.3(50) − 10 = **$68M**. Biogenetic alone: 0.2(200) − 20 = **$20M**.
  - Simultaneous: 0.14(170) + 0.06(170) + 0.56(60) + 0.24(20) = **$72.4M**.
  - Biochemical first, then biogenetic: **$72.4M**.
  - **Biogenetic first**: 0.2(180) + 0.8(48) = **$74.4M**, the best option. It saves the $10M biochemical outlay in the 20% success state.
- **Inventory (W3 pp.39–41).** P = $4, C = $2, P_s = $0, demand 50–57.
  - At 52 units, E[MB] = 2 × 0.8 = 1.60 and E[MC] = 2 × 0.2 = 0.40, so add more.
  - At **54**, E[MB] = E[MC] = $1, so the notes choose 54. Stocking 53 or 54 gives the same expected profit; see Section 4.

**Common misconceptions**
- "A bad outcome means it was a bad decision." The drilling decision with EV $120k was right even if the well turns out dry (W3 p.31).
- "Imperfect information is worthless." It is valuable whenever it can change your action. Here it is worth $20k.
- "Pick the R&D project with the highest EV and stop." Sequencing and options can raise EV further ($74.4M vs $68M).

**Case link**
- **Monsanto**: Shapiro's strategy used Roundup cash to fund risky biotech R&D, a high-variance bet. After the US patent expired, revenue fell and the share price halved in mid-2002.

**Retrieval checks**
1. An investment yields $600k with probability 0.4 and −$200k with probability 0.6. Its expected value is:
   - (a) $400k
   - **(b) $120k ✓**
   - (c) −$120k
   - (d) $200k
   - Why: 0.4 × 600 − 0.6 × 200 = 240 − 120 = 120.
2. Expected profit is $120k without a test and $140k with an imperfect test. The firm should buy the test only if it costs:
   - **(a) less than $20k ✓**
   - (b) less than $140k
   - (c) less than $120k
   - (d) any amount
   - Why: EVI = 140 − 120 = $20k; buy only if EVI exceeds the cost.
3. With uncertain demand but certain cost, a competitive firm chooses output where:
   - **(a) E[MR] = MC ✓**
   - (b) MR_H = MC
   - (c) MR_L = MC
   - (d) E[MR] = E[AC]
   - Why: it maximises expected profit by equating expected marginal revenue with marginal cost (W3 p.36).

---

## Topic 14: Asymmetric information: adverse selection, signalling and moral hazard

**Core idea.** When one side of a deal knows more than the other, markets can unravel: low-quality sellers or high-risk buyers crowd in (adverse selection), and agents may act against their principal once a contract is signed (moral hazard). Firms respond by screening, signalling (warranties, reputation, education) and designing incentives.

**Key definitions**
- **Information asymmetry**: one party has an informational advantage.
- **Adverse selection** (hidden information *before* the contract):
  - lemons in used cars;
  - risky borrowers;
  - staff with high maternity probability choosing a maternity health plan (*self-selection* from the employee's side).
- **Signalling**: the informed, high-quality party credibly reveals its type: reputation, warranty or money-back guarantee, educational credentials.
- **Screening**: the uninformed party gathers information: credit history, a mechanic's inspection.
- **Principal–agent problem / moral hazard** (hidden action *after* the contract): an agent with better information pursues their own interest. W1 also notes satisficing and sales-maximising managers. The W3 case is WorldCom.

**Formulas**
- No equations in the notes. The lemons logic is:
  1. At price p, only sellers whose value v ≤ p sell.
  2. The buyer pays at most E[v | v ≤ p] + premium.
  3. In equilibrium, p = E[v | v ≤ p] + premium.

**Canonical diagram: "The lemons unravelling"** (a horizontal value bar)
- Draw a bar from $8,000 (lemon) to $14,000 (peach), labelled "seller value, uniformly spread". Buyers value every car at seller value + $1,000.
- **Step 1**: price $11,000. Only cars at $8k–$11k are offered (shade them). The average seller value is $9.5k, so buyers will pay at most $10.5k: an arrow shows the price must fall.
- **Step 2**: price $10,000. Cars at $8k–$10k are offered, with an average of $9k. Buyers will pay at most $10k, so this price is stable. Mark it "equilibrium".
- The un-shaded $10k–$14k section is labelled "good cars withdrawn: trades that would benefit both sides never happen".
- **Reader should see:** uncertainty about quality drives the good cars out.

**Worked examples**
- **Lemons (W3 pp.50–51).**
  - With full information, a car worth $11,000 to the seller and $12,000 to the buyer trades at about $11,500.
  - With asymmetric information, the market settles at **$10,000** and only $8k–$10k cars trade. My fixed-point check: p = (8,000 + p)/2 + 1,000 gives p = 10,000.
- **Maternity insurance (W3 p.50).** HR planned on 1 in 20 staff having babies; in the first three years the rate was 1 in 10. This is adverse selection, not bad luck.

**Common misconceptions**
- "Adverse selection and moral hazard are the same thing." Adverse selection is hidden *type* before the deal; moral hazard is hidden *action* after it.
- "Only the uninformed side loses." Good sellers and good borrowers lose too (W3 p.52), which is why *they* invest in signals.
- "More information always closes the gap for free." Screening and signalling are costly. Use them only when their value exceeds their cost (Topic 13).

**Case links**
- **ECG**: "Knowledge is power". ECG's high industry knowledge with PFC vs low knowledge with Goldfields Dameng shows informational advantage in negotiation.
- **China power**: mines that ignore contracts and sell on the spot market, and users who consume electricity without paying, are principal–agent and enforcement problems. The case asks whether non-payers make demand more or less elastic: *less* elastic, since price does not bind them.

**Retrieval checks**
1. Used-car sellers know quality; buyers know only the average. The likely result is:
   - (a) all cars trade at the average price
   - **(b) high-quality cars are withdrawn and the market is dominated by lemons ✓**
   - (c) buyers pay above every car's value
   - (d) only peaches trade
   - Why: at a pooled price, owners of good cars won't sell, which lowers average quality and the price.
2. A firm offers a 3-year money-back warranty that only a reliable producer could afford. This is:
   - **(a) signalling ✓**
   - (b) screening
   - (c) moral hazard
   - (d) price discrimination
   - Why: the informed, high-quality side takes a costly action to reveal its type (W3 p.52).
3. A manager paid on sales grows revenue at the expense of profit. This is an example of:
   - (a) adverse selection
   - **(b) a principal–agent (moral hazard) problem ✓**
   - (c) signalling
   - (d) economies of scope
   - Why: the agent's incentives diverge from the owner's profit goal after the contract (W1 "Private versus Public"; W3 p.53).

---

# 3. Case quick-reference (own-words summaries for the build)

**Monsanto Roundup** (NYU Stern mini-case, 2003)
- Glyphosate herbicide, patented in the 1970s. The US patent gave an effective monopoly until September 2000; patents expired earlier abroad, where prices were lower.
- 1995–2000: US price cut about 9% a year, volume up about 22% a year, so revenue and profit surged.
- Demand was also boosted by:
  - conservation tillage, which is sensitive to herbicide prices;
  - complementary Roundup Ready seeds (corn approved in 1998).
- Post-expiry market shares in 2001 stayed high (e.g. Brazil 82%, Canada 95%). Scale and learning-curve advantages followed.
- Glyphosate sales were $2.4b in 2001, about half the company's total. The share price fell 50% in mid-2002 after the US patent expired.
- Topics: 1, 3, 6, 8, 10, 13.

**Petroleum market 1970–2001**
- Pricing power moved from the major oil companies to OPEC governments.
- Supply shocks raised prices:
  - 1973 embargo plus a 25% output cut: $5.12 → $11.65/bbl;
  - Iranian revolution 1978–79: $24 by end-1979;
  - Iran–Iraq war 1980: $32;
  - Kuwait invasion 1990: a 4 m bbl/day loss, price $32.
- Prices fell to about $11 by the mid-1980s (conservation, alternatives).
- Demand shocks: the 1998 Asian crisis, and the 2001 recession after 9/11. OPEC cut production repeatedly (1998–99, 2001), with non-OPEC pledges.
- Topics: 2, 3, 9, 11.

**Resolving China's power shortage** (Png, 2004)
- Summer 2004: Shanghai demand hit records. Firms were told to shift to night operation, and GM and VW were ordered to suspend production.
- Coal-fired plants depend on contract coal priced below spot (2003–04: spot +25% vs contract +10%), so mines diverted coal to the spot market.
- Coal exports were capped (80m t). Electricity tariffs rose by only 2.2 fen/kWh. The State Power Corporation, a regulated near-monopoly, owns five of the six grids.
- The case cites demand elasticities of −0.65 for residential and −0.45 for industrial users.
- Topics: 3, 4, 5, 8, 14.

**ECG guest session** (bargaining and negotiation)
- ECG negotiates:
  - bulk power purchases (PPA terms);
  - regulated and deregulated tariffs;
  - bulk-customer pricing;
  - procurement (contractors, prepaid vendors, franchising, payment platforms).
- Two cases are compared on knowledge, demand, pricing, regulation, relationship and policy goals:
  - PFC: high knowledge, continuing relationship;
  - Goldfields Dameng: low knowledge, relationship terminated.
- Theory cited: average-cost pricing (regulated); marginal-cost pricing and price discrimination (deregulated); incentive-based pricing; demand and supply; theory of the firm; market theory; welfare economics (economic vs financial analysis).
- Takeaways: knowledge is power; Pareto optimality; sustained relationships; policy as a driver.
- Topics: 8, 10, 11, 12, 14.

---

# 4. Accuracy flags (notes vs standard treatment)

Severity: **[E]** = substantive error (must not be copied into the app); **[T]** = typo or notation (the app shows the fixed version); **[A]** = ambiguous or garbled.

### Weekend 1 (text only; there is no PDF to inspect visually)
1. **[E] Cross-price elasticity is reversed** ("Cross-price elasticity of demand"). The notes say CPED > 0 means complements and CPED < 0 means substitutes. Standard: **CPED > 0 = substitutes, CPED < 0 = complements.** The notes' own textile slide says "βr>0 (substitute)", which contradicts the earlier slide.
2. **[E] Income elasticity classes** are incomplete. The notes have "YED>0, YED<1 normal; YED>1 luxury". Standard: YED > 0 is normal (with 0 < YED < 1 a necessity and > 1 a luxury); YED < 0 is inferior.
3. **[E] MRP hiring rule.** The notes say "increase the variable input until MRP=0". Standard: hire until **MRP_L = w (= MC_L)**. The next slide states this correctly.
4. **[T] Returns to scale.** "less than zero (decreasing returns)" should read **less than one**.
5. **[T] MC slide** writes "MC = 100 + 38Q" before giving MC = dC/dQ = 38. The first line is the cost function, not MC.
6. **[E/A] Two-market allocation** ("Constrained versus unconstrained optimization"):
   - (a) "73.34% to B and 6.66% to A" should read **73.34% and 26.66%**.
   - (b) At the stated Q = 50, MR_A = MR_B = −3.33 < 0 and λ is negative. Forcing all 50 units onto the markets is unprofitable at the margin; a "≤" constraint would leave some unsold.
   - (c) The claim "elasticity lower in B" is wrong at these numbers: |E_A| = 0.50 and |E_B| = 0.64. B charges more only because MR is negative.
   - (d) F is subtracted twice (once per market).
   - **Recommendation:** do not use this example for elasticity intuition.
7. **[T] Incremental financing.** "0.95% interest" should be **9.5%**, and "US$1.350" should be **US$1,350**.
8. **[A] Warehouse example** ("renting a warehouse that cost US$8,000 per month according to lease contract for US$5,000 … Let or not to let?") is garbled. The likely intent: the $8,000 lease is sunk or committed, and subletting for $5,000 adds $5,000 of incremental revenue, so let it if there is no better use. The app should not use it as worded.
9. **[T] Arc elasticity** uses "dQ/dP" (should be ΔQ/ΔP) and is spelled "arch".
10. **[T] Elasticity bands** are written without absolute values (PED < 1, PED > 1). Use |PED|. "Fairly elastic/inelastic" should read "relatively".
11. **[T] Forecast equation** repeats "YED·ΔInc/Inc". The second term should be **CPED·ΔPr/Pr**.
12. **[T] Full-cost pricing.** "P 1 + m AC" should read **P = (1 + m)·AC**.
13. **[A] Mark-up factor.** "PED/(1 + PED) is greater than 1" is true only when |PED| > 1, which is the only case where a profit-maximiser with MC > 0 operates.
14. **[A] Pass-through notation.** It is ϑ ∈ {0.1, 0.2, 0.3} on one slide and φ ∈ {0.3, 0.6, 1.0} on another, and φ is also the income coefficient. Use one symbol in the app.
15. **[A] Quadratic production function.** Q = aLK − bL²K² is not homogeneous, so "decreasing returns to scale" holds only beyond some scale. Present it as an illustration of diminishing returns only.
16. **[A] Least-cost derivation** algebra is garbled mid-slide, but the final condition w/r = MP_L/MP_K is correct.

### Weekend 2
17. **[E] p.34: "perfectly inelastic demand"** for the competitive firm. Standard: **perfectly elastic (horizontal)**. W3 p.4 states this correctly.
18. **[E] p.10: "The long run AC is the envelope of SMC at the minimum."** Standard: LAC is the **envelope of the SAC curves**. It is tangent to each SAC, at that SAC's minimum only at the bottom of the LAC.
19. **[E] p.48 and p.51: monopoly price sign.** The notes write P = C′(x) + P′(x)x. From the FOC, **P = C′(x) − P′(x)x**. Since P′ < 0, the mark-up term is positive. p.51 shows the correct line and then a wrong one; the app should show only P = C′ − P′x + τσ.
20. **[E] p.53: natural monopoly prices.** Two demand curves are listed (P = 22.5 − 0.0004Q and the "industry" P = 270 − 0.00048Q). Profit is computed with the second but prices with the first.
    - Consistent prices are **$174** (unregulated, Q = 200,000) and **$150** (regulated, Q = 250,000), not $14.50 and $12.50.
    - "π = 15,250,000 × 0.12" should read **125,000,000 × 0.12 = $15,000,000**.
21. **[E] p.68: "Bertrand price and output is less than that of the monopoly".** Price is lower ($20 vs $30) but **output is higher** (40 vs 30 each), as the slide's own graph shows.
22. **[E] p.43: Ehrlich–Simon wager.** The names are swapped: **Ehrlich** (the ecologist) predicted scarcity and higher prices; **Simon** predicted falling prices and won.
    - Standard account: a $1,000 basket of five metals bet in 1980 and settled in 1990, when the basket was worth about $424, so Ehrlich paid about $576.
    - The notes' "1981 → 1991, $618" does not match the standard account. The app should avoid these specific figures, or show them as "per lecture notes".
23. **[E] p.42: "tariffs cause more harm if supply is inelastic".** Standard: the deadweight loss of a tariff is larger when domestic **demand and supply are more elastic**. Treat the slide's list as ambiguous.
24. **[T] p.40: tutoring.** "Ghc60 per week" should read **per hour**, and "between 40 and 100" should read **between 60 and 100**.
25. **[T] p.5:** both profit formulas are labelled π_A. The second is economic profit, π_E.
26. **[A] p.8:** the AVC description ("reaches a minimum when total output reaches a maximum…") is garbled. Standard: AVC is at its minimum where **AP_L is at its maximum**, and MC cuts AVC and AC at their minimums. The SMC sentence repeats itself.
27. **[T] p.14:** MES given "in US$" (US$1m, US$10m) should be in **output units**.
28. **[E] p.71: HHI formula** is missing the square. Correct: **HHI = Σ(sᵢ × 100)²**. "< 20 competition is vigorous" for CR is unclear and has no standard threshold. The 1,000/1,800 HHI bands match the notes; current US guidelines also treat > 1,800 as highly concentrated.
29. **[A] p.70:** "charge low price in anticipation of the other firm charging high price". Low is **dominant whatever the rival does**. "uncorporatively/corporatively" should read **non-cooperatively/cooperatively**.
30. **[A] pp.37–38:** a horizontal long-run industry supply holds for a **constant-cost** industry only.
31. **[A] p.41:** day-care PS = 0 is correct because store-bought supply is flat at GH¢2.50, but the slide does not say so. Units: "9.5 hrs" on the slide means 9.5 **million** hours.

### Weekend 3
32. **[T] p.11:** MR_B = 250 − 0.03Q_B should be **350 − 0.03Q_B**. "π = TR_A + TR_B = $1.5M" should read **π = TR − TC = 5.0M − 3.5M = $1.5M**.
33. **[T] p.9:** "π = (40 × 60) − (220 × 40)" should read **(20 × 40)**. "MC = d(20Q)/d" should read d(20Q)/dQ. "The following is the MC and MR" should read "demand". The phrase "willing to pay additional unit of $800" means total CS = $800.
34. **[T] p.4:** "to maximize price" should read **to maximize profit**.
35. **[T] pp.42–43:**
    - "CG = $300,000 for defendant" should read **C_E**.
    - "s(q − p) + CD + CE" should read **+ C_G + C_E**.
    - p.43 is mis-titled "Illustration with optimal inventory"; it continues the litigation example.
36. **[A] p.41:** the inventory table's first row reads "100" for **1.00**. At Q = 54, E[MB] = E[MC] = $1, so **53 and 54 give the same expected profit**. Standard newsvendor rule: stock the smallest Q with P(D ≤ Q) ≥ (P − C)/(P − P_s) = 0.5, which gives 53 here; 54 is equally optimal.
37. **[T] p.48:** "EVI = 140 − 120 = $20" and "if the test cost is less than $20" are in **$ thousands** ($20,000), as the tree uses $000. p.46: "If the test score was higher than EVI" should read **test cost**.
38. **[A] p.29:** "prob = successful/total × 100" gives a **percentage**. A probability lies between 0 and 1.
39. **[A] p.51 (lemons):** "buyers can expect to pay $9,000–$11,000 on average" is garbled. In equilibrium (p = $10,000), the traded cars' seller values average **$9,000** and buyers value them at about **$10,000**. Deriving the price from "(9,500 + 10,500)/2" gives the right number by coincidence; use the fixed-point logic.
40. **[A] p.19:** "Two suspects have been **convicted**" should read **arrested/accused**, since conviction depends on the confessions. The payoffs are jail years, so lower is better.
41. **[A] p.25:** "Maintaining price becomes a dominant strategy for the incumbent". More precisely, maintaining price is the incumbent's **best response once entry has happened**, which is why the threat to cut is not credible.

### ECG guest session
42. **[A]** The slides only *list* PPA terms (take-and-pay, take-or-pay, fuel acquisition, tolling) and the two company cases. Any definitions or outcomes in the app (Topic 12) are standard industry meanings or inferences and should be labelled "general definition", not attributed to the session. Spelling on the slides: "Theortical/THEORICAL" should read "Theoretical".

### Build notes
- Every number in Sections 1–3 was recomputed. Where the notes stop short (e.g. microchip P\* and π\*, the Cournot vs monopoly comparison, the single-price football check, the Cobb-Douglas returns-to-scale sum), the value is mine and is labelled.
- I did not take any number from the Monsanto exhibits' charts (prices or volumes by year), because the extracted text does not let me read the data points reliably. Use only the stated averages (−9% price, +22% volume a year).
