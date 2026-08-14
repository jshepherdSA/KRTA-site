import type { Metadata } from "next";
import {
  Button,
  Card,
  ClosingPoster,
  PageHeader,
  Section,
} from "@/components/ds";
import { addressLines, docs, site } from "@/lib/site";
import { DuesForm } from "./dues-form";

export const metadata: Metadata = {
  title: "Automatic Dues Deduction",
  description:
    "Authorize TRS of KY to withhold the $25 KRTA annual membership dues from your November annuity payment. Electronic submission with e-signature.",
  alternates: { canonical: "/automatic-dues-deduction" },
};

export default function AutomaticDuesDeductionPage() {
  return (
    <>
      <PageHeader
        kicker="Membership"
        title="Automatic Dues Deduction"
        lede="TRS of KY will withhold the annual dues of $25 from your November annuity payment each year. You must have an account with TRS of KY for this option."
      />

      <Section tone="muted">
        <div className="form-col">
          <DuesForm />

          <aside>
            <Card
              variant="ruled"
              kicker="Prefer paper?"
              title="Other ways to join"
              titleLevel={2}
            >
              <p className="card-body">
                The paper authorization can be mailed or emailed. You can also
                pay by check or online.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-3)",
                  marginTop: "var(--space-4)",
                }}
              >
                <Button variant="secondary" href={docs.addCardPaper}>
                  Paper form (PDF)
                </Button>
                <Button variant="secondary" href={docs.cashForm}>
                  Cash form (PDF)
                </Button>
                <Button variant="secondary" href={docs.payOnline}>
                  Pay online
                </Button>
              </div>
            </Card>

            <Card
              variant="ruled"
              kicker="KRTA office"
              title="Questions?"
              titleLevel={2}
            >
              <p className="card-body">
                {addressLines[0]}
                <br />
                {addressLines[1]}
              </p>
              <p className="card-body">
                <a href={`tel:${site.phone}`}>{site.phone}</a>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
            </Card>
          </aside>
        </div>
      </Section>

      <ClosingPoster />
    </>
  );
}
