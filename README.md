# KRTA — Kentucky Retired Teachers Association

A rebuild of [krta.org](https://krta.org/) on Next.js (App Router, TypeScript) with Tailwind and
shadcn/ui, styled entirely by the supplied **KRTA Design System**.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
npm run format  # prettier
```

## The two specs

| File | What it is |
| --- | --- |
| [`design-system.md`](design-system.md) | The supplied `KRTA Design System/` restated in build terms. Its tokens and component class layer are ported verbatim into `app/globals.css`. **The supplied system is the authority** — do not drift from it. |
| [`teardown.md`](teardown.md) | The krta.org teardown: page inventory, navigation labels, URL map, brand cues, and what the rebuild does instead of each pattern on the live site. |

## How the styling is wired

`app/globals.css` holds, in order:

1. The design system's token files (`colors`, `typography`, `fonts`, `spacing`, `elevation`).
2. A `@theme inline` bridge so Tailwind utilities and shadcn's semantic colours resolve to those
   tokens. Two DS token names — `--color-accent` and `--color-rule` — are deliberately **absent**
   from that block, because Tailwind's `--color-*` namespace would clobber them.
3. The DS `base.css` and `components.css` layers verbatim.
4. An application layer for patterns the DS implies but does not ship: `.page-head`, `.prose`,
   `.doc-list`, `.with-sidenav`, `.faq`, `.def-list`, `.factstrip`.

Archivo is self-hosted through `next/font/google` and exposed as `--font-archivo`.

Components in `components/ds.tsx` are ports of `KRTA Design System/components/`. They render DS
classes and take no styling decisions of their own.

## URLs

Routes mirror the live site exactly so inbound links, printed material and search results keep
resolving — including slugs that are stale on the live site
(`/events/2022-2023-tentative-events-calendar/` holds the 2026-2027 calendar). Legacy URLs that no
longer have a page of their own are 308-redirected in `next.config.ts`.

## Forms

Two forms exist on the site.

- **Contact** (`/contact`) embeds KRTA's live JotForm, unchanged. It already reaches the office.
- **Automatic dues deduction** (`/automatic-dues-deduction`) is a native form with every field and
  the full authorization text from the live Everest Forms version. **It needs a destination before
  launch.** Set `KRTA_FORM_ENDPOINT` to a URL that accepts a JSON `POST` (an email relay, a CRM
  webhook, whatever KRTA chooses). Until it is set, the form validates and then tells the member to
  use the paper form or call the office rather than silently discarding a signed authorization.

```bash
# .env.local
KRTA_FORM_ENDPOINT="https://…"
```

## Content notes

Copy is taken verbatim from krta.org. Two things are flagged for KRTA rather than fixed:

- The live site contradicts itself on office staffing (two/three full-time, two/four part-time) and
  membership size (32,000 vs 30,000). Each page keeps its own numbers as written.
- The Social Security Fairness Act announcement on the homepage opens with a quotation mark the live
  site never closes; the orphaned mark is dropped and the wording is untouched.

Photography is KRTA's own, pulled from the live site into `public/images/` and rendered through the
design system's `.grayscale` treatment.
