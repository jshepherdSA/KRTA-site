/**
 * The KRTA design system component set, ported from
 * the supplied KRTA Design System package. These render the class layer in
 * globals.css and take no styling decisions of their own.
 */
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

function cx(...parts: (string | false | null | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

/** True for anything that should leave the app: absolute URLs, mailto:, tel:. */
export function isExternal(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href);
}

/* -------------------------------------------------------------------------- */
/* Button                                                                     */
/* -------------------------------------------------------------------------- */

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const buttonClass = (
  variant: ButtonVariant,
  size: ButtonSize,
  block?: boolean,
) =>
  cx(
    "btn",
    `btn-${variant}`,
    size !== "md" && `btn-${size}`,
    block && "btn-block",
  );

export function Button({
  variant = "primary",
  size = "md",
  block,
  href,
  className,
  children,
  ...rest
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"button">, "ref">) {
  const cls = cx(buttonClass(variant, size, block), className);
  if (href) {
    if (isExternal(href)) {
      return (
        <a
          className={cls}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link className={cls} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/* Tag                                                                        */
/* -------------------------------------------------------------------------- */

export function Tag({
  tone = "neutral",
  children,
}: {
  tone?: "red" | "blue" | "neutral" | "outline";
  children: ReactNode;
}) {
  return <span className={cx("tag", `tag-${tone}`)}>{children}</span>;
}

/* -------------------------------------------------------------------------- */
/* Card                                                                       */
/* -------------------------------------------------------------------------- */

export function Card({
  variant = "filled",
  kicker,
  title,
  titleLevel = 3,
  body,
  meta,
  children,
  className,
}: {
  variant?: "filled" | "plain" | "ruled";
  kicker?: ReactNode;
  title?: ReactNode;
  titleLevel?: 2 | 3;
  body?: ReactNode;
  meta?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  const Title = (titleLevel === 2 ? "h2" : "h3") as "h2" | "h3";
  return (
    <div
      className={cx(
        "card",
        variant === "plain" && "card-plain",
        variant === "ruled" && "card-ruled",
        className,
      )}
    >
      {kicker ? <div className="card-kicker">{kicker}</div> : null}
      {title ? <Title className="card-title">{title}</Title> : null}
      {body ? <p className="card-body">{body}</p> : null}
      {children}
      {meta ? <div className="card-meta">{meta}</div> : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SectionHeading                                                             */
/* -------------------------------------------------------------------------- */

export function SectionHeading({
  title,
  action,
  actionHref = "#",
  level = 2,
  id,
}: {
  title: ReactNode;
  action?: string;
  actionHref?: string;
  level?: 2 | 3;
  id?: string;
}) {
  const Heading = (level === 3 ? "h3" : "h2") as "h2" | "h3";
  return (
    <div className="section-head">
      <Heading id={id}>{title}</Heading>
      {action ? (
        <Link className="section-head-link" href={actionHref}>
          {action}
        </Link>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

export function Hero({
  kicker,
  title,
  body,
  actions,
  media,
}: {
  kicker?: string;
  title: ReactNode;
  body?: ReactNode;
  actions?: ReactNode;
  media: ReactNode;
}) {
  return (
    <section className="hero">
      <div className="hero-media grayscale">{media}</div>
      <div className="hero-body">
        {kicker ? <div className="eyebrow">{kicker}</div> : null}
        <h1>{title}</h1>
        {body ? (
          <p style={{ margin: 0, color: "var(--text-muted)" }}>{body}</p>
        ) : null}
        {actions ? <div className="hero-actions">{actions}</div> : null}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* ListRow — the news and events pattern                                      */
/* -------------------------------------------------------------------------- */

export function ListRow({
  date,
  title,
  description,
  more = "Read more",
  href,
  // h3 under a section heading; h2 on an index page where the list is the page.
  titleLevel = 3,
}: {
  date: string;
  title: string;
  description?: string;
  more?: string;
  href: string;
  titleLevel?: 2 | 3;
}) {
  const Title = (titleLevel === 2 ? "h2" : "h3") as "h2" | "h3";
  const inner = (
    <>
      <div className="list-row-date">{date}</div>
      <div>
        <Title className="list-row-title">{title}</Title>
        {description ? <p className="list-row-desc">{description}</p> : null}
      </div>
      {more ? <div className="list-row-more">{more}</div> : null}
    </>
  );
  if (isExternal(href)) {
    return (
      <a className="list-row" href={href} target="_blank" rel="noreferrer">
        {inner}
      </a>
    );
  }
  return (
    <Link className="list-row" href={href}>
      {inner}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* PhotoTile                                                                  */
/* -------------------------------------------------------------------------- */

export function PhotoTile({
  caption,
  children,
}: {
  caption?: string;
  children: ReactNode;
}) {
  return (
    <figure className="photo-tile grayscale">
      {children}
      {caption ? (
        <figcaption className="photo-tile-caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}

/* -------------------------------------------------------------------------- */
/* QuickLinks                                                                 */
/* -------------------------------------------------------------------------- */

export function QuickLinks({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <nav className="quicklinks" aria-label="Quick links">
      {links.map((l) => (
        <Link className="quicklink" key={l.href} href={l.href}>
          {l.label}
          <span aria-hidden="true">&rarr;</span>
        </Link>
      ))}
    </nav>
  );
}

/* -------------------------------------------------------------------------- */
/* Poster — the one full-bleed red band per page                              */
/* -------------------------------------------------------------------------- */

export function Poster({
  title,
  action,
  actionHref,
}: {
  title: string;
  action: string;
  actionHref: string;
}) {
  return (
    <section className="poster">
      <div className="poster-inner">
        <h2>{title}</h2>
        <Button href={actionHref}>{action}</Button>
      </div>
    </section>
  );
}

/**
 * ClosingPoster — every page ends on the one red band the system allows, with
 * the space above it that separates it from the page body.
 */
export function ClosingPoster({
  title = "Serving Kentucky's retired educators since 1957.",
  action = "Join / Renew",
  actionHref = "/join/join-krta",
}: {
  title?: string;
  action?: string;
  actionHref?: string;
}) {
  return (
    <div style={{ marginTop: "var(--space-16)" }}>
      <Poster title={title} action={action} actionHref={actionHref} />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* VideoEmbed — a YouTube player, 16:9, square corners                        */
/* -------------------------------------------------------------------------- */

export function VideoEmbed({ id, title }: { id: string; title: string }) {
  return (
    <figure style={{ marginBottom: "var(--space-6)" }}>
      <div
        style={{
          aspectRatio: "16 / 9",
          background: "var(--color-neutral-200)",
        }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ width: "100%", height: "100%", border: 0, display: "block" }}
        />
      </div>
      <figcaption>{title}</figcaption>
    </figure>
  );
}

/* -------------------------------------------------------------------------- */
/* PageHeader — the interior-page counterpart to the homepage hero            */
/* -------------------------------------------------------------------------- */

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker?: string;
  title: string;
  lede?: ReactNode;
}) {
  return (
    <header className="page-head container">
      {kicker ? <div className="eyebrow">{kicker}</div> : null}
      <h1>{title}</h1>
      {lede ? <p className="page-lede">{lede}</p> : null}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* DocRow / DocList — a PDF or external file, labelled by what it opens       */
/* -------------------------------------------------------------------------- */

export function DocList({ children }: { children: ReactNode }) {
  return <div className="doc-list">{children}</div>;
}

export function DocRow({
  label,
  href,
  kind = "PDF",
}: {
  label: ReactNode;
  href: string;
  kind?: string;
}) {
  const external = isExternal(href);
  return (
    <a
      className="doc-row"
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span>{label}</span>
      <span className="doc-row-kind">{kind}</span>
      <span className="doc-row-arrow" aria-hidden="true">
        &rarr;
      </span>
    </a>
  );
}

/* -------------------------------------------------------------------------- */
/* Section — vertical rhythm wrapper                                          */
/* -------------------------------------------------------------------------- */

export function Section({
  children,
  className,
  id,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cx("container", className)}
      style={{ paddingTop: "var(--space-12)" }}
    >
      {children}
    </section>
  );
}
