import Link from "next/link";
import { Fragment } from "react";

import type {
  ContentImage,
  ContentSection,
  ContextualLink,
  PageContent,
} from "@/content/types";
import { absoluteUrl, escapeJsonLd, imageUrl, SITE_NAME, SITE_URL } from "@/lib/site";

import { ContentFigure } from "./content-figure";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

type ArticlePageProps = {
  page: PageContent;
  images: ContentImage[];
};

function findAnchorIndex(text: string, anchor: string) {
  if (!anchor.length) {
    throw new Error("Contextual link anchors cannot be empty.");
  }

  let searchFrom = 0;

  while (searchFrom < text.length) {
    const index = text.indexOf(anchor, searchFrom);
    if (index < 0) return -1;

    const characterBefore = text[index - 1];
    const characterAfter = text[index + anchor.length];
    const startsWithWordCharacter = /[\p{L}\p{N}]/u.test(anchor[0]);
    const endsWithWordCharacter = /[\p{L}\p{N}]/u.test(anchor[anchor.length - 1]);
    const hasWordCharacterBefore = characterBefore
      ? /[\p{L}\p{N}]/u.test(characterBefore)
      : false;
    const hasWordCharacterAfter = characterAfter
      ? /[\p{L}\p{N}]/u.test(characterAfter)
      : false;

    if (
      (!startsWithWordCharacter || !hasWordCharacterBefore) &&
      (!endsWithWordCharacter || !hasWordCharacterAfter)
    ) {
      return index;
    }

    searchFrom = index + anchor.length;
  }

  return -1;
}

function validateContextualLinks(page: PageContent) {
  for (const link of page.contextualLinks ?? []) {
    const paragraphs =
      link.sectionId === undefined
        ? page.intro
        : page.sections.find((section) => section.id === link.sectionId)?.paragraphs;
    const location =
      link.sectionId === undefined ? "intro" : `section "${link.sectionId}"`;

    if (!paragraphs) {
      throw new Error(
        `Contextual link anchor "${link.anchor}" targets a missing ${location} on ${page.path}.`,
      );
    }

    if (
      !Number.isInteger(link.paragraphIndex) ||
      link.paragraphIndex < 0 ||
      link.paragraphIndex >= paragraphs.length
    ) {
      throw new Error(
        `Contextual link anchor "${link.anchor}" targets invalid paragraph ${link.paragraphIndex} in ${location} on ${page.path}.`,
      );
    }
  }
}

function renderContextualText(
  text: string,
  links: ContextualLink[],
  keyPrefix: string,
) {
  if (!links.length) return text;

  const positionedLinks = links
    .map((link) => ({ ...link, index: findAnchorIndex(text, link.anchor) }))
    .sort((left, right) => left.index - right.index);

  for (const [index, link] of positionedLinks.entries()) {
    if (link.index < 0) {
      throw new Error(`Contextual link anchor "${link.anchor}" was not found in ${keyPrefix}.`);
    }

    const previousLink = positionedLinks[index - 1];
    if (previousLink && link.index < previousLink.index + previousLink.anchor.length) {
      throw new Error(`Contextual links overlap in ${keyPrefix}.`);
    }
  }

  const content: React.ReactNode[] = [];
  let cursor = 0;

  positionedLinks.forEach((link, index) => {
    content.push(text.slice(cursor, link.index));
    content.push(
      <Link href={link.href} key={`${keyPrefix}-link-${index}`}>
        {link.anchor}
      </Link>,
    );
    cursor = link.index + link.anchor.length;
  });

  content.push(text.slice(cursor));
  return content;
}

function contextualLinksForParagraph(
  page: PageContent,
  paragraphIndex: number,
  sectionId?: string,
) {
  return (page.contextualLinks ?? []).filter(
    (link) =>
      link.paragraphIndex === paragraphIndex &&
      (link.sectionId ?? undefined) === sectionId,
  );
}

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
  page,
  section,
  image,
  reverse,
}: {
  page: PageContent;
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
            <p key={`${section.id}-paragraph-${index}`}>
              {renderContextualText(
                paragraph,
                contextualLinksForParagraph(page, index, section.id),
                `${page.path}-${section.id}-${index}`,
              )}
            </p>
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

  if (!childLinks.length && !relatedLinks.length) return null;

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
    </aside>
  );
}

function StructuredData({ page, images }: ArticlePageProps) {
  const pageUrl = absoluteUrl(page.path);
  const organizationId = `${SITE_URL}/#organization`;
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
      name: "Presidential THC",
      alternateName: ["Presidential"],
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: imageUrl(),
      },
      description:
        "Presidential THC publishes this chemistry and craft reference.",
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
  validateContextualLinks(page);

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
                <p key={`intro-${index}`}>
                  {renderContextualText(
                    paragraph,
                    contextualLinksForParagraph(page, index),
                    `${page.path}-intro-${index}`,
                  )}
                </p>
              ))}
            </div>
            {leadImage ? (
              <ContentFigure image={leadImage} />
            ) : null}
          </div>

          {showContents ? <TableOfContents page={page} /> : null}

          <div className="article-body">
            {page.sections.map((section, index) => (
              <Fragment key={section.id}>
                <ArticleSection
                  image={usedSectionImages[index]}
                  reverse={isStatesPage ? false : index % 2 === 1}
                  page={page}
                  section={section}
                />
              </Fragment>
            ))}
            <FrequentlyAskedQuestions page={page} />
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
