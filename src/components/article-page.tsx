import Link from "next/link";
import { Fragment } from "react";

import type { ContentImage, ContentSection, PageContent } from "@/content/types";
import { productHrefForImage } from "@/content/product-links";
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
      : [
          ...page.sections.map((section) => ({
            href: `#${section.id}`,
            key: section.id,
            label: section.heading,
          })),
          ...(page.faqs?.length
            ? [
                {
                  href: "#frequently-asked-questions",
                  key: "frequently-asked-questions",
                  label: "Frequently asked questions",
                },
              ]
            : []),
        ];
  const firstColumnRowCount = Math.ceil(links.length / 2);
  const firstColumnEndIndex = firstColumnRowCount - 1;

  return (
    <nav
      className={`table-of-contents table-of-contents--rows-${firstColumnRowCount}`}
      aria-labelledby="contents-heading"
    >
      <p className="table-of-contents__label" id="contents-heading">
        CONTENTS
      </p>
      <ol>
        {links.map((link, index) => (
          <li
            className={
              index === firstColumnEndIndex ? "table-of-contents__column-end" : undefined
            }
            key={link.key}
          >
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
  imageHref,
  reverse,
}: {
  section: ContentSection;
  image?: ContentImage;
  imageHref?: string;
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
        {image ? <ContentFigure href={imageHref} image={image} /> : null}
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

function FrequentlyAskedQuestions({ page }: { page: PageContent }) {
  if (!page.faqs?.length) return null;

  return (
    <section className="article-section" id="frequently-asked-questions">
      <div className="article-section__copy">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {page.faqs.map((faq) => (
            <div className="faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
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
  const organizationId = "https://presidentialcannabis.net/#organization";
  const websiteId = `${SITE_URL}/#website`;
  const webPageId = `${pageUrl}#webpage`;
  const faqId = `${pageUrl}#faq`;
  const imageObjects = images.map((image) => ({
    "@type": "ImageObject",
    contentUrl: imageUrl(image),
    width: image.width,
    height: image.height,
    caption: image.caption,
    description: image.alt,
  }));

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: "Presidential Cannabis",
      alternateName: ["Presidential", "Presidential THC"],
      url: "https://presidentialcannabis.net/",
      logo: {
        "@type": "ImageObject",
        url: imageUrl(),
      },
      description:
        "Presidential Cannabis publishes the Presidential THC chemistry and craft reference.",
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      description:
        "The official chemistry and craft reference for the Presidential Cannabis infusion system.",
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": webPageId,
      url: pageUrl,
      name: page.title,
      description: page.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      publisher: { "@id": organizationId },
      inLanguage: "en-US",
      mainEntity: page.faqs?.length ? { "@id": faqId } : undefined,
    },
    ...imageObjects,
  ];

  if (page.faqs?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": faqId,
      url: `${pageUrl}#frequently-asked-questions`,
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  if (page.kind === "article") {
    graph.unshift({
      "@type": "Article",
      "@id": `${pageUrl}#article`,
      headline: page.h1,
      description: page.description,
      mainEntityOfPage: { "@id": webPageId },
      image: images.length ? images.map((image) => imageUrl(image)) : [imageUrl()],
      publisher: {
        "@id": organizationId,
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
  const isStatesPage = page.silo === "states";
  const leadImage = isStatesPage ? undefined : images[0];
  const sectionImages = isStatesPage ? images : images.slice(1);
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
            {leadImage ? (
              <ContentFigure
                href={productHrefForImage(page.path, leadImage.src)}
                image={leadImage}
              />
            ) : null}
          </div>

          {showContents ? <TableOfContents page={page} /> : null}

          <div className="article-body">
            {page.sections.map((section, index) => (
              <Fragment key={section.id}>
                <ArticleSection
                  image={usedSectionImages[index]}
                  imageHref={
                    usedSectionImages[index]
                      ? productHrefForImage(page.path, usedSectionImages[index].src)
                      : undefined
                  }
                  reverse={isStatesPage ? false : index % 2 === 1}
                  section={section}
                />
                {index === 0 ? <BrandCallToAction /> : null}
              </Fragment>
            ))}
            <FrequentlyAskedQuestions page={page} />
          </div>

          {remainingImages.length ? (
            <aside className="image-ledger" aria-label="Packaging details">
              {remainingImages.map((image) => (
                <ContentFigure
                  href={productHrefForImage(page.path, image.src)}
                  image={image}
                  key={image.src}
                />
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
