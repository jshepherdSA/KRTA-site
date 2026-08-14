import type { Metadata } from "next";
import {
  ClosingPoster,
  DocList,
  DocRow,
  PageHeader,
  PhotoPlaceholder,
} from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";
import { docs } from "@/lib/site";

export const metadata: Metadata = {
  title: "Fall Workshops",
  description:
    "KRTA Fall Workshops are held annually in each of the 14 districts. All members are invited; register through your District or Local President.",
  alternates: { canonical: "/information-services/fall-workshops" },
};

export default function FallWorkshopsPage() {
  return (
    <>
      <PageHeader kicker="Events" title="Fall Workshops" />

      <WithSectionNav>
        <div className="prose prose-col">
          <p>
            KRTA Fall Workshops are held annually and each of the 14 Districts
            are visited to hold informational workshops. All KRTA members are
            invited to attend their District Workshop, registration is required
            through your District/Local President.
          </p>
        </div>

        <div className="panel">
          <PhotoPlaceholder
            label="District workshop"
            brief="A district Fall Workshop in session — members seated, a presenter at the front."
            ratio="3 / 2"
          />
        </div>

        <div className="panel panel-muted">
          <DocList>
            <DocRow
              label="2026 Fall Workshop Schedule"
              href={docs.fallWorkshopSchedule}
            />
          </DocList>
        </div>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
