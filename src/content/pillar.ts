import type { PageContent } from "./types";

export const pillarPage: PageContent = {
  path: "/",
  kind: "pillar",
  h1: "Presidential THC",
  title: "Presidential THC | Infused Cannabis Chemistry Guide",
  description:
    "Presidential THC explained — flower, concentrate, kief, Total THC labels, extracts, formats, and the official licensed-retailer path.",
  wordTarget: [540, 700],
  intro: [
    "Presidential THC is the official chemistry and craft reference for Presidential Cannabis's infused products. It explains the flower, concentrate, and kief construction behind Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis without treating Presidential THC as a strain name or a universal potency claim.",
  ],
  sections: [
    {
      id: "what-is-presidential-thc",
      heading: "What is Presidential THC?",
      paragraphs: [
        "Presidential THC describes the brand's infusion framework: cannabis flower carried through with concentrate and finished with kief. Cultivar names identify the flower used in a product; Presidential THC identifies the brand and the technical subject explained on this site.",
        "The approved motto “World's Strongest” is brand language. Actual cannabinoid information remains product- and batch-specific. Read the current package and associated test record instead of assigning one category-wide percentage to every Presidential product.",
      ],
    },
    {
      id: "three-layer-construction",
      heading: "Flower, concentrate, and kief",
      paragraphs: [
        "Flower supplies the plant material and physical structure. Concentrate supplies the infused component. Kief is collected trichome material used as the finishing layer. Together they explain the layered construction associated with Presidential Moon Rocks and related infused formats.",
        "Distribution and format matter because the final product is more than one ingredient viewed in isolation. A concentrate percentage does not become the finished Moon Rock, pre-roll, blunt, or mini percentage automatically. The tested finished-product label controls the comparison.",
      ],
    },
    {
      id: "extracts-and-labels",
      heading: "Extract vocabulary and Total THC labels",
      paragraphs: [
        "The terms distillate, live resin, live rosin, and liquid diamonds describe different extract or formulation contexts. They do not establish a guaranteed potency, flavor, or effect. Use the dedicated science pages for definitions and the current product record for the material identified on a specific package.",
        "A label may report THCa and THC separately. Total THC is commonly calculated as (THCa × 0.877) + THC. That formula explains why a raw THCa value and a lower Total THC value can both describe the same tested material. Always match the calculation to the correct batch record.",
      ],
    },
    {
      id: "formats",
      heading: "Moon Rocks, infused pre-rolls, blunts, and minis",
      paragraphs: [
        "Moon Rocks show the layered flower, concentrate, and kief format directly. Infused pre-rolls place prepared cannabis material inside paper. Presidential Blunts use a tobacco-free hemp wrap, while minis bring the rolled formats into a smaller presentation.",
        "Each format has a dedicated reference page covering its physical construction, label vocabulary, and handling considerations. These pages are educational; they do not replace package directions, batch information, or current retailer guidance.",
      ],
    },
    {
      id: "official-reference",
      heading: "Use the official Presidential references",
      paragraphs: [
        "Presidential Cannabis provides the parent-brand and plant guide. Presidential Blunts provides the dedicated hemp-wrap format guide. This site remains focused on Presidential THC chemistry, infusion, extracts, labels, formats, and practical product-reading fundamentals.",
        "Presidential operates through licensed cannabis retailers rather than direct online cannabis sales. Availability varies by market, retailer, product, and date. Use the official Find Us path, then confirm the current selection with the licensed retailer. Adults 21+ where legal.",
      ],
    },
  ],
  relatedLinks: [
    { href: "/science", label: "The Science", description: "Cannabinoids, extracts, terpenes, and label math." },
    { href: "/infusion", label: "Infusion", description: "How concentrate distribution changes infused formats." },
    { href: "/formats", label: "The Formats", description: "Compare Moon Rocks, pre-rolls, blunts, minis, and cartridges." },
    { href: "/guides", label: "Practical Guides", description: "Handle, store, and evaluate infused cannabis." },
    { href: "/science/reading-a-lab-report", label: "Read a Cannabis Lab Report", description: "Follow Total THC and batch identifiers." },
    { href: "/formats/moon-rocks", label: "Moon Rocks", description: "Study the flower, concentrate, and kief construction." },
    { href: "/states", label: "State References", description: "Review market-specific licensed-retail guidance." },
    { href: "https://presidentialcannabis.net/", label: "Presidential Cannabis", description: "Visit the official company and plant guide." },
    { href: "https://presidentialblunts.net/", label: "Presidential Blunts", description: "Visit the official tobacco-free blunt guide." },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com/find-us",
    label: "Find Presidential at licensed retailers",
    description: "Use the official retailer path and confirm current availability.",
  },
  faqs: [
    {
      question: "What is Presidential THC?",
      answer:
        "Presidential THC is the brand's infusion and chemistry reference for flower, concentrate, kief, extracts, labels, and infused formats. It is not a single cannabis strain.",
    },
    {
      question: "How is Total THC calculated?",
      answer:
        "Total THC is commonly calculated as (THCa × 0.877) + THC. Match the calculation to the finished product's batch-specific test record.",
    },
    {
      question: "Which Presidential formats are infused?",
      answer:
        "The official reference covers Moon Rocks, infused pre-rolls, tobacco-free blunts, and minis. The current package identifies the exact format and ingredients.",
    },
    {
      question: "Where are Presidential products sold?",
      answer:
        "Presidential products are available through licensed retailers. Use the official Find Us path and confirm current availability with the retailer.",
    },
  ],
  contextualLinks: [
    {
      href: "/science/distillate",
      anchor: "distillate",
      sectionId: "extracts-and-labels",
      paragraphIndex: 0,
    },
    {
      href: "/science/thca-vs-thc",
      anchor: "Total THC",
      sectionId: "extracts-and-labels",
      paragraphIndex: 1,
    },
    {
      href: "/formats/mini-blunts",
      anchor: "minis",
      sectionId: "formats",
      paragraphIndex: 0,
    },
  ],
};
