import type { Metadata } from "next";
import { ClosingPoster, PageHeader, SectionHeading } from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";

export const metadata: Metadata = {
  title: "About KRTA",
  description:
    "Established in 1957, KRTA is the only organization in Kentucky whose main purpose is to look out for the welfare of retired educators. More than 32,000 members enjoy benefits individually and as a group.",
  alternates: { canonical: "/about" },
};

const benefits = [
  "Long-term care insurance partner",
  "Dental & Vision plans",
  "Free legal service — nationwide Legaline",
  "Free finance and investment information service",
  "Commonwealth Credit Union",
  "Comfort Keepers",
  "Home Instead Senior Care",
  "Home Helpers",
  "Travel with Collette Travel",
  "Triple A Discount",
  "Three printed newspapers each year",
  "Two electronic edition newsletters each year",
  "Annual statewide convention",
  "Annual regional workshops",
  "A larger voice in Frankfort",
];

const leadership = [
  "Governed by the State Executive Committee",
  "President, President-Elect, Vice President, and Immediate Past President",
  "State Executive Council",
  "Representatives from each district",
  "Chairs for Membership, Health & Insurance and Legislative Committees",
  "KRTA office in Louisville staffed by two full-time and two part-time employees",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader kicker="The association" title="About KRTA" />

      <WithSectionNav>
        <div className="prose prose-col">
          <p>
            The Kentucky Retired Teachers Association was established in 1957
            out of a need for organized support for retired teachers. KRTA
            remains the &ldquo;only organization in the state that has as its
            main purpose to look out for the welfare of retired
            educators.&rdquo; From its inception, KRTA has continued to grow in
            numbers and respect. Through its commitment to the priorities set
            forth by the leadership, more than 32,000 members enjoy numerous
            benefits, both individually and as a group.
          </p>
        </div>

        <div style={{ marginTop: "var(--space-10)" }}>
          <SectionHeading title="Benefits" id="benefits" />
          <ul className="prose-col bullets">
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: "var(--space-10)" }}>
          <SectionHeading title="Leadership" id="leadership" />
          <ul className="prose-col bullets">
            {leadership.map((l) => (
              <li key={l}>{l}</li>
            ))}
          </ul>
        </div>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
