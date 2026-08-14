import type { Metadata } from "next";
import { ClosingPoster, ListRow, PageHeader, Section } from "@/components/ds";
import { eventPostBodies } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Upcoming KRTA events: the Fall Workshop schedule, the meetings and events calendar, and officer reporting deadlines.",
  alternates: { canonical: "/krtaevents" },
};

export default function EventsIndexPage() {
  return (
    <>
      <PageHeader kicker="Calendar" title="Upcoming Events" />

      <Section tone="muted">
        <div className="list-rows">
          {eventPostBodies.map((e) => (
            <ListRow
              key={e.slug}
              date={e.date}
              title={e.title}
              description={e.excerpt}
              href={`/events/${e.slug}`}
              titleLevel={2}
            />
          ))}
        </div>
      </Section>

      <ClosingPoster />
    </>
  );
}
