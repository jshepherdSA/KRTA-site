import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

// Archivo is the single family: 400 body, 600 label register, 800 headings.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — ${site.name}`,
    template: `%s » ${site.shortName}`,
  },
  description:
    "The Kentucky Retired Teachers Association has looked out for the welfare of Kentucky's retired educators since 1957. Membership, benefits, legislative advocacy, newsletters and district resources.",
  openGraph: {
    type: "website",
    siteName: site.shortName,
    title: `${site.shortName} — ${site.name}`,
    description:
      "Serving Kentucky's retired educators since 1957. Membership, benefits, legislative advocacy and district resources.",
    url: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
