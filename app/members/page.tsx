import type { Metadata } from "next";
import Link from "next/link";
import { Button, ClosingPoster, PageHeader, Section } from "@/components/ds";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Member Benefits Login",
  description:
    "Log in to your KRTA member account, reset a forgotten password, or contact the office to have an online account created.",
  alternates: { canonical: "/members" },
};

export default function MembersPage() {
  return (
    <>
      <PageHeader kicker="Members" title="Member Benefits Login" />

      <Section>
        <div className="prose prose-col">
          <p>
            Online accounts are not automatically created unless you have
            requested a profile. If you are unsure you may try to do a password
            reset by clicking on the lost password, if you have an account you
            will get an email with directions to reset your password. If you do
            not receive an email please contact the office to establish an
            online account.
          </p>

          <p style={{ margin: "var(--space-6) 0" }}>
            <Button href="https://krta.org/wp-admin">
              Are You Already a Member? Click Here to Login
            </Button>
          </p>

          <p>
            If you have login difficulties please call the office at{" "}
            <a href={`tel:${site.phone}`}>1.800.551.7979</a> or{" "}
            <Link href="/contact">go here to send a KRTA staff a message.</Link>
          </p>

          <p>
            If you are looking for Teachers&rsquo; Retirement System Pathway
            Self Service Portal{" "}
            <a
              href="https://mss.trs.ky.gov/PathwayMSS/wfmLoginE.aspx"
              target="_blank"
              rel="noreferrer"
            >
              please click here
            </a>
            .
          </p>
        </div>
      </Section>

      <ClosingPoster />
    </>
  );
}
