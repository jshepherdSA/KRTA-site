import Link from "next/link";
import { addressLines, footerColumns, site } from "@/lib/site";

/**
 * SiteFooter — the slate field. Three link columns beside the office details,
 * a hairline bar underneath.
 */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div>
          <h2 className="label-heading">{site.name}</h2>
          <address style={{ fontStyle: "normal", fontSize: "var(--text-sm)" }}>
            {addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
            <div style={{ marginTop: "var(--space-3)" }}>
              <a href={`tel:${site.phone}`}>{site.phone}</a>
            </div>
            <div>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
          </address>
          <div
            style={{
              marginTop: "var(--space-4)",
              fontSize: "var(--text-sm)",
              color: "color-mix(in srgb, #fff 75%, transparent)",
            }}
          >
            {site.hours.map((h) => (
              <div key={h}>{h}</div>
            ))}
          </div>
        </div>

        {footerColumns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="label-heading">{col.title}</h2>
            <div className="site-footer-links">
              {col.links.map((l) => (
                <Link key={l.href} href={l.href}>
                  {l.label}
                </Link>
              ))}
            </div>
          </nav>
        ))}
      </div>

      <div className="site-footer-bar">
        <div className="site-footer-bar-inner">
          <span>
            © {new Date().getFullYear()} KRTA. {site.tagline}.
          </span>
          <span style={{ display: "flex", gap: "var(--space-4)" }}>
            <a href={site.social.facebook} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={site.social.twitter} target="_blank" rel="noreferrer">
              X
            </a>
            <Link href="/site-map">Site Map</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
