"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { nav } from "@/lib/site";

/** The About dropdown, restated as an interior-page section nav. */
const aboutChildren = nav.find((i) => i.label === "About")?.children ?? [];

/**
 * WithSectionNav — an interior page in the About cluster: the section nav on the
 * left, the page's own content on the right.
 */
export function WithSectionNav({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="with-sidenav container">
      <nav className="sidenav" aria-label="About KRTA">
        <h2>In this section</h2>
        <div className="sidenav-links">
          <Link
            href="/about"
            aria-current={pathname === "/about" ? "page" : undefined}
          >
            About KRTA
          </Link>
          {aboutChildren.map((c) =>
            c.external ? (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer">
                {c.label} <span aria-hidden="true">&nbsp;&rarr;</span>
              </a>
            ) : (
              <Link
                key={c.label}
                href={c.href}
                aria-current={pathname === c.href ? "page" : undefined}
              >
                {c.label}
              </Link>
            ),
          )}
        </div>
      </nav>
      <div>{children}</div>
    </div>
  );
}
