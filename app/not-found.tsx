import Link from "next/link";
import { ClosingPoster, PageHeader, Section } from "@/components/ds";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <>
      <PageHeader
        kicker="Page not found"
        title="We could not find that page"
        lede="The page may have moved, or the link may be out of date."
      />

      <Section>
        <div className="prose prose-col">
          <p>Try one of these instead:</p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/join/join-krta">Join or renew your membership</Link>
            </li>
            <li>
              <Link href="/krta-news-archives">
                KRTA News and the newsletter archive
              </Link>
            </li>
            <li>
              <Link href="/site-map">The full site map</Link>
            </li>
          </ul>
          <p>
            You can also call the KRTA office at{" "}
            <a href={`tel:${site.phone}`}>{site.phone}</a> or email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </Section>

      <ClosingPoster />
    </>
  );
}
