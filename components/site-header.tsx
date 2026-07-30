"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";
import { nav, site } from "@/lib/site";

/**
 * SiteHeader — blue utility strip over a white bar with the logo and uppercase
 * nav. Dropdowns are the only floating layer in the system. Below 820px the nav
 * collapses to a toggle and the dropdowns render inline.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [navOpen, setNavOpen] = useState(false);
  const navId = useId();

  // Close everything on navigation. Adjusting state during render rather than in
  // an effect — the menus should never paint open on the page being navigated to.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(null);
    setNavOpen(false);
  }

  const isCurrent = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  const sectionCurrent = (item: (typeof nav)[number]) =>
    isCurrent(item.href) ||
    (item.children ?? []).some((c) => !c.external && isCurrent(c.href));

  return (
    <header className="site-header">
      <div className="site-utility">
        <div className="site-utility-inner">
          <span className="site-utility-tagline">{site.tagline}</span>
          <a className="site-utility-phone" href={`tel:${site.phone}`}>
            {site.phone}
          </a>
          <a href={site.social.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a href={site.social.twitter} target="_blank" rel="noreferrer">
            X
          </a>
        </div>
      </div>

      <div className="site-head-inner">
        <Link className="site-brand" href="/">
          <Image
            src="/krta-logo.png"
            alt="KRTA — Kentucky Retired Teachers Association, since 1957"
            width={665}
            height={300}
            priority
          />
          <span className="site-brand-text">{site.name}</span>
        </Link>

        <button
          type="button"
          className="btn btn-secondary btn-sm nav-toggle"
          aria-expanded={navOpen}
          aria-controls={navId}
          onClick={() => setNavOpen((v) => !v)}
        >
          {navOpen ? "Close" : "Menu"}
        </button>

        <nav
          id={navId}
          className="site-nav"
          data-open={navOpen ? "true" : "false"}
          aria-label="Main"
          onMouseLeave={() => setOpen(null)}
        >
          {nav.map((item) => (
            <div
              key={item.href}
              className="site-nav-item"
              onMouseEnter={() => setOpen(item.children ? item.href : null)}
            >
              {item.children ? (
                <>
                  <div className="site-nav-row">
                    <Link
                      className="site-nav-link"
                      href={item.href}
                      aria-current={sectionCurrent(item) ? "page" : undefined}
                      onFocus={() => setOpen(item.href)}
                    >
                      {item.label}
                    </Link>
                    {/* Hover opens the menu on a pointer; this disclosure is how
                        it opens once the nav collapses to a single column. */}
                    <button
                      type="button"
                      className="site-nav-disclosure"
                      aria-expanded={open === item.href}
                      aria-label={`${open === item.href ? "Hide" : "Show"} ${item.label} pages`}
                      onClick={() =>
                        setOpen(open === item.href ? null : item.href)
                      }
                    >
                      <span aria-hidden="true">
                        {open === item.href ? "–" : "+"}
                      </span>
                    </button>
                  </div>
                  {open === item.href ? (
                    <div className="site-nav-menu">
                      {item.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {child.label}
                          </a>
                        ) : (
                          <Link key={child.label} href={child.href}>
                            {child.label}
                          </Link>
                        ),
                      )}
                    </div>
                  ) : null}
                </>
              ) : (
                <Link
                  className="site-nav-link"
                  href={item.href}
                  aria-current={isCurrent(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
