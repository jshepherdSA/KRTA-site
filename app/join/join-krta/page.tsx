import type { Metadata } from "next";
import Link from "next/link";
import {
  Button,
  Card,
  ClosingPoster,
  PhotoPlaceholder,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/ds";
import { addressLines, docs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join/Renew",
  description:
    "KRTA membership runs July 1 to June 30 and costs $25 a year. Join by automatic dues deduction from your TRS annuity, by cash form, or online.",
  alternates: { canonical: "/join/join-krta" },
};

export default function JoinPage() {
  return (
    <>
      <PageHeader
        kicker="Membership"
        title="Join/Renew"
        lede="Membership period: July 1 to June 30. Membership dues: $25 annually."
      />

      <Section tone="muted" labelledBy="three-ways">
        <PhotoPlaceholder
          label="Membership"
          brief="Members at a local unit meeting — what joining actually looks like."
          ratio="16 / 9"
        />

        <div style={{ marginTop: "var(--space-8)" }} />

        <SectionHeading
          title="KRTA has three ways you can join"
          id="three-ways"
        />

        <div className="three-col">
          <Card
            variant="ruled"
            kicker="Option 1"
            title="KRTA Automatic Dues Deduction"
          >
            <p className="card-body">
              TRS of KY will withhold the annual dues of $25 from your November
              annuity payment each year. You must have an account with TRS of KY
              for this option.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
                marginTop: "var(--space-4)",
              }}
            >
              <Button href="/automatic-dues-deduction">
                Electronic submission
              </Button>
              <Button variant="secondary" href={docs.addCardPaper}>
                Paper submission (PDF)
              </Button>
            </div>
            <p className="field-hint">
              The electronic form allows an e-signature. The paper form would
              need to be mailed or emailed.
            </p>
          </Card>

          <Card variant="ruled" kicker="Option 2" title="Cash Form">
            <p className="card-body">
              Please mail a $25 check to the KRTA Office, {addressLines[0]}{" "}
              {addressLines[1]}.
            </p>
            <div style={{ marginTop: "var(--space-4)" }}>
              <Button href={docs.cashForm}>Cash form (PDF)</Button>
            </div>
          </Card>

          <Card variant="ruled" kicker="Option 3" title="Pay Online">
            <p className="card-body">
              If you are not in our system please contact the KRTA office,{" "}
              <a href={`tel:${site.phone}`}>1-800-551-7979</a> and the payment
              can be made over the phone. A $1 processing fee will apply.
            </p>
            <div style={{ marginTop: "var(--space-4)" }}>
              <Button href={docs.payOnline}>Pay online</Button>
            </div>
          </Card>
        </div>

        <div
          className="prose prose-col"
          style={{ marginTop: "var(--space-10)" }}
        >
          <p>
            Associate membership is available to active teachers, friends, and
            family who wish to support KRTA for $25 per year. Associates are not
            eligible for the Automatic Dues Deduction.
          </p>
          <p>
            <Link href="/about">
              Click here to learn what KRTA can do for you!
            </Link>
          </p>
        </div>
      </Section>

      <ClosingPoster
        title="Membership is what gives Kentucky's retired educators a voice in Frankfort."
        action="About KRTA"
        actionHref="/about"
      />
    </>
  );
}
