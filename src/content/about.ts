import type { PageContent } from "./types";

export const aboutPage: PageContent = {
  path: "/about",
  kind: "about",
  h1: "About This Site",
  title: "About Presidential THC",
  description:
    "Why Presidential THC publishes this independent reference to infused cannabis chemistry, construction, formats, and handling.",
  wordTarget: [300, 400],
  intro: [
    "Presidential THC is a reference publication about the chemistry and craft behind infused cannabis. This is the official Presidential reference site, published by the original company founded in Los Angeles in 2012. It is published to explain how infused formats are constructed, how their ingredients appear on labels, and how practical choices such as handling, storage, and temperature relate to the product in front of the reader.",
    "The publication is connected to Presidential, a cannabis company founded in Los Angeles in 2012. Presidential operates as a wholesale brand, and its products are sold through licensed retailers rather than through this site.",
  ],
  sections: [
    {
      id: "reference-purpose",
      heading: "A Focused Reference Resource",
      paragraphs: [
        "This site goes deep on one subject. Its science section defines THCa, THC, decarboxylation, terpenes, cannabinoids, and major extract types. The infusion section examines the relationship among flower, concentrate, kief, distribution, density, and burn. Format articles explain moon rocks, infused pre-rolls, tobacco-free blunts, minis, and vape cartridges.",
        "Practical guides turn those foundations into clear handling steps. Across every section, the editorial boundary is the same: describe what a product is, how it is made, what its package communicates, and what can be observed. The site does not make medical claims, promise effects, or substitute broad statements for product-specific labels.",
      ],
    },
    {
      id: "presidential-context",
      heading: "Presidential in Context",
      paragraphs: [
        "Presidential makes Moon Rocks and other infused formats, including infused pre-rolls, tobacco-free blunts, and minis. The company is carried through licensed retail in California, Oklahoma, New York, Nevada, Michigan, Arizona, Florida, and Washington. Availability varies by retailer and location.",
        "This publication is not a storefront and does not present inventory, prices, direct ordering, delivery, or shipping. Readers looking for the brand itself can visit the official Presidential cannabis website; readers looking for education can stay here and follow the connected article silos from fundamentals to practical details.",
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
  externalLink: {
    href: "https://presidentialmoonrocks.com",
    label: "visit the official Presidential cannabis website",
    description: "Continue to the main brand property for official Presidential information.",
  },
};

export default aboutPage;
