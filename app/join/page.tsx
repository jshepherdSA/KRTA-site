import { redirect } from "next/navigation";

/**
 * `/join/` and `/join/join-krta/` render byte-identical content on the live
 * site. Both URLs are kept; this one resolves to the canonical page.
 */
export default function JoinIndexPage() {
  redirect("/join/join-krta");
}
