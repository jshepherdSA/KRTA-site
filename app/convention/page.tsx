import type { Metadata } from "next";
import {
  ClosingPoster,
  DocList,
  DocRow,
  PageHeader,
  SectionHeading,
  VideoEmbed,
} from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";

export const metadata: Metadata = {
  title: "KRTA Annual Convention",
  description:
    "Presentations, workshops, awards and photographs from the KRTA Annual Convention, 2023 through 2026.",
  alternates: { canonical: "/convention" },
};

const U = "https://krta.org/wp-content/uploads";

type Doc = { label: string; href: string; kind?: string };

const y2026: { heading: string; docs: Doc[] }[] = [
  {
    heading: "Registration",
    docs: [
      {
        label: "Registration Form",
        href: `${U}/2026/02/Convention-Registration-Page-for-Greg-.pdf`,
      },
    ],
  },
  {
    heading: "Gary Harbin, TRS Executive Secretary",
    docs: [
      { label: "Slides", href: `${U}/2026/04/Gary-Harbin-Presentation.pdf` },
      {
        label: "Presentation",
        href: "https://www.youtube.com/watch?v=2H5W2zP8Vo8",
        kind: "Video",
      },
    ],
  },
  {
    heading:
      "Joel Eskovitz, Senior Director of Social Security and Savings at the AARP Public Policy Institute",
    docs: [
      {
        label: "Slides",
        href: `${U}/2026/04/NASI-Social-Security-KY-Teachers.pdf`,
      },
      {
        label: "Presentation",
        href: "https://www.youtube.com/watch?v=cj8AducM_1U",
        kind: "Video",
      },
    ],
  },
  {
    heading: "Health & Insurance Workshop",
    docs: [
      {
        label: "TRS Presentation by Dora Moore",
        href: `${U}/2026/04/2026-HI.pdf`,
      },
      {
        label: "Humana Presentation",
        href: `${U}/2026/04/TRS-Health-and-Ins-Workshop-Presentation-Slides.pdf`,
      },
    ],
  },
  {
    heading: "Convention programme",
    docs: [
      {
        label: "Motivational Speaker Merlyna Valentine",
        href: "https://www.youtube.com/watch?v=xe2BqqPTBkY",
        kind: "Video",
      },
      {
        label: "KRTA Skits",
        href: "https://www.youtube.com/watch?v=r859WpSahbw",
        kind: "Video",
      },
      {
        label: "Photo Booth Fun!",
        href: "https://www.clearchoiceevents.com/4-20-2026-KY-2026-KRTA-Convention",
        kind: "Photos",
      },
    ],
  },
  {
    heading: "Frank R Hatfield Volunteer of the Year: Greg Gierhart",
    docs: [
      {
        label: "Frank R Hatfield Volunteer of the Year Greg Gierhart",
        href: `${U}/2026/04/Greg-Gierhart-1-1.png`,
        kind: "Image",
      },
      { label: "Q&A with Greg Gierhart", href: `${U}/2026/04/Binder1.pdf` },
    ],
  },
  {
    heading: "AARP Grandparent of the Year State Winner: Mia Rupe",
    docs: [
      {
        label: "Interview",
        href: `${U}/2026/04/2026_GPE_Grandpa_Reel.mp4`,
        kind: "Video",
      },
      {
        label: "Essay",
        href: `${U}/2026/04/2026_GPE_Mia_Rupe_Reel.mp4`,
        kind: "Video",
      },
    ],
  },
  {
    heading: "Awards",
    docs: [
      {
        label: "2026 Cathy G Gullett State Leadership Awards",
        href: `${U}/2026/04/2025-Cathy-G-Gullett-State-Leadership-Service-Awards-1.png`,
        kind: "Image",
      },
      {
        label:
          "2026 District Virginia Shaw Awards (Award presented to Districts reaching 80% membership)",
        href: `${U}/2026/04/2025-District-Shaw-Award-1.png`,
        kind: "Image",
      },
      {
        label:
          "2026 Local ML Archer Awards (Award presented to locals whose membership is 90% and above)",
        href: `${U}/2026/04/2026-ML-Archer.png`,
        kind: "Image",
      },
      {
        label:
          "2026 Top Hat Awards (Award presented for largest membership gain, top 10 locals and top 5 district)",
        href: `${U}/2026/04/2025-Top-Hat-Awards-1.png`,
        kind: "Image",
      },
      {
        label: "2026 YES WE DID Local",
        href: `${U}/2026/04/2026-Yes-We-Did-Locals.png`,
        kind: "Image",
      },
      {
        label: "2026 YES WE DID District",
        href: `${U}/2026/04/2026-Yes-We-Did-District.png`,
        kind: "Image",
      },
      {
        label: "2026 District Gold",
        href: `${U}/2026/04/2026-District-Gold.png`,
        kind: "Image",
      },
      {
        label: "2026 District Silver",
        href: `${U}/2026/04/2025-Silver-Local-1.png`,
        kind: "Image",
      },
      {
        label: "2026 Local Gold",
        href: `${U}/2026/04/2026-Gold-Local-Awards.pdf`,
      },
      {
        label: "2026 Local Silver",
        href: `${U}/2026/04/2026-Silver-Local.png`,
        kind: "Image",
      },
      {
        label: "2026 Local Bronze",
        href: `${U}/2026/04/2026-Bronze-Local-1.png`,
        kind: "Image",
      },
    ],
  },
];

const y2025Videos = [
  {
    id: "mqkQ4uia3Ss",
    title:
      "2025 TRS Annual Report from Gary Harbin, Executive Secretary with TRS",
  },
  {
    id: "N7uRn_MwCAE",
    title: "KRTA Membership Skits from 2025 Annual Conference",
  },
  {
    id: "QlIrLG-hqrM",
    title:
      "2025 Key Note Address from Kentucky Education Commissioner Robbie Fletcher",
  },
  { id: "dMSjD3yMdwI", title: "2025 AARP Grandparent Essay Winner" },
];

const y2025: { heading: string; docs: Doc[] }[] = [
  {
    heading: "Registration and presentations",
    docs: [
      {
        label: "Convention Registration Form",
        href: `${U}/2025/02/Convention-Registration.pdf`,
      },
      {
        label: "TRS Gary Harbin Slides",
        href: `${U}/2025/04/2025-KRTA-Annual-Convention-PDF.pdf`,
      },
    ],
  },
  {
    heading: "Workshops",
    docs: [
      {
        label: "Membership Workshop",
        href: "/membership-workshop",
        kind: "Page",
      },
      {
        label: "Health and Insurance Workshop Slides",
        href: `${U}/2025/04/TRS-Presentation-Dora-Moore.pdf`,
      },
    ],
  },
  {
    heading: "Awards",
    docs: [
      {
        label: "2025 Cathy G Gullett State Leadership Awards",
        href: `${U}/2025/04/2025-Cathy-G-Gullett-State-Leadership-Service-Awards.png`,
        kind: "Image",
      },
      {
        label:
          "2025 District Virginia Shaw Awards (Award presented to Districts reaching 80% membership)",
        href: `${U}/2025/04/2025-District-Shaw-Award.png`,
        kind: "Image",
      },
      {
        label:
          "2025 Local ML Archer Awards (Award presented to locals whose membership is 90% and above)",
        href: `${U}/2025/04/2025-Local-ML-Archer-1.png`,
        kind: "Image",
      },
      {
        label:
          "2025 Top Hat Awards (Award presented for largest membership gain, top 10 locals and top 5 district)",
        href: `${U}/2025/04/2025-Top-Hat-Awards.png`,
        kind: "Image",
      },
      {
        label: "2025 District Awards",
        href: `${U}/2025/04/2025-District-Awards.png`,
        kind: "Image",
      },
      {
        label: "2025 Local Gold Awards",
        href: `${U}/2025/04/2025-Gold-Local-Awards.pdf`,
      },
      {
        label: "2025 Local Silver Awards",
        href: `${U}/2025/04/2025-Silver-Local.png`,
        kind: "Image",
      },
      {
        label: "2025 Local Bronze Awards",
        href: `${U}/2025/04/2025-Bronze-Local-Awards.png`,
        kind: "Image",
      },
    ],
  },
  {
    heading: "Other information",
    docs: [
      {
        label: "QR code to Join Krta",
        href: `${U}/2025/04/KRTAJoin.jpg`,
        kind: "Image",
      },
      {
        label: "Photo Booth Pictures",
        href: "https://photos.clearchoicephotos.com/gallery/wyy0q",
        kind: "Photos",
      },
    ],
  },
];

const y2024: Doc[] = [
  {
    label: "Convention Registration Form",
    href: `${U}/2024/02/Convention-Registration.pdf`,
  },
  {
    label: "Photo Booth Pictures",
    href: "https://photos.app.goo.gl/EzMGFNQQdyGFLssd8",
    kind: "Photos",
  },
  {
    label:
      "AARP Pictures (Grandparent Essay Winner and Guest Speaker Heather French-Henry)",
    href: "https://aarpkentucky.smugmug.com/Events/KRTA-Grandparent-Essay-Contest-2024",
    kind: "Photos",
  },
  {
    label: "Grandparent of the Year Essay Winner Video",
    href: "https://www.youtube.com/watch?v=hMd5_b844tM",
    kind: "Video",
  },
  {
    label: "Health & Insurance Workshop Slides",
    href: `${U}/2024/05/2024-Insurance-Presentation-Workshop.pdf`,
  },
  {
    label: "Membership Workshop",
    href: "https://youtu.be/qxCaeRIIPQY",
    kind: "Video",
  },
  {
    label: "Guest Speaker Heather French Henry",
    href: "https://www.youtube.com/watch?v=DTy-cWonPjc",
    kind: "Video",
  },
  {
    label: "TRS- Gary Harbin Video",
    href: "https://www.youtube.com/watch?v=kZSySlcb_TE",
    kind: "Video",
  },
  {
    label: "TRS- Gary Harbin Slides",
    href: `${U}/2024/05/2024-Annual-Convention-TRS-Pres.-Gary-Harbin.pdf`,
  },
  {
    label: "District Recognition Awards",
    href: `${U}/2024/05/2024-District-Awards.png`,
    kind: "Image",
  },
  {
    label: "Local Gold",
    href: `${U}/2024/05/2024-Gold-Local-Awards-1.png`,
    kind: "Image",
  },
  {
    label: "Local Silver",
    href: `${U}/2024/05/2024-Silver-Local.png`,
    kind: "Image",
  },
  {
    label: "Local Bronze",
    href: `${U}/2024/05/2024-Bronze-Local-Awards.png`,
    kind: "Image",
  },
  {
    label: "Top Hat- Largest Membership Growth Locals and Districts",
    href: `${U}/2024/05/Top-Hat-Awards.png`,
    kind: "Image",
  },
  {
    label: "Yes We Did- Met Membership Goal Locals and Districts",
    href: `${U}/2024/05/2024-YES-we-did.png`,
    kind: "Image",
  },
  {
    label: "Game Show Entertainment Parody Show To Tell The Truth",
    href: "https://www.youtube.com/watch?v=UNqh497GgMM",
    kind: "Video",
  },
  {
    label: "Volunteer of the Year Recipient Janet Gill",
    href: "https://www.youtube.com/watch?v=mnFymhVyTYU",
    kind: "Video",
  },
  {
    label: "Cathy G. Gullett State Leadership Award Recipients",
    href: `${U}/2024/05/Cathy-G-Gullett-State-Leadership-Service-Awards.png`,
    kind: "Image",
  },
  {
    label:
      "Virginia Shaw Awards — a district award for districts at 80% or higher in membership",
    href: `${U}/2024/05/2024-District-Shaw-Award.png`,
    kind: "Image",
  },
  {
    label:
      "M.L. Archer Awards — a local award for those locals at 90% or higher in membership",
    href: `${U}/2024/05/ml-archer.png`,
    kind: "Image",
  },
];

const y2023: Doc[] = [
  {
    label: "Gary Harbin Presentation (slides)",
    href: `${U}/2023/04/2023-Annual-Convention-TRS.pdf`,
  },
  {
    label: "Gary Harbin Presentation Video",
    href: "https://www.youtube.com/watch?v=7jQ0s_XETlA",
    kind: "Video",
  },
  {
    label: "TRS Insurance Presentation (slides)",
    href: `${U}/2023/04/2023-Insurance-Presentation.pdf`,
  },
  {
    label: "Dr. Jason Glass Kentucky Education Commissioner Video",
    href: "https://www.youtube.com/watch?v=TIjTjS-kc7g",
    kind: "Video",
  },
  {
    label: "Guest Speakers of Western Hills Cadence Hamilton and Olivia Barker",
    href: "https://www.youtube.com/watch?v=Jnyu1oAltdo",
    kind: "Video",
  },
  {
    label:
      "Grandparent Essay Winner — Student Essay Winner London Pearson, Mason County, Eastern District",
    href: `${U}/2023/04/AARP-Essay-Winner-Group-PIcture.jpg`,
    kind: "Image",
  },
  {
    label: "Grandparent Essay Winner Video",
    href: "https://www.youtube.com/watch?v=sJA28WMAHrM",
    kind: "Video",
  },
  {
    label: "District Song Parodies",
    href: "https://www.youtube.com/watch?v=pUxviF9Co-I",
    kind: "Video",
  },
  {
    label: "Cathy Gullet Service Awards",
    href: `${U}/2023/04/The-Cathy-G-Gullett-State-Volunteer-Leadership-Award.png`,
    kind: "Image",
  },
  {
    label:
      "Virginia Shaw Awards — a district award for districts at 80% or higher in membership",
    href: `${U}/2023/04/2023-Shaw-Award.png`,
    kind: "Image",
  },
  {
    label:
      "M.L. Archer Awards — a local award for those locals at 90% or higher in membership",
    href: `${U}/2023/04/2023-ML-Archer-Awards.png`,
    kind: "Image",
  },
  {
    label: "District Awards",
    href: `${U}/2023/04/2023-District-Awards.png`,
    kind: "Image",
  },
  {
    label: "Gold Local Awards",
    href: `${U}/2023/04/2023-Local-Gold.png`,
    kind: "Image",
  },
  {
    label: "Silver Local Awards",
    href: `${U}/2023/04/2023-Local-Silver-1.png`,
    kind: "Image",
  },
  {
    label: "Bronze Local Awards",
    href: `${U}/2023/04/2023-Bronze-Local-.png`,
    kind: "Image",
  },
  {
    label:
      "Volunteer of The Year Award — Carolyn L. Wells, Todd County, Third District",
    href: `${U}/2023/04/Volunteer-of-the-Year.jpg`,
    kind: "Image",
  },
  {
    label: "Pictures",
    href: "https://photos.app.goo.gl/SrULPLdXooT2jYoa6",
    kind: "Photos",
  },
  {
    label: "Photo Booth Pictures",
    href: "https://photos.app.goo.gl/pGz19BVydLu5AHYH9",
    kind: "Photos",
  },
];

function Group({ heading, docs }: { heading: string; docs: Doc[] }) {
  return (
    <div style={{ marginTop: "var(--space-8)" }}>
      <h3>{heading}</h3>
      <DocList>
        {docs.map((d) => (
          <DocRow
            key={d.href + d.label}
            label={d.label}
            href={d.href}
            kind={d.kind}
          />
        ))}
      </DocList>
    </div>
  );
}

export default function ConventionPage() {
  return (
    <>
      <PageHeader
        kicker="Events"
        title="KRTA Annual Convention"
        lede="The convention brings all districts and locals together each April in Louisville. Presentations, workshops, awards and photographs from the last four years."
      />

      <WithSectionNav>
        <SectionHeading title="2026 Convention Information" id="c2026" />
        {y2026.map((g) => (
          <Group key={g.heading} heading={g.heading} docs={g.docs} />
        ))}

        <div style={{ marginTop: "var(--space-12)" }}>
          <SectionHeading title="2025 Convention Information" id="c2025" />
          {y2025.map((g) => (
            <Group key={g.heading} heading={g.heading} docs={g.docs} />
          ))}
          <div style={{ marginTop: "var(--space-8)" }}>
            <h3>Presentations</h3>
            {y2025Videos.map((v) => (
              <VideoEmbed key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: "var(--space-12)" }}>
          <SectionHeading title="2024 Convention Information" id="c2024" />
          <div style={{ marginTop: "var(--space-6)" }}>
            <DocList>
              {y2024.map((d) => (
                <DocRow
                  key={d.href + d.label}
                  label={d.label}
                  href={d.href}
                  kind={d.kind}
                />
              ))}
            </DocList>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-12)" }}>
          <SectionHeading title="2023 Convention Information" id="c2023" />
          <div style={{ marginTop: "var(--space-6)" }}>
            <DocList>
              {y2023.map((d) => (
                <DocRow
                  key={d.href + d.label}
                  label={d.label}
                  href={d.href}
                  kind={d.kind}
                />
              ))}
            </DocList>
          </div>
          <p className="text-muted" style={{ marginTop: "var(--space-4)" }}>
            AARP Pictures — coming soon
          </p>
        </div>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
