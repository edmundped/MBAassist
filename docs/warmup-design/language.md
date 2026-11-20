# Language brief: Managerial Economics pre-course recap

*Language lead · MBAassist · 20 November 2026*

**Scope (updated):** the recap now has its own course card. It prepares learners for an upcoming course whose name isn't known yet. All microcopy below uses `{COURSE}` where that name goes. Nothing in this brief names Cross-Border, because that course is being removed.

**Sources read:** Weekend 1–3 lecture notes, the ECG negotiation session, and the Monsanto, Petroleum and China power mini-cases (all in `/home/claude/src/`). For the app's voice I read `README.md`, `AUDIT.md` and the on-screen strings in `index.html`.

**File shorthand used below**

| Short name | File |
|---|---|
| WK1 | `bfd0656b-LECTURE_NOTES_WKD_1.pdf.txt` (decision making, demand, production) |
| WK2 | `43c5dccc-LECTURE_NOTES_WKD_2_update.txt` (cost, market structures) |
| WK3 | `e505ca3a-LECTURE_NOTES_WKD_3updated.txt` (pricing, games, uncertainty, information) |
| NEG | `330c1079-NEGOTIATIONS_.txt` (ECG guest session) |
| MON / PET / CHN | Monsanto Roundup / Petroleum market / China power shortage mini-cases |

Line numbers (l.) are approximate positions in those text files.

---

## 1. Voice and tone guide

### Who we are writing for

Our readers are working professionals in Ghana. Most read English fluently as a second or additional language. They study on a phone, in short gaps between work and family, often when tired. They are senior people, so the recap must never talk down to them. They also don't need academic padding to prove the content is serious.

**What the recap should sound like:** a sharp colleague who sat the course last term. They explain the idea in two sentences, show it with a cedi example, and tell you what the exam or the deal will actually test.

This is already the app's voice at its best. The new copy should match it.

### Reading level

- **Target for explanations:** about CEFR B2, which is roughly a Flesch–Kincaid grade of 8–10.
- **Target for buttons, notices and empty states:** about grade 6–8.

**Why:**

1. Reading in a second language costs more effort. That cost is higher on a small screen, when tired, and when you're interrupted.
2. Plain language does not mean a lower academic level. We keep every exam term, such as *price elasticity of demand* or *minimum efficient scale*, exactly as the lecturer uses it. We just never leave a term unexplained.
3. The lecture notes are hard to read for reasons that have nothing to do with economics: broken PDF extraction, missing words, and sentences joined together. If the recap reads at the notes' level, learners will blame themselves for confusion the notes caused.

### Mechanics

| Item | Rule |
|---|---|
| **Sentence length** | Average 15–18 words. Hard cap of 25. Keep one idea per sentence. If a sentence has two "which" or "and" clauses, split it. |
| **Paragraphs** | No more than 3 sentences. On a phone, 4 lines is already a lot. |
| **Person and voice** | Use "you" for the learner. Use active verbs: "The firm cuts price", not "Price reduction is adopted by the firm". |
| **Jargon** | Introduce each term once, **in bold**, with a plain meaning straight after it in the same sentence or the next one. From then on, use exactly the same term. Never switch between synonyms (see principle 3). |
| **Abbreviations** | Spell out every abbreviation on first use in each topic, because learners will enter topics out of order. Example: "marginal revenue (MR)". After that, MR, MC, AC, PED and similar are fine. |
| **Maths in text** | Use words first, then the formula, then one worked line with real units. Use × for multiplication, not `*` or `x`. Use a true minus sign (−) and Unicode superscripts (Q²). Put spaces around operators: `MR = MC`. Avoid calculus notation (dπ/dQ) in recap text. Say "the extra profit from one more unit" and show the derivative only in an optional "for the exam" fold. |
| **Elasticity sign** | Choose one convention and say it every time. Recommended: "Price elasticities are negative. When we say 'greater than 1' we mean ignoring the minus sign." The notes switch between conventions without warning (see §3). |
| **Spelling** | **British, -ise form**: organise, maximise, optimise, analyse, minimise, behaviour, labour, favour, programme, centre, fibre, licence (noun) / license (verb), practice (noun) / practise (verb). Ghana uses British spelling, and the app's prose already mostly does ("organise", "practise", "behaviour"). Note: `index.html` still has a few American forms in visible text (`behavior` ×16, `analyze` ×1, `maximiz` ×2). Some are code identifiers, but any that are user-facing should be fixed in the same pass. The lecture notes mix -ize and -ise. Normalise to -ise when quoting or paraphrasing them. |
| **Currency** | Write `GH₵ 75` (symbol, thin or normal space, amount) and `US$ 5,000`. Say "pesewas" for amounts under a cedi. The notes use "Ghc", "GHc", "Gh" and "$" inconsistently. Normalise them all. |
| **Numbers and dates** | Use 10,000 (comma for thousands) and 3.5 (point for decimals). Write dates as 20 November 2026. Write times as 09h20, matching the app's existing style. Use "%" rather than "per cent", because it's shorter on a phone. |
| **Illustrative figures** | Every Ghana example with prices must carry the small label "Illustrative figures". Fares, tariffs and cocoa prices change often, and we must not appear to state current official rates. |
| **Tone markers** | No exclamation marks in teaching text. No emoji. No "Great job!!!". No "simply" or "easily" (they shame people who find it hard). |

### Principles, with do/don't pairs

Each "Don't" is a real line from the notes or app. Each "Do" is how the recap should say it.

**1. Start with the decision, then name the idea.**
Managers remember the question an idea answers better than its definition.

- **Don't (WK1 l.181):** "Marginal analysis trace the impact on the outcome variable (profit) for changing the decision variable (quantity)."
- **Do:** "Should you make one more unit? Make it if it adds more to revenue than to cost. That habit of asking 'what does one more add?' is **marginal analysis**."

**2. Use one idea per sentence, and keep sentences under 25 words.**

- **Don't (WK1 l.113):** "Low price driven by severity of the health problem, treat by national governments to revoke or ignore drug patent and penetration of synthetic products into the Africa market from India."
- **Do:** "AIDS drug prices in Africa fell for three reasons. The health crisis was severe. Governments threatened to ignore the patents. And cheaper generic versions arrived from India."

**3. Introduce a term once, define it straight away, and then never change its name.**
Learners reading in a second language reasonably assume that a new word means a new thing.

- **Don't (WK1 l.733–762):** the same quantity is called "quantity demand", "Qtydd", "Quantity dd" and "quantity demanded" within two slides. The notes also write "arch-price elasticity" (l.805) for *arc elasticity*.
- **Do:** "**Quantity demanded** is how much buyers want to buy at a given price." Then use "quantity demanded" every time, and spell it "arc elasticity".

**4. Put words before symbols, then show one worked line with real units.**

- **Don't (WK1 l.1329–1341):** "MPL/MPK denotes the marginal rate of technical substitution labour for capital (MRTS). Thus, the rate at which the firm is willing to substitute labour for capital. Captures the slope of the isoquant."
- **Do:** "The cheapest mix of workers and machines is reached when the last cedi spent on each brings the same extra output. If one more worker adds 10 units for GH₵ 100, and a machine hour adds 30 units for GH₵ 300, both give 0.1 units per cedi, so the mix is right."

**5. Be honest about limits. Don't oversell.**
The app's best lines are frank about what they can't do. The recap should be too.

- **Do (app, README l.72–74):** "Those timings come from the student pack — the facilitators keep the real clock."
- **Do (app, README l.130–131):** "It does not write your reflections or your reports, and nothing in it is a grade or an estimate of one."
- **Don't (WK1 l.22):** "With economic tools managers can easily skip complex everyday challenges." This overpromises, and "skip" is the wrong word.
- **Do:** "Economic tools won't remove hard choices. They give you a fair way to compare the costs and benefits of each option."

**6. Write for a busy adult colleague: warm and brief, never cheerleading.**

- **Do (app, `index.html` drill feedback):** "Correct with a hint, so the streak holds rather than advances." and (README l.295) "a hint costs progress, not ground."
- **Do (app):** "Not quite … Tap another option if you want to revise your answer."
- **Don't (app, `index.html`):** "No resources mounted yet." Here "mounted" is developer language. Say "No resources here yet."

**7. Use local examples that are accurate, everyday and respectful.**
Use the full range of Ghanaian working life: office commutes, MoMo, ECG bills, data bundles, chop bars, cocoa, Makola, Kejetia, intercity buses, PURC tariff reviews. Don't treat Ghana only as a place of shortage or informality. Never use "inferior good" or "lemon" in a way that sounds like a judgement on people. Add: "*Inferior* is a technical word here. It only means people buy less of it as income rises."

- **Do (WK2 l.561–572, after correction):** the notes' own tutoring example in cedis. A couple will pay up to GH₵ 100 an hour, the retired teacher's price is GH₵ 60, and they agree GH₵ 75. This is a real, warm, recognisable example.
- **Don't (same slide):** "Gh375", "Ghc600" and "GHc4" appear within a few lines. Use one currency style.

**8. Use plain verbs and active voice, and say who does what.**

- **Don't (WK1 l.630–631):** "The identification of such smaller markets should control for extraneous factors such as culture, brand loyalty etc that could affect sales."
- **Do:** "Choose test markets that are alike in culture and brand loyalty. Otherwise you won't know whether price or something else changed sales."

---

## 2. Plain-language glossary (48 terms)

Each entry gives four things:

- **Lecture:** the lecture's technical definition, paraphrased accurately, with its source.
- **Plain:** one plain sentence.
- **Ghana:** an everyday Ghana or West Africa example.

All money figures are illustrative, not official rates. Where the notes contain an error, the definition follows the correct textbook meaning, and the error is listed in §3.

### A. Decisions and thinking at the margin

**1. Managerial economics**
- *Lecture (WK1 l.14–24):* Using economic tools such as markets, competition, risk and regulation to solve managers' decision problems by comparing costs and benefits.
- *Plain:* Economics used as a toolkit for business decisions.
- *Ghana:* A bank deciding whether to open a new branch in Tamale or invest in its MoMo-linked app instead.

**2. Opportunity cost**
- *Lecture (WK2 l.35–43):* The benefit given up by not taking the next-best alternative. The true cost of a choice is its explicit cost plus this implicit cost.
- *Plain:* What you give up by choosing one option over the next-best one.
- *Ghana:* If a weekend MBA class means turning down GH₵ 600 of Saturday overtime, that GH₵ 600 is part of the class's real cost, on top of the fees.

**3. Explicit vs implicit cost**
- *Lecture (WK2 l.41–54):* Explicit costs are actual payments. Implicit costs are the value of resources the owner already has, such as their own time and effort.
- *Plain:* Money you pay out vs value you give up without paying anyone.
- *Ghana:* A chop bar owner pays rent (explicit). She also works 12 unpaid hours a day that could earn a salary elsewhere (implicit).

**4. Accounting profit vs economic profit**
- *Lecture (WK2 l.44–56):* Accounting profit is revenue minus explicit costs. Economic profit also subtracts implicit costs.
- *Plain:* Economic profit asks whether the business beats your best other use of your money and time.
- *Ghana:* A shop shows GH₵ 4,000 a month accounting profit. The owner left a GH₵ 5,000 job to run it, so its economic profit is negative.

**5. Sunk cost**
- *Lecture (WK2 l.72–76):* Money already spent that cannot be recovered. It should be ignored when choosing between options.
- *Plain:* Money that is gone whatever you decide next, so it shouldn't change your decision.
- *Ghana:* You paid a GH₵ 5,000 non-refundable deposit on an event hall, then a better venue appears. The deposit is gone either way, so compare only what each venue will cost from now on.

**6. Relevant (differential) cost**
- *Lecture (WK2 l.27–33, 59–70):* Only the costs that differ between the options matter. Costs that are the same under every option can be left out.
- *Plain:* Count only the costs that change depending on what you choose.
- *Ghana:* Choosing between two delivery routes in Kumasi, the driver's fixed monthly salary is the same either way. Fuel and time are what differ.

**7. Marginal analysis**
- *Lecture (WK1 l.180–197):* Tracing how the outcome (profit) changes when the decision variable (quantity) changes by one unit. Profit is highest where marginal profit is zero.
- *Plain:* Ask what one more unit adds, and stop when it no longer adds anything.
- *Ghana:* A bakery adds one more batch of bread a day while each batch still brings in more than it costs.

**8. Marginal revenue (MR)**
- *Lecture (WK1 l.202–216):* The change in total revenue from selling one more unit. With a straight-line demand curve, the MR line has the same starting point but twice the slope.
- *Plain:* The extra money one more sale brings in, after any price cut you needed to make that sale.
- *Ghana:* A tomato seller at Makola who must drop the price on every basket to sell one more gains less than the price of that extra basket.

**9. Marginal cost (MC)**
- *Lecture (WK1 l.217–222; WK2 l.112–114):* The change in total cost from producing one more unit.
- *Plain:* What one more unit costs you to make.
- *Ghana:* For a sachet water producer, one more bag costs the water, film and power for that bag. The factory rent doesn't count.

**10. Profit-maximising rule (MR = MC)**
- *Lecture (WK1 l.223–226):* Profit is highest at the output where marginal revenue equals marginal cost.
- *Plain:* Keep producing until the last unit brings in exactly what it costs.
- *Ghana:* A poultry farmer expands until the last crate of eggs earns just enough to cover its feed and labour.

**11. Incremental analysis**
- *Lecture (WK1 l.427–476):* A wider version of marginal analysis for big decisions, such as a new product line. It compares revenue, cost and profit before and after the change, including future effects.
- *Plain:* Compare the business with and without the decision.
- *Ghana:* Before adding a second shift at a garment factory, compare total profit with one shift and with two. Include the overtime, the extra ECG bill and any lost sales from tired staff.

**12. Constrained optimisation and shadow price (λ)**
- *Lecture (WK1 l.255–319):* The best choice when a limit binds, such as a contract cap or a fixed supply. The Lagrange multiplier λ is the *shadow price*: the extra profit from relaxing the limit by one unit.
- *Plain:* The best you can do within a limit. The shadow price tells you what one more unit of the limited thing is worth to you.
- *Ghana:* If load-shedding limits a factory to 16 hours of power a day, the shadow price is the extra profit one more hour of power would bring. That is the most worth paying for a generator hour.

### B. Demand

**13. Law of demand**
- *Lecture (WK1 l.137–142, 487–491):* All other things being equal, a higher price lowers quantity demanded, and a lower price raises it.
- *Plain:* When something gets dearer, people buy less of it.
- *Ghana:* When a bag of rice goes up by GH₵ 50, many households buy a smaller bag or mix in gari.

**14. Desired vs effective demand**
- *Lecture (WK1 l.497–506):* Desired demand is willingness to buy. Effective demand is willingness backed by the ability to pay.
- *Plain:* Wanting something isn't demand until you can pay for it.
- *Ghana:* Many people want a new car. Effective demand is the people who can actually pay or get a loan this year.

**15. Demand shifters**
- *Lecture (WK1 l.544–577):* A change in the good's own price moves you *along* the demand curve. Changes in income, advertising, population, season, related prices, shocks such as COVID-19, or regulation *shift* the whole curve.
- *Plain:* Anything other than the good's own price that changes how much people want at every price.
- *Ghana:* School reopening shifts demand for uniforms and exercise books outwards in September, at every price.

**16. Price elasticity of demand (PED)**
- *Lecture (WK1 l.726–772, 824–837):* The % change in quantity demanded divided by the % change in its own price.
  - Above 1 (ignoring the sign) is elastic.
  - Below 1 is inelastic.
  - Exactly 1 is unit elastic.
  - 0 is perfectly inelastic. Infinite is perfectly elastic.
  - On a straight-line demand curve, elasticity changes from point to point.
- *Plain:* How strongly buyers react to a price change.
- *Ghana:* If trotro fares rise 10% and trips fall only 2%, PED is about −0.2 (inelastic), because most commuters have no cheaper way to get to work.

**17. What makes demand elastic**
- *Lecture (WK1 l.849–862):* Demand is more elastic for luxuries, goods with close substitutes, goods that take a big share of the budget, and when buyers have more time to adjust. Strong habits make demand inelastic.
- *Plain:* People react more when they have other choices, when the item is costly, or when they have time to switch.
- *Ghana:* A rise in one network's data prices sends people to another network within days. A rise in the price of salt barely changes how much salt anyone buys.

**18. Arc elasticity**
- *Lecture (WK1 l.801–815; spelled "arch" in the notes):* Elasticity measured between two points using the *average* price and quantity. It gives the same answer whether price rises or falls.
- *Plain:* An elasticity that doesn't depend on which direction you measure from.
- *Ghana:* Fuel goes from GH₵ 14 to GH₵ 15 a litre and back again. Arc elasticity gives one figure for both moves.

**19. Price elasticity and total revenue**
- *Lecture (WK1 l.864–919):* Where demand is elastic, a price cut raises total revenue and MR is positive. Where demand is inelastic, a price rise raises total revenue and MR is negative. At unit elasticity, MR = 0. MR = P × (1 + 1/PED).
- *Plain:* Cut price when buyers are sensitive. Raise it when they aren't.
- *Ghana:* The Monsanto case (MON l.43–47): Roundup's price fell 9% a year while volume grew 22% a year, so revenue rose. Demand was elastic.

**20. Income elasticity of demand (YED)**
- *Lecture (WK1 l.1010–1025):* The % change in quantity demanded divided by the % change in income.
  - Positive means a normal good. Between 0 and 1 is a necessity.
  - Above 1 is a luxury.
  - Negative is an inferior good. Here *inferior* is a technical term, not a judgement.
- *Plain:* How buying changes when people earn more.
- *Ghana:* As households connect to the grid and incomes rise, they buy less kerosene for lamps (negative YED) and eat out more often (YED above 1).

**21. Cross-price elasticity of demand (CPED)**
- *Lecture (WK1 l.1027–1042):* The % change in quantity demanded of one good divided by the % change in another good's price.
  - Positive means substitutes.
  - Negative means complements.
  - **The WK1 slide reverses these labels. Use the version here (see §3).**
- *Plain:* Does a price change in one product push people towards, or away from, another?
- *Ghana:* LPG gets dearer and charcoal sales rise, so they are substitutes (positive). Gari and beans (gob3) are eaten together: if beans get much dearer, people buy less gari too, so they are complements (negative).

**22. Pure selling problem**
- *Lecture (WK1 l.921–931):* When an extra unit costs almost nothing to supply (MC ≈ 0), maximising profit means maximising revenue. So you sell until MR = 0.
- *Plain:* If one more sale costs you nothing, chase revenue.
- *Ghana:* An intercity bus already leaving Accra for Kumasi with empty seats should fill them at whatever price adds revenue.

### C. Pricing

**23. Contribution (margin)**
- *Lecture (WK1 l.933–944; WK2 l.257–261):* (Price − marginal or average variable cost) × quantity. This is what sales add towards fixed costs and profit.
- *Plain:* What each sale leaves over, after its own direct costs, to pay the rent and make a profit.
- *Ghana:* A waakye plate sells for GH₵ 20 and its ingredients cost GH₵ 12, so each plate contributes GH₵ 8 towards the stall rent.

**24. Mark-up pricing rule**
- *Lecture (WK1 l.946–962):* The best mark-up depends on elasticity: (P − MC) / P = 1 / |PED|, or equivalently P = [PED / (1 + PED)] × MC. The more elastic the demand, the smaller the mark-up. This only works when demand is elastic (|PED| > 1).
- *Plain:* Charge a bigger margin when customers have few alternatives, and a thin margin when they can easily go elsewhere.
- *Ghana:* With PED = −2, price is 2 × MC. A provision shop next to three others (very elastic demand) keeps mark-ups thin. The only shop at a remote junction can charge more.

**25. Full-cost (cost-plus) pricing**
- *Lecture (WK1 l.965):* Price = (1 + m) × average cost, where m is a fixed mark-up percentage.
- *Plain:* Add a set percentage on top of what it costs you on average.
- *Ghana:* A tailor charges cost of fabric and labour plus 30% for every kaba and slit.

**26. Price discrimination: first degree**
- *Lecture (WK3 l.41–51):* Charging each buyer the most they are willing to pay (their *reservation price*), so the seller captures all consumer surplus. This needs detailed information about each buyer.
- *Plain:* A different price for every customer, set at the most each one would pay.
- *Ghana:* Haggling in a market comes close. A good seller reads each buyer and starts near what that person will accept.

**27. Price discrimination: second degree**
- *Lecture (WK3 l.30–38):* The price depends on the quantity bought, for example block pricing or bulk discounts.
- *Plain:* Buy more, pay less per unit (or sometimes more per unit).
- *Ghana:* Bigger data bundles cost less per GB. ECG's residential tariff charges different rates per kWh for different consumption blocks, including a lower "lifeline" rate for very low use.

**28. Price discrimination: third degree**
- *Lecture (WK3 l.40–51):* Different prices for different customer groups whose demand elasticities differ, such as students, age groups or employment status.
- *Plain:* One price for each group of customers.
- *Ghana:* Heritage sites such as Cape Coast Castle charge Ghanaians, students and international visitors different entry fees. PURC's separate residential and non-residential electricity tariffs are another example.

**29. Two-part pricing**
- *Lecture (WK2 l.782–785; WK3 l.54, slide content missing):* A fixed fee plus a per-unit price, often set near marginal cost.
- *Plain:* Pay to join, then pay for each use.
- *Ghana:* A gym charges a monthly membership plus a fee per class. A utility bill has a fixed service charge plus a charge per kWh.

### D. Production and cost

**30. Fixed vs variable cost**
- *Lecture (WK1 l.162–166; WK2 l.83–91):* Fixed costs don't change with output. Variable costs rise with output. Total cost = TFC + TVC.
- *Plain:* Costs you pay whatever you produce vs costs that grow with each unit.
- *Ghana:* For a trotro owner, insurance and the car loan are fixed. Fuel rises with every trip.

**31. Average total cost (AC or ATC)**
- *Lecture (WK2 l.97–111):* Total cost divided by output. It equals average fixed cost plus average variable cost. It usually falls and then rises (U-shaped), and average variable cost reaches its lowest point before AC does.
- *Plain:* Cost per unit, counting everything.
- *Ghana:* A block factory spending GH₵ 30,000 in a month to make 10,000 blocks has an AC of GH₵ 3 per block.

**32. Short run vs long run**
- *Lecture (WK1 l.1135–1146; WK2 l.79–80, 135–138):* In the short run at least one input, usually capital, is fixed. In the long run every input can change.
- *Plain:* The short run is "with the factory you have". The long run is "when you can build or close factories".
- *Ghana:* This month a cocoa processor can only add shifts. Over three years it can build a second plant.

**33. Law of diminishing marginal returns**
- *Lecture (WK1 l.1148–1162):* Adding more of a variable input to a fixed input eventually raises output by less and less.
- *Plain:* Past a point, each extra worker on the same equipment adds less.
- *Ghana:* A fourth person at a one-counter kiosk mostly gets in the way.

**34. Optimal input use (MRP = wage)**
- *Lecture (WK1 l.1164–1191):* Hire a variable input until its marginal revenue product (MR × marginal product) equals its price, for labour the wage.
- *Plain:* Hire another person while the revenue they bring in is more than their pay.
- *Ghana:* A call centre adds agents while each new agent brings in more than their GH₵ 3,000 monthly cost.

**35. Returns to scale**
- *Lecture (WK1 l.1207–1221):* What happens to output when *all* inputs double. More than double is increasing returns. Exactly double is constant. Less than double is decreasing.
- *Plain:* Does doubling everything more than double, exactly double, or less than double what you make?
- *Ghana:* Doubling a farm's land, labour and machinery may less than double output if managing two distant sites gets hard.

**36. Economies and diseconomies of scale**
- *Lecture (WK2 l.143–171):* Long-run average cost falls as output grows (economies) or rises (diseconomies). The cost elasticity is below 1 for economies and above 1 for diseconomies.
- *Plain:* Bigger makes each unit cheaper, up to a point. Beyond that point, bigger makes each unit dearer.
- *Ghana:* A large cement plant spreads the cost of its kiln over far more bags than a small one can.

**37. Minimum efficient scale (MES)**
- *Lecture (WK2 l.182–219):* The smallest output at which long-run average cost reaches its minimum. Dividing market demand by MES gives a rough number of firms the market can support.
- *Plain:* The smallest size that gets you the lowest cost per unit.
- *Ghana:* If a soap factory reaches its lowest unit cost at 1 million bars a year and the country buys 10 million, there is room for about 10 efficient factories.

**38. Economies of scope**
- *Lecture (WK2 l.220–237):* Producing several products together costs less than producing each separately. Causes include shared inputs, shared know-how and linked demand.
- *Plain:* Doing two things together is cheaper than doing them apart.
- *Ghana:* MTN uses the same network and agent outlets for calls, data and MoMo. A fuel station adds a mart and a car wash on the same land.

**39. Learning curve**
- *Lecture (WK2 l.321–333):* Average cost falls as experience builds. Learning rate = (1 − AC₂ / AC₁) × 100.
- *Plain:* The more you make, the better and cheaper you get at making it.
- *Ghana:* A new seamstress takes six hours for her first kaba and slit, and three hours by her fiftieth.

**40. Shutdown rule**
- *Lecture (WK2 l.249–261):* In the short run, keep operating while price covers average variable cost (P − AVC > 0), even if you are making a loss. Shut down if it doesn't.
- *Plain:* A loss-making business should stay open if each sale still helps pay the fixed bills.
- *Ghana:* In a slow month a chop bar charges GH₵ 20 a plate against GH₵ 14 of food and daily wages. It stays open, because each plate puts GH₵ 6 towards rent it owes anyway.

**41. Break-even and operating leverage**
- *Lecture (WK2 l.334–371):* Break-even output Q = TFC / (P − AVC). The degree of operating leverage (DOL) is the % change in profit for a 1% change in output. High fixed costs mean high DOL.
- *Plain:* Break-even is how many you must sell to cover all costs. Leverage is how sharply profit swings when sales change.
- *Ghana:* With GH₵ 600 stall rent and GH₵ 8 contribution per plate, the waakye seller breaks even at 75 plates a month. Above that, profit grows quickly.

### E. Markets and competition

**42. Perfect competition (price taker)**
- *Lecture (WK2 l.461–547):* Many buyers and sellers, identical products, full information, and free entry and exit. Each firm takes the market price as given and produces where P = MC. In the long run, profit falls to normal.
- *Plain:* So many sellers of the same thing that no single one can set the price.
- *Ghana:* One cocoa farmer, or one tomato seller in a busy market, cannot change the going price alone.

**43. Consumer and producer surplus**
- *Lecture (WK2 l.561–596):* Consumer surplus is what buyers would pay minus what they do pay. Producer surplus is the price received minus the seller's minimum. Their sum is the total benefit, which is largest where marginal benefit = marginal cost.
- *Plain:* The good deal each side gets from a trade.
- *Ghana:* Corrected from the notes: a couple will pay up to GH₵ 100 an hour for tutoring, the teacher's minimum is GH₵ 60, and they agree GH₵ 75 for 15 hours. The couple gains GH₵ 375, the teacher gains GH₵ 225, and the total is GH₵ 600.

**44. Monopoly, barriers to entry and deadweight loss**
- *Lecture (WK2 l.677–753):* A single seller with no close substitutes, protected by entry barriers such as patents, scale, capital needs or control of a key resource. It sets MR = MC, produces less and charges more than a competitive market would. The output lost to society is the *deadweight loss*.
- *Plain:* One seller, others kept out, higher prices, and some trades that never happen.
- *Ghana:* A patent-protected medicine before generics arrive. MON shows the same thing with Roundup in the US until 2000.

**45. Natural monopoly and regulated pricing**
- *Lecture (WK2 l.769–812; NEG l.56–62):* Average cost keeps falling across the whole market, so one firm is cheapest. Regulators either set *average-cost pricing* (covering costs plus a fair return) or *marginal-cost pricing*, which runs a loss that is covered by subsidy or a fixed fee.
- *Plain:* One network is cheapest for everyone, so a regulator sets its prices.
- *Ghana:* Electricity distribution and piped water. PURC reviews ECG and Ghana Water tariffs on the basis of costs.

**46. Oligopoly, cartel and market concentration (CR, HHI)**
- *Lecture (WK2 l.840–877, 1092–1115):* A few large, interdependent firms. They may coordinate formally (a cartel) or informally (collusion). Concentration is measured by the top-n share (CRₙ) or by the HHI, the sum of squared market shares, where above 1,800 means highly concentrated.
- *Plain:* A market of a few big players who watch each other's every move.
- *Ghana:* Mobile networks: MTN, Telecel and AT. In 2020 the NCA designated MTN as having significant market power. OPEC (PET) is the classic cartel.

### F. Strategy, risk and information

**47. Nash equilibrium, dominant strategy and prisoner's dilemma**
- *Lecture (WK3 l.159–229):*
  - A *Nash equilibrium* is where no player can do better by changing strategy alone.
  - A *dominant strategy* is best whatever the rival does.
  - In a *prisoner's dilemma*, each player's dominant strategy leaves both worse off than if they had cooperated. The notes' example is Coca-Cola and Pepsi both discounting.
- *Plain:* Sometimes each side's smartest move, made alone, hurts them both.
- *Ghana:* Two intercity bus companies on the Accra–Kumasi route each cut fares to win passengers. Both end up earning less than if they had held prices.

**48. Expected value and decision trees**
- *Lecture (WK3 l.400–456):* The probability-weighted average of outcomes. A decision tree sets out choices (squares) and chance events (circles). You work backwards from the ends of the branches.
- *Plain:* What a risky choice is worth on average, after weighing each outcome by how likely it is.
- *Ghana:* A cocoa farmer considers spending GH₵ 2,000 on fertiliser. There is a 60% chance of good rain (+GH₵ 5,000) and a 40% chance of poor rain (+GH₵ 1,000). Expected gain = 0.6 × 5,000 + 0.4 × 1,000 − 2,000 = GH₵ 1,400.

**49. Adverse selection and signalling**
- *Lecture (WK3 l.604–664):* Adverse selection happens when the party with hidden information about quality or risk uses it, so bad risks crowd out good ones (the "lemons" market). Signalling is how the better side proves its quality, for example through warranties, reputation or education.
- *Plain:* When buyers can't tell good from bad, the good tends to leave the market, unless sellers can prove quality.
- *Ghana:* At a used-car yard, buyers bring their own fitter to check a "home-used" car. Sellers with good cars offer a short warranty to stand out.

**50. Moral hazard and the principal–agent problem**
- *Lecture (WK1 l.101–103; WK3 l.665–674):* An agent who knows more than the owner (the principal) acts in their own interest rather than the owner's.
- *Plain:* When the person doing the work isn't the person bearing the cost, effort and care can slip.
- *Ghana:* Trotro owners often set drivers a fixed daily "sales" target. The driver keeps whatever is above it, which gives them a reason to work hard without the owner watching.

**51. Externality**
- *Lecture (WK1 l.42–46; WK2 l.654–673):* A cost or benefit that falls on people outside the transaction. Without regulation or a tax (τ), firms over-produce goods that harm others.
- *Plain:* A side effect your deal has on people who had no say in it.
- *Ghana:* Galamsey muddies rivers that downstream towns and farms rely on. The miners don't pay that cost.

**52. Pareto optimality (Pareto efficiency)**
- *Lecture (NEG l.76; WK2 l.548–596 on efficiency):* An allocation where no one can be made better off without making someone else worse off.
- *Plain:* A deal is Pareto optimal when there is no change left that helps someone without hurting anyone.
- *Ghana:* If ECG and a bulk customer can still adjust payment timing in a way that helps one side at no cost to the other, they haven't reached it yet.

**53. Take-or-pay vs take-and-pay (power purchase agreements, PPAs)**
- *Lecture (NEG l.27–30, terms listed but not defined):*
  - *Take-or-pay*: the buyer pays for an agreed quantity or capacity whether or not it uses it.
  - *Take-and-pay*: the buyer pays only for what it actually takes.
  - *Tolling*: the buyer supplies the fuel and pays the plant a fee to convert it into power.
- *Plain:* Take-or-pay means you pay for it even if you don't use it. Take-and-pay means you pay only for what you use.
- *Ghana:* Ghana's power sector has paid independent power producers for capacity it didn't use under take-or-pay contracts. This is why buyers now push for take-and-pay terms.

> **Count note:** that is 53, a little over the 35–50 target. If the content lead wants to trim, the best cuts are #3 (merge into #4), #18 (fold into #16), #25 (fold into #24) and #34. That gives 49.

> **BATNA is not in the notes.** The ECG session (NEG) lists "Knowledge is Power", incomplete information and relationship continuity, but never uses "BATNA". If the negotiation section wants it, mark it clearly as *beyond the lecture*:
> - *Plain:* your best option if this deal fails.
> - *Ghana:* a factory negotiating a bulk tariff with ECG has a stronger hand if it already has a quote for a gas-fired captive plant.

---

## 3. Garbled, wrong or confusing passages to fix in the recap

**Ordered by risk.** Group A could teach a wrong answer. Group B is missing content. Group C is wording that confuses but doesn't mislead. The content lead should confirm each item in Group A before the recap ships.

### A. Errors and contradictions (fix, don't reproduce)

| # | Where | Problem | Recap should say |
|---|---|---|---|
| A1 | WK1 l.1041–1042 | "CPED > 0 the goods are complements; CPED < 0 the goods are substitutes" is **reversed**. The same file at l.1062 correctly says "βr > 0 (substitute)". | Positive means substitutes. Negative means complements. |
| A2 | WK2 l.477–480 | A perfect competitor's demand curve is called "perfectly **inelastic**". It is perfectly **elastic** (horizontal). | Perfectly elastic: the firm can sell any amount at the market price and nothing above it. |
| A3 | WK2 l.561–566 | Tutoring example: the teacher's fee is "GH₵ 60 **per week**" (it should be per hour), and "any price between **40** and 100" should be **60** and 100. The surplus figures (375 / 225) only work with GH₵ 60 an hour. | GH₵ 60 an hour. Any price between GH₵ 60 and GH₵ 100 benefits both sides. |
| A4 | WK1 l.388–389 | "73.34% … to Market B and then the remaining **6.66%** to market A". It should be **26.66%** (13.33 of 50). | 73% to B and 27% to A. |
| A5 | WK1 l.397–398 | Says Market B gets the higher price because its demand is *less* elastic. At the computed points, B is actually *more* elastic (about −0.64 vs −0.50). Both markets have negative MR because the constraint forces 50 units. The usual rule doesn't hold here. | Don't use this example to teach "higher price where demand is less elastic". Use the WK1 mark-up rule (l.946–962) instead. **Content lead to verify.** |
| A6 | WK1 l.456–466 | Proposal 2 says "**0.95%** interest", but the working uses **9.5%** (0.095). l.468 writes "US$**1.350**" for US$ 1,350. | 9.5% and US$ 1,350. |
| A7 | WK1 l.218 | "MC = 100 + 38Q" is the total cost function, mislabelled as MC. The next line correctly gives MC = 38. | Total cost C = 100 + 38Q, so MC = GH₵/US$ 38 per unit. |
| A8 | WK1 l.1174 vs l.1182–1189 | First says hire "until MRP = 0", then "until MRP = wage". The first is only true if labour is free. | Hire until MRP = wage. |
| A9 | WK1 l.1221 | Decreasing returns is described as output elasticity "less than **zero**". It should be less than **one**. | Less than 1. |
| A10 | WK1 l.987–993 | The forecasting formula repeats the income term (YED × ΔInc/Inc) twice and leaves out the cross-price term. | %ΔQ = PED × %ΔP + YED × %ΔIncome + advertising elasticity × %ΔAd + CPED × %ΔP(related). |
| A11 | WK1 l.825–837 vs l.918 | The elasticity categories use positive numbers ("PED < 1"), but the MR example uses negative ones (PED = −2). There is no warning about the switch. | State the sign convention once per topic (see §1 Mechanics). |
| A12 | WK1 l.1023–1025 | "0 < YED < 1 normal good … YED > 1 luxury". This suggests luxuries are not normal goods. | Every good with positive YED is normal. 0–1 is a necessity, and above 1 is a luxury. |
| A13 | WK2 l.153 | "The long run AC is the envelope of **SMC**". It should be the envelope of the short-run **average** cost (SAC) curves. | The long-run AC curve traces the lowest short-run AC for each output. |
| A14 | WK2 l.790–812 | The natural monopoly slide gives two different demand curves (P = 22.5 − 0.0004Q and P = 270 − 0.00048Q). Price is computed from one and profit from the other. l.802 multiplies 15,250,000 × 0.12, but the investment is 125,000,000. | Don't reuse these numbers. Rebuild the example with one demand curve, or teach it with words only. **Content lead to verify.** |
| A15 | WK2 l.623 | "**Simon** (ecologist) predicted rise in metal price … while Simon predicted…". The first name should be **Ehrlich**. | Ehrlich (ecologist) predicted rising prices. Simon (economist) predicted falling prices. Simon won. |
| A16 | WK3 l.30–38 | Second-degree discrimination is illustrated with residential vs commercial electricity mark-ups. That is **third-degree** (by customer group). Only the bulk-purchase half of the example is second-degree. | Use consumption blocks or bulk discounts for second degree, and customer classes for third degree (glossary #27–28). |
| A17 | WK3 l.41–46 | First degree is described as different prices "in separate **markets**". First degree is per **buyer** (or per unit). | Each buyer pays their own maximum. |
| A18 | WK3 l.548–554 | Litigation case: "the **plaintiff** however disagrees". It should be the **defendant** (Engineers and Planners). | The defendant disagrees. |
| A19 | MON l.63–64 vs Exhibit 3 (l.186) | The text says Brazil's patent expired in **1981** with an **81%** share. The exhibit says **1983** and **82%**. | Quote the exhibit, or avoid the specific figure. |
| A20 | CHN l.4–5, l.83–84 | Mixes energy (kWh, "weekly record of 14.35 million kWh") with power (kW, "shortage … 30 million kilowatts … double Shanghai's peak"). | Keep the figures as quoted in the case, but don't compare kWh with kW in recap text. Add a one-line note: "kW is the rate of use; kWh is the amount used". |

### B. Missing content (don't invent; source it or leave it out)

| # | Where | Problem |
|---|---|---|
| B1 | WK3 l.21–29, 52–71, 90–91, 400, 457–462, 518–524, 584–603 | Many WK3 slides survive as bullets only ("•"). The equations and charts were lost in extraction. Affected: competitive and imperfect pricing rules, the mark-up/profit slide, the price discrimination illustration, two-part pricing, joint products in fixed proportions, probability/EV setup, sequential decisions, optimal inventory and value of information. The recap must take these from the original slides or the WK1 mark-up section, **not** reconstruct them from memory. |
| B2 | WK3 l.455 | The drilling EV[A] uses EV[C], which is never shown. The −US$ 83.7 can't be checked from the text. |
| B3 | NEG l.47–55 | The case table names "PFC" and "Goldfields Dameng" with no explanation. "GoG" (Government of Ghana) is never spelled out. Take-or-pay, take-and-pay, tolling and fuel acquisition are listed but never defined. The glossary above defines the PPA terms. The PFC and Dameng details need the speaker's slides. |
| B4 | WK1 l.1105, 1563; WK2 l.372–373, 1116–1117; WK3 l.92–93, 675–677 | Case scenarios (StarHub, Water 2007, Wednesday at Cinemex, Pricing at Dell, WorldCom) are named only. We have no case text for them. |

### C. Wording that confuses (rewrite plainly)

| # | Where | Original | Plain rewrite |
|---|---|---|---|
| C1 | WK1 l.22 | "managers can easily skip complex everyday challenges" | "managers can work through hard everyday choices" |
| C2 | WK1 l.72–90 | The decision-steps diagram is flattened, with headings after their own bullets. "Setting on alternatives produce opportunity cost". "how do they fell". | Six steps in order: define the problem, set the objective, list the options, predict the results, choose, then test the choice ("what if?"). Choosing one option has an opportunity cost. |
| C3 | WK1 l.113 | "treat by national governments" | "threats by governments" |
| C4 | WK1 l.157–159, 170–174 | Superscripts lost: "R = 170Q − 20Q / 2". | R = 170Q − 20Q² |
| C5 | WK1 l.442–444 | "renting a warehouse that cost US$8,000 per month according to lease contract for US$5,000 … Let or not to let?" | Unclear. Ask the lecturer. It probably means "a warehouse costs you US$ 8,000 a month on a lease; someone offers US$ 5,000 a month to sublet it". |
| C6 | WK1 l.844–847 | "Elastic is more price elastic on the upper part…" | "Demand is elastic on the upper part of a straight-line demand curve, unit elastic at the midpoint, and inelastic lower down." |
| C7 | WK1 l.1131–1133 | "a shift factor that from things like technological progress…" | "Total factor productivity shifts output up or down. It comes from technology, AI, shocks such as a pandemic, and regulation." |
| C8 | WK1 l.1177 | "employed at a fixed cost of w" | "hired at a wage of w per worker". It is a price, not a fixed cost. |
| C9 | WK2 l.59–60 | "Fixed costs do not vary with alternative courses of action and play no important role…" | "Costs that are the **same under every option** can be ignored for that choice." Not all fixed costs are irrelevant, for example in a long-run closure decision. |
| C10 | WK2 l.104–106 | AVC "reaches a minimum when total output reaches a maximum, and then rises again as total output falls" | "AVC falls at first, reaches a lowest point, then rises as diminishing returns set in." |
| C11 | WK2 l.118–120 | The SMC sentence is duplicated and cut off. | "Short-run MC = wage ÷ marginal product of labour. It rises when each extra worker adds less." |
| C12 | WK2 l.171 | "constant economies of scale" | "no economies or diseconomies of scale (constant returns)" |
| C13 | WK2 l.188–192 | MES given in "US$1 million", mixing money with output units. | Use units of output, or market share. |
| C14 | WK2 l.250 | "decision to boycott a product" | "decision to stop making a product" |
| C15 | WK2 l.584 | "greatest benefit to suppliers and producers" | "to consumers and producers" |
| C16 | WK2 l.813–814 | "Monopolist Competition … sits between the futures of" | "Monopolistic competition … sits between the features of" |
| C17 | WK2 l.857, 1003, 1088 | "Why such arrangements" / "behave like a perfectly theory" / "uncorporatively but corporatively … bared" | "While" / "behave like perfectly competitive firms" / "uncooperatively … cooperatively … barred" |
| C18 | WK2 l.1102–1113 | HHI formula lacks the square. The "< 20" and "> highly concentrated" thresholds are incomplete. | HHI = sum of (market share %)². Below 1,000 is unconcentrated, 1,000–1,800 is moderate, above 1,800 is high. |
| C19 | WK3 l.100, 131, 154, 563, 676 | "thathe", "corporative" (×3), "America rule", "Worlcom" | "that the", "cooperative", "American rule", "WorldCom" |
| C20 | WK3 l.171 | "In the case of Dominant strategy, no circumstance makes sense." | "A dominant strategy is best in every circumstance, so the player should always choose it." |
| C21 | WK3 l.193 | "Two suspects have been **convicted** … conviction can only secured by confessing" | "Two suspects have been **arrested**. They can only be convicted if one confesses." |
| C22 | WK3 l.627–648 | The lemons arithmetic jumps between US$ 11,000, 10,000 and 9,500 without explaining why. | Teach the idea in three steps (buyers can't see quality → they offer an average price → good cars withdraw). Leave out the number chain unless the content lead rebuilds it. |
| C23 | NEG l.56, 64 | "Theortical", "THEORICAL" | "Theoretical" |
| C24 | PET l.21, 37 | "Petroluem"; "In October, the Yom Kippur War in October 1973" | "Petroleum"; "In October 1973, the Yom Kippur War…" |
| C25 | All WK files | "ff" (following), "w.r.t", "dd", "qty", "mkt", "etc.." | Spell out in full. |

---

## 4. Microcopy for the recap UI

Copy follows the app's existing patterns: sentence case, short, second person, and no exclamation marks. `{COURSE}` is the upcoming course name. `{TOPIC}` and `{NEXT_TOPIC}` are recap topic titles. Character counts are given where space is tight.

### Welcome screen: headline and subline (3 options)

**Option A: practical** *(recommended)*
- **Headline:** Managerial Economics, refreshed
- **Subline:** The ideas {COURSE} builds on, in short topics you can finish between work and home. Skip what you already know.

**Option B: warm**
- **Headline:** Before {COURSE}, a quick look back
- **Subline:** Demand, cost, pricing and negotiation, explained plainly with Ghana examples. About ten minutes a topic.

**Option C: direct**
- **Headline:** Know it already? Prove it and move on.
- **Subline:** A short check shows which Managerial Economics topics to revisit before {COURSE}. The rest you can skip.

*Notes:* A reads best on a 360 px screen, because the headline stays on one line. If the course name turns out to be long (over about 30 characters), use A or C, which keep `{COURSE}` out of the headline. Only use "about ten minutes" once real topic lengths are measured.

### Readiness check intro

> **Where should you start?**
> Answer six quick questions. There is no score and nothing is recorded as a grade. Your answers only decide which topics open first. You can still open any topic yourself.
>
> **[Start the check]** · *Skip the check and choose topics myself*

### Topic complete

> **{TOPIC}: done**
> You can now explain {ONE_OUTCOME}.
> Next: {NEXT_TOPIC}. **[Continue]** · *Back to topics*

Example with the fields filled in: "**Cost analysis: done.** You can now explain why sunk costs don't belong in a decision. Next: Pricing."

On the final topic: "**That's the full recap.** You're ready for {COURSE}. Come back any time a term comes up that you want to check."

### "Skip — I know this" confirmation

> **Skip {TOPIC}?**
> It stays in your topic list, so you can come back to it any time. Skipping doesn't mark it as learned.
>
> **[Yes, skip it]** · **[Keep it]**

*Notes:* The two buttons are equal in weight, and neither is shown in red. Skipping is a fair choice for experienced people, not a risky one.

### Empty resources shelf

> **No resources here yet**
> Slides, readings and cases for {COURSE} will appear here once they're shared. The recap works fully without them.

*This replaces the app's current "No resources mounted yet", where "mounted" is developer language.*

### "New resource added" badge

- **Badge (on the card):** `New` (3 characters; matches the app's short tag style)
- **Accessible label:** "New resource, added {D Month}"
- **One-time notice (toast):** "New: {RESOURCE_TITLE} added to Resources." **[Open]**
- Clear the badge once the learner opens the resource, or after 7 days.

### Academic-integrity line

The app's existing lines all name MBA512's rule, for example: "AI tools are not allowed for MBA512 graded deliverables … This app is for learning and revision only." We don't yet know the AI policy for {COURSE}, so the recap must not claim a ban that may not exist.

**Banner tag (unchanged):** `Learning use only`

**Line to use now:**
> This recap is for learning and revision only. It does not write graded work. Check the {COURSE} course outline for its rules on AI tools, and complete every graded deliverable on your own.

**Line to use once the {COURSE} outline confirms an AI ban** (mirrors the MBA512 wording):
> {COURSE} does not allow AI chatbots for graded work, including quizzes, assignments, case analysis and the final exam. Use this recap to learn the material beforehand, then complete deliverables on your own.

**Action for the team:** confirm the {COURSE} AI policy with the course outline before launch, then switch lines.
