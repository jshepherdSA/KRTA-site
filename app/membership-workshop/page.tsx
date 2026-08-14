import type { Metadata } from "next";
import {
  ClosingPoster,
  DocList,
  DocRow,
  PageHeader,
  Section,
} from "@/components/ds";

export const metadata: Metadata = {
  title: "Membership Workshop",
  description:
    "Membership ideas and starting points shared by Michael Caudill, UKR District Membership Chair — discount programmes, signs, solicitation letters and QR codes to join.",
  alternates: { canonical: "/membership-workshop" },
};

const U = "https://krta.org/wp-content/uploads/2025/04";

const documents = [
  {
    label: "Advice Cover Sheet",
    href: `${U}/Advice-Cover-Sheet.docx`,
    kind: "DOCX",
  },
  {
    label: "UKRRTA Discount Businesses",
    href: `${U}/UKRRTA-Discount-Businesses-redacted.docx`,
    kind: "DOCX",
  },
  {
    label: "Retired Teacher Sign",
    href: `${U}/Retired-Teacher-Sign.docx`,
    kind: "DOCX",
  },
  {
    label: "Membership Suggestions",
    href: `${U}/MEMBERSHIP-Suggestions.docx`,
    kind: "DOCX",
  },
  {
    label: "Discount Solicitation",
    href: `${U}/Discount-Solicitation.docx`,
    kind: "DOCX",
  },
  {
    label: "Discount Process",
    href: `${U}/Discount-Process.docx`,
    kind: "DOCX",
  },
  {
    label: "Discount form – April 15, 2024",
    href: `${U}/Discount-form-April-15-2024.docx`,
    kind: "DOCX",
  },
  { label: "Join Now sign with QR code", href: `${U}/JOIN-TODAY-QR-CODE.pdf` },
  {
    label:
      "QR code (link to website to join with check or ADD with e-sign and print option)",
    href: `${U}/KRTAJoin.jpg`,
    kind: "Image",
  },
];

export default function MembershipWorkshopPage() {
  return (
    <>
      <PageHeader kicker="For officers" title="Membership Workshop" />

      <Section tone="muted">
        <div className="prose prose-col">
          <p>
            The following documents are ideas and starting points to help with
            membership ideas. Partnering with your community is a great way to
            help strengthen your membership at a district and/or local level.
            Not all ideas will work in every situation and your officers should
            look them over and plan how to use them. They are in a word format
            and can be tailored to your needs. These examples have been
            implemented and shared by Michael Caudill, UKR District Membership
            Chair.
          </p>
        </div>

        <div style={{ marginTop: "var(--space-8)" }}>
          <DocList>
            {documents.map((d) => (
              <DocRow
                key={d.href}
                label={d.label}
                href={d.href}
                kind={d.kind}
              />
            ))}
          </DocList>
        </div>
      </Section>

      <ClosingPoster />
    </>
  );
}
