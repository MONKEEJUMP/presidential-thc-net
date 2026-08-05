import Link from "next/link";
import { Fragment } from "react";

import type { ContentImage, ContentSection, PageContent } from "@/content/types";
import { absoluteUrl, escapeJsonLd, imageUrl, SITE_NAME, SITE_URL } from "@/lib/site";

import { ContentFigure } from "./content-figure";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type ArticlePageProps = {
  page: PageContent;
  images: ContentImage[];
};

function Breadcrumbs({ page }: { page: PageContent }) {
  const hubPath = page.silo ? `/${page.silo}` : undefined;
  const hubLabel = page.silo
    ? page.silo.charAt(0).toUpperCase() + page.silo.slice(1)
    : undefined;

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {page.kind === "article" && hubPath && hubLabel ? (
        <>
          <span aria-hidden="true">/</span>
          <Link href={hubPath}>{hubLabel} hub</Link>
        </>
      ) : null}
      <span aria-hidden="true">/</span>
      <span aria-current="page">{page.h1}</span>
    </nav>
  );
}

function TableOfContents({ page }: { page: PageContent }) {
  const links =
    page.kind === "hub" && page.childLinks?.length
      ? page.childLinks.map((link) => ({
          href: link.href,
          key: link.href,
          label: link.label,
        }))
      : page.sections.map((section) => ({
          href: `#${section.id}`,
          key: section.id,
          label: section.heading,
        }));

  return (
    <nav className="table-of-contents" aria-labelledby="contents-heading">
      <p className="eyebrow" id="contents-heading">
        On this page
      </p>
      <ol>
        {links.map((link) => (
          <li key={link.key}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function DataTable({ section }: { section: ContentSection }) {
  if (!section.table) return null;

  return (
    <div className="table-scroll" role="region" aria-label={section.table.caption} tabIndex={0}>
      <table>
        <caption>{section.table.caption}</caption>
        <thead>
          <tr>
            {section.table.headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {section.table.rows.map((row, rowIndex) => (
            <tr key={`${section.id}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${section.id}-${rowIndex}-${cellIndex}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ArticleSection({
  section,
  image,
  reverse,
}: {
  section: ContentSection;
  image?: ContentImage;
  reverse: boolean;
}) {
  return (
    <section className={`article-section${image ? " article-section--with-image" : ""}`} id={section.id}>
      <div className={`article-section__grid${reverse ? " article-section__grid--reverse" : ""}`}>
        <div className="article-section__copy">
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={`${section.id}-paragraph-${index}`}>{paragraph}</p>
          ))}
          {section.bullets?.length ? (
            <ul>
              {section.bullets.map((bullet, index) => (
                <li key={`${section.id}-bullet-${index}`}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          <DataTable section={section} />
        </div>
        {image ? <ContentFigure image={image} /> : null}
      </div>
    </section>
  );
}

function BrandCallToAction() {
  return (
    <aside className="brand-cta" aria-labelledby="brand-cta-heading">
      <h2 id="brand-cta-heading">Presidential Moon Rocks</h2>
      <p>
        The official Presidential site — the full catalog and the licensed retailer locator.
      </p>
      <a
        className="brand-cta__button"
        href="https://presidentialmoonrocks.com"
        rel="nofollow"
      >
        Visit the official site
      </a>
    </aside>
  );
}

function LinkDirectory({ page }: { page: PageContent }) {
  const childLinks = page.childLinks ?? [];
  const relatedLinks = page.relatedLinks ?? [];

  if (!childLinks.length && !relatedLinks.length && !page.externalLink) return null;

  return (
    <aside className="link-directory" aria-label="Continue reading">
      {childLinks.length ? (
        <section>
          <p className="eyebrow">Explore this section</p>
          <div className="link-directory__list">
            {childLinks.map((link) => (
              <Link className="editorial-link" href={link.href} key={link.href}>
                <span>{link.label}</span>
                {link.description ? <small>{link.description}</small> : null}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {relatedLinks.length ? (
        <section>
          <p className="eyebrow">Read next</p>
          <div className="link-directory__list link-directory__list--compact">
            {relatedLinks.map((link) => (
              <Link className="editorial-link" href={link.href} key={link.href}>
                <span>{link.label}</span>
                {link.description ? <small>{link.description}</small> : null}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {page.externalLink ? (
        <a
          className="editorial-link contextual-reference"
          href={page.externalLink.href}
          rel="noopener noreferrer"
        >
          <span>{page.externalLink.label}</span>
        </a>
      ) : null}
    </aside>
  );
}

function StructuredData({ page, images }: ArticlePageProps) {
  const pageUrl = absoluteUrl(page.path);
  const imageObjects = images.map((image) => ({
    "@type": "ImageObject",
    contentUrl: imageUrl(image),
    width: image.width,
    height: image.height,
    caption: image.caption,
    description: image.alt,
  }));

  const graph: Record<string, unknown>[] = [...imageObjects];

  if (page.kind === "pillar") {
    graph.unshift({
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Presidential",
      alternateName: ["Presidential THC", "Presidential Cannabis"],
      foundingDate: "2012",
      foundingLocation: {
        "@type": "Place",
        name: "Los Angeles, California",
      },
      description:
        "Presidential is the official publisher of this infused cannabis reference, founded in Los Angeles in 2012.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: imageUrl(),
        width: 512,
        height: 512,
      },
      // No verified social profile URLs were supplied; never invent sameAs values.
      sameAs: [],
    });
  }

  if (page.kind === "article") {
    graph.unshift({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: pageUrl,
      image: images.length ? images.map((image) => imageUrl(image)) : [imageUrl()],
      publisher: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        logo: {
          "@type": "ImageObject",
          url: imageUrl(),
        },
      },
    });
  }

  if (!graph.length) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: escapeJsonLd({
          "@context": "https://schema.org",
          "@graph": graph,
        }),
      }}
    />
  );
}

export function ArticlePage({ page, images }: ArticlePageProps) {
  const showContents = page.kind === "pillar" || page.kind === "hub";
  const [leadImage, ...sectionImages] = images;
  const usedSectionImages = sectionImages.slice(0, page.sections.length);
  const remainingImages = sectionImages.slice(page.sections.length);

  return (
    <>
      <SiteHeader currentPath={page.path} />
      <main id="main-content">
        <article className={`publication publication--${page.kind}`}>
          <header className="article-hero">
            <Breadcrumbs page={page} />
            {page.kind === "pillar" ? (
              <p className="article-hero__eyebrow">THE OFFICIAL</p>
            ) : null}
            <h1>{page.h1}</h1>
            <p className="article-hero__dek">{page.description}</p>
          </header>

          <div className="gold-seam" aria-hidden="true" />

          <div className={`article-lead${leadImage ? " article-lead--with-image" : ""}`}>
            <div className="article-lead__copy">
              {page.intro.map((paragraph, index) => (
                <p key={`intro-${index}`}>{paragraph}</p>
              ))}
            </div>
            {leadImage ? <ContentFigure image={leadImage} /> : null}
          </div>

          {showContents ? <TableOfContents page={page} /> : null}

          <div className="article-body">
            {page.sections.map((section, index) => (
              <Fragment key={section.id}>
                <ArticleSection
                  image={usedSectionImages[index]}
                  reverse={index % 2 === 1}
                  section={section}
                />
                {index === 0 ? <BrandCallToAction /> : null}
              </Fragment>
            ))}
          </div>

          {remainingImages.length ? (
            <aside className="image-ledger" aria-label="Packaging details">
              {remainingImages.map((image) => (
                <ContentFigure image={image} key={image.src} />
              ))}
            </aside>
          ) : null}

          <LinkDirectory page={page} />
        </article>
      </main>
      <StructuredData images={images} page={page} />
      <SiteFooter />
    </>
  );
}
