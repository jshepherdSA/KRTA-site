import type { Metadata } from "next";
import {
  ClosingPoster,
  DocList,
  DocRow,
  PhotoPlaceholder,
  PageHeader,
  SectionHeading,
} from "@/components/ds";
import { WithSectionNav } from "@/components/section-nav";

export const metadata: Metadata = {
  title: "Mission and History",
  description:
    "KRTA's mission, its standing committees and legislative program, and the written history of the association from 1956 to 2023.",
  alternates: { canonical: "/about/mission-and-history" },
};

const history = [
  {
    label: "1956-1995 Written by: M.L. Archer",
    href: "https://krta.org/wp-content/uploads/2023/12/1956-1995-History-By-M.L-Archer.pdf",
  },
  {
    label: "1995-2002 Written by: Frank Hatfield",
    href: "https://krta.org/wp-content/uploads/2023/12/1995-2002-History-By-Frank-Hatfield.pdf",
  },
  {
    label: "2002-2023 Written by: Special AD-Hoc Committee",
    href: "https://krta.org/wp-content/uploads/2023/12/2002-2023-History-By-Special-Ad-Hoc-Committee.pdf",
  },
  {
    label: "Appendix I – Cola History",
    href: "https://krta.org/wp-content/uploads/2023/12/Appendix-I-COLA.pdf",
  },
  {
    label: "Appendix II - Past Presidents",
    href: "https://krta.org/wp-content/uploads/2023/12/Appendix-II-Past-Presidents.pdf",
  },
  {
    label: "Appendix III - Membership Numbers",
    href: "https://krta.org/wp-content/uploads/2023/12/Appendix-III-Membership-Numbers.pdf",
  },
];

export default function MissionAndHistoryPage() {
  return (
    <>
      <PageHeader kicker="The association" title="Mission and History" />

      <WithSectionNav>
        <SectionHeading title="Mission" id="mission" />
        <div className="prose prose-col">
          <p>
            The Kentucky Retired Teachers Association was established in 1957
            out of a need for organized support for retired teachers. KRTA
            remains the &ldquo;only organization in the state that has as its
            main purpose to look out for the welfare of retired
            educators.&rdquo; From its inception, KRTA has continued to grow in
            numbers and respect. Through its commitment to the priorities set
            forth by the leadership, more than 32,000 members enjoy numerous
            benefits, both individually and as a group.
          </p>
          <p>
            The lobbying efforts in Frankfort have gained much respect from
            state government officials. Three standing committees — Membership,
            Legislative, and Insurance — and the volunteers who comprise them,
            exemplify KRTA&rsquo;s commitment to the concerns of retirees. The
            Biennial Legislative Program is aimed at soliciting support for, and
            commitment to, the Association&rsquo;s priorities, from equality and
            fairness to cost of living adjustments to affordable health
            insurance. Fall Workshops in the 14 districts bring together
            representatives from the 118 local units to discuss common concerns
            and get information to be shared with fellow retirees. In the
            spring, the State KRTA Leadership Convention brings together all
            districts/locals for camaraderie and unification.
          </p>
          <p>
            The membership, under the leadership of elected officers and
            delegates, determines the direction of the Association. The
            Executive Council, comprised of district representatives, monitors
            that direction through frequent meetings and close communication
            with the Association office staff.
          </p>
        </div>

        <div className="panel">
          <PhotoPlaceholder
            label="Archive"
            brief="An archival photograph from KRTA's early years — a founding meeting, an early convention, or the first Executive Council."
            ratio="3 / 2"
          />
        </div>

        <div className="panel panel-muted">
          <SectionHeading title="History" id="history" />
          <DocList>
            {history.map((h) => (
              <DocRow key={h.href} label={h.label} href={h.href} />
            ))}
          </DocList>
        </div>
      </WithSectionNav>

      <ClosingPoster />
    </>
  );
}
