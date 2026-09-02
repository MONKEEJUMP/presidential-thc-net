import type { PageContent } from "./types";

export const aboutPage: PageContent = {
  path: "/about",
  kind: "about",
  h1: "About Presidential THC",
  title: "About Presidential THC | Official Chemistry Reference",
  description:
    "About Presidential THC, the official chemistry and craft reference published by Presidential Cannabis for infusion, extracts, formats, labels, and handling.",
  wordTarget: [300, 400],
  intro: [
    "Presidential THC is the official chemistry and craft reference published by Presidential Cannabis. It explains the Presidential Infusion System, infused-format construction, cannabinoid labels, extracts, handling, storage, and temperature in clear technical language.",
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
      heading: "Published by Presidential Cannabis",
      paragraphs: [
        "Presidential Cannabis publishes this reference and makes Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. Licensed retailers carry the company's products across California, Oklahoma, New York, Nevada, Michigan, Arizona, Florida, and Washington, with availability shaped by each retailer and location.",
        "Brand and plant information lives at the official Presidential Cannabis site. This publication carries the educational scope forward through connected science, infusion, format, guide, and state references.",
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
};

export default aboutPage;
