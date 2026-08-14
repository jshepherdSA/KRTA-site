import type { Metadata } from "next";
import { ClosingPoster, ListRow, PageHeader, Section } from "@/components/ds";
import { newsPostBodies } from "@/lib/posts";

export const metadata: Metadata = {
  title: "News",
  description: "Recent news from the Kentucky Retired Teachers Association.",
  alternates: { canonical: "/recent-news" },
};

export default function RecentNewsPage() {
  return (
    <>
      <PageHeader kicker="Updates" title="Recent News" />

      <Section tone="muted">
        <div className="list-rows">
          {newsPostBodies.map((n) => (
            <ListRow
              key={n.slug}
              date={n.date}
              title={n.title}
              description={n.excerpt}
              href={`/news/${n.slug}`}
              titleLevel={2}
            />
          ))}
        </div>
      </Section>

      <ClosingPoster />
    </>
  );
}
