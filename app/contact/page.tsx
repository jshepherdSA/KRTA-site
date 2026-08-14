import type { Metadata } from "next";
import {
  ClosingPoster,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/ds";
import { addressLines, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send the KRTA office a message, or reach the staff at 7800 Leaders Lane, Louisville KY 40291 — 1-800-551-7979, info@krta.org.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        kicker="Get in touch"
        title="Contact"
        lede="Send the office a message with the form below, or call during office hours."
      />

      <Section tone="muted">
        <div className="form-col">
          <div>
            {/* The live site embeds this JotForm; it stays the office's real inbox. */}
            <iframe
              id="JotFormIFrame-83514464631153"
              title="Contact the KRTA office"
              src="https://form.jotform.com/83514464631153"
              allow="geolocation; microphone; camera"
              style={{
                width: "100%",
                minHeight: 620,
                border: 0,
                display: "block",
              }}
            />
          </div>

          <aside>
            <SectionHeading title="KRTA office" id="office" />
            <dl className="def-list">
              <div className="def-row">
                <dt>Address</dt>
                <dd>
                  <address style={{ fontStyle: "normal" }}>
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
                  <a href={`tel:${site.phone}`}>{site.phone}</a>
                </dd>
              </div>
              <div className="def-row">
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
            </dl>

            <h3
              className="label-heading"
              style={{ marginTop: "var(--space-8)" }}
            >
              Office hours
            </h3>
            <dl className="def-list">
              {site.hours.map((h) => (
                <div className="def-row" key={h.days}>
                  <dt>{h.days}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>

      <ClosingPoster />
    </>
  );
}
