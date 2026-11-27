# MBAassist UX research: what the best-loved learning apps do, and what we should copy

Researcher role: UX researcher. Date: Fri 27 Nov 2026.
Question from the product owner: *"Scout the best learning apps and identify the ones with the best usability feedback. What can we add to make the app seamless on desktop and especially on phone?"*

Method: I reviewed public evidence on usability (not content) for Duolingo, Brilliant, Khan Academy, Quizlet, Anki/AnkiDroid, Coursera, Elevate, Headway, Mimo, Sololearn, Photomath, and five Africa or low-bandwidth products (Kolibri, Eneza, M-Shule, uLesson, and a South African mobile test-prep tool). Sources were company design and engineering blogs, app-store listings, aggregated review analyses, design critiques, NN/g, web.dev, and peer-reviewed or grey literature. I then checked every recommendation against `/home/claude/MBAassist/README.md`, `index.html` as it is on disk now, and the three audits (`ui.md`, `ux.md`, `interactive.md`), so this report does not re-propose anything already built or already specified.

**How strong the evidence is.** The strongest sources are Duolingo's own A/B results, NN/g's navigation study, Quizlet's redesign metrics and the web.dev platform guidance. Review aggregators (Kimola, unitQ, Unstar) give themes, but most give no per-app percentages. A few sources are promotional (Headway's blog, the Kolibri piece sponsored by Endless) or rest on small samples (the ICTworks test-prep study had 12 learners). Where that applies, I say so next to the source.

---

## 0. What MBAassist already does (so we don't redo it)

I checked these in `index.html`.

| Already built | Where |
|---|---|
| "Study days, not streaks": 7 dots and "N of the last 7 days", with class days counted automatically and no counter that resets | `MOM_KEY="mbaassist-momentum-v1"` (l.3056), `momWeek()`; Finance hero shows "N of the last 7 days" (l.5554) |
| Points that always state a reason, plus a toast with `aria-live` | `momentumAward()`, `momToast()` |
| A deadline-aware primary action on the Plan, and the next action on the hub tile | `prepPrimary()`, `renderPrepHub()` (`#prepHubGo`) |
| Resuming the diagnostic ("Resume the check · question n of N") | l.6382 |
| A sticky, bottom-anchored Next bar in warm-up runs and the diagnostic | `.pnextbar` (l.1281) |
| A bottom tab bar in the warm-up, with safe-area padding | `.ptabs` (l.1352) |
| Swipe guard, so explorer drags no longer flip cards | `touchstart` handler (l.8497) |
| Arrow-key navigation in the card deck; draggable explorer handles that also respond to arrow keys | l.8495, l.6630 |
| Explorers with a goal and a success state | `.econx-goal` |
| Explanation shown inline right after answering (Finance and warm-up) | `verdictHtml()`, warm-up feedback |
| `prefers-reduced-motion`, `focus-visible` styles, a service worker with offline fallback, and backup and restore files | various; `sw.js` |

Gaps I found in the code that no audit mentions:
- **`manifest.webmanifest` has `"icons": []`.** There is no favicon and no `apple-touch-icon` either. Chrome only treats a web app as installable when the manifest has 192px and 512px icons ([Install criteria, web.dev](https://web.dev/articles/install-criteria)). So on Android, "Add to Home screen" probably gives a plain bookmark shortcut instead of an installed app, and the browser never offers to install it.
- **Nothing calls `navigator.storage.persist()`**, even though all progress lives in `localStorage`.
- **The app never reacts to going offline or coming back online, or to a new version arriving.** There are no `online`/`offline` listeners and no update notice.
- **Finance drills have no sticky action bar.** `.qnav` sits inline under the explanation, so after a long explanation the Next button is below the fold.
- **There are no answer shortcuts on desktop.** Nothing maps 1–4, A–D or Enter in Finance drills or warm-up questions.
- **There is no session-length chooser.** `ux.md` §4 proposed one; it is not built (no "I have 5 / 10 / 20 min").
- **No haptics** (`navigator.vibrate` is never called).
- **No desktop layout.** `.wrap{max-width:720px}` is one column at every width, and there is no media query at 1024px or above.

---

## 1. Ranked: apps with the strongest usability reputation

Ranking criteria: how consistently users and expert reviewers praise ease of use (flow, feedback, navigation, speed), minus how often they report usability problems. Content quality and price were excluded, except where a paywall blocks the learning flow.

| Rank | App | Usability reputation: what's praised | What's criticised | Evidence |
|---|---|---|---|---|
| 1 | **Duolingo** | The most studied learning flow in the industry: choose, then Check, then a full-width feedback banner with a sound, then Continue, with a progress bar along the top. "Play first, profile second" onboarding. A streak tuned through 600+ experiments; making one lesson enough to extend it raised day-14 retention by 3.3% and learners on a 7+ day streak by more than 40%. Tappable in-context explanations. | Hearts and later "energy" block learning (energy runs out "in the third lesson" even with no mistakes). Guilt-trip notifications. Mechanics such as XP, gems and hearts go unexplained. Ads in the free tier. | [Improving the streak, Duolingo blog](https://blog.duolingo.com/improving-the-streak); [Behind the product: Duolingo streaks, Lenny's Newsletter](https://www.lennysnewsletter.com/p/behind-the-product-duolingo-streaks); [UX Case Study: Duolingo, UsabilityGeek](https://medium.com/usabilitygeek/ux-case-study-duolingo-ade986ec7450); [Duolingo UX breakdown, 1 year of daily use](https://uxplanet.org/duolingo-ux-breakdown-1-year-of-daily-use-a290f461de2d); [Quitting Duolingo over energy, Android Authority](https://www.androidauthority.com/quitting-duolingo-energy-system-3599842/); [Aftermath on Duolingo gamification](https://aftermath.site/duolingo-gamification) |
| 2 | **Brilliant** | Rated 4.7 from 34K App Store ratings. "The explanations, UI, questions, graphics… very, very good." Bite-sized lessons where you act at every step. A wrong answer opens an *interactive* explanation, not a wall of text. Users call the web and app "easy to use and navigate." | Hard to go back and "review past information" on the go. Some learners want teaching before testing. Many email prompts. | [Brilliant on the App Store](https://apps.apple.com/app/brilliant-learn-by-doing/id913335252); [App showcase: Brilliant, ScreensDesign](https://screensdesign.com/showcase/brilliant-learn-by-doing); [Is Brilliant worth it, Brighterly](https://brighterly.com/blog/is-brilliant-org-worth-it); [ustwo × Brilliant](https://ustwo.com/work/brilliant) |
| 3 | **Elevate** | Today's session is the largest thing on the home screen and starts with one unambiguous Start button. Conventional bottom tab bar. A calm visual tone makes the daily return "fun rather than a chore." | After Start the dashboard sits there until you tap again (a "gulf of evaluation"). Auto-advancing through a session implies you must finish it in one sitting, and "the option to resume later is not visible." | [Design critique: Elevate, Pratt IXD](https://ixd.prattsi.org/2023/02/design-critique-elevate-ios-app/) |
| 4 | **Quizlet** | The most polished flashcard experience and the fastest start. A shared "parts kit" means every study mode has the same layout, so users never "reorient themselves." Redesigned study-mode buttons converted 21% more logged-out visitors into studying. | Core study modes moved behind a paywall, the top complaint across flashcard apps (26% of 1–3 star reviews in the category): "Learn mode used to be free. Now I hit a paywall the night before my exam." | [Launching a redesign for 20 million students, Quizlet Engineering](https://medium.com/tech-quizlet/launching-a-successful-redesign-for-20-million-students-2f4c4b518b6e); [Flashcard apps ranked 2026, Unstar](https://unstar.app/blog/quizlet-anki-brainscape-knowt-studysmarter-flashcard-study-apps-ranked-2026) |
| 5 | **Mimo / Sololearn** | About 2-minute lessons for "spare moments." Immediate, gentle feedback. Progress is "clearly displayed both within the lessons and on the main menu." Short, mobile-native lessons that "don't demand 45 minutes of focus." | Ads interrupt the learning flow (Sololearn). Thin free tier. No hint after repeated wrong answers (Mimo). | [Mimo, Common Sense Media](https://www.commonsensemedia.org/app-reviews/mimo-learn-how-to-code-through-interactive-tutorials-and-quizzes); [What Sololearn got right, DEV](https://dev.to/xmadmaxdx/what-sololearn-got-right-and-what-im-trying-to-fix-325o) |
| 6 | **Anki / AnkiDroid** | Power users love how efficient it is: Space or Enter reveals the answer, 1–4 grades it, with no mouse needed. No ads and no paywalled features. Sync across devices. | A steep learning curve ("setup overwhelming before they've reviewed a single card"), a dated UI, and missed days "snowball into hundreds of overdue cards." AnkiDroid users say answer feedback shows "too short a time." | [Anki manual: studying shortcuts](https://docs.ankiweb.net/studying.html); [Anki review, Nibble](https://nibble-app.com/blog/anki-review); [AnkiDroid new study screen thread](https://forums.ankiweb.net/t/new-study-screen-official-thread/67394/130) |
| 7 | **Photomath** | The shortest input path in the category (point the camera at the problem), then a step-by-step breakdown "into digestible chunks." Students "compare their own steps" to find where they went wrong. | Mainly integrity worries, not usability. The deeper explanations are paid. | [Photomath review, Educators Technology](https://www.educatorstechnology.com/2024/10/photomath-review.html) |
| 8 | **Coursera** | Offline is treated as a first-class feature: a one-tap weekly download, and quizzes taken offline that sync later ("one of the most-valued features among our mobile users"). Wi-Fi-only downloads and SD-card storage. | Sync failures that lose work, iPad video layout bugs, freezes. | [Mobile offline features, Coursera blog](https://blog.coursera.org/mobile-offline-features); [Coursera app review analysis, Kimola](https://kimola.com/reports/unlock-insights-coursera-user-feedback-analysis-report-app-store-us-148158) |
| 9 | **Khan Academy** | Free, no ads, strong maths practice. NPS 53 in one App Store sample. | unitQ's top themes from the latest 250 reports: "Difficult to navigate UI," "Slow performance," "Can't log in," "Fails to launch." Images go off-screen on iPhone. | [Khan Academy scorecard, unitQ](https://unitq.com/unitq-scorecards/khanacademy); [Khan Academy review analysis, Kimola](https://kimola.com/reports/unlock-insights-khan-academy-app-feedback-analysis-report-app-store-us-148161) |
| — | **Headway** (microlearning) | 15-minute summaries in text and audio for commutes; daily goals. | No independent usability evidence was found. The available pieces are promotional or affiliate content, so it is not ranked. | [Headway review, Ed Latimore (affiliate)](https://edlatimore.com/headway-app-review) |

**Africa and low-bandwidth products** (no usability "reputation" in the app-store sense, but strong lessons for us):

| Product | Usability lesson | Evidence |
|---|---|---|
| **Kolibri** (Learning Equality) | Treat "connectivity [as] a spectrum; it's not black and white." Runs on low-cost and legacy devices. Designed "for learners with limited digital literacy." | [How offline-first edtech addresses disparities, EdSurge](https://www.edsurge.com/news/2024-01-12-how-offline-first-edtech-addresses-education-disparities-worldwide) (sponsored by Endless; outcome figures are self-reported) |
| **Eneza** | Works on any phone over SMS or USSD, with micro-pricing (10 cents a day) charged to airtime. Short read-then-quiz loops graded automatically. | [GSMA Eneza case study (PDF)](https://www.gsma.com/mobilefordevelopment/wp-content/uploads/2020/05/Eneza-Education-Educating-school-children-through-SMS-and-mobile-technology.pdf) |
| **M-Shule** | Adaptive SMS with no internet needed. Learning gains held across gender and location and were cost-effective. | [Supporting equitable access to learning via SMS in Kenya, Lancaster](https://eprints.lancs.ac.uk/id/eprint/225442) |
| **uLesson** | Shipped the whole library on SD cards, "without the associated cost of downloads or streaming." | [uLesson launch, Quartz](https://qz.com/africa/1800778/kongas-sim-shagaya-launches-nigeria-edtech-startup-ulesson) |
| South African mobile test-prep tool | Even a data-light site drew complaints "about the costs of data"; "offline mode and syncing meant that users could practice on-the-go." Quizzes of 10 questions, graded instantly, with full worked solutions and optional hints. Question text of 100–130 words was found ideal. | [Designing a mobile test-prep tool, ICTworks](https://ictworks.org/design-mobile-test-prep-tool-south-africa) (12 learners) |
| University of Ghana distance learners (n = 294) | Smartphones are easy to use for study. Barriers: unreliable connectivity, "phones freezing during important learning moments," small screens and keys. | [Use and effect of smartphones, UG Legon](https://ugspace.ug.edu.gh/items/21f96f27-15f7-4ce8-be1e-3969a8812aba/full) |

**The three with the best usability reputation:** Duolingo (for its lesson-flow mechanics, not its monetisation), Brilliant, and Elevate.

---

## 2. Fourteen patterns that make these apps feel seamless, mapped to MBAassist

Each pattern gives the apps that use it, the evidence, and a build note for phone first, then desktop. "Status" says what is already built.

### P1. One primary action, bottom-anchored, in the same place on every question
- **Apps:** Duolingo (Check, then Continue, always full width at the bottom), Brilliant (Continue), Elevate (one blue Start).
- **Evidence:** Elevate's single, unambiguous Start button is praised. Its *second* tap with weaker signifiers is the main criticism ([Pratt IXD](https://ixd.prattsi.org/2023/02/design-critique-elevate-ios-app/)). In Hoober's field study, 49% of phone use was one-handed and 36% cradled, with the thumb doing most taps ([UXmatters](https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php?)). He later warned that his reach diagrams were inaccurate, so the point is a *consistent, reachable* position, not a strict "green zone."
- **MBAassist:** The warm-up already does this (`.pnextbar`). **Finance drills don't.** Make `.qnav` in `verdictHtml()` `position:sticky;bottom:0;padding-bottom:calc(10px + var(--safe-b))` with the `.pnextbar` gradient scrim. Also call `#verdictBox.scrollIntoView({block:"nearest"})` once the verdict renders, so the explanation is visible above the bar. On desktop, keep the bar sticky but cap its width to the content column.
- **Status:** warm-up done; Finance not done.

### P2. Instant, inline feedback with the explanation on the same screen
- **Apps:** Duolingo (feedback banner with a "ding"), Brilliant (an interactive explanation on wrong answers), Mimo, the South African test-prep tool (auto-graded with full worked solutions), Photomath (step-by-step).
- **Evidence:** [UsabilityGeek on Duolingo](https://medium.com/usabilitygeek/ux-case-study-duolingo-ade986ec7450); [ScreensDesign on Brilliant](https://screensdesign.com/showcase/brilliant-learn-by-doing); [ICTworks](https://ictworks.org/design-mobile-test-prep-tool-south-africa). AnkiDroid users complain when feedback disappears "too short a time" ([forum](https://forums.ankiweb.net/t/new-study-screen-official-thread/67394/130)).
- **MBAassist:** **Done** (Finance `verdictHtml`, warm-up feedback). One refinement borrowed from Photomath: for numeric Finance items whose question exists in the calculator, add a "See the steps" link in the verdict that opens that calculator pre-filled, so the student can compare their own steps.

### P3. Time-boxed sessions the learner chooses ("I have 5 / 10 / 20 min")
- **Apps:** Elevate (daily regimen), Mimo (2-minute lessons), Headway (15-minute summaries), Duolingo (one short lesson is enough).
- **Evidence:** Lowering Duolingo's daily bar to *one lesson* raised day-14 retention by 3.3% and new learners on a streak by 19% ([Duolingo](https://blog.duolingo.com/improving-the-streak)). Mobile microlearning for adults is valued mainly for convenience and flexibility ([systematic review, ET&S 2024](https://doaj.org/article/b6b940948b034e489c5bd28c73307897)).
- **MBAassist:** Three chips under the Plan's primary card and on the Finance home: `5 min` gives a 6-question warm-up or a 5-question Finance mixed drill, `10 min` the next topic or a 10-question drill, `20 min` a topic plus a set, or a 20-question drill. Store the choice in `localStorage` (`mbaassist-session-pref`) so it is preselected next time. It only rewrites the primary card's target; nothing else moves. Specified in `ux.md` §4 but **not built**.

### P4. One-tap resume from the hub and the home-screen icon
- **Apps:** Elevate (session first), Duolingo (the path opens on the next lesson), Brilliant (a "learning companion" points to the next lesson, per [ustwo](https://ustwo.com/work/brilliant)).
- **Evidence:** Elevate is criticised precisely because "the option to resume later is not visible" ([Pratt IXD](https://ixd.prattsi.org/2023/02/design-critique-elevate-ios-app/)).
- **MBAassist:** The hub already *labels* the next action (`#prepHubGo`), but the tap opens the course home, which costs an extra tap. (a) Make `#prepHubGo` its own button that routes straight to `prepPrimary()`'s target, and add the same "Continue: <lecture/concept>" link to the Finance tile. (b) Add `"shortcuts"` to the manifest: "Continue warm-up" → `./#econprep`, "Quick Finance drill" → `./#finance/drill`, "Calculator" → `./#finance/calc`. These appear when the user long-presses the Android icon. Today Finance only routes `#finance`, so the two sub-routes need a few lines in the startup hash handler (near l.11344): start a 10-question mixed drill, or open the calculator. On desktop, the same links work in the installed app's jump list.
- **Status:** partly done.

### P5. Properly installable, with a quiet install prompt
- **Apps:** Coursera, Duolingo and every native app (installed by definition). For a PWA, web.dev sets out the patterns.
- **Evidence:** Chrome requires 192px and 512px manifest icons before it treats a site as installable ([web.dev install criteria](https://web.dev/articles/install-criteria)). Promote installation "outside of the flow of your user journeys," only after `beforeinstallprompt` fires, never on page load, and "remember the user's preference" when they dismiss it ([web.dev, promoting installation](https://web.dev/articles/promote-install)).
- **MBAassist:** Add `icon-192.png`, `icon-512.png` and a `"purpose":"maskable"` 512 icon to `assets/`. Add `<link rel="icon">` (this also fixes the 404 in ux.md F21) and `<link rel="apple-touch-icon">`. Capture `beforeinstallprompt` (`e.preventDefault(); deferred=e`). Show an "Install MBAassist" row in the ☰ menu, and one dismissible card on the finish screen of the **first** completed topic or drill. Hide both when `matchMedia('(display-mode: standalone)').matches`. On iOS (no event), show a one-line "Share → Add to Home Screen" hint, once. Also update `<meta name="theme-color">` when the theme toggles (ui.md U20).
- **Status:** **Not done.** `icons:[]` is the single most important gap in the app.

### P6. Protect progress that exists on only one device
- **Apps:** Coursera (offline quiz answers kept and synced later), Anki (sync). Losing progress is a top complaint category: "Updated the app and all my completed lessons reset to zero" ([Unstar](https://unstar.app/vi/blog/education-learning-app-reviews-what-students-teachers-complain-about-2026)). Knowt and Anki reviewers cite data loss after updates or sync conflicts ([Unstar flashcards](https://unstar.app/blog/quizlet-anki-brainscape-knowt-studysmarter-flashcard-study-apps-ranked-2026)).
- **Evidence:** Without persistence, "DOM Storage (Local Storage)" can be evicted. Chrome grants `persist()` silently, based on engagement and on whether the site is installed or bookmarked. Request it with a user gesture, not on load ([web.dev persistent storage](https://web.dev/articles/persistent-storage); [MDN StorageManager.persist](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist)).
- **MBAassist:**
  1. On the first finished topic or drill, and again after each backup, call `navigator.storage?.persist?.()`. Show the result as a ☰ menu line: "Progress protected on this device ✓" or "Not protected — keep a backup."
  2. Store `lastBackupAt` when *Save a backup file* runs.
  3. When there have been 5 or more study days since the last backup (or no backup yet), show one quiet line on the hub: "Last backup: never · Save one (10 KB)".
  4. On Android, offer `navigator.share({files:[file]})` where `navigator.canShare` allows it, so the backup can go straight to WhatsApp, Drive or email. Fall back to the current download.
- **Status:** backup and restore done; persistence, reminder and share **not done**.

### P7. Offline-honest UI and update notices
- **Apps:** Coursera (offline mode and settings), Kolibri ("connectivity is a spectrum"). "Offline mode just shows a loading spinner forever" is a recurring complaint ([Unstar](https://unstar.app/vi/blog/education-learning-app-reviews-what-students-teachers-complain-about-2026)).
- **Evidence:** [Coursera blog](https://blog.coursera.org/mobile-offline-features); [EdSurge on Kolibri](https://www.edsurge.com/news/2024-01-12-how-offline-first-edtech-addresses-education-disparities-worldwide); Ghanaian learners name unreliable connectivity as a barrier ([UG Legon](https://ugspace.ug.edu.gh/items/21f96f27-15f7-4ce8-be1e-3969a8812aba/full)).
- **MBAassist:** Everything works offline already, so the job is reassurance plus clear labels on the few things that need data.
  - **Offline:** `addEventListener('offline'|'online')` toggles `body.offline`. The first time the app goes offline, show a toast (reuse `momToast`): "You're offline — everything here still works."
  - **External links:** in `body.offline`, Shelf items with an external `url` get a "Needs data" pill and are dimmed.
  - **Updates:** in `sw.js`, send `postMessage('updated')` to clients on `activate`. The page shows a toast, "Updated · tap to reload", and never reloads by itself in the middle of a drill.
  - **Save-Data:** when `navigator.connection?.saveData` is set, don't load `study-hero.png`.
- **Status:** **not done.**

### P8. Keyboard-first answering on desktop
- **Apps:** Anki (Space or Enter reveals, 1–4 grades: [manual](https://docs.ankiweb.net/studying.html)). Duolingo web and Quizlet web also number their options.
- **Evidence:** Anki's efficiency is the main reason power users accept its dated UI ([Nibble](https://nibble-app.com/blog/anki-review)).
- **MBAassist:** One document `keydown` handler, active only while a question is on screen, that ignores events from `input`/`textarea`:
  - `1–4` or `A–D` choose an option.
  - `Enter` or `Space` go to Next (or Check, if one is added).
  - `H` opens a hint, `F` flags, `Esc` goes back.
  - In the deck: `←`/`→` are already done; add `Enter` = Next.
  - Show small `<kbd>` letters on options only under `@media (hover:hover) and (pointer:fine)`, so phones don't see them.
- **Status:** deck arrows done; answering **not done.**

### P9. Haptic and sound feedback (opt-in, subtle)
- **Apps:** Duolingo (a "ding" on correct; [UsabilityGeek](https://medium.com/usabilitygeek/ux-case-study-duolingo-ade986ec7450)), Brilliant (in-lesson celebrations; [ustwo](https://ustwo.com/work/brilliant)).
- **Evidence:** Feedback you can feel or hear confirms the action without reading. The Vibration API works on Android Chrome but not iOS Safari ([MDN Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)), which suits our mostly-Android users.
- **MBAassist:** A ☰ toggle, "Taps & sounds", **off by default** (people study in class and at work). When on:
  - `navigator.vibrate?.(12)` on a correct answer and `[20,40,20]` on a wrong one.
  - Each sound is an 80ms `OscillatorNode` tone (no audio files, nothing to download).
  - Also skip haptics when the user has reduced motion on.
  - ui.md §3.8 proposed vibration on correct answers and explorer milestones. This makes it a setting rather than default behaviour.
- **Status:** **not done.**

### P10. Forgiving momentum: no loss, no guilt
- **Apps:** Duolingo is the counter-example. Its streak works, but only after 600+ experiments, and it still produces guilt complaints ("We miss you :(" at 11 PM; [Unstar](https://unstar.app/vi/blog/education-learning-app-reviews-what-students-teachers-complain-about-2026)). Users who break a streak are "more likely to stop using the platform entirely" ([The Decision Lab, citing Silverman et al. 2023](https://thedecisionlab.com/insights/consumer-insights/streak-creep-the-perils-of-too-much-gamification)). Anki's backlog "snowballs" after missed days ([Nibble](https://nibble-app.com/blog/anki-review)).
- **MBAassist:** **Done by design.** Study days count across courses, class days count automatically, and nothing resets. One addition, from Anki's snowball problem: after 4 or more days away, the Plan's primary card should say "Welcome back · 6 quick questions to warm up" and cap due warm-ups at one set, never "23 reviews overdue."

### P11. Bottom tab bar for the main sections, the same in every course
- **Apps:** Elevate ("the mobile convention of the bottom toolbar"), Duolingo, Brilliant.
- **Evidence:** Hiding navigation lowers how much people use it. In NN/g's study, a site with visible navigation had it used in 89% of tasks, against 44% for a hidden-menu site ([NN/g](https://www.nngroup.com/articles/find-navigation-mobile-even-hamburger/)). Quizlet found that one shared layout across modes stops users having to "reorient themselves" ([Quizlet Engineering](https://medium.com/tech-quizlet/launching-a-successful-redesign-for-20-million-students-2f4c4b518b6e)).
- **MBAassist:** The warm-up has `.ptabs`. Finance uses one long home page plus the ☰ menu. Give Finance the same `.ptabs` component with four tabs: **Today** (hero plus "Pick up where you left off") · **Lectures** · **Tools** (teach, formula map, case room, calculator) · **Exam prep**. Sustainable Leadership gets **Now · Before · In class · Reports**. On desktop at 1024px and wider, the same bar becomes a left rail (see P14).
- **Status:** warm-up done; Finance and SL **not done.**

### P12. Progress you can see *inside* the session
- **Apps:** Duolingo (green bar along the top), Mimo ("progress clearly displayed both within the lessons and on the main menu"), Quizlet (shared progress layout).
- **Evidence:** [UsabilityGeek](https://medium.com/usabilitygeek/ux-case-study-duolingo-ade986ec7450); [Common Sense on Mimo](https://www.commonsensemedia.org/app-reviews/mimo-learn-how-to-code-through-interactive-tutorials-and-quizzes).
- **MBAassist:** The deck has dots (ui.md U23 covers their contrast). Finance drills show "Question n of N" as text only. Add a 4px bar at the top of the Finance drill card, filled in `--course`, and make the diagnostic's two-part bar (ux.md F7) use the same component. Cost: about 10 lines.
- **Status:** partly done.

### P13. A path back: review what you've already learned
- **Apps:** Brilliant is *criticised* for lacking it ("lacks the ability to easily review past information"; [App Store](https://apps.apple.com/app/brilliant-learn-by-doing/id913335252)). The Duolingo reviewer's "biggest complaint" was no word list on mobile ([UX Planet](https://uxplanet.org/duolingo-ux-breakdown-1-year-of-daily-use-a290f461de2d)).
- **MBAassist:** ux.md M5 (pocket-rule collection) covers the warm-up. For Finance, add a "My mistakes" list: the band-1 (Missed) questions, each showing its explanation and a "Drill these 10" button, reached from the Today tab. It reuses the existing `rec()` data. This also suits revising on the way to campus.
- **Status:** warm-up specified; Finance **not done.**

### P14. A desktop layout that uses the width (two panes)
- **Apps:** Quizlet web (sidebar plus study area; its first redesign was "clunky in the browser… too much whitespace": [Quizlet Engineering](https://medium.com/tech-quizlet/launching-a-successful-redesign-for-20-million-students-2f4c4b518b6e)), Brilliant web, Coursera web (course outline plus content).
- **MBAassist:** `@media (min-width:1024px)`:
  - `.wrap{max-width:1120px}`, with a 3-column grid of 220px rail, 1fr content capped at 680px, and an optional 320px aside.
  - Rail: the course tabs (P11) plus the momentum strip.
  - Content: the question or card.
  - Aside: the explanation (after answering), the formula, or the explorer readouts. The verdict renders into the aside, so the question stays in view while you read why.
  - Plan tab: primary card on the left, the deadline timeline on the right.
  - Keep `.econx-svg{max-width:440px}` (ui.md U7).
  - Below 1024px nothing changes.
- **Status:** **not done.**

---

## 3. Prioritised build list (impact ÷ effort)

Effort: **S** is half a day or less, **M** is 1–2 days, **L** is 3 days or more.

| # | Build | Effort | Status | What exactly to change |
|---|---|---|---|---|
| 1 | **Make it really installable** | S | Not done | Create `assets/icon-192.png`, `icon-512.png` and `icon-maskable-512.png` (maroon "M" on paper), and list them in `manifest.webmanifest` `icons`. Add `<link rel="icon">` and `<link rel="apple-touch-icon">`. Add `"shortcuts"` (Continue warm-up `#econprep`; Quick drill and Calculator need the new `#finance/drill` and `#finance/calc` routes from P4). Handle `beforeinstallprompt`: ☰ "Install MBAassist" row, plus one dismissible card on the first finish screen, with the dismissal stored in `localStorage`. Hide both in `display-mode: standalone`. Show a one-time iOS hint. Bump the cache to `mbaassist-v30` and add the icons to `SHELL`. |
| 2 | **Protect device-only progress** | S | Not done (backup files exist) | `navigator.storage.persist()` after the first finished unit and after each backup. ☰ shows "Progress protected ✓" or "Keep a backup". Save `lastBackupAt`; when there have been 5 or more study days since it, show a hub line "Last backup: n days ago · Save". Share the backup through `navigator.share({files})` when `canShare`, otherwise download. |
| 3 | **Sticky bottom action bar in Finance drills** | S | Warm-up done; Finance not | `.qnav` inside the verdict becomes `position:sticky;bottom:0` with the `.pnextbar` scrim and `var(--safe-b)`. On answer, `#verdictBox.scrollIntoView({block:"nearest",behavior:"smooth"})`. Primary button at least 52px tall and full width on phones. |
| 4 | **Keyboard answering on desktop** | S | Deck arrows done; answers not | One `keydown` handler: `1–4`/`A–D` select, `Enter`/`Space` Next, `H` hint, `F` flag, `Esc` back. Ignore it when the focus is in a form field. Show `<kbd>` letters only under `(hover:hover) and (pointer:fine)`. Apply to Finance drills and prep sims, warm-up runs, the diagnostic, and the deck's Next. |
| 5 | **One-tap resume** | S | Hub label done; routing not | Make `#prepHubGo` a separate button that routes straight to `prepPrimary()`'s target. Add "Continue: <concept>" on the Finance tile, routing to the concept from `up.st` (l.9532). Add a "Welcome back" short set after 4 or more days away instead of a backlog. |
| 6 | **Offline-honest UI and update toast** | S | Not done | `online`/`offline` listeners toggle `body.offline` plus a one-time reassurance toast. In `body.offline`, Shelf external links show a "Needs data" pill. `sw.js` posts `updated` on activate; the page shows "Updated · tap to reload" and never auto-reloads. Skip the hero image when `navigator.connection?.saveData`. |
| 7 | **Session-length chooser** | M | Specified in ux.md §4; not built | `5 / 10 / 20 min` chips under the Plan's primary card and on the Finance Today screen. They rewrite only the primary action (warm-up, then topic, then topic plus set; or a 6/10/20-question mixed drill) and remember the choice. |
| 8 | **Opt-in haptics and sound** | S | Not done | ☰ toggle "Taps & sounds" (default off). `navigator.vibrate?.(12)` on correct and `[20,40,20]` on wrong; an 80ms Web Audio tone; no assets. Respect `prefers-reduced-motion`. Hook into the shared answer path: Finance (l.5490) and the warm-up (l.6233) already call `momentumAnswer()` on every answer. Sustainable Leadership checks don't call it yet. |

**Next after the top 8:** P14 desktop two-pane layout (M), P11 bottom tabs for Finance and SL (M), P13 Finance "My mistakes" (S–M), P12 the shared in-session progress bar (S).

**Already done, don't rebuild:** study days instead of streaks; points with reasons; the deadline-aware primary action; resuming the diagnostic; the swipe guard; the warm-up's sticky Next bar and bottom tabs; inline explanations; explorer goals; reduced-motion support; backup and restore files.

---

## 4. Anti-patterns these apps are criticised for: avoid them

| Anti-pattern | Who gets criticised | Evidence | Our rule |
|---|---|---|---|
| **Hearts, lives or energy that stop you learning** | Duolingo (hearts, then energy: "lessons end quickly," it is "punished for being a learner"); Sololearn | [Android Authority](https://www.androidauthority.com/quitting-duolingo-energy-system-3599842/); [Aftermath](https://aftermath.site/duolingo-gamification) | Never limit attempts. A wrong answer costs nothing but a return of the question (this is already how the Finance rotation works). |
| **Streak guilt and "loss" messaging** | Duolingo's "You made Duo sad" and "We miss you :(" at 11 PM; breaking a streak predicts quitting | [The Decision Lab](https://thedecisionlab.com/insights/consumer-insights/streak-creep-the-perils-of-too-much-gamification); [Unstar](https://unstar.app/vi/blog/education-learning-app-reviews-what-students-teachers-complain-about-2026) | Keep study days. No counter that resets, no sad mascot, no "you'll lose…" copy. If push notifications are ever added, one a day at most, never after 20:00, and written as an offer ("6 questions for PS1?"). |
| **Mechanics nobody explains** | Duolingo (XP, gems, hearts "unexplained"; which activities count toward the streak was unclear) | [Aftermath](https://aftermath.site/duolingo-gamification) | Every point says why (done). Add a one-line "What counts as a study day?" link under the dots. |
| **A backlog that piles up after a break** | Anki ("hundreds of overdue cards") | [Nibble](https://nibble-app.com/blog/anki-review) | Cap what's due on return; welcome people back (#5). |
| **Interrupting the flow (ads, upsells, install prompts on load)** | Sololearn ads; Duolingo free-tier ads; web.dev warns against install UI that "interrupts the user's flow" | [DEV on Sololearn](https://dev.to/xmadmaxdx/what-sololearn-got-right-and-what-im-trying-to-fix-325o); [web.dev](https://web.dev/articles/promote-install) | No modal mid-question, ever. Install and backup nudges only on finish screens, the hub or the ☰ menu. |
| **Moving free features behind a wall or a login** | Quizlet (top complaint category, 26%); Khan ("Can't log in") | [Unstar flashcards](https://unstar.app/blog/quizlet-anki-brainscape-knowt-studysmarter-flashcard-study-apps-ranked-2026); [unitQ](https://unitq.com/unitq-scorecards/khanacademy) | Stay account-free. Never gate a study mode. |
| **Losing progress** | Coursera sync bugs; Knowt "lost cards after an update" | [Kimola](https://kimola.com/reports/unlock-insights-coursera-user-feedback-analysis-report-app-store-us-148158); [Unstar](https://unstar.app/blog/quizlet-anki-brainscape-knowt-studysmarter-flashcard-study-apps-ranked-2026) | Persist storage plus backup nudges (#2). Never rename storage keys or question ids (README rule). Test migrations with a real backup file before every release. |
| **Offline mode that spins forever** | Category-wide complaint | [Unstar](https://unstar.app/vi/blog/education-learning-app-reviews-what-students-teachers-complain-about-2026) | Nothing should wait on the network. Label anything that needs data (#6). |
| **Test before teaching, with no way back** | Brilliant ("test style of teaching was not effective"; "lacks the ability to easily review past information") | [Brighterly](https://brighterly.com/blog/is-brilliant-org-worth-it); [App Store](https://apps.apple.com/app/brilliant-learn-by-doing/id913335252) | Keep gut checks as low-stakes predictions (no points lost), and always offer "Show me" (done in explorers). Add review paths (P13). |
| **Gamification that outranks learning** | "200-day streak and still can't hold a basic conversation" | [Unstar](https://unstar.app/vi/blog/education-learning-app-reviews-what-students-teachers-complain-about-2026) | Points only for evidence of learning (done: no XP for skipped checks). No leaderboards; this is device-local data for adult learners. |
| **Layout that breaks on real devices** | Khan (images off-screen on iPhone; "difficult to navigate UI"); Coursera (iPad video shows only "top half") | [Kimola Khan](https://kimola.com/reports/unlock-insights-khan-academy-app-feedback-analysis-report-app-store-us-148161); [Kimola Coursera](https://kimola.com/reports/unlock-insights-coursera-user-feedback-analysis-report-app-store-us-148158) | Test every release at 360, 390 and 1280px, in light and dark (ui.md method). Fix the 360px hub overflow (ui.md U12). |
| **Too much on one screen ("featuritis")** | Elevate's alternative regimens; Quizlet's first redesign (fonts too big, too much whitespace on Chromebooks) | [Pratt IXD](https://ixd.prattsi.org/2023/02/design-critique-elevate-ios-app/); [Quizlet Engineering](https://medium.com/tech-quizlet/launching-a-successful-redesign-for-20-million-students-2f4c4b518b6e) | One primary action per screen. A Plan of 1.5 screens or less (ux.md F17). |
