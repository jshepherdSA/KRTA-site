import type { Metadata } from "next";
import Image from "next/image";
import { ClosingPoster, PageHeader } from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";
import { docs, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find Your Local/District",
  description:
    "Locate the county you would like to be associated with on the KRTA district map, then contact your District President to be put in touch with your Local President.",
  alternates: { canonical: "/about/find-your-district" },
};

export default function FindYourDistrictPage() {
  return (
    <>
      <PageHeader kicker="Get involved" title="Find Your Local/District" />

      <WithSectionNav>
        <div className="prose prose-col">
          <p>
            Want to become active within your local/district association? Please
            locate the county you would like to be associated with, each area is
            labeled with a District,{" "}
            <a
              href={docs.districtPresidentsContact}
              target="_blank"
              rel="noreferrer"
            >
              click here to locate your District President
            </a>
            . She/he will be happy to put you in contact with your Local
            President. You can also contact our office,{" "}
            <a href={`tel:${site.phone}`}>1.800.551.7979</a> for assistance.
          </p>
        </div>

        <figure style={{ marginTop: "var(--space-8)" }}>
          <Image
            src="/images/ky-map-districts.png"
            alt="Map of Kentucky divided into the 14 KRTA districts, with every county labelled by district"
            width={1000}
            height={520}
            style={{ width: "100%", height: "auto" }}
          />
          <figcaption>
            Kentucky&rsquo;s counties grouped into the 14 KRTA districts.
          </figcaption>
        </figure>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
