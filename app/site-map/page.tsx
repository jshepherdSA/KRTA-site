import type { Metadata } from "next";
import Link from "next/link";
import {
  ClosingPoster,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/ds";
import { eventPostBodies, newsPostBodies } from "@/lib/posts";
import { nav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Site Map",
  description: "Every page on krta.org, in one list.",
  alternates: { canonical: "/site-map" },
};

const extra = [
  { label: "Automatic Dues Deduction", href: "/automatic-dues-deduction" },
  { label: "Information Services", href: "/information-services" },
  { label: "Membership Workshop", href: "/membership-workshop" },
  { label: "Recent News", href: "/recent-news" },
  { label: "Upcoming Events", href: "/krtaevents" },
];

export default function SiteMapPage() {
  return (
    <>
      <PageHeader kicker="Index" title="Site Map" />

      <Section labelledBy="main-pages">
        <SectionHeading title="Main pages" id="main-pages" />
        <ul className="bullets">
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
              {item.children ? (
                <ul className="bullets" style={{ marginTop: "var(--space-2)" }}>
                  {item.children.map((c) =>
                    c.external ? (
                      <li key={c.label}>
                        <a href={c.href} target="_blank" rel="noreferrer">
                          {c.label} (PDF)
                        </a>
                      </li>
                    ) : (
                      <li key={c.label}>
                        <Link href={c.href}>{c.label}</Link>
                      </li>
                    ),
                  )}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="other-pages">
        <SectionHeading title="Other pages" id="other-pages" />
        <ul className="bullets">
          {extra.map((e) => (
            <li key={e.href}>
              <Link href={e.href}>{e.label}</Link>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="news-events">
        <SectionHeading title="News and events" id="news-events" />
        <ul className="bullets">
          {newsPostBodies.map((p) => (
            <li key={p.slug}>
              <Link href={`/news/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
          {eventPostBodies.map((p) => (
            <li key={p.slug}>
              <Link href={`/events/${p.slug}`}>{p.title}</Link>
            </li>
          ))}
        </ul>
      </Section>

      <ClosingPoster />
    </>
  );
}
