import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ClosingPoster, PageHeader, Section } from "@/components/ds";
import { newsPostBodies } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsPostBodies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = newsPostBodies.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
  };
}

export default async function NewsPostPage({ params }: Props) {
  const { slug } = await params;
  const index = newsPostBodies.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const post = newsPostBodies[index];
  const previous = newsPostBodies[index + 1];
  const next = newsPostBodies[index - 1];

  return (
    <>
      <PageHeader kicker={post.date} title={post.title} />

      <Section tone="muted">
        <article className="prose prose-col">{post.body}</article>

        <nav
          aria-label="More news"
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
            <Link href={`/news/${previous.slug}`}>&larr; {previous.title}</Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/news/${next.slug}`}>{next.title} &rarr;</Link>
          ) : (
            <span />
          )}
        </nav>

        <p style={{ marginTop: "var(--space-6)" }}>
          <Link href="/recent-news">All recent news</Link>
        </p>
      </Section>

      <ClosingPoster />
    </>
  );
}
