import type { Metadata } from "next";
import {
  ClosingPoster,
  DocList,
  DocRow,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/ds";
import { docs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Links",
  description:
    "Handbooks, officer and recognition forms, legislative and retirement links, Medicare and Social Security information, and health insurance resources for KRTA locals and districts.",
  alternates: { canonical: "/links" },
};

const U = "https://krta.org/wp-content/uploads";

const groups: {
  title: string;
  id: string;
  items: { label: string; href: string; kind?: string }[];
}[] = [
  {
    title: "KRTA Local and District",
    id: "local-district",
    items: [
      { label: "Calendar of Events 2026-2027", href: docs.eventsCalendar },
      { label: "Fall Workshop Schedule", href: docs.fallWorkshopSchedule },
      {
        label: "Local President Handbook",
        href: `${U}/2026/07/2026-2027-Local-Presidents-Handbook-1.pdf`,
      },
      {
        label: "Membership Handbook",
        href: `${U}/2026/07/2026-2027-Membership-HB.pdf`,
      },
      { label: "Goal Cheat Sheet", href: `${U}/2024/07/Goal-Cheat-Sheet.pdf` },
      {
        label: "Executive Council/District President Handbook",
        href: `${U}/2025/09/PDF-DP-HB-2025-2026-2.pdf`,
      },
      {
        label: "Local Recognition Form",
        href: `${U}/2026/02/Local-Rec-Form-2026.pdf`,
      },
      {
        label: "District Recognition Form",
        href: `${U}/2023/07/District-Rec-Form-2023-2024.pdf`,
      },
      {
        label: "AARP Grandparent Essay Link",
        href: "https://states.aarp.org/kentucky/ky-grandparent-essay-contest",
        kind: "Site",
      },
      { label: "Volunteer Hours", href: `${U}/2022/01/Volunteer-Hours.pdf` },
      { label: "Local Officer Form", href: docs.localOfficerForm },
      { label: "District Officer Form", href: docs.districtOfficerForm },
      {
        label: "Retired Teacher Appreciation Week Proclamation",
        href: `${U}/2025/10/rta-week-proclamation-2025-1.pdf`,
      },
      { label: "QR Code to Join KRTA", href: `${U}/2025/07/QR-Code.pdf` },
      {
        label: "Join Now Sign with QR code",
        href: `${U}/2026/05/JOIN-KRTA-TODAY-with-QR-Code.pdf`,
      },
    ],
  },
  {
    title: "Legislative Links",
    id: "legislative-links",
    items: [
      {
        label: "KRTA Legislative Priorities",
        href: docs.legislativePriorities,
      },
      {
        label: "Find Your Legislator",
        href: "https://apps.legislature.ky.gov/findyourlegislator/findyourlegislator.html",
        kind: "Tool",
      },
      {
        label: "Senate Members",
        href: "https://legislature.ky.gov/Legislators/senate",
        kind: "Site",
      },
      {
        label: "House Member",
        href: "https://legislature.ky.gov/Legislators/house-of-representatives",
        kind: "Site",
      },
      {
        label: "Legislative Record/Bills",
        href: "https://legislature.ky.gov/Legislation/Pages/default.aspx",
        kind: "Site",
      },
      {
        label: "LIVE KET General Assembly Coverage",
        href: "https://www.ket.org/legislature/",
        kind: "Video",
      },
    ],
  },
  {
    title: "Retirement Links",
    id: "retirement-links",
    items: [
      {
        label: "Kentucky Teacher Retirement System (TRS)",
        href: "https://trs.ky.gov/",
        kind: "Site",
      },
      {
        label: "Forms for Retired Ky Teachers (TRS)",
        href: "https://trs.ky.gov/retired-members/resources/forms-pamphlets-retired/",
        kind: "Site",
      },
      {
        label: "Kentucky Pension Coalition",
        href: "https://protectpensions.org/states/kentucky/",
        kind: "Site",
      },
      {
        label: "National Institute on Retirement Security",
        href: "http://www.nirsonline.org/",
        kind: "Site",
      },
      {
        label: "Annuity Schedule",
        href: "https://trs.ky.gov/retired-members/eft-dates/",
        kind: "Site",
      },
    ],
  },
  {
    title: "Medicare and Social Security Links",
    id: "medicare-social-security",
    items: [
      {
        label: "Medicare Information",
        href: "http://www.medicare.gov/",
        kind: "Site",
      },
      {
        label: "Medicare and You Online Book – Different Formats",
        href: "https://www.medicare.gov/medicare-and-you/different-formats/m-and-y-different-formats.html",
        kind: "Site",
      },
      {
        label: "Social Security Information – US Government",
        href: "http://www.ssa.gov/",
        kind: "Site",
      },
      {
        label: "Social Security Fairness",
        href: "http://www.ssfairness.com/",
        kind: "Site",
      },
      {
        label: "Social Security WEP Information",
        href: "http://www.ssa.gov/pubs/EN-05-10045.pdf",
      },
      {
        label: "Social Security Government Pension Offset",
        href: "http://www.socialsecurity.gov/retire2/gpo-calc.htm",
        kind: "Tool",
      },
    ],
  },
  {
    title: "Health Insurance Information Links",
    id: "health-insurance",
    items: [
      {
        label: "Under 65 Retired",
        href: "https://trs.ky.gov/retired-members/under-age-65/",
        kind: "Site",
      },
      {
        label: "Over 65 Retired",
        href: "https://trs.ky.gov/retired-members/age-65-over/",
        kind: "Site",
      },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <PageHeader
        kicker="Resources"
        title="Local/District Resources"
        lede="Handbooks and forms for officers, plus the legislative, retirement, Medicare and insurance references members ask for most."
      />

      {groups.map((g, index) => (
        <Section
          key={g.id}
          labelledBy={g.id}
          tone={index % 2 === 0 ? "muted" : "page"}
        >
          <SectionHeading title={g.title} id={g.id} />
          <DocList>
            {g.items.map((i) => (
              <DocRow
                key={i.href + i.label}
                label={i.label}
                href={i.href}
                kind={i.kind}
              />
            ))}
          </DocList>
        </Section>
      ))}

      <ClosingPoster />
    </>
  );
}
