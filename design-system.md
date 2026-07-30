# Design system — KRTA

Source of truth: the **KRTA Design System** package supplied with this project — the modernist KRTA
system (`tokens/`, `css/`, `components/`, `guidelines/`, `ui_kits/`, `assets/krta-logo.png`). It is
**not committed to this repo**; it lives alongside the checkout, one level up, as
`KRTA Design System/`. This file restates it in build terms so the repo is buildable without it.
Where the two disagree, the supplied system wins — go back to the package.

Its tokens and component class layer are ported verbatim into `app/globals.css`; do not invent
values here. Tailwind utilities are available, but every color / size / spacing utility resolves to
a token below.

## Brand

- **Client:** Kentucky Retired Teachers Association (KRTA), krta.org
- **What it is:** a membership association representing Kentucky's retired teachers,
  administrators and school personnel since 1957, through local units in fourteen districts.
- **Voice / feel:** informational, not promotional. Plain, warm and specific. Modernist framing —
  flat surfaces, a visible grid, 2px rules, zero radius.
- **Audience:** largely over 60. Body copy runs one step larger than a typical marketing site;
  targets are 44px minimum. Non-negotiable.
- **Copy rules:** sentence case in headlines and body; uppercase reserved for the label register.
  Second person for member actions ("Report your district and local officers by July 1"), third
  person for institutional statements. Dates are explicit. Links say what they open — "Read PDF",
  "Find your district", "View all" — never "click here" as a whole sentence. No exclamation marks,
  no marketing adjectives, no acronym without expansion on first use (WEP, GPO, TRS).
  **No emoji, ever.**

## Color

One ground, one ink, two roles. No third hue, no success/warning palette, no gradient anywhere.

| Role                              | Token                              | Value                             |
| --------------------------------- | ---------------------------------- | --------------------------------- |
| KRTA red (action)                 | `--krta-red` / `--color-accent`    | `#fd0002` — sampled from the logo |
| Slate blue (structure)            | `--krta-blue` / `--color-accent-2` | `#44576b`                         |
| Page                              | `--surface-page`                   | `#ffffff`                         |
| Card                              | `--surface-card`                   | `#f5f5f4`                         |
| Inset                             | `--surface-inset`                  | `#eeeeec`                         |
| Ink field (utility strip, footer) | `--surface-ink`                    | `#202b35` (accent-2-800)          |
| Text                              | `--text-primary`                   | `#1f1f1e`                         |
| Muted text                        | `--text-muted`                     | `#5d5d5a`                         |
| Red body text                     | `--text-accent`                    | `#a80003` (accent-700)            |
| 2px section rule                  | `--border-rule`                    | `#1f1f1e`                         |
| 1px row hairline                  | `--border-hairline`                | ink at 28%                        |

Red ramp `100 → 900`: `#fff1f0 #ffdcda #ffbdb8 #ff8b83 #fd0002 #d40003 #a80003 #7c0405 #4e0808`
Blue ramp `100 → 900`: `#f2f4f6 #e2e7eb #c8d0d8 #94a2b0 #44576b #37485a #2b3946 #202b35 #161d24`
Neutral ramp `100 → 900`: `#f7f7f6 #ebebe9 #d8d8d5 #b9b9b5 #979794 #797976 #5d5d5a #414140 #1f1f1e`

**Red carries action and emphasis** — primary buttons, active nav, kickers, hover fills, and the one
full-bleed poster band per page. **Blue carries structure** — the utility strip, the footer field,
secondary button outlines, dates and eyebrows. Pure logo red at paragraph size is too low-contrast:
set red body copy in `--text-accent`.

## Typography

**Archivo only.** 800 for headings, 400 for body. Loaded via `next/font/google`.

| Step             | Size | Use                                               |
| ---------------- | ---- | ------------------------------------------------- |
| `--text-display` | 56px | reserved                                          |
| `--text-3xl`     | 42px | h1                                                |
| `--text-2xl`     | 32px | h2, hero title, poster                            |
| `--text-xl`      | 25px | h3, quick links                                   |
| `--text-lg`      | 20px | h4                                                |
| `--text-md`      | 17px | h5, card + list-row titles                        |
| `--text-base`    | 15px | body                                              |
| `--text-sm`      | 13px | h6, secondary body, nav, button labels            |
| `--text-xs`      | 12px | eyebrows, tags, meta, table headers, field labels |

Headings: `line-height 1.12`, `letter-spacing -0.015em`. Body: `line-height 1.6`.
The label register — eyebrows, kickers, tags, button labels, table headers, field labels — is
13px/12px **uppercase** at `letter-spacing 0.09em`.

**Everything is flush left. Nothing is centered, including button labels.**

## Spacing & layout

- 4px base: `--space-1` 4 … `--space-6` 24, `--space-8` 32, `--space-10` 40, `--space-12` 48,
  `--space-16` 64, `--space-20` 80.
- Container `1160px`, gutters `24px` (`--space-6`).
- A visible modular grid: equal-width cells divided by **2px ink rules**, rows divided by **1px
  hairlines**. Sections are separated by rules, not by whitespace alone.
- **Every radius is 0.** `--radius-sm/md/lg` all resolve to `0px`.
- Section rhythm: `--space-12` (48px) between major blocks, `--space-16` (64px) before the footer
  or a poster band.

## Components

Ported from the package's `css/components.css`. Class names are the contract.

- **Button** `.btn` + `.btn-primary` (red fill, white type) / `.btn-secondary` (blue outline) /
  `.btn-ghost` (red text). Sizes `.btn-sm` `.btn-lg` `.btn-block`. Uppercase 13px label, flush left,
  zero radius. Hover: primary → `accent-600`; secondary fills `accent-2-100`; ghost → pure red.
  Press: one step darker again. Disabled → 45% opacity.
- **Tag** `.tag` + `.tag-red` / `.tag-blue` / `.tag-neutral` / `.tag-outline`.
- **Card** `.card` (gray fill) / `.card-plain` / `.card-ruled` (2px top rule, no fill) with
  `.card-kicker` `.card-title` `.card-body` `.card-meta`. Cards are fills or rules, never shadows.
- **SectionHeading** `.section-head` — heading over a 2px rule, optional right-aligned
  `.section-head-link` ("View all"). Repeats on every page.
- **Hero** `.hero` — a two-cell grid, grayscale photo left, body right behind a 2px left rule.
- **ListRow** `.list-row` — date / title+description / "Read more", hairline between rows,
  `neutral-100` wash on hover. The news and events pattern.
- **PhotoTile** `.photo-tile` in `.photo-grid` — 4:3, 4px gutters, optional scrim caption.
- **Quick links** `.quicklinks` — equal cells split by 2px rules, each inverting to a full red fill
  with white type on hover.
- **Poster** `.poster` — the one full-bleed red band per page. White button inside it.
- **Forms** `.field` / `.input` / `.check` — 44px minimum, 1px neutral border, red caret, red focus
  border. Labels in the uppercase register.
- **SiteHeader** `.site-header` — blue utility strip over a white bar with the logo and uppercase
  nav; active item gets red type and a 3px red underline; dropdowns are the only floating layer.
- **SiteFooter** `.site-footer` — slate field, three columns, red-300 column headings, hairline bar.

shadcn/ui primitives are available and used where a component needs real interaction behavior
(accordion, sheet, navigation menu), restyled to the classes above — they never bring their own
radius, shadow or palette.

## Imagery

- Real KRTA member, convention and community-service photographs, always through the `.grayscale`
  wrapper (`filter: grayscale(1) contrast(1.06)`). Square corners. 4:3 in the gallery grid.
- Never tinted, duotoned or colorized. No stock illustration, no drawn SVG artwork.
- Flat backgrounds only — white, gray surface, slate footer field, red poster band. No image behind
  text, no pattern, no texture, no blur.
- **Elevation is effectively unused.** `--shadow-sm/md/lg` exist for the single floating layer
  (nav dropdowns, modals); content never floats.

## Motion, hover, focus

No entrance animation, no parallax, no bounce. Hovers are instant color changes. Keyboard focus is a
2px red `:focus-visible` outline at 2px offset — never the browser default.

## Iconography

Near zero: type and rules carry the interface. Arrows are the Unicode `→` set in Archivo, not an
icon. Where a glyph is genuinely needed, Lucide at 20px / 2px stroke / `currentColor`
(`lucide-react` is installed). No icon fonts, no emoji.
