# MBAassist visual refresh: Harmattan Ledger

*Creative / visual design. 20 Nov 2026. Scope as revised by the coordinator: the Managerial Economics pre-course recap is its own course card on the hub (for an upcoming course, name TBD), not part of Cross-Border. The Cross-Border course is being removed.*

Files that go with this note:

| Path | What |
|---|---|
| `/home/claude/team/svg/demand-elasticity-revenue.svg` | Diagram (a): elastic vs inelastic range, revenue rectangles |
| `/home/claude/team/svg/short-run-cost-curves.svg` | Diagram (b): MC, AVC, ATC, AFC |
| `/home/claude/team/svg/monopoly-pricing.svg` | Diagram (c): D, MR, MC, ATC, MR = MC, profit |
| `/home/claude/team/svg/spot-recap-welcome.svg` | Spot illustration for the recap welcome / hub card |
| `/home/claude/team/svg/_generate.py` | Generator for all four (coordinates are computed from the equations and checked with asserts) |
| `/home/claude/team/visual-preview.html` | Self-contained preview: tokens + components + diagrams. Open it and toggle `body.dark` |
| `/home/claude/team/shots/current-*.png` | The app as it is now, 390 px, light and dark |
| `/home/claude/team/shots/proposed-*.png` | The preview page, 390 px, light and dark |

---

## 1. Diagnosis of the current look

Rendered with headless Chrome at 390 × 844, light and dark (`shots/current-*`). I measured contrast with the WCAG formula.

### Keep

- **The token architecture.** `:root` plus `body.dark`, with every component reading `var(--…)`. That is why the refresh can stay at token level. The fix for `body.in-lecture` / `--wh` (declare it on `body`, not `:root`) is correct; keep it.
- **Warm paper neutrals and the maroon accent** (`#8A2E3B`). They already sit near Ashesi's maroon and read as serious rather than techy. The direction below builds on them.
- **Mono numerals and tabular figures** for scores and counts (`.num`, `.rail-head b`). This is right for a numbers course.
- **Shape-coded state pips** on the concept page ("shape and fill carry the meaning, not colour alone"). The readiness meter below uses the same rule.
- **Per-lecture hues** on the finance cubes (`current-dark-8-finance-scroll.png`). They work and stay as they are.
- **The finance hero photo** with its overlay (`current-light-4-finance.png`). It is the warmest thing in the app.

### Change

1. **`--ink-3` fails WCAG AA in light mode.** `#8C8274` gives 3.35:1 on `--bg` and 3.72:1 on `--surface`. It is the most-used text token after `--line` (71 uses), mostly for eyebrows and meta text at 10.5–12.5 px, where 4.5:1 is required. The new value, `#6B6152`, gives 5.4:1 and 5.9:1. Dark `--ink-3` drops to 3.89:1 on `--raised`; the new value gives 5.5:1.
2. **`--gold` fails as text** in light mode: `#B07A2E` gives 3.28:1. The new value, `#8A6116`, gives 4.9:1.
3. **`--yes` and `--yes-bg` are used but never defined.** `.cb-check button.right` and `.cb-quiz button.right` reference them, so a correct answer gets no border colour. The token set now aliases them to `--ok` and `--ok-bg`.
4. **The accent changes hue family between themes.** It is maroon `#8A2E3B` in light and orange `#D98A63` in dark, so the brand reads as two apps (compare `current-light-4` with `current-dark-4`). Dark now uses a lifted maroon-rose, `#E8979F` (7.9:1 on surface).
5. **Hard-coded colours bypass the themes.** `#2F6F5E` appears 15 times in the Sustainable Leadership CSS, plus `#FFF7E6`, `#7A4D00`, `#2D2413` and `#F3C46B` for warnings, and rgba overlays on the welcome form. These are now tokens: `--sl`, `--warn`, `--warn-bg` and `--warn-line` (find/replace list in §2.6).
6. **The top-bar eyebrow wraps and repeats the title.** At 390 px, "MBA512 · MANAGERIAL / FINANCE" wraps to two lines above "Managerial Finance", and "CROSS-BORDER / BUSINESS" does the same (`current-light-4`, `current-light-5`). That costs about 30 px of sticky header on every screen. Show the eyebrow only when it differs from the title, and give it `white-space:nowrap;overflow:hidden;text-overflow:ellipsis`.
7. **Eyebrow sizes are inconsistent.** Most are 10.5 px, but "COURSE EXPECTATIONS" and "WEEK 2" render at about 13 px with wider tracking (`current-light-5`, `current-light-9`). Use one eyebrow at 11 px (the minimum on the new scale).
8. **The theme toggle glyph `◐` is nearly invisible.** It renders as a tiny half-dot inside a 44 px button on every screen and looks broken. Replace it with a 20 px inline SVG sun/moon drawn in `currentColor`.
9. **Form-control borders are too faint.** Inputs, selects and meter outlines use `--line` (about 1.2:1). WCAG 1.4.11 asks for 3:1 on control boundaries. The new `--line-strong` (3.3–3.6:1) is for controls only; cards keep the quiet `--line`.
10. **The hierarchy is flat.** Every screen is the same 14 px-radius card on the same paper, every title is 17–26 px bold sans, and nothing has a voice of its own. The two expressive pieces pull in different directions: a cartoon mentor on the welcome screen (`current-light-1`) and a photo on the finance hero. The direction below adds a display serif (system fonts only) and one illustration grammar.
11. **Small craft bugs:**
    - The "About the course" notice touches the overview card above it (no top margin, `current-light-5`).
    - "1 mastery cards" (`current-light-9`).
    - The meta `theme-color` is hard-coded to dark `#14110C` even in light mode. Swap it in `toggleTheme`.
12. **Asset weight.** `study-hero.png` (1.8 MB) and `finance-bg.png` (1.1 MB) are the heaviest part of the first offline install, on mobile data in Ghana. The recap uses inline SVG only (about 30 KB for all four files). Recompressing these two images is outside this brief but cheap.

---

## 2. Visual direction: **Harmattan Ledger**

Ghana's dry season paints everything the same warm, dusty paper tone. Under that haze, the things that matter stay crisp: the red-brown laterite of the roads, the deep indigo of West African dye-work, the maroon of Ashesi, and the ruled columns of a trade ledger or a tariff sheet. The recap is a set of numbers you trade on: prices, costs, margins, a power purchase agreement negotiated with ECG. So the look borrows the *discipline* of a ledger (ruled lines, mono figures, a clear column of evidence) and the *temperature* of the harmattan (paper neutrals, ochre, laterite). It does not borrow cloth patterns.

The colours carry no pattern, so there is no kente, no adinkra wallpaper and no map-of-Africa clip art. Indigo and laterite do semantic work: indigo is the buyer's side (demand) and laterite the seller's cost side (MC). That pairing is also the classic colour-blind-safe blue/orange contrast. The display serif is drawn from the system and gives headings an editorial weight that suits a professional degree.

The brand is still Ashesi maroon. Indigo becomes the colour of the recap course, so it reads as its own course on the hub without a new brand.

### 2.1 Tokens: drop-in replacement for the current `:root` and `body.dark`

Every existing name is kept (`--bg --surface --raised --ink --ink-2 --ink-3 --line --line-2 --ok --ok-bg --no --no-bg --accent --gold --mono --sans --safe-b --safe-t --r`), so Managerial Finance and Sustainable Leadership keep working. New names are additions. Paste this over lines 15–33 of `index.html` and leave the `body.in-lecture` rules below it untouched.

```css
:root{
  /* surfaces: harmattan paper */
  --bg:#F5F1E8; --surface:#FFFCF6; --raised:#F9F4EA; --sunken:#EEE7D8;
  /* ink */
  --ink:#1B1712; --ink-2:#4E463B; --ink-3:#6B6152;
  /* rules (ledger lines) */
  --line:#E4DCCC; --line-2:#CFC3AE; --line-strong:#8F8472;
  /* state */
  --ok:#2A6A46; --ok-bg:#E6F1E7; --no:#9A3324; --no-bg:#F8EAE4;
  --warn:#7A4D00; --warn-bg:#FBF1DC; --warn-line:#D9B56A;
  /* brand + roles */
  --accent:#8A2E3B; --accent-ink:#FFF8F2;
  --gold:#8A6116;
  --indigo:#2E4C8F; --teal:#1C6B63; --laterite:#A8452A; --ochre:#8A6116; --plum:#6E3F78;
  --sl:#2F6F5E;
  --focus:#2E4C8F;
  /* course hues for hub cards (--course) */
  --c-finance:#8A2E3B; --c-sustain:#2F6F5E; --c-recap:#2E4C8F;
  --dx-fill-o:.18; --dx-fill-o2:.09;
  --dx-land:#EADFC9; --dx-indigo-soft:#DCE3F2;
  /* type */
  --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,system-ui,sans-serif;
  --serif:"Iowan Old Style","Palatino Linotype",Palatino,"Book Antiqua",Charter,"Bitstream Charter","Noto Serif",Georgia,serif;
  --mono:ui-monospace,"SF Mono",Menlo,Consolas,"Roboto Mono",monospace;
  --fs-2xs:11px; --fs-xs:12px; --fs-sm:13.5px; --fs-base:16px; --fs-md:18px;
  --fs-lg:21px; --fs-xl:26px; --fs-2xl:32px; --fs-3xl:38px;
  --lh-tight:1.12; --lh-snug:1.3; --lh-body:1.55;
  /* space (4px base) */
  --s-1:4px; --s-2:8px; --s-3:12px; --s-4:16px; --s-5:20px; --s-6:24px; --s-7:32px; --s-8:48px;
  /* radii */
  --r-xs:5px; --r-sm:8px; --r-md:11px; --r:14px; --r-lg:14px; --r-xl:20px; --r-pill:999px;
  /* elevation: warm, low, layered */
  --e-0:none;
  --e-1:0 1px 0 rgba(60,40,15,.04),0 1px 2px rgba(60,40,15,.06);
  --e-2:0 1px 2px rgba(60,40,15,.06),0 6px 16px -6px rgba(60,40,15,.14);
  --e-3:0 2px 4px rgba(60,40,15,.06),0 18px 40px -12px rgba(60,40,15,.24);
  /* motion */
  --ease:cubic-bezier(.2,.7,.3,1); --ease-io:cubic-bezier(.65,0,.35,1);
  --dur-1:120ms; --dur-2:220ms; --dur-3:600ms;
  /* device */
  --safe-b:env(safe-area-inset-bottom,0px);
  --safe-t:env(safe-area-inset-top,0px);
}
body.dark{
  --bg:#12100C; --surface:#1B1813; --raised:#24201A; --sunken:#0C0A07;
  --ink:#F2ECE1; --ink-2:#C4BAA8; --ink-3:#A0957F;
  --line:#2F2920; --line-2:#40372B; --line-strong:#776B58;
  --ok:#7BC894; --ok-bg:#16261B; --no:#F0947C; --no-bg:#2C1913;
  --warn:#F3C46B; --warn-bg:#2B2213; --warn-line:#8A6A24;
  --accent:#E8979F; --accent-ink:#1F0E11;
  --gold:#E2B25A;
  --indigo:#93ABF0; --teal:#5EC4B6; --laterite:#F28F68; --ochre:#E2B25A; --plum:#CDA2D8;
  --sl:#6FC4A8;
  --focus:#93ABF0;
  --c-finance:#E8979F; --c-sustain:#6FC4A8; --c-recap:#93ABF0;
  --dx-fill-o:.24; --dx-fill-o2:.12;
  --dx-land:#2A241B; --dx-indigo-soft:#1C2436;
  --e-1:0 0 0 1px rgba(255,240,215,.03),0 1px 2px rgba(0,0,0,.4);
  --e-2:inset 0 1px 0 rgba(255,240,215,.04),0 8px 20px -8px rgba(0,0,0,.6);
  --e-3:inset 0 1px 0 rgba(255,240,215,.05),0 20px 44px -12px rgba(0,0,0,.7);
}
/* Aliases are declared on body, not :root: a var() resolves where it is declared,
   so aliases on :root would freeze the light values and ignore body.dark. */
body{
  --yes:var(--ok); --yes-bg:var(--ok-bg);
  /* diagram grammar: roles map onto palette */
  --dx-ink:var(--ink); --dx-label:var(--ink-2); --dx-axis:var(--ink-2); --dx-grid:var(--line);
  --dx-guide:var(--line-strong); --dx-point:var(--surface);
  --dx-demand:var(--indigo); --dx-mr:var(--indigo); --dx-supply:var(--teal);
  --dx-mc:var(--laterite); --dx-atc:var(--ochre); --dx-avc:var(--ochre); --dx-afc:var(--ink-3);
  --dx-mpc:var(--plum);
  --dx-revenue:var(--ochre); --dx-profit:var(--ok); --dx-loss:var(--no);
  --dx-cs:var(--indigo); --dx-ps:var(--teal); --dx-dwl:var(--ink-3);
}
```

**Contrast, measured.** Text tokens are checked against `--bg`, `--surface` and `--raised`. The worst case is shown.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--ink-2` | 8.2:1 | 8.4:1 | body copy |
| `--ink-3` | 5.4:1 | 5.5:1 | meta text and eyebrows (AA at any size) |
| `--accent` | 7.4:1 | 7.2:1 | links, emphasis |
| `--indigo` / `--teal` / `--laterite` / `--ochre` | 7.3 / 5.6 / 5.3 / 4.9:1 | 7.2 / 7.8 / 6.9 / 8.3:1 | curve strokes **and** curve labels (AA as text) |
| `--ok` / `--no` | 5.7 / 6.5:1 | 8.1 / 7.1:1 | state text |
| `--line-strong` | 3.3:1 | 3.1:1 | control borders, meter outlines (1.4.11) |
| `--accent-ink` on `--accent` | 7.9:1 | 8.3:1 | filled buttons |

### 2.2 Type

The app uses system fonts only. `--serif` falls back through Iowan Old Style (iOS/macOS), Palatino Linotype (Windows), Charter, Noto Serif (Android) and Georgia. Use it **only** for display headings of 18 px and up: recap unit titles, topic-card titles and the hub course title. Everything functional stays sans, and every figure stays mono.

| Token | px | Line height | Use |
|---|---|---|---|
| `--fs-3xl` | 38 | 1.12 | Welcome / hero only (serif) |
| `--fs-2xl` | 32 | 1.12 | Unit header title (serif) |
| `--fs-xl` | 26 | 1.2 | Section title, big stat (mono) |
| `--fs-lg` | 21 | 1.3 | Course card title (serif) |
| `--fs-md` | 18 | 1.3 | Topic card title (serif), card h3 (sans) |
| `--fs-base` | 16 | 1.55 | Body; never smaller for long reading |
| `--fs-sm` | 13.5 | 1.5 | Card body, callouts |
| `--fs-xs` | 12 | 1.45 | Meta, captions |
| `--fs-2xs` | 11 | 1.4 | Eyebrows (mono, tracking .14em, uppercase). **Floor: nothing below 11 px**, which replaces today's 10.5 px |

The serif runs at weight 600 with letter-spacing −.012em. Sans headings keep the current 640 / −.021em.

### 2.3 Space, radii, elevation, motion

- **Space**: 4 px base. `--s-1` 4 · `--s-2` 8 · `--s-3` 12 · `--s-4` 16 (card padding, phone gutter) · `--s-5` 20 · `--s-6` 24 (between sections) · `--s-7` 32 · `--s-8` 48. The current `.wrap` 18 px gutter can stay.
- **Radii**: `--r-xs` 5 (meter cells, kbd) · `--r-sm` 8 (number badges, chips) · `--r-md` 11 (inputs, buttons, matching today's 10–11) · `--r` / `--r-lg` 14 (cards, as now) · `--r-xl` 20 (hero and course cards, as now) · `--r-pill`.
- **Elevation**: the ledger look relies on rules more than shadows. `--e-1` (hairline lift) for tappable cards, `--e-2` for course cards and sheets, `--e-3` for menus and dialogs only. Light shadows are tinted warm brown (`rgba(60,40,15,…)`), never grey. In dark mode, shadows become a 1 px inner highlight plus a deep drop, because grey shadows vanish on near-black.
- **Motion**: `--dur-1` 120 ms (press), `--dur-2` 220 ms (reveal), `--dur-3` 600 ms (diagram shifts only). `--ease` is the existing curve. Every animation sits behind `prefers-reduced-motion: no-preference` or is cancelled under `reduce`.

### 2.4 What visibly changes on existing screens

- Meta text and eyebrows get darker and clearly legible.
- The dark accent becomes rose instead of orange.
- Gold text darkens slightly in light mode.
- Correct-answer borders in quiz checks appear (`--yes` now exists).
- Nothing changes in layout.

### 2.5 Course hues on the hub

- `--c-finance` (maroon) and `--c-sustain` (`--sl` green) are unchanged.
- The new recap card takes `--c-recap` (indigo). Set it with `style="--course:var(--c-recap)"`, the same mechanism the hub cards use now.
- When the Cross-Border tile is removed, its plum `#8A4A78` goes with it.

### 2.6 Hard-coded colours to swap (outside the recap)

| Find | Replace |
|---|---|
| `#2F6F5E` (15×, `.sl-*`) | `var(--sl)` |
| `#FFF7E6` / `#7A4D00` (light warn) and `#2D2413` / `#F3C46B` / `#8A6A24` (dark warn, `.sl-archived-note`, `.flagbtn.on`) | `var(--warn-bg)` / `var(--warn)` / `var(--warn-line)`; then delete the `body.dark` overrides |
| `rgba(255,253,249,.78)` / `rgba(29,25,18,.78)` (welcome form) | `color-mix(in srgb,var(--surface) 78%,transparent)` |
| `<meta name="theme-color" content="#14110C">` | Set in `toggleTheme` to `#F5F1E8` or `#12100C` |
| `.eyebrow{font-size:10.5px}` | `var(--fs-2xs)` |
| input / select / `.cb-field` border `var(--line)` | `var(--line-strong)` |

---

## 3. Illustration system for economics diagrams

All diagrams follow one grammar so a student learns the visual language once. The three finished SVGs are the reference; `_generate.py` contains the `Plot` helper that implements these rules.

### 3.1 Canvas

- Author at **viewBox width 360**. On a phone that is close to 1 user unit = 1 CSS px, so the type sizes below are real sizes. Height varies (420–600). Set `width="100%"`, no fixed height, and `max-width:480px` in the figure so desktop doesn't blow it up.
- **Embed inline** (paste the `<svg>` into the DOM). Do not use `<img src>` or `background-image`: those cannot see page CSS variables, so the diagram would ignore the theme. Each file also carries `var(--x, #fallback)` light-mode fallbacks so it still renders when opened on its own.
- Inside each SVG, the `<style>` block uses only `dx-` classes and is identical across files. Inlined into the page it becomes global, which is harmless here. Better still, move it once into the app stylesheet and strip it from the files. `clipPath` ids are unique per diagram (`dxb-clip`, `dxc-clip`); if one diagram ever appears twice on a page, suffix its ids.
- Structure: `<svg role="img" aria-labelledby="…-t …-d">`, then `<title>` (what it shows) and `<desc>` (the full numerical story in a sentence or three), then one `<g aria-hidden="true">` holding the drawing. A screen reader reads the desc instead of 80 text fragments.
- The plot area starts at x = 48, which leaves room for tick labels. Titles sit at x = 16, matching the card padding.

### 3.2 Axes, ticks, guides

| Element | Spec |
|---|---|
| Axes | `--dx-axis` (= `--ink-2`), 1.25 px, square caps, solid arrowheads at the open ends |
| Axis titles | 11 px sans 600, `--dx-label`. Y title sits at the top-left beside the arrow; X title right-aligned under the tick row. Always state units, in cedis: "Price (GH₵)", "Quantity per week" |
| Ticks | **Only at values the story uses** (P*, Q*, the two prices in a change), never a full scale. 11 px mono, tabular figures. Origin `0` is always shown |
| Guides (drop lines) | `--dx-guide` (= `--line-strong`), 1 px, dash `2 3`, from a point to both axes |
| Grid | None in diagrams. The ledger rules appear only in the spot illustration |

### 3.3 Curves: colour by economic role, with line style as a second channel

Colour is never the only cue. Each curve also has its own weight or dash and a **direct label at its end**. Diagrams never use a legend.

| Role | Token (→ palette) | Stroke | Dash | Label |
|---|---|---|---|---|
| Demand **D**, AR | `--dx-demand` → indigo | 2.5 | solid | `D` |
| Marginal revenue **MR** | `--dx-mr` → indigo | 2.5 | `7 5` | `MR` |
| Supply **S** | `--dx-supply` → teal | 2.5 | solid | `S` |
| Marginal cost **MC** | `--dx-mc` → laterite | **2.75** (heaviest: it decides) | solid | `MC` |
| Average total cost **ATC** (and LRAC) | `--dx-atc` → ochre | 2.5 | solid | `ATC` |
| Average variable cost **AVC** | `--dx-avc` → ochre | 2.5 | `8 5` | `AVC` |
| Average fixed cost **AFC** | `--dx-afc` → ink-3 | 2.25 | dotted `.5 5`, round caps | `AFC` |
| Second actor (e.g. the other bargainer, MPC) | `--dx-mpc` → plum | 2.5 | solid | name it |

The colour logic holds across topics: **blue = the buyer's side, orange-red = the seller's marginal cost, ochre = averages, grey = fixed.** A "family" (ATC/AVC, D/MR) shares a hue and is told apart by dash.

- **Ghosts**: a curve that is shown only for reference (the other half of a demand curve, or the old position before a shift) takes `.dx-ghost`, opacity .3, same stroke.
- **Curve labels**: 12.5 px sans 700, filled with the curve's own token, placed just past the curve's end (or just inside the plot when the curve exits the top), never on top of another line.

### 3.4 Areas

All areas use `fill-opacity: var(--dx-fill-o)`: .18 in light and .24 in dark, because dark needs more to read. Each area has a 1 px stroke in the same token so its edges hold without relying on the fill alone.

| Area | Token |
|---|---|
| Profit / revenue gained | `--dx-profit` (= `--ok`) |
| Loss / revenue given up | `--dx-loss` (= `--no`) |
| Revenue kept / total revenue background | `--dx-revenue` (ochre) at `--dx-fill-o2` (.09/.12), no stroke |
| Consumer surplus | `--dx-cs` (indigo) |
| Producer surplus | `--dx-ps` (teal) |
| Deadweight loss | `--dx-dwl` (ink-3) **plus a 45° hatch**, so DWL reads in greyscale too: `<pattern id="dx-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0V6" class="dx-guide" style="stroke-dasharray:none"/></pattern>` |

Put labels inside an area when the label fits with 6 px of clearance (e.g. "Profit", "−200"). Otherwise use a 1 px `--dx-guide` leader out to empty space, or a short ink arrow pointing in. The bottom panel of diagram (a) shows the arrow case.

### 3.5 Points, annotations, steps

- **Key points** (equilibria, MR = MC, minimums): r = 4, `--dx-point` fill (the card colour, so they look punched out), 2 px stroke in the colour of the curve that *defines* the point (MC for minimum-cost points). Secondary marks (the unit-elastic midpoint, the minimum of MC) are r = 3 solid dots.
- **Annotation text**: 11.5 px sans, `--dx-label`. Emphasis is `--dx-ink` weight 700 (`.dx-note-b`). Formulas use real minus signs (−) and multiplication signs (×), never hyphens and x.
- **Leaders**: 1 px `--dx-guide`, straight, from 3–5 px outside the point's edge to the start of the text.
- **Action arrows** (the reader's eye path: "read up to D", "price falls A → B"): 1.25 px `--dx-ink` with a filled triangular head 6 × 6.6, drawn as a path rather than a `marker`, so it themes everywhere.
- **Numbered steps**: when a diagram has a procedure, prefix with a bold numeral ("**1** MR = MC → Q*", "**2** read P* off D"). Numbers, not circled glyphs, because many Android fonts lack ①.
- **Under the plot**: one to three lines of 11.5 px text that give the takeaway or the arithmetic ("**Profit** = (P* − ATC) × Q* = …"). The diagram title above is 13 px / 700, with an optional 11.5 px subtitle.

### 3.6 Motion for shifts

A shift (demand rises, a cost shock moves MC, a tax shifts S) always has three layers:

1. The **old curve stays** as a ghost (`.dx-ghost`).
2. The **new curve** slides in from the old position.
3. A **shift arrow** between them fades in *after* the slide.

The new equilibrium point and its guides appear last.

```css
.dx-shift{--dx-from-x:0px;--dx-from-y:0px}
@media (prefers-reduced-motion:no-preference){
  .dx.is-playing .dx-shift{animation:dx-slide var(--dur-3) var(--ease) both}
  .dx.is-playing .dx-after{animation:dx-fade var(--dur-2) ease-out calc(var(--dur-3) + 60ms) both}
}
@keyframes dx-slide{from{transform:translate(var(--dx-from-x),var(--dx-from-y));opacity:.3}}
@keyframes dx-fade{from{opacity:0}}
```

```html
<path class="dx-curve dx-d dx-ghost" d="…old…"/>
<path class="dx-curve dx-d dx-shift" style="--dx-from-x:-40px" d="…new…"/>
<g class="dx-after"><!-- shift arrow, new equilibrium point, guides --></g>
```

- **Trigger:** play once, when the learner taps "Show the shift" (which toggles `.is-playing`) or when the figure first scrolls into view (IntersectionObserver). Never loop, and never autoplay a shift while the learner is reading the text that explains it.
- **Reduced motion:** with `prefers-reduced-motion: reduce`, no animation rule matches, so the figure shows the final state at once: ghost plus new curve plus arrow. That is a complete static diagram, which is why the ghost is always kept.
- **Units:** distances are in px, and CSS `transform` px on SVG elements map to user units. Shift by the true economic amount (e.g. ΔQ × units-per-px), not an arbitrary nudge.
- The only looping animation in the system is the spot illustration's route dash, which is decorative and stops under `reduce`.

---

## 4. The diagrams

Each one is verified in `_generate.py` by asserts on the equations, so the drawing matches the stated numbers.

**(a) `demand-elasticity-revenue.svg`**: demand P = 100 − Q, two stacked panels.
- *Elastic range:* P 80 → 70, Q 20 → 30. Revenue lost on the old units is −200 (red), gained from new buyers +700 (green), so TR goes 1,600 → 2,100.
- *Inelastic range:* P 30 → 20, Q 70 → 80. Lost −700, gained +200, so TR goes 2,100 → 1,600.
- Each panel emphasises its half of the curve and ghosts the other. The midpoint is marked "|ε| = 1, revenue peaks" (TR = 2,500 at Q = 50).

**(b) `short-run-cost-curves.svg`**: FC = 60, AVC = 30 − 6Q + 0.5Q², MC = 30 − 12Q + 1.5Q².
- MC bottoms at Q = 4 ("diminishing returns set in").
- MC cuts AVC at its minimum (6, 12) and ATC at its minimum (≈7.2, ≈21; it solves Q³ − 6Q² − 60 = 0).
- AFC = 60/Q falls throughout.
- A bracket at the right edge marks ATC − AVC = AFC, and the curves converge.

**(c) `monopoly-pricing.svg`**: D: P = 60 − Q; MR = 60 − 2Q; MC = 12 + Q; ATC = 200/Q + 12 + 0.5Q.
- MR = MC at Q* = 16 (both 28). Read up to D: P* = 44. ATC(16) = 32.5.
- Profit rectangle = (44 − 32.5) × 16 = GH₵184.
- ATC's minimum is at Q = 20, where MC crosses it (32), which keeps the cost curves consistent with (b).
- The markup note gives P* − MC = 16.

**Spot: `spot-recap-welcome.svg`**: an abstract strip of the Gulf of Guinea coast on faint ledger rules.
- Five port nodes run west to east (an Abidjan–Lagos-corridor feel, unlabelled) and are joined by a laterite dashed route that drifts slowly. The drift stops under reduced motion.
- A stack of four containers sits in maroon, indigo, ochre and teal, which are the four role colours.
- A low harmattan sun with haze rings sits to the right, and a faint demand curve crosses the land as a nod to the subject.
- It is decorative but keeps a title/desc pair. If it is used purely as decoration beside a heading, switch it to `aria-hidden="true"`.
- It sits at the top of the hub card and the recap welcome screen (`shots/proposed-pv-light-0.png`, `…-dark-0.png`).

Preview at phone width: `shots/proposed-pv-light-1..3.png` and `proposed-pv-dark-2..3.png`.

---

## 5. Component sketches

Classes are prefixed `rx-` (recap) so they can't collide with the `cb-` and `sl-` blocks. They use only tokens, and all four are shown working in `visual-preview.html`. Accessibility notes:

- Cards that contain headings are `<a href>` links rather than `<button>`, because a button may not contain an `h3`. The routes fit the app's existing hash routing (`#econrecap/cost`).
- State is carried by shape (empty, hatched, filled) as well as colour, and the cells carry screen-reader text.
- The readiness meter says plainly that it tracks practice and is not a grade, in keeping with the app's integrity stance.

### 5.1 HTML

```html
<!-- Hub course card: the recap as its own course (name TBD) -->
<a class="rx-course" href="#econrecap" data-course="econrecap" style="--course:var(--c-recap)">
  <div class="rx-course-art"><!-- inline svg/spot-recap-welcome.svg here --></div>
  <div class="rx-course-body">
    <p class="rx-eyebrow">Pre-course recap</p>
    <h2>Managerial Economics, in seven moves</h2>
    <p>Demand, costs, market power and bargaining: the toolkit your next course assumes.</p>
  </div>
</a>

<!-- 2. Unit header with progress -->
<header class="rx-unit-head">
  <p class="rx-eyebrow">Recap · Topic 3 of 7</p>
  <h2>Cost in the short and long run</h2>
  <p class="rx-lede">Why a factory's unit cost dips then climbs, and what that tells you about where to price.</p>
  <ol class="rx-steps" aria-label="Topic progress: step 2 of 4">
    <li class="done">Idea</li>
    <li class="now" aria-current="step">Diagram</li>
    <li>Check</li>
    <li>Apply</li>
  </ol>
  <div class="rx-unit-meta"><span>About 6 minutes</span><span class="rx-num">2 / 4</span></div>
</header>

<!-- 1. Recap topic card (a link, not a button: it holds a heading) -->
<a class="rx-topic" href="#econrecap/cost">
  <span class="rx-n" aria-hidden="true">03</span>
  <div>
    <h3>Cost in the short and long run</h3>
    <p>MC, AVC and ATC: why the curves are U-shaped and where they cross.</p>
    <div class="rx-meta"><span>6 min</span><span>4 checks</span><span class="rx-state read"><i aria-hidden="true"></i>Read</span></div>
  </div>
  <svg class="rx-glyph" viewBox="0 0 44 44" aria-hidden="true">
    <path d="M6 8 V38 H40" style="stroke:var(--line-strong);stroke-width:1.25"/>
    <path d="M9 14 Q20 46 38 10" style="stroke:var(--laterite)"/>
    <path d="M9 18 Q24 40 39 22" style="stroke:var(--ochre)"/>
  </svg>
</a>

<!-- 3. Readiness meter -->
<section class="rx-ready" aria-labelledby="rx-ready-h">
  <div class="rx-ready-head">
    <p class="rx-eyebrow" id="rx-ready-h">Readiness</p>
    <b>4<small> of 7 topics checked</small></b>
  </div>
  <ol class="rx-cells" aria-label="Topic status">
    <li class="done"><span class="rx-sr">Demand and elasticity: checked</span></li>
    <li class="done"><span class="rx-sr">Optimal decisions: checked</span></li>
    <li class="done"><span class="rx-sr">Short and long-run cost: checked</span></li>
    <li class="done"><span class="rx-sr">Scale and scope: checked</span></li>
    <li class="read"><span class="rx-sr">Market structures: read, not checked</span></li>
    <li class="read"><span class="rx-sr">Price discrimination: read, not checked</span></li>
    <li><span class="rx-sr">Bargaining: not started</span></li>
  </ol>
  <div class="rx-key" aria-hidden="true"><span><i></i>Not started</span><span><i class="read"></i>Read</span><span><i class="done"></i>Checked</span></div>
  <p>Next: <b>Market structures</b>. Answer its four checks to count it as ready. This tracks practice, not a grade.</p>
</section>

<!-- 4. "Where you'll use this" callout -->
<aside class="rx-use" aria-label="Where you'll use this">
  <svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="5" cy="15" r="2.2"/><circle cx="15" cy="5" r="2.2"/><path d="M6.6 13.4 C9 11 8 8 13.4 6.6"/></svg>
  <h4>Where you'll use this</h4>
  <p>Marginal cost is the floor for any price you quote.</p>
  <ul>
    <li>Pricing a product for a new market: is the price above MC?</li>
    <li>Reading a supplier's bid: which costs are fixed, which vary with volume?</li>
    <li>Bulk deals, like a power purchase agreement: why take-or-pay shifts fixed cost to the buyer.</li>
  </ul>
</aside>
```

### 5.2 CSS

```css
/* ---------- Managerial Economics recap: components (rx-) ---------- */
.rx-display{font-family:var(--serif);font-weight:600;letter-spacing:-.012em;line-height:var(--lh-tight)}
.rx-eyebrow{font-family:var(--mono);font-size:var(--fs-2xs);letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3)}
.rx-num{font-family:var(--mono);font-variant-numeric:tabular-nums}
.rx-topic:focus-visible,.rx-course:focus-visible{outline:2px solid var(--focus);outline-offset:2px}

.rx-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}

/* 1. Recap topic card */
.rx-topic,.rx-course{text-decoration:none}
.rx-topic{
  display:grid;grid-template-columns:auto 1fr auto;gap:var(--s-3);align-items:start;
  width:100%;text-align:left;color:var(--ink);
  background:var(--surface);border:1px solid var(--line);border-radius:var(--r);
  padding:var(--s-4);box-shadow:var(--e-1);
  transition:border-color var(--dur-1) var(--ease),transform var(--dur-1) var(--ease);
}
.rx-topic:active{transform:scale(.99)}
.rx-topic:hover{border-color:var(--line-2)}
.rx-topic .rx-n{
  font-family:var(--mono);font-size:var(--fs-xs);font-weight:700;color:var(--c-recap);
  width:30px;height:30px;border-radius:var(--r-sm);display:grid;place-items:center;
  border:1px solid color-mix(in srgb,var(--c-recap) 35%,var(--line));
  background:color-mix(in srgb,var(--c-recap) 8%,var(--surface));
}
.rx-topic h3{font-family:var(--serif);font-size:var(--fs-md);font-weight:600;line-height:var(--lh-snug);margin:0 0 var(--s-1)}
.rx-topic p{font-size:var(--fs-sm);color:var(--ink-2);line-height:1.5;margin:0}
.rx-topic .rx-meta{display:flex;gap:var(--s-2);flex-wrap:wrap;margin-top:var(--s-3);font-size:var(--fs-xs);color:var(--ink-3)}
.rx-topic .rx-meta span+span:before{content:"·";margin-right:var(--s-2)}
.rx-topic .rx-glyph{width:44px;height:44px;flex:none}
.rx-topic .rx-glyph path{fill:none;stroke-width:2;stroke-linecap:round}
/* state pip: shape carries meaning, colour reinforces */
.rx-state{display:inline-flex;align-items:center;gap:6px;font-weight:600;color:var(--ink-2)}
.rx-state i{width:10px;height:10px;border-radius:50%;border:1.5px solid var(--line-strong);display:inline-block}
.rx-state.read i{background:linear-gradient(90deg,var(--c-recap) 50%,transparent 50%);border-color:var(--c-recap)}
.rx-state.done i{background:var(--ok);border-color:var(--ok)}
.rx-state.done{color:var(--ok)}

/* 2. Unit header with progress */
.rx-unit-head{padding:var(--s-2) 0 var(--s-5);border-bottom:1px solid var(--line);margin-bottom:var(--s-5)}
.rx-unit-head h2{font-family:var(--serif);font-size:var(--fs-2xl);font-weight:600;letter-spacing:-.015em;line-height:var(--lh-tight);margin:var(--s-2) 0 var(--s-2)}
.rx-unit-head .rx-lede{font-size:15px;color:var(--ink-2);line-height:var(--lh-body);max-width:46ch;margin:0}
.rx-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--s-1);margin-top:var(--s-4);list-style:none;padding:0}
.rx-steps li{font-size:var(--fs-2xs);color:var(--ink-3);font-weight:600;letter-spacing:.02em}
.rx-steps li:before{content:"";display:block;height:4px;border-radius:var(--r-pill);background:var(--line);margin-bottom:6px}
.rx-steps li.done:before{background:var(--c-recap)}
.rx-steps li.now{color:var(--ink)}
.rx-steps li.now:before{background:linear-gradient(90deg,var(--c-recap) 40%,var(--line) 40%)}
.rx-unit-meta{display:flex;justify-content:space-between;align-items:baseline;margin-top:var(--s-2);font-size:var(--fs-xs);color:var(--ink-3)}

/* 3. Readiness meter */
.rx-ready{background:var(--surface);border:1px solid var(--line);border-radius:var(--r);padding:var(--s-4);box-shadow:var(--e-1)}
.rx-ready-head{display:flex;justify-content:space-between;align-items:baseline;gap:var(--s-3)}
.rx-ready-head b{font-family:var(--mono);font-size:var(--fs-xl);font-weight:600;letter-spacing:-.02em}
.rx-ready-head b small{font-family:var(--sans);font-size:var(--fs-sm);color:var(--ink-2);font-weight:500;letter-spacing:0}
.rx-cells{display:grid;grid-template-columns:repeat(7,1fr);gap:var(--s-1);margin:var(--s-3) 0 var(--s-2);padding:0;list-style:none}
.rx-cells li{height:22px;border-radius:var(--r-xs);border:1.5px solid var(--line-strong);background:transparent}
.rx-cells li.read{border-color:var(--c-recap);
  background:repeating-linear-gradient(135deg,color-mix(in srgb,var(--c-recap) 45%,transparent) 0 2px,transparent 2px 6px)}
.rx-cells li.done{border-color:var(--c-recap);background:var(--c-recap)}
.rx-key{display:flex;gap:var(--s-4);flex-wrap:wrap;font-size:var(--fs-xs);color:var(--ink-3)}
.rx-key span{display:inline-flex;align-items:center;gap:6px}
.rx-key i{width:12px;height:12px;border-radius:3px;border:1.5px solid var(--line-strong);display:inline-block}
.rx-key i.read{border-color:var(--c-recap);background:repeating-linear-gradient(135deg,color-mix(in srgb,var(--c-recap) 45%,transparent) 0 2px,transparent 2px 5px)}
.rx-key i.done{border-color:var(--c-recap);background:var(--c-recap)}
.rx-ready p{font-size:var(--fs-sm);color:var(--ink-2);margin:var(--s-3) 0 0;line-height:1.5}

/* 4. "Where you'll use this" callout */
.rx-use{
  position:relative;border:1px solid color-mix(in srgb,var(--indigo) 30%,var(--line));
  background:color-mix(in srgb,var(--indigo) 6%,var(--surface));
  border-left:3px solid var(--indigo);
  border-radius:var(--r-sm) var(--r) var(--r) var(--r-sm);padding:var(--s-4) var(--s-4) var(--s-4) calc(var(--s-4) + 30px);
}
.rx-use svg{position:absolute;left:var(--s-4);top:calc(var(--s-4) + 1px);width:20px;height:20px}
.rx-use svg path,.rx-use svg circle{fill:none;stroke:var(--indigo);stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round}
.rx-use h4{font-size:var(--fs-sm);font-weight:700;margin:0 0 var(--s-1);color:var(--ink)}
.rx-use p,.rx-use li{font-size:var(--fs-sm);color:var(--ink-2);line-height:1.5;margin:0}
.rx-use ul{margin:var(--s-2) 0 0;padding-left:1.1em}
.rx-use li+li{margin-top:var(--s-1)}

/* Figure wrapper for diagrams */
.rx-fig{margin:var(--s-4) 0;background:var(--surface);border:1px solid var(--line);border-radius:var(--r);padding:var(--s-3) var(--s-2) var(--s-2)}
.rx-fig svg{display:block;width:100%;height:auto;max-width:480px;margin:0 auto}
.rx-fig figcaption{font-size:var(--fs-xs);color:var(--ink-3);padding:var(--s-2) var(--s-2) 0;line-height:1.45}

/* Hub course card for the recap (own course, name TBD) */
.rx-course{display:block;width:100%;text-align:left;color:var(--ink);
  background:var(--surface);border:1px solid var(--line);border-radius:var(--r-xl);overflow:hidden;box-shadow:var(--e-2)}
.rx-course .rx-course-art{background:var(--raised);border-bottom:1px solid var(--line)}
.rx-course .rx-course-art svg{display:block;width:100%;height:auto}
.rx-course .rx-course-body{padding:var(--s-4)}
.rx-course h2{font-family:var(--serif);font-size:var(--fs-lg);font-weight:600;line-height:var(--lh-snug);margin:var(--s-1) 0 var(--s-1)}
.rx-course p{font-size:var(--fs-sm);color:var(--ink-2);margin:0}
.rx-course .rx-eyebrow{color:var(--c-recap)}

@media (prefers-reduced-motion:reduce){
  .rx-topic{transition:none}.rx-topic:active{transform:none}
}
```

### 5.3 Usage notes

- **Hub card.** It sits alongside the existing `.course-tile` cards, with the spot SVG inlined into `.rx-course-art`. The title "Managerial Economics, in seven moves" is placeholder copy until the upcoming course has a name; the eyebrow stays "Pre-course recap".
- **Topic card glyph.** Each topic gets a 44 px thumbnail drawn in the same grammar: axes in `--line-strong` and the topic's signature curves in their role colours:
  - demand: one indigo line
  - cost: laterite MC and ochre ATC
  - market structure: indigo D with dashed MR
  - bargaining: indigo and plum lines meeting at a point
- **Unit header steps.** The steps (Idea → Diagram → Check → Apply) mirror the teach-mode block sequence that already exists, so the recap can reuse that engine. The current step's bar is part-filled. `aria-current="step"` marks it.
- **Readiness.** A topic is *Read* when its idea and diagram blocks have been seen, and *Checked* when its quick checks have been answered (right or wrong, after any revision). Readiness never shows a percentage, because the app avoids grade-like numbers outside the finance drill.
- **"Where you'll use this".** The callout is generic, since the course it feeds isn't named yet. Write each bullet as a decision a manager makes, not a syllabus line. Indigo marks it as part of the recap; the left rule and pin-and-route icon set it apart from the maroon integrity notice (`.notice`). The examples draw on the source notes: pricing into a new market, reading a supplier's cost structure, and ECG-style bulk power purchase agreements (take-or-pay).
