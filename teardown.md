# Teardown — krta.org `[same-org]`

One reference site: **https://krta.org/**, tagged `[same-org]`. We are building a new site for the
same organization. Per the tag: **keep brand, voice, identity and content; do not copy the site's
layout or section treatments.** The visual direction comes from `design-system.md`, not from here.

The user added one instruction that overrides the tag's usual content latitude: _"the content here
from every page should be kept almost exactly."_ So this teardown is authoritative for **copy, page
inventory, nav labels and URLs**, and deliberately non-authoritative for **layout**.

Captured 2026-07-30 from the live HTML (37 pages + `wp-sitemap.xml`).

---

## 1. Tech stack observed

|                   |                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------- |
| CMS               | WordPress, custom theme `wp-content/themes/KRTA`                                      |
| Layout            | Fixed-width float layout, `style.css` + `responsive.css` + `shortcodes.css`           |
| Homepage slider   | MetaSlider (Flex), 4 rotating announcement slides with caption overlays               |
| Photo gallery     | "Awesome Carousel" slick carousel + magnific-popup lightbox, 15 images                |
| Nav               | Two hard-coded WP menus (desktop `.mainmenu`, mobile `jquery-responsive-select-menu`) |
| Custom post types | `news_posts`, `events_posts` — three entries each                                     |
| Forms             | Third-party: JotForm iframe (contact), Everest Forms (automatic dues deduction)       |
| Perf              | W3 Total Cache; mod_security blocks non-browser user agents                           |

Nothing here is worth carrying forward. The rebuild replaces all of it with Next.js App Router +
the design system's class layer.

## 2. Information architecture — CARRY OVER EXACTLY

The nav is the spine of the site and is reproduced label-for-label. URLs are preserved so existing
links, printed material and search results keep resolving.

```
Home                       /
About                      /about/
  2026-2027 KRTA Officers  /krta-officers/
  Executive Council        → PDF
  District Presidents      → PDF
  Committee Chairs         → PDF
  Standing Committees      → PDF
  Constitution and By Laws /constitution-and-by-laws/
  KRTA Staff, Hours, &     /krta-staff/
    Location
  Fall Workshops           /information-services/fall-workshops/
  Community Service        /join/volunteer-community-service/
  Find Your Local/District /about/find-your-district/
  Mission and History      /about/mission-and-history/
  What's in a Name?        /about/whats-in-a-name/
  Frequently Asked Qs      /about/frequently-asked-questions/
  KRTA Annual Convention   /convention/
Join/Renew                 /join/join-krta/
Member Benefits Login      /members/
Newsletters                /krta-news-archives/
Collette Travel            /collettetravel/
Legislative                /legislative/
Local/District Resources   /links/
Contact                    /contact/
  Site Map                 /site-map/
```

Not in the nav but linked and kept: `/recent-news/` + `/news/<slug>/` (3 posts),
`/krtaevents/` + `/events/<slug>/` (3 posts), `/automatic-dues-deduction/`,
`/information-services/`, `/membership-workshop/`, `/join/` (duplicate of Join/Renew).
`/annuity-schedule/` is a passthrough to trs.ky.gov and becomes a redirect.

Dead or empty on the live site, dropped: `/committee-chairs/`,
`/information-services/krta-annual-convention/`, `/newsletter-sign-up/` (renders a broken
shortcode literal), `/upcoming-events/` (a single link to `/krtaevents/`),
`/2026-fall-workshop-schedule-5/` (duplicate of the Fall Workshops page),
`/2023-workshops-2/`, `/vote-no-on-amendment-2/`, `/membership-workshop/` is kept because it is
still linked from the 2025 convention section.

## 3. Brand cues — CARRY OVER

- **Wordmark**: KRTA inside the outline of Kentucky with a "SINCE 1957" plate. Primary red sampled
  from it: `#fd0002`. The logo is the only place the outline appears.
- **Published phone**: `1-800-551-7979`, shown in the header on every page.
- **Office**: 7800 Leaders Lane, Louisville KY 40291 · info@krta.org ·
  Monday–Thursday 8:30–4:00, Friday 8:30–2:00.
- **Social**: Facebook `/KentuckyRetiredTeachersAssociation/`, X `@kyretiredteach`. Two links only.
- **Standing line**: "Serving Kentucky's retired educators since 1957."
- **Voice sample** (kept verbatim across the rebuild): _"KRTA remains the 'only organization in the
  state that has as its main purpose to look out for the welfare of retired educators.'"_
- **Recurring facts**: established 1957 · 14 districts · 118 local units · 32,000+ members ·
  dues $25/year · membership period July 1 – June 30.

## 4. Section patterns observed — and what replaces them

| Live site                                                                                       | Rebuild                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Auto-rotating 4-slide announcement carousel with text over photo                                | One static `Hero` — the lead announcement, grayscale photo in its own cell, copy beside it behind a 2px rule. No rotation, no text over image. The other three announcements become ruled cards below. |
| Three red pill buttons under the slider (Join/Renew, FAQs, Convention)                          | `.quicklinks` — three equal cells split by 2px rules, each inverting to a full red fill on hover. Same three destinations, same labels.                                                                |
| "Recent News" / "Upcoming Events" as two side-by-side blog-card columns with a gray bar heading | Two `SectionHeading` + `.list-rows` columns. Date, title, description, "Read more". Hairline between rows.                                                                                             |
| 15-image auto-scrolling lightbox carousel                                                       | Static `.photo-grid` of grayscale 4:3 tiles, 4px gutters.                                                                                                                                              |
| Interior pages: content column + full-nav sidebar, WP default styling                           | Interior pages: page header with kicker + `h1` over a 2px rule, prose column at 66ch, section-nav sidebar for the About cluster only.                                                                  |
| PDF links as bare inline anchors mid-paragraph                                                  | Document rows — title, "PDF", `→` — in a ruled list, so the label says what it opens.                                                                                                                  |
| FAQ as a jQuery "click to expand" list                                                          | shadcn/ui Accordion restyled to the rule/hairline treatment.                                                                                                                                           |
| JotForm iframe (contact), Everest Forms (dues)                                                  | Native forms on `.field`/`.input`/`.check` at 44px minimum. The dues form keeps every field and the full authorization text verbatim.                                                                  |
| Nothing anywhere                                                                                | One red `.poster` band per page as the closing statement.                                                                                                                                              |

## 5. Content notes worth flagging

- The live site contradicts itself on two facts: the Louisville office is described as "two
  full-time and two part-time" on `/about/`, "three full-time and two part-time" on
  `/about/whats-in-a-name/`, and "two full-time and four part-time" in the FAQ. Membership is
  "32,000+" in three places and "30,000+" in the FAQ; districts are "14" everywhere except the
  design system readme, which says ten. **Each page's own numbers are kept as written** — this is a
  client copy decision, not ours to reconcile. Flagged for KRTA.
- Several event/news post slugs are stale (`/events/2022-2023-tentative-events-calendar/` holds the
  2026-2027 calendar; `/events/new-officer-forms-for-2022-2023-year/` holds the 2026-2027 forms).
  Slugs are preserved so inbound links keep working; titles use the current year as the live site
  does.
- `/join/` and `/join/join-krta/` are byte-identical. Both are kept; `/join/` renders the same page.
- The homepage "View All" links point at `?p=1798` (news) and `?p=1792` (events); these resolve to
  `/recent-news/` and `/krtaevents/` and are rewritten to those paths.
- The newsletter archive runs 2006 → 2026, roughly 100 PDF links. All are kept, grouped by year.
- Convention page carries four embedded YouTube players plus ~60 PDF/PNG award links across four
  years. All kept.
