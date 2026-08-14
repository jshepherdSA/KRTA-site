import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Card,
  Hero,
  ListRow,
  PhotoTile,
  ClosingPoster,
  QuickLinks,
  Section,
  SectionHeading,
} from "@/components/ds";
import { eventPosts, newsPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "KRTA — Kentucky Retired Teachers Association" },
  description:
    "The Kentucky Retired Teachers Association has looked out for the welfare of Kentucky's retired educators since 1957. Join or renew, read the KRTA News, follow legislative advocacy and find your local district.",
  alternates: { canonical: "/" },
};

/** The announcements that rotate in the slider on krta.org, kept verbatim. */
const announcements = [
  {
    kicker: "Legislative",
    title: "KRTA Legislative Advocacy",
    body: "KRTA has launched a statewide grassroots campaign to protect the earned retirement security of thousands of retirees who served a career educating children. Visit teachfrankfort.org to learn more and get involved.",
    href: "http://teachfrankfort.org/",
    linkLabel: "Visit teachfrankfort.org",
  },
  {
    kicker: "Community Service",
    title: "Serving Their Communities",
    body: "Retired teachers across the state continuously volunteer their time to make communities a better place. Even into retirement, teachers serve students by tutoring, donating school supplies, collecting food, and reading to local kids. Thank you KRTA members - your efforts do not go unnoticed!",
    href: "/join/volunteer-community-service",
    linkLabel: "Community service",
  },
  {
    kicker: "Stay Informed",
    title: "KRTA Social Links",
    body: "Are you being “social” in your retirement? KRTA is now on Facebook and Twitter, follow us to stay informed.",
    href: "https://www.facebook.com/KentuckyRetiredTeachersAssociation/",
    linkLabel: "Follow KRTA on Facebook",
  },
];

const gallery = [
  {
    src: "/images/gallery/01-IMG_5261-X3-1.jpg",
    alt: "KRTA members at the annual state convention",
  },
  {
    src: "/images/gallery/02-IMG_5265-X3-1.jpg",
    alt: "Members gathered in the convention hall",
  },
  {
    src: "/images/gallery/03-IMG_5266-X3-1.jpg",
    alt: "Delegates seated at the annual convention",
  },
  {
    src: "/images/gallery/04-Shaw-Second-District-1.jpg",
    alt: "Second District members with the Virginia Shaw membership award",
  },
  {
    src: "/images/gallery/05-90-and-above-Archer-1.jpg",
    alt: "Local units recognised with the M.L. Archer membership award",
  },
  {
    src: "/images/gallery/06-100-Archer-checked-1.jpg",
    alt: "Local unit representatives accepting a membership award",
  },
  {
    src: "/images/gallery/07-Gary-Harbin.jpg",
    alt: "Gary Harbin, Executive Secretary of the Teachers' Retirement System of Kentucky, addressing the convention",
  },
  {
    src: "/images/gallery/08-Tim-superhero-1.jpg",
    alt: "A convention skit performed for KRTA members",
  },
  {
    src: "/images/gallery/09-Grandparent-Essay-Winner-Sebastian-Dazey-1.jpg",
    alt: "The Kentucky Grandparent of the Year essay winner honoured on stage",
  },
  {
    src: "/images/gallery/10-IMG_5260-X3-1.jpg",
    alt: "Members talking between convention sessions",
  },
  {
    src: "/images/gallery/11-Pres-Rec-with-cake-1.jpg",
    alt: "Members at the president's reception",
  },
  {
    src: "/images/gallery/12-Staff-Photo-Booth-1.jpg",
    alt: "KRTA office staff at the convention photo booth",
  },
  {
    src: "/images/gallery/13-Volunteers-Check.jpg",
    alt: "KRTA volunteers presenting a donation cheque",
  },
  {
    src: "/images/gallery/14-IMG_5254-X2.jpg",
    alt: "The convention audience during a presentation",
  },
  {
    src: "/images/gallery/15-11182213_875504112508624_5118771861938166392_n.jpg",
    alt: "KRTA members volunteering in their community",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        kicker="Legislative"
        title="The Social Security Fairness Act"
        body={
          <>
            {/* The live site opens this sentence with a quotation mark it never
                closes; the orphaned mark is dropped, the wording is untouched. */}
            The Social Security Fairness Act, HR 82, concerning the Windfall
            Elimination Program and Government Pension Offset, was signed into
            law on January 6, 2025. Upon implementation, the Social Security
            Fairness Act eliminates the reduction of Social Security benefits
            while entitled to public pensions from work not covered by Social
            Security. For the most up to date information please visit{" "}
            <a href="https://www.ssa.gov/" target="_blank" rel="noreferrer">
              www.ssa.gov
            </a>
            .
          </>
        }
        actions={
          <>
            <Button href="https://www.ssa.gov/benefits/retirement/social-security-fairness-act.html">
              Read the update at ssa.gov
            </Button>
            <Button variant="secondary" href="/legislative">
              Legislative
            </Button>
          </>
        }
        media={
          <Image
            src="/images/hero/ssa-fairness-act.jpg"
            alt="The United States Capitol building"
            fill
            sizes="(max-width: 900px) 100vw, 60vw"
            style={{ objectFit: "cover" }}
            priority
          />
        }
      />

      <div>
        <QuickLinks
          links={[
            { label: "Join/Renew Membership", href: "/join/join-krta" },
            { label: "FAQs", href: "/about/frequently-asked-questions" },
            { label: "KRTA Annual Convention", href: "/convention" },
          ]}
        />
      </div>

      <Section tone="muted" labelledBy="announcements">
        <SectionHeading title="Announcements" id="announcements" />
        <div className="three-col">
          {announcements.map((a) => (
            <Card
              key={a.title}
              variant="ruled"
              kicker={a.kicker}
              title={a.title}
              body={a.body}
            >
              <p
                style={{
                  margin: "var(--space-2) 0 0",
                  fontSize: "var(--text-sm)",
                }}
              >
                {a.href.startsWith("/") ? (
                  <Link href={a.href}>{a.linkLabel}</Link>
                ) : (
                  <a href={a.href} target="_blank" rel="noreferrer">
                    {a.linkLabel}
                  </a>
                )}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="two-col">
          <section aria-labelledby="recent-news">
            <SectionHeading
              title="Recent News"
              id="recent-news"
              action="View all"
              actionHref="/recent-news"
            />
            <div className="list-rows">
              {newsPosts.map((n) => (
                <ListRow
                  key={n.slug}
                  date={n.date}
                  title={n.title}
                  description={n.excerpt}
                  href={`/news/${n.slug}`}
                />
              ))}
            </div>
          </section>

          <section aria-labelledby="upcoming-events">
            <SectionHeading
              title="Upcoming Events"
              id="upcoming-events"
              action="View all"
              actionHref="/krtaevents"
            />
            <div className="list-rows">
              {eventPosts.map((e) => (
                <ListRow
                  key={e.slug}
                  date={e.date}
                  title={e.title}
                  description={e.excerpt}
                  href={`/events/${e.slug}`}
                />
              ))}
            </div>
          </section>
        </div>
      </Section>

      <Section tone="muted" labelledBy="photo-gallery">
        <SectionHeading title="Photo Gallery" id="photo-gallery" />
        <div className="photo-grid">
          {gallery.map((g) => (
            <PhotoTile key={g.src}>
              <Image
                src={g.src}
                alt={g.alt}
                fill
                sizes="(max-width: 620px) 50vw, (max-width: 900px) 33vw, 20vw"
                style={{ objectFit: "cover" }}
              />
            </PhotoTile>
          ))}
        </div>
      </Section>

      <ClosingPoster />
    </>
  );
}
