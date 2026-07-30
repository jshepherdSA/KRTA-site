import type { Metadata } from "next";
import { ClosingPoster, PageHeader, SectionHeading } from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";

export const metadata: Metadata = {
  title: "Information Services",
  description:
    "Brochures and publications KRTA will mail on request, and the services the association provides to its districts and local units.",
  alternates: { canonical: "/information-services" },
};

const brochures = [
  "Long-Term Care Insurance",
  "Delta Dental Insurance",
  "Avesis Vision Insurance Plan",
  "Comfort Keepers Home Health Care",
  "North American Life Insurance",
  "Commonwealth Credit Union",
  "Retirement Services",
  "Legaline",
  "Free Investment Service",
  "Membership Equals Strength",
  "What's In A Name?",
  "Fact Sheet",
  "Legislative Program",
  "N O Kimbler Memorial Scholarship Fund",
  "Membership Correction Form",
  "Reimbursement for New Retiree Recognition",
  "KRTA Local President's Handbook",
  "KRTA Membership Handbook",
  "KRTA Executive Council/District Presidents Handbook",
];

const services = [
  "Reimbursement of expenses to participants at district leadership meetings",
  "Annual appropriation to each of the 14 districts for operating expenses",
  "Membership labels to local units",
  "Active/Inactive membership lists to local units",
  "Guidance to local and district officers",
  "Annual workshop in each of the 14 districts",
  "KRTA State Convention in April",
  "KRTA NEWS — mailed to all members quarterly",
];

export default function InformationServicesPage() {
  return (
    <>
      <PageHeader kicker="Member services" title="Information Services" />

      <WithSectionNav>
        <SectionHeading
          title="Brochures and publications available to be mailed upon request"
          id="brochures"
        />
        <ul className="prose-col bullets">
          {brochures.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div style={{ marginTop: "var(--space-10)" }}>
          <SectionHeading title="Other services" id="services" />
          <ul className="prose-col bullets">
            {services.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
