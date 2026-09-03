export type PageKind = "pillar" | "hub" | "article" | "about";

export type DataTable = {
  caption: string;
  headers: string[];
  rows: string[][];
};

export type ContentSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: DataTable;
};

export type PageLink = {
  href: string;
  label: string;
  description?: string;
};

export type ContextualLink = {
  href: string;
  anchor: string;
  paragraphIndex: number;
  sectionId?: string;
};

export type FrequentlyAskedQuestion = {
  question: string;
  answer: string;
};

export type PageContent = {
  path: string;
  kind: PageKind;
  silo?: "science" | "infusion" | "formats" | "guides" | "states";
  h1: string;
  title: string;
  description: string;
  wordTarget: [number, number];
  intro: string[];
  sections: ContentSection[];
  childLinks?: PageLink[];
  relatedLinks?: PageLink[];
  externalLink?: PageLink;
  faqs?: FrequentlyAskedQuestion[];
  contextualLinks?: ContextualLink[];
};

export type ContentImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};
