import type { Metadata } from "next";
import {
  ClosingPoster,
  PhotoPlaceholder,
  PageHeader,
  Section,
  SectionHeading,
} from "@/components/ds";

export const metadata: Metadata = {
  title: "Collette Travel",
  description:
    "KRTA members are invited to participate in safe, affordable group travel with Collette. Book online or call 1-800-581-8942 with the KRTA booking number.",
  alternates: { canonical: "/collettetravel" },
};

const trips = [
  {
    booking: "1319628",
    name: "New York City Holiday",
    dates: "December 7 – December 11, 2026",
    href: "https://gateway.gocollette.com/link/1319628",
  },
  {
    booking: "1421863",
    name: "Discover South Pacific Wonders (Australia & New Zealand)",
    dates: "Jan. 26 – Feb. 9, 2027",
    href: "https://groups.gocollette.com/en-US/link/1421863",
  },
  {
    booking: "1421846",
    name: "Discover Alpine Lakes & Scenic Trails",
    dates: "April 26 - May 5, 2027",
    href: "https://groups.gocollette.com/en-US/link/1421846",
  },
  {
    booking: "1421704",
    name: "Sunny Spain, Madrid & Costa del Sol",
    dates: "October 18-26, 2027",
    href: "https://groups.gocollette.com/en-US/link/1421704",
  },
  {
    booking: "1423853",
    name: "Exploring South Africa, Victoria Falls, and Botswana",
    dates: "November 2-16, 2027",
    href: "https://groups.gocollette.com/en-US/link/1423853",
  },
];

export default function CollettePage() {
  return (
    <>
      <PageHeader
        kicker="Member benefit"
        title="Travel with Collette and KRTA"
      />

      <Section tone="muted">
        <PhotoPlaceholder
          label="Travelling together"
          brief="A KRTA group on a Collette tour — members on the trip, not stock travel photography."
          ratio="16 / 9"
        />

        <div
          className="prose prose-col"
          style={{ marginTop: "var(--space-8)" }}
        >
          <p>
            KRTA Members are invited to participate in safe, affordable group
            travel. Guests are welcome but must travel with a KRTA member. Click
            below on each trip to view pictures and videos. Itinerary, pricing
            and online reservations information is found under book online.
          </p>
          <p>
            Book Early – KRTA has partnered with Collette Travel to offer
            customized travel opportunities. Plans include a reserved block of
            airline seats for each trip. A deposit is required to reserve your
            seat and to ensure you receive any advertised price reduction.
            Reservations made after the seating block is filled, or after the
            booking date has passed, are based on availability and are subject
            to a price increase. Prices include round trip airfare from
            Louisville Muhammad Ali International Airport in Louisville.
            Departures from alternate gateways can be requested when booking.
          </p>
        </div>
      </Section>

      <Section labelledBy="trips">
        <SectionHeading title="Two ways to book your trip" id="trips" />

        <div
          className="prose prose-col"
          style={{ marginBottom: "var(--space-6)" }}
        >
          <ul>
            <li>
              <strong>Book Online</strong> – Collette Travel utilizes an online
              reservation booking system. The links below include itinerary,
              pricing, and an online reservation form.
            </li>
            <li>
              <strong>Book Direct</strong> – Collette Travel also offers a
              direct booking number for those who prefer to call,{" "}
              <a href="tel:1-800-581-8942">1-800-581-8942</a> and refer to the
              KRTA booking number below.
            </li>
          </ul>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="table">
            <caption
              style={{
                textAlign: "left",
                fontSize: "var(--text-xs)",
                letterSpacing: "var(--tracking-label)",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                paddingBottom: "var(--space-3)",
              }}
            >
              KRTA departures
            </caption>
            <thead>
              <tr>
                <th scope="col">Trip</th>
                <th scope="col">Dates</th>
                <th scope="col">Booking number</th>
                <th scope="col">Reserve</th>
              </tr>
            </thead>
            <tbody>
              {trips.map((t) => (
                <tr key={t.booking}>
                  <td>{t.name}</td>
                  <td>{t.dates}</td>
                  <td>{t.booking}</td>
                  <td>
                    <a href={t.href} target="_blank" rel="noreferrer">
                      Book online
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-muted" style={{ marginTop: "var(--space-6)" }}>
          Any questions can be answered by calling Collette Travel directly,{" "}
          <a href="tel:1-800-581-8942">1-800-581-8942</a>.
        </p>
      </Section>

      <ClosingPoster />
    </>
  );
}
