import type { Metadata } from "next";
import Image from "next/image";
import {
  ClosingPoster,
  DocList,
  DocRow,
  PageHeader,
  SectionHeading,
} from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";
import { docs } from "@/lib/site";

export const metadata: Metadata = {
  title: "2026-2027 KRTA Officers",
  description:
    "The KRTA officers for 2026-2027, effective July 1, 2026: President Charlotte Benton, President Elect Meg Judd, Vice President Karen Delaney and Immediate Past President Ann Porter.",
  alternates: { canonical: "/krta-officers" },
};

const officers = [
  {
    role: "President",
    name: "Charlotte Benton",
    district: "1st District, McCracken County",
  },
  {
    role: "President Elect",
    name: "Meg Judd",
    district: "Upper Cumberland District, Whitley County",
  },
  {
    role: "Vice President",
    name: "Karen Delaney",
    district: "Northern District, Pendleton County",
  },
  {
    role: "Immediate Past President",
    name: "Ann Porter",
    district: "Eastern District, Mason County",
  },
];

export default function OfficersPage() {
  return (
    <>
      <PageHeader
        kicker="Leadership"
        title="2026-2027 KRTA Officers"
        lede="Effective July 1, 2026."
      />

      <WithSectionNav>
        <figure style={{ marginBottom: "var(--space-8)", maxWidth: 600 }}>
          <Image
            className="grayscale"
            src="/images/officers-2026-2027.jpg"
            alt="The four KRTA officers for 2026-2027, photographed together"
            width={300}
            height={225}
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>(Officers are listed left to right)</figcaption>
        </figure>

        <dl className="def-list">
          {officers.map((o) => (
            <div className="def-row" key={o.role}>
              <dt>{o.role}</dt>
              <dd>
                <strong>{o.name}</strong> — {o.district}
              </dd>
            </div>
          ))}
        </dl>

        <div className="panel panel-muted">
          <SectionHeading title="Council and committees" id="council" />
          <DocList>
            <DocRow label="Executive Council" href={docs.executiveCouncil} />
            <DocRow
              label="District Presidents"
              href={docs.districtPresidents}
            />
            <DocRow label="Committee Chairs" href={docs.committeeChairs} />
            <DocRow
              label="Standing Committees"
              href={docs.standingCommittees}
            />
          </DocList>
        </div>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
