import type { Metadata } from "next";
import { ClosingPoster, DocList, DocRow, PageHeader } from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";
import { docs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Constitution and By Laws",
  description: "The KRTA Constitution and By Laws, as adopted April 2021.",
  alternates: { canonical: "/constitution-and-by-laws" },
};

export default function ConstitutionPage() {
  return (
    <>
      <PageHeader kicker="Governance" title="Constitution and By Laws" />

      <WithSectionNav>
        <DocList>
          <DocRow label="KRTA Constitution" href={docs.constitution} />
          <DocRow label="KRTA By Laws" href={docs.bylaws} />
        </DocList>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
