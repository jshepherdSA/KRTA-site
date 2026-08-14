import type { Metadata } from "next";
import {
  Button,
  ClosingPoster,
  DocList,
  DocRow,
  PhotoPlaceholder,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/ds";
import { newsletterArchive } from "@/lib/newsletters";
import { docs } from "@/lib/site";

export const metadata: Metadata = {
  title: "KRTA Newsletter",
  description:
    "KRTA NEWS is delivered the first week of March, July and November, with an electronic Express edition in January, May and September. Read the current issue and the full archive back to 2006.",
  alternates: { canonical: "/krta-news-archives" },
};

export default function NewslettersPage() {
  return (
    <>
      <PageHeader kicker="Publications" title="KRTA Newsletter" />

      <Section tone="muted">
        <PhotoPlaceholder
          label="KRTA News"
          brief="The printed KRTA NEWS as it arrives — the paper itself, so members recognise it in the post."
          ratio="3 / 2"
        />

        <div
          className="prose prose-col"
          style={{ marginTop: "var(--space-8)" }}
        >
          <p>
            The printed newspaper, KRTA NEWS, provides members with valuable
            information in all areas of concern to retirees. Members can read
            about the KRTA leadership, local and district activities, Social
            Security/Medicare issues, AARP/NRTA, tax questions, legal and
            financial concerns, current state and local projects, special
            benefits for members, upcoming activities and their dates, warnings
            about scams… and the list goes on! Retired educators will not want
            to miss the most informative publication available in Kentucky.
            Watch for delivery the first week of March, July, and November.
            There is also and Express electronic edition that is sent via email
            in January, May, and September. These contain special information
            about General Assembly, KRTA Leadership, and the KRTA Annual
            Convention.
          </p>
        </div>

        <div style={{ marginTop: "var(--space-6)" }}>
          <Button href={docs.currentNewsletter}>View current newsletter</Button>
        </div>
      </Section>

      <Section labelledBy="archives">
        <SectionHeading title="KRTA Newsletter Archives" id="archives" />

        {newsletterArchive
          .slice()
          .reverse()
          .map((year) => (
            <section key={year.year} style={{ marginTop: "var(--space-8)" }}>
              <h3>{year.year}</h3>
              <DocList>
                {year.items.map((item) => (
                  <DocRow
                    key={item.href + item.label}
                    label={`${item.label} ${year.year.slice(0, 4)}`}
                    href={item.href}
                  />
                ))}
              </DocList>
            </section>
          ))}
      </Section>

      <ClosingPoster />
    </>
  );
}
