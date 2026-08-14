import type { Metadata } from "next";
import {
  ClosingPoster,
  DocList,
  DocRow,
  PageHeader,
  Section,
} from "@/components/ds";
import { docs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legislative",
  description:
    "KRTA's 2026 legislative priorities, text alerts, TeachFrankfort.org, and the tools to find and contact your Kentucky legislator.",
  alternates: { canonical: "/legislative" },
};

const links = [
  {
    label: "Text Alerts",
    href: "https://teachfrankfort.org/join-the-fight/",
    kind: "Sign up",
  },
  { label: "2026 Legislative Priorities", href: docs.legislativePriorities },
  {
    label: "TeachFrankfort.org",
    href: "https://teachfrankfort.org/",
    kind: "Site",
  },
  {
    label: "Find Your Kentucky Legislator",
    href: "https://apps.legislature.ky.gov/findyourlegislator/findyourlegislator.html",
    kind: "Tool",
  },
  {
    label: "Kentucky Legislative Research Commission",
    href: "https://legislature.ky.gov/LRC/Pages/default.aspx",
    kind: "Site",
  },
  {
    label: "Contact Your Congress Representative or Senator",
    href: "https://www.govtrack.us/congress/members/KY",
    kind: "Tool",
  },
  {
    label: "Kentucky General Assembly",
    href: "https://legislature.ky.gov/Pages/index.aspx",
    kind: "Site",
  },
  {
    label: "Legislative Calendar",
    href: "https://apps.legislature.ky.gov/legislativecalendar",
    kind: "Calendar",
  },
];

export default function LegislativePage() {
  return (
    <>
      <PageHeader
        kicker="Advocacy"
        title="Legislative"
        lede="KRTA works to protect the earned retirement security of Kentucky's retired educators. These are the priorities and the tools to act on them."
      />

      <Section tone="muted">
        <DocList>
          {links.map((l) => (
            <DocRow key={l.href} label={l.label} href={l.href} kind={l.kind} />
          ))}
        </DocList>
      </Section>

      <ClosingPoster
        title="A statewide grassroots campaign protecting the pensions members earned."
        action="Visit TeachFrankfort.org"
        actionHref="https://teachfrankfort.org/"
      />
    </>
  );
}
