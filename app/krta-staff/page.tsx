import type { Metadata } from "next";
import {
  ClosingPoster,
  PageHeader,
  SectionHeading,
  PhotoPlaceholder,
} from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "KRTA Staff, Hours, & Location",
  description:
    "The KRTA office at 7800 Leaders Lane, Louisville KY 40291. Office hours, phone number and staff contacts.",
  alternates: { canonical: "/krta-staff" },
};

const staff = [
  {
    role: "Executive Director",
    name: "Greg Roush",
    email: "Greg.Roush@krta.org",
  },
  {
    role: "Operations Manager",
    name: "Emily Carey",
    email: "Emily.Carey@krta.org",
  },
  {
    role: "Member Services",
    name: "Alma Wooley",
    email: "Alma.Wooley@krta.org",
  },
  {
    role: "News Editor",
    name: "Brenda Meredith",
    email: "Brenda.Meredith@krta.org",
  },
];

export default function StaffPage() {
  return (
    <>
      <PageHeader kicker="Contact" title="KRTA Staff, Hours, & Location" />

      <WithSectionNav>
        <dl className="def-list">
          <div className="def-row">
            <dt>Address</dt>
            <dd>
              <address style={{ fontStyle: "normal" }}>
                {site.name}
                <br />
                {addressLines.map((l) => (
                  <span key={l}>
                    {l}
                    <br />
                  </span>
                ))}
              </address>
            </dd>
          </div>
          <div className="def-row">
            <dt>Phone</dt>
            <dd>
              <a href={`tel:${site.phone}`}>1.800.551.7979</a>
            </dd>
          </div>
          <div className="def-row">
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </dd>
          </div>
          <div className="def-row">
            <dt>Office hours</dt>
            <dd>
              Monday- Thursday 8:30-4:00
              <br />
              Friday 8:30-2:00
            </dd>
          </div>
        </dl>

        <div className="panel">
          <PhotoPlaceholder
            label="The office"
            brief="The four staff outside the KRTA office at 7800 Leaders Lane — the people who answer the phone."
            ratio="3 / 2"
          />
        </div>

        <div className="panel panel-muted">
          <SectionHeading title="Staff" id="staff" />
          <dl className="def-list">
            {staff.map((s) => (
              <div className="def-row" key={s.email}>
                <dt>{s.role}</dt>
                <dd>
                  <strong>{s.name}</strong>
                  <br />
                  <a href={`mailto:${s.email}`}>{s.email}</a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
