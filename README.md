# For Himena ✦ a little universe

The home page for the **Love for Mena** collection — one page that links to
every little website, made by hand for Himena.

**Live:** https://menaammarpro.github.io/

This is a GitHub Pages **user/org site** (served from the repo
`MenaAmmarPro/menaammarpro.github.io`), so it lives at the root of the domain
and links out to each project.

## The projects

| Project | What it is |
| --- | --- |
| [loveformymena](https://menaammarpro.github.io/loveformymena/) | The main site — letter, story, memories, reasons, quiz and more |
| [love-art](https://menaammarpro.github.io/love-art/) | One hundred artworks, drawn by code |
| [love-arcade](https://menaammarpro.github.io/love-arcade/) | Ten little games with a best-score tracker |
| [love-reasons](https://menaammarpro.github.io/love-reasons/) | A reason a day, with a shareable card |
| [love-song](https://menaammarpro.github.io/love-song/) | Our song + a music box of handmade tracks |
| [love-memory-jar](https://menaammarpro.github.io/love-memory-jar/) | Shake the jar to draw a memory |
| [love-starmap](https://menaammarpro.github.io/love-starmap/) | A real sky map and wish stars |
| [love-countdown](https://menaammarpro.github.io/love-countdown/) | How long we've been counting |
| [love-timezone](https://menaammarpro.github.io/love-timezone/) | Same sky — two clocks, sunrise/sunset, the hours we're both awake |
| [love-map](https://menaammarpro.github.io/love-map/) | The space between — a world map of the distance and the halfway point |
| [love-levelup](https://menaammarpro.github.io/love-levelup/) | Our level — shared XP, daily quests, a streak and badges |
| [love-nature](https://menaammarpro.github.io/love-nature/) | Our garden — plots to tend that bloom into verses |
| [love-coupons](https://menaammarpro.github.io/love-coupons/) | Love coupons — a book of promises to redeem |
| [love-mailbox](https://menaammarpro.github.io/love-mailbox/) | Letters for later — sealed until an open date |
| [love-ping](https://menaammarpro.github.io/love-ping/) | Love ping — a button that hands you a sweet line |
| [love-diary](https://menaammarpro.github.io/love-diary/) | Our diary — a dated note a day, with a timeline |
| [love-mural](https://menaammarpro.github.io/love-mural/) | Our mural — a canvas we paint together |
| [love-recipebook](https://menaammarpro.github.io/love-recipebook/) | Recipe book — pizza first, as it should be |
| [love-constellation](https://menaammarpro.github.io/love-constellation/) | Our constellation — place stars, join them, keep a memory |
| [love-bucketlist](https://menaammarpro.github.io/love-bucketlist/) | Our list — the things we'll do together |
| [love-compliments](https://menaammarpro.github.io/love-compliments/) | Compliment jar — reach in and pull one out |
| [love-postcards](https://menaammarpro.github.io/love-postcards/) | Postcards — code-drawn scenes with a message |
| [love-cal](https://menaammarpro.github.io/love-cal/) | Our Calculator — a white keypad for math, and counters for us |
| [love-calendar](https://menaammarpro.github.io/love-calendar/) | Our Days — hearts, countdowns and milestones |
| [love-chat](https://menaammarpro.github.io/love-chat/) | Just Us — a private chat for two |
| [love-hug](https://menaammarpro.github.io/love-hug/) | Hug Machine — squeeze it, hold it, send one |
| [love-weather](https://menaammarpro.github.io/love-weather/) | Same Sky — live weather for Karachi and Bucharest |
| [love-adventure](https://menaammarpro.github.io/love-adventure/) | Adventure Machine — spin a quest for two |
| [love-movies](https://menaammarpro.github.io/love-movies/) | Our Cinema — a movie night for two |
| [love-phrases](https://menaammarpro.github.io/love-phrases/) | Love Phrases — little things to say |

## How it's built

Plain HTML, CSS and vanilla JavaScript — no framework, no build step. It reuses
the shared love-theme (`css/theme.css`, `js/theme-main.js`, `js/effects.js`,
copied from the workspace `_love-theme/`), plus a page-specific `css/app.css`
and `js/app.js`. It's an offline-capable PWA.

## Files

- `index.html` — the page
- `css/theme.css` — shared theme (copied from `_love-theme/`)
- `css/app.css` — hub-only styles
- `js/theme-main.js`, `js/effects.js` — shared behaviour/effects
- `js/app.js` — PWA registration and small touches
- `manifest.webmanifest`, `sw.js` — PWA
- `assets/` — favicon, icons, social image
- `robots.txt`, `sitemap.xml` — SEO

## Run locally

```powershell
py -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy

Static site, deployed with GitHub Pages from `main`.

## License

Creative Commons BY-NC-ND 4.0 — see [`LICENSE`](LICENSE).
© 2026 Ammar (MenaAmmarPro). Made with care for Mena.
