import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingPoster, PageHeader, Section } from "@/components/ds";
import { eventPostBodies } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return eventPostBodies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = eventPostBodies.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/events/${post.slug}` },
  };
}

export default async function EventPostPage({ params }: Props) {
  const { slug } = await params;
  const index = eventPostBodies.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = eventPostBodies[index];
  const previous = eventPostBodies[index + 1];
  const next = eventPostBodies[index - 1];

  return (
    <>
      <PageHeader kicker={post.date} title={post.title} />

      <Section tone="muted">
        <article className="prose prose-col">{post.body}</article>

        <nav
          aria-label="More events"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            marginTop: "var(--space-10)",
            paddingTop: "var(--space-4)",
            borderTop: "2px solid var(--border-rule)",
          }}
        >
          {previous ? (
            <Link href={`/events/${previous.slug}`}>
              &larr; {previous.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/events/${next.slug}`}>{next.title} &rarr;</Link>
          ) : (
            <span />
          )}
        </nav>

        <p style={{ marginTop: "var(--space-6)" }}>
          <Link href="/krtaevents">All upcoming events</Link>
        </p>
      </Section>

      <ClosingPoster />
    </>
  );
}
