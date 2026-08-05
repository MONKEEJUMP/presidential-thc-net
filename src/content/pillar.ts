import type { PageContent } from "./types";

export const pillarPage: PageContent = {
  path: "/",
  kind: "pillar",
  h1: "Presidential THC",
  title: "Presidential THC — The Chemistry and Craft of Infused Cannabis",
  description:
    "A clear guide to Presidential THC, three-layer infused cannabis, potency labels, extraction methods, formats, terpenes, and practical handling.",
  wordTarget: [1400, 1800],
  intro: [
    "Presidential THC is Presidential's approach to infused cannabis: a three-layer construction of flower, concentrate, and kief, expressed through moon rocks, infused pre-rolls, tobacco-free blunts, and minis. Founded in Los Angeles in 2012, Presidential uses the Presidential Infusion System to carry distillate through the flower rather than leaving the infusion only on its surface, then applies the kief layer last. This reference explains that construction, the chemistry behind the numbers on a label, and the processing choices that shape an infused product.",
  ],
  sections: [
    {
      id: "three-layer-construction",
      heading: "The three-layer construction",
      paragraphs: [
        "An infused format begins with flower, adds a cannabis concentrate, and finishes with kief. Each layer has a separate job. Flower supplies the physical structure and the material that burns. Concentrate adds cannabinoid density and can also bind the outer layer. Kief is a collection of trichomes, the plant's resin glands, where much of its cannabinoid and terpene content is held.",
        "That construction explains why a moon rock is visually and physically different from uninfused flower. The piece is denser, its surface has a granular kief coat, and concentrate changes how heat moves through it. A good result depends on distribution, not simply on adding the largest possible amount of concentrate. If the material is uneven, one area can resist airflow while another burns ahead. The craft is in making the three layers behave as one format.",
        "The numbers also come from the layers. Flower commonly tests around 15–25% THC, while a concentrate coating can reach as high as 90%. Finished moon rocks can reach as high as 70%. They do not simply inherit the highest number from one ingredient because the final product is a weighted blend: every gram contains some lower-potency flower, some higher-potency concentrate, and some kief. The finished-batch label, rather than the strongest component, is the useful number.",
      ],
    },
    {
      id: "presidential-infusion-system",
      heading: "The Presidential Infusion System",
      paragraphs: [
        "Surface coating and internal distribution are not the same method. A surface-coated piece keeps much of its concentrate around the outside. The Presidential Infusion System carries distillate through the flower, then adds kief last. That sequence makes infusion part of the flower's internal structure instead of treating concentrate only as an exterior shell.",
        "Distribution matters because concentrate changes density, airflow, and heat retention. When it is concentrated in one place, it can soften under heat and interrupt an otherwise steady burn. When it is distributed through the material, the flower and concentrate meet the flame across more of the same path. Kief still provides the recognizable finishing layer, but it is not being asked to hide an uneven core.",
        "This is also why infused cannabis often needs a slower approach than ordinary flower. A dense, resin-rich piece may need to be relit as heat moves through it. Moon rocks should be broken by hand or cut with scissors rather than put through a grinder, which can gum the teeth and strip off kief. For a bowl or paper format, placing small pieces between ground flower can improve airflow and help the mixture burn more evenly.",
      ],
    },
    {
      id: "extract-contexts",
      heading: "Four extract contexts: distillate, live resin, live rosin, and liquid diamonds",
      paragraphs: [
        "The word concentrate covers methods with very different goals. Distillate is useful when a controlled, comparatively neutral cannabis concentrate is needed; in the Presidential construction described here, distillate is the material carried through the flower. Live resin, live rosin, and liquid diamonds belong to the broader extract vocabulary a reader will encounter when comparing infused cannabis and cartridge oils. A series name alone does not establish which extract it contains, so the package and batch documentation should decide that question rather than an assumed series-to-extract mapping.",
        "Live resin starts with cannabis flash-frozen within hours of harvest, around −40°F, and continues through low-temperature hydrocarbon extraction in a closed-loop system followed by vacuum purging. The cold chain is designed to preserve volatile compounds that can be lost during a weeks-long dry and cure. Typical live-resin potency is 65–85% THC, compared with roughly 70–90% for cured resin. Its defining trade is aromatic fidelity, not an automatic claim to higher potency.",
        "Live rosin follows a solventless path. Fresh-frozen material is washed in ice water so trichome heads can be separated through micron bags, then the collected hash is freeze-dried and pressed. Press temperature changes the balance of consistency, yield, color, and terpene preservation: hash rosin is commonly pressed around 160–190°F, while colder ranges can produce a softer consistency and temperatures above 200°F can degrade terpenes.",
        "Liquid diamonds begin with a separation. A lightly purged extract rests in a sealed vessel for weeks until THCa crystals form apart from a terpene-rich sauce, a process often called diamond mining. The crystals are broken down and reintroduced into that sauce at a controlled ratio. Production varies by producer, but the finished material can exceed 90% total cannabinoid content and its flowing consistency makes it relevant to cartridge design.",
      ],
      table: {
        caption: "What each extract term identifies",
        headers: ["Extract", "Defining process", "Primary context"],
        rows: [
          ["Distillate", "Refined concentrate with a neutral profile", "Controlled infusion"],
          ["Live resin", "Fresh-frozen, low-temperature hydrocarbon extraction", "Aromatic preservation"],
          ["Live rosin", "Ice-water separation followed by heat and pressure", "Solventless processing"],
          ["Liquid diamonds", "THCa crystallization and recombination with sauce", "High-cannabinoid fluid extract"],
        ],
      },
    },
    {
      id: "potency-and-total-thc",
      heading: "Potency: read Total THC, not one dramatic number",
      paragraphs: [
        "A label may show THCa and THC in separate rows. THCa is the acidic precursor present in the plant. Heat removes part of its molecular mass during decarboxylation and converts it to THC, so the two percentages cannot be added directly. The standard calculation is Total THC = (THCa × 0.877) + THC. The 0.877 factor comes from the molecular-weight relationship between THCa at 358.47 g/mol and THC at 314.46 g/mol.",
        "For example, a report showing 70% THCa and 3% THC calculates to 64.39% Total THC: 70 × 0.877 equals 61.39, then the existing 3% THC is added. Even a concentrate labeled 99% THCa has a theoretical maximum of about 87% THC after full conversion. The missing fraction is not an error; it reflects the mass released during decarboxylation.",
        "Potency must also be matched to the tested item. The cannabinoid percentage for a concentrate ingredient is not automatically the percentage of the moon rock, pre-roll, blunt, or mini made with it. Look for the finished product's cannabinoid panel, batch or lot identifier, and the specific sample the report describes. Total THC gives a more useful comparison than THCa alone, while the full panel shows how that total was derived.",
      ],
      table: {
        caption: "Illustrative Total THC calculation",
        headers: ["Label value", "Amount", "Calculation role"],
        rows: [
          ["THCa", "70%", "70 × 0.877 = 61.39%"],
          ["Existing THC", "3%", "Added after conversion factor"],
          ["Total THC", "64.39%", "61.39 + 3"],
        ],
      },
    },
    {
      id: "formats",
      heading: "One infusion idea, four Presidential formats",
      paragraphs: [
        "Moon rocks make the three layers easiest to see: a flower core, concentrate integrated with it, and a kief finish. Their density also makes handling important. Cutting or breaking off a small piece preserves the coat better than grinding, and a slow light allows heat to move into the layered material.",
        "Infused pre-rolls arrange flower and concentrate inside paper, so even distribution along the length matters. A concentrated pocket can change airflow or cause one side to burn faster than the other. A well-constructed roll treats infusion as a continuous part of the fill rather than a single stripe that the flame reaches all at once.",
        "Blunts use a broader wrap and should be distinguished by that construction, not treated as another name for a pre-roll. Presidential's blunts are tobacco-free. Minis apply the same general infused-format logic at a smaller scale, where the relationship among fill density, wrap, and airflow still determines how the format burns. Size changes the proportions and duration of the format; it does not eliminate the need for careful distribution.",
        "Across all four, the package is the controlling record for the specific product. It identifies the format and should be read alongside its cannabinoid information and batch details. The format name tells you how the material is assembled; the lab numbers tell you what was measured in that batch.",
      ],
    },
    {
      id: "terpene-story",
      heading: "The terpene story is a preservation story",
      paragraphs: [
        "Terpenes are volatile aromatic compounds, which means processing and storage can change them before the product reaches the flame. Drying, curing, and storage can remove as much as half of the total terpene content. This is why fresh-freezing matters to live resin, why press temperature matters to live rosin, and why cool, dark storage matters after packaging. Heat and light take the most volatile character first.",
        "Common reference points include caryophyllene at 266°F with a peppery aroma, pinene at 311°F with a pine-like profile, myrcene at 334°F with a musky or earthy profile, limonene at 349°F with bright citrus notes, and linalool at 388°F with a floral character. These boiling points are not simple device instructions. Research has shown that vaporizers can evaporate compounds over time while operating below their listed boiling points; a boiling point marks rapid phase change, not the first temperature at which evaporation occurs.",
        "For an infused product, aroma therefore records several decisions: the starting plant material, whether it was dried or frozen, how an extract was separated, how much heat it encountered, and how the finished package was stored. Potency and terpene character answer different questions. A higher THC number does not prove better aromatic preservation, and an aromatic extract is not necessarily the highest-potency extract.",
      ],
    },
    {
      id: "reference-map",
      heading: "Explore the complete Presidential THC reference",
      paragraphs: [
        "The four sections below follow the subject from first principles to practical use. Science explains the molecules, extracts, and lab numbers. Infusion examines how concentrate is distributed through a format. Formats compares the physical builds readers encounter. Guides turns that foundation into clear handling, storage, temperature, and quality-reading practices.",
      ],
      bullets: [
        "Science: THCa, THC, decarboxylation, lab reports, terpenes, cannabinoids, distillate, live resin, live rosin, and liquid diamonds.",
        "Infusion: concentrate distribution, surface coating versus saturation, kief and trichomes, burn behavior, and potency by format.",
        "Formats: moon rocks, infused pre-rolls, tobacco-free blunts, minis, and the anatomy of vape cartridges.",
        "Guides: handling moon rocks, storing infused cannabis, reading temperature, judging construction, and starting with the fundamentals.",
      ],
    },
  ],
  relatedLinks: [
    {
      href: "/science",
      label: "The Science",
      description: "Explore cannabinoids, extracts, terpenes, and potency.",
    },
    {
      href: "/infusion",
      label: "Infusion",
      description: "Learn how distribution changes infused formats.",
    },
    {
      href: "/formats",
      label: "The Formats",
      description: "Compare infused cannabis construction.",
    },
    {
      href: "/guides",
      label: "Practical Guides",
      description: "Handle, store, and evaluate infused cannabis.",
    },
    {
      href: "/science/thca-vs-thc",
      label: "THCa vs THC",
      description: "Compare the precursor with converted THC.",
    },
    {
      href: "/science/reading-a-lab-report",
      label: "How to Read a Cannabis Lab Report",
      description: "Follow Total THC and batch identifiers.",
    },
    {
      href: "/infusion/how-infusion-works",
      label: "How Infusion Actually Works",
      description: "Examine concentrate distribution.",
    },
    {
      href: "/infusion/surface-vs-saturation",
      label: "Surface-Coated vs Saturated Infusion",
      description: "Compare concentrate placement methods.",
    },
    {
      href: "/formats/moon-rocks",
      label: "Moon Rocks",
      description: "Study flower, concentrate, and kief.",
    },
    {
      href: "/formats/infused-pre-rolls",
      label: "Infused Pre-Rolls",
      description: "See how infusion changes rolls.",
    },
    {
      href: "/guides/how-to-smoke-moon-rocks",
      label: "How to Handle and Smoke Moon Rocks",
      description: "Preserve layers and support an even burn.",
    },
    {
      href: "/guides/what-to-look-for",
      label: "What to Look For",
      description: "Evaluate construction and labeling.",
    },
  ],
};
