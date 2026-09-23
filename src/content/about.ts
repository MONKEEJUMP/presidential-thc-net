import type { PageContent } from "./types";

export const aboutPage: PageContent = {
  path: "/about",
  kind: "about",
  h1: "About Presidential THC",
  title: "About Presidential THC | Official Chemistry Reference",
  description:
    "About Presidential THC, the official chemistry and craft reference for the Presidential Cannabis brand, covering infusion, extracts, formats, labels, and handling.",
  wordTarget: [800, 1100],
  intro: [
    "Presidential THC publishes this official chemistry and craft reference for the Presidential Cannabis brand. It explains the Presidential Infusion System, infused-format construction, cannabinoid labels, extracts, handling, storage, and temperature in clear technical language.",
    "Presidential Cannabis operates as a wholesale brand, with products available through licensed retailers. This publication connects that brand context with a focused educational map of flower, concentrate, kief, formats, and Total THC.",
  ],
  sections: [
    {
      id: "reference-purpose",
      heading: "A Focused Reference Resource",
      paragraphs: [
        "This site goes deep on one subject. Its science section defines THCa, THC, decarboxylation, terpenes, cannabinoids, and major extract types. The infusion section examines the relationship among flower, concentrate, kief, distribution, density, and burn. Format articles explain moon rocks, infused pre-rolls, tobacco-free blunts, minis, and vape cartridges.",
        "Practical guides turn those foundations into clear handling steps. Across every section, the editorial method stays consistent: describe what a product is, how it is made, what its package communicates, and what a reader can observe from the product and label.",
      ],
    },
    {
      id: "presidential-context",
      heading: "Presidential THC as publisher",
      paragraphs: [
        "Presidential THC publishes this reference about the Presidential Cannabis brand. Presidential Cannabis makes Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. Licensed retailers carry the brand's products across California, Oklahoma, New York, Nevada, Michigan, Arizona, Florida, and Washington, with availability shaped by each retailer and location.",
        "Brand and plant information lives at the official Presidential Cannabis site. This publication carries the educational scope forward through connected science, infusion, format, guide, and state references.",
      ],
    },
    {
      id: "publisher-identity",
      heading: "A publisher identity for chemistry",
      paragraphs: [
        "Presidential THC is the publisher identity for this reference. It is not a cannabis strain, a catalog item, or a single product format. The site uses the name to organize technical context around the Presidential Cannabis brand: how material is described, how infused construction is explained, and how a reader can separate an extract term from a package claim.",
        "That scope sets a practical boundary. The official company record carries brand information; this site explains the vocabulary that lets a reader interpret a package and follow a question through the reference. A product name, net weight, ingredient statement, batch identifier, and retailer listing each answer different questions. The publisher role is to keep those questions in the right place.",
        "An educational publisher has a different job from a product page. It names the subject, connects the supporting guides, and keeps construction, label interpretation, market context, and current availability distinct. That lets a reader compare sources without treating a package term as a promise or assuming that one article answers a different question.",
      ],
    },
    {
      id: "use-the-reference-in-order",
      heading: "Use the reference in the order of your question",
      paragraphs: [
        "Start with the science hub when an unfamiliar word appears on a label, such as THCa, terpene, distillate, live resin, or rosin. Move to the infusion hub when the question is how flower, concentrate, and kief are arranged in a finished product. These sections explain construction and terminology without predicting a result for the reader.",
        "Use the format hub to compare the physical form of Moon Rocks, pre-rolls, blunts, minis, and cartridges. Use the handling guides when the question is storage, temperature, package reading, or what to check before treating a label as current. Each hub has a narrow job, so readers can follow the next question without turning this page into a general glossary.",
      ],
    },
    {
      id: "connect-context-to-location",
      heading: "Connect education to market context",
      paragraphs: [
        "The state directory adds the market layer. It explains how licensed retail context differs by state and why a page about a market is not a promise that a specific package is currently on a shelf. Use it to find the right state reference, then check a current licensed retailer or official state source for live availability.",
        "This separation keeps education distinct from a retailer listing. Presidential THC publishes chemistry and construction context; retailers and regulators publish the current local facts. Where an old menu, a search result, and a current licensed source disagree, use the current source.",
        "Use the site as a reference, not a substitute for the package or the retailer. Read the source that is closest to the question: a label for package details, an article for construction terms, and a current licensed source for local status. That order keeps the page useful when product information changes.",
        "The home page gives the broad map, while each hub narrows the subject. Return to the relevant hub whenever a term becomes more specific than the answer on this page. The site is organized for that return path instead of one long, universal explanation.",
      ],
    },
    {
      id: "editorial-method",
      heading: "How the Material Is Organized",
      paragraphs: [
        "Each article answers its central question first, then explains the underlying construction or chemistry in plain language. Related reading stays inside the same subject silo so a reader can move sideways without losing the thread. Hub pages provide the map, and the home page connects the four major subject areas.",
        "That structure keeps education separate from retail while giving infused cannabis a coherent vocabulary. The aim is useful reference work: specific enough to check, restrained enough to trust, and organized so that the next question has a clear place to go.",
      ],
    },
  ],
  relatedLinks: [
    {
      href: "https://presidentialcannabis.net/",
      label: "Visit the official Presidential Cannabis company reference",
      description: "Explore the brand, plant catalog, and official company information.",
    },
    {
      href: "https://presidentialblunts.net/",
      label: "Explore Presidential tobacco-free blunt formats",
      description: "Continue to the dedicated Presidential Blunts reference.",
    },
  ],
  contextualLinks: [
    {
      href: "/formats",
      anchor: "blunts",
      sectionId: "reference-purpose",
      paragraphIndex: 0,
    },
    {
      href: "/states",
      anchor: "brand",
      paragraphIndex: 1,
    },
    {
      href: "/guides",
      anchor: "guides",
      sectionId: "reference-purpose",
      paragraphIndex: 1,
    },
    {
      href: "/",
      anchor: "THC",
      paragraphIndex: 0,
    },
    {
      href: "/science",
      anchor: "Cannabis",
      paragraphIndex: 0,
    },
    {
      href: "/science",
      anchor: "science hub",
      sectionId: "use-the-reference-in-order",
      paragraphIndex: 0,
    },
    {
      href: "/infusion",
      anchor: "infusion hub",
      sectionId: "use-the-reference-in-order",
      paragraphIndex: 0,
    },
    {
      href: "/formats",
      anchor: "format hub",
      sectionId: "use-the-reference-in-order",
      paragraphIndex: 1,
    },
    {
      href: "/guides",
      anchor: "handling guides",
      sectionId: "use-the-reference-in-order",
      paragraphIndex: 1,
    },
    {
      href: "/states",
      anchor: "state directory",
      sectionId: "connect-context-to-location",
      paragraphIndex: 0,
    },
  ],
};

export default aboutPage;
