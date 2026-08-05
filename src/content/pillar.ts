import type { PageContent } from "./types";

export const pillarPage: PageContent = {
  path: "/",
  kind: "pillar",
  h1: "Presidential THC",
  title: "Presidential THC — The Chemistry and Craft of Infused Cannabis",
  description:
    "A clear guide to Presidential THC, three-layer infused cannabis, potency labels, extraction methods, formats, terpenes, and practical handling.",
  wordTarget: [2800, 3200],
  intro: [
    "Presidential THC is Presidential's official approach to infused cannabis: a three-layer construction of flower, concentrate, and kief, expressed through moon rocks, infused pre-rolls, tobacco-free blunts, and minis. Founded in Los Angeles in 2012, Presidential uses the Presidential Infusion System to carry distillate through the flower rather than leaving the infusion only on its surface, then applies the kief layer last. This reference explains that construction, the chemistry behind the numbers on a label, and the processing choices that shape an infused product.",
  ],
  sections: [
    {
      "id": "what-presidential-thc-means",
      "heading": "What Presidential THC means",
      "paragraphs": [
        "Presidential THC is infused cannabis built on a single process: flower carried through with concentrate, finished with a coat of kief. That construction is the product. Every format the brand makes is the same idea arriving in a different shape.",
        "The name describes a method, not a category. Infused cannabis is a broad shelf and most of it is surface work — concentrate applied to the outside of a nug where it stays. Presidential's process carries distillate through the flower rather than onto it, which changes how the finished product burns and how evenly it delivers from the first third to the last.",
        "That single idea produces four formats. Moon Rocks are the flagship, the layered construction in its original form. Infused pre-rolls are the same material ground and rolled. Blunts wrap it in tobacco-free hemp. Minis are the blunt sized down. Nothing is added at the rolling stage that was not already in the Moon Rock.",
        "Behind those formats sits a catalog of forty-seven products across six groupings, organised by what goes into them rather than by price tier. The extract determines the series, the series determines the character, and the character is what a buyer actually notices.",
        "Presidential has been building infused product since 2012, out of Los Angeles, before the phrase premium cannabis meant anything. The company sells wholesale only, through licensed retailers, in eight states.",
        "This site is the official reference for all of it — the chemistry, the process, the formats, and how to read what is printed on a package."
      ]
    },
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
      "id": "how-to-read-a-label",
      "heading": "How to read a label",
      "paragraphs": [
        "A cannabis label is mostly arithmetic, and the arithmetic trips people because two numbers on the same package can differ by ten points while describing the same material.",
        "The plant does not make THC. It makes THCa — the acidic form, which is not intoxicating on its own. Heat converts it. That conversion is not one for one, because part of the molecule leaves as carbon dioxide, and the ratio of what remains is 0.877. So a package testing at ninety-nine percent THCa carries a theoretical maximum of about eighty-seven percent THC once it is fully converted. Both numbers are true. They are answering different questions.",
        "That is why every accredited lab in the industry reports a Total THC figure calculated the same way, and why a label showing a raw THCa percentage beside a lower Total THC percentage is not a contradiction or a mistake. It is the conversion, stated properly.",
        "Beyond the cannabinoid panel, a certificate of analysis carries a batch or lot number that ties the package to the specific run it came from, a test date, and the laboratory that performed the work. A terpene panel, where one is included, tells you more about how the product will smell and taste than the potency figure ever will.",
        "What a certificate does not cover is worth knowing too. It reports on the batch that was submitted, at the moment it was tested. It says nothing about how the product was stored afterwards, and terpenes begin leaving from the day the plant is cut.",
        "The full method — which columns to read in which order, and how to spot a report that is not saying what it appears to say — is covered in the reference guides on this site."
      ]
    },
    {
      "id": "the-three-series",
      "heading": "The three series",
      "paragraphs": [
        "The Presidential catalog is organised by extract. Three series, three different starting materials, three different reasons to reach for one over another.",
        "Silver is the Flavor Series — seven products, fruit-forward and vibrant, built on distillate. Distillate is refined until it is close to neutral in aroma, which is precisely what makes it the right base when flavour is being added deliberately rather than inherited from the plant. Blue Raspberry, Watermelon, Peach Mango, Pineapple, Strawberry, Tropical, Grape.",
        "Gold is the Strain Series — nineteen products, cannabis-forward and full-spectrum, built on live resin. Live resin comes from material frozen at harvest instead of dried and cured, which preserves the aromatic fraction that a weeks-long cure would otherwise carry away. The result smells like the strain it came from. Presidential OG, Blue Dream, Skywalker, Cherry Gelato, Cap Junky, Gorilla Goo and more.",
        "Rose Gold is the Connoisseur Series — five products, built on live rosin. Rosin is solventless: fresh-frozen material washed in ice water to collect trichomes, then pressed under heat and pressure. No chemical solvent touches it at any stage. It is the smallest yield and the most expensive way to make a concentrate, which is exactly why it sits where it does. Cereal Milk, Cosmic Cookies, God's Gift, Wedding Cake, White Walker.",
        "Beyond the three sit the Presidential Line, the Presidential House Line, and the Presidential x THC Design collaboration, which is built on estate-grown flower cultivated by THC Design.",
        "The series is the fastest way to know what you are holding. Silver means flavour was the intent. Gold means the strain was. Rose Gold means someone accepted a smaller yield to keep everything else intact."
      ]
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
      "id": "where-it-is-sold",
      "heading": "Where it is sold",
      "paragraphs": [
        "Presidential is a wholesale brand. The product reaches people through licensed retailers and through no other route — not by mail, not by shipping, not from this site or any other.",
        "That is a structural choice rather than a policy statement, and it carries a useful consequence: every package that reaches a customer travelled through a licensed, regulated channel. Anything sold as Presidential outside that channel did not come from Presidential.",
        "The brand is carried across eight states, and the markets are genuinely different from one another. California is the origin market and by some distance the largest, with more than six hundred licensed doors. Oklahoma runs a medical-only programme under a license moratorium and carries close to two hundred. New York is adult-use under an entirely different regulator, with more than a hundred and fifty. Nevada and Michigan each carry around a hundred. Arizona is the smallest of the active markets. Florida and Washington are opening, with listings publishing as licensed retailers come online.",
        "Those differences are not trivia. What is legal, who may buy, what a retailer may stock, and what a buyer needs to carry through the door all change at the state line — which is why each state has its own reference on this site rather than a shared page with the name swapped.",
        "The state pages cover how buying works in each market, which formats land there, and how to find the nearest licensed door."
      ]
    },
    {
      "id": "how-to-know-it-is-authentic",
      "heading": "How to know it is authentic",
      "paragraphs": [
        "Three checks, and any one of them will usually settle it.",
        "The first is where you bought it. Presidential is sold through licensed retailers. If a package arrived in the mail, or came from a site with a checkout, it did not come from this company. There is no direct channel and there never has been.",
        "The second is whether the product exists. Every genuine Presidential product appears in the catalog — forty-seven of them, across six groupings, in four formats. A product name that does not appear anywhere in that catalog is not a Presidential product, whatever the packaging says.",
        "The third is the package itself. The construction is specific and consistent: flower carried through with concentrate, coated in kief, in the formats described on this page. The crest, the series marking, and the batch number tie a package back to the run it came from.",
        "The official retail path is the store locator on the Presidential site. It covers every state where the brand is carried and returns licensed doors with real distances. If you are trying to establish whether something is genuine, that is the fastest route — find the nearest licensed retailer and buy it there.",
        "Presidential has made this product since 2012. The brand, the process, and the catalog are all documented on this site, and everything published here comes from the company that manufactures it."
      ]
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
    {
      href: "/states/california",
      label: "Presidential THC in California",
    },
    {
      href: "/states/oklahoma",
      label: "Presidential THC in Oklahoma",
    },
    {
      href: "/states/new-york",
      label: "Presidential THC in New York",
    },
    {
      href: "/states/nevada",
      label: "Presidential THC in Nevada",
    },
    {
      href: "/states/michigan",
      label: "Presidential THC in Michigan",
    },
    {
      href: "/states/arizona",
      label: "Presidential THC in Arizona",
    },
    {
      href: "/states/florida",
      label: "Presidential THC in Florida",
    },
    {
      href: "/states/washington",
      label: "Presidential THC in Washington",
    },
  ],
};
