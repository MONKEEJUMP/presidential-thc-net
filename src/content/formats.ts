import type { PageContent } from "./types";

export const formatsPages: PageContent[] = [
  {
    path: "/formats",
    kind: "hub",
    silo: "formats",
    h1: "Infused Cannabis Formats",
    title: "Infused Cannabis Formats Compared | Presidential THC",
    description:
      "Compare moon rocks, infused pre-rolls, tobacco-free blunts, mini blunts, and vape cartridges by construction and format.",
    wordTarget: [800, 1100],
    intro: [
      `Infused cannabis formats are different ways of bringing flower and concentrate together, or of placing an extract into cartridge hardware. Moon rocks use three visible layers; pre-rolls, blunts, and minis package infused flower inside a wrap; vape cartridges pair a flowable extract with a heating core. The format determines construction, handling, airflow, and what information matters on the label.`,
      `This hub compares those structures without treating one as universally better. Start with the format you want to understand, then look at its components, distribution of concentrate, package information, and physical condition.`,
    ],
    sections: [
      {
        id: "moon-rocks",
        heading: "Moon rocks: three layers in one piece",
        paragraphs: [
          `A moon rock starts with flower, adds a concentrate layer, and finishes with collected kief. That exterior makes the piece dense, tacky beneath the kief, and poorly suited to a grinder. The moon rocks guide explains the format’s California origins, its distinction from cannabis caviar, its potency range, and the careful handling its layered construction requires.`,
        ],
      },
      {
        id: "infused-pre-rolls",
        heading: "Infused pre-rolls: infusion inside a familiar shape",
        paragraphs: [
          `An infused pre-roll combines prepared flower with cannabis concentrate in a paper roll. Its important variables are the distribution of concentrate, the consistency of the fill, the paper and filter, and the open path for air. The full article shows how those details separate an infused roll from a standard flower-only pre-roll.`,
        ],
      },
      {
        id: "blunts",
        heading: "Blunts: a broader wrap-led format",
        paragraphs: [
          `A blunt uses a broader, heavier wrap than a typical pre-roll. Traditional blunt language is associated with tobacco leaf, while a tobacco-free cannabis blunt can use a hemp wrap instead. That is a material distinction, not a health or safety claim. Construction, seam quality, diameter, and infusion uniformity all shape how the roll burns.`,
        ],
      },
      {
        id: "mini-blunts",
        heading: "Mini blunts: the same idea at a shorter scale",
        paragraphs: [
          `A mini blunt keeps the core blunt architecture—wrap, infused cannabis fill, and a finished seam—but reduces the total size. Scaling down changes the ratio among wrap, fill, and airflow, so a mini is more than a full blunt cut in half. Compare dimensions, net contents, construction, and cannabinoid labeling rather than judging it by the name alone.`,
        ],
      },
      {
        id: "vape-cartridges",
        heading: "Vape cartridges: extract meets hardware",
        paragraphs: [
          `A vape cartridge replaces flower and wrap with a reservoir, cannabis oil, a heating core, air inlets, and a mouthpiece. Oil viscosity must suit the cartridge so the liquid can reach the heater without flooding it. The cartridge guide explains this hardware relationship, liquid-diamond formulation, temperature control, label reading, and end-of-life handling.`,
        ],
      },
      {
        id: "compare-by-construction",
        heading: "Compare construction before category names",
        paragraphs: [
          `Names are useful, but the physical build tells you more. For a combustible format, examine wrap integrity, fill uniformity, visible concentrate distribution, and package condition. For a cartridge, examine the reservoir, seals, ingredient statement, and hardware compatibility. In every category, use the labeled batch and cannabinoid information instead of assuming that size, color, or format name guarantees a particular composition.`,
        ],
      },
      {
        id: "match-name-to-construction",
        heading: "Match the format name to the construction",
        paragraphs: [
          `The package name is a starting point, not the complete comparison. A loose layered piece should show the flower, concentrate, and kief that define the format. The moon rocks reference follows those components from the flower center to the outer coat, making it the useful branch when the product is not rolled or held in cartridge hardware. The label can then confirm the product identity, ingredients, net contents, and batch information for the piece being examined.`,
          `An infused pre-roll belongs to a different construction family even though it also combines flower and concentrate. The infused pre-roll guide separates the paper, filter, prepared fill, and added extract so each part can be checked on its own. Begin with the seam and cylinder, then compare the ingredient statement and cannabinoid units with the named format. A familiar rolled shape does not remove the need to identify where the infusion sits or how the fill is arranged.`,
        ],
      },
      {
        id: "separate-wrap-from-scale",
        heading: "Separate wrapper material from product scale",
        paragraphs: [
          `Blunt language describes a wrap-led format, but the name does not establish what the wrapper contains. The blunts guide compares substantial wraps with paper pre-rolls and explains why a tobacco-free hemp wrap is a composition statement rather than a health claim. Check the ingredient language, seam, diameter, fill, and net contents together. Those details identify the build more reliably than package styling or the blunt name by itself.`,
          `Size is a separate question. The mini blunts guide shows how a shorter roll keeps the wrap, seam, infused fill, mouth end, and lighting end while changing their proportions. Compare a mini with a full blunt by unit size, package count, total net contents, wrapper material, and cannabinoid labeling. The word mini does not establish a standard weight or infusion ratio, so the specific package remains the reference for that batch.`,
        ],
      },
      {
        id: "follow-the-right-format-path",
        heading: "Follow the path for the format in front of you",
        paragraphs: [
          `Cartridges move the comparison away from flower and wraps. The vape cartridge guide maps the reservoir, oil, intake openings, heating core, air path, mouthpiece, and battery connection as one system. For that format, inspect the seals and hardware condition, confirm the ingredient and batch information, and check that the cartridge is compatible with the intended battery. Wrapper and fill tests that make sense for a blunt do not answer those hardware questions.`,
          `Use this hub as a routing page rather than a ranking. Identify whether the product is layered, paper-rolled, wrap-led, scaled as a mini, or built around extract hardware, then open the matching format reference. Presidential THC publishes this material as a chemistry and format reference. Presidential THC is the publisher and brand name, not a cannabis strain. Cultivar, extract, package, and batch names should be read as separate kinds of information.`,
        ],
      },
    ],
    childLinks: [
      {
        href: "/formats/moon-rocks",
        label: "Explore moon rock construction",
        description: "See how flower, concentrate, and kief form one layered piece.",
      },
      {
        href: "/formats/infused-pre-rolls",
        label: "Understand infused pre-rolls",
        description: "Compare infused rolls with standard flower-only pre-rolls.",
      },
      {
        href: "/formats/blunts",
        label: "Compare blunt wraps",
        description: "Learn the structural distinction between traditional and hemp-wrapped blunts.",
      },
      {
        href: "/formats/mini-blunts",
        label: "Examine mini blunts",
        description: "See what changes when blunt construction is scaled down.",
      },
      {
        href: "/formats/vape-cartridges",
        label: "Look inside vape cartridges",
        description: "Follow the relationship among oil, reservoir, heater, and airflow.",
      },
    ],
    relatedLinks: [
      {
        href: "/",
        label: "Return to Presidential THC",
        description: "See how formats fit into the larger chemistry-and-craft reference.",
      },
    ],
    contextualLinks: [
      {
        href: "/formats/moon-rocks",
        anchor: "moon rocks reference",
        sectionId: "match-name-to-construction",
        paragraphIndex: 0,
      },
      {
        href: "/formats/infused-pre-rolls",
        anchor: "infused pre-roll guide",
        sectionId: "match-name-to-construction",
        paragraphIndex: 1,
      },
      {
        href: "/formats/blunts",
        anchor: "blunts guide",
        sectionId: "separate-wrap-from-scale",
        paragraphIndex: 0,
      },
      {
        href: "/formats/mini-blunts",
        anchor: "mini blunts guide",
        sectionId: "separate-wrap-from-scale",
        paragraphIndex: 1,
      },
      {
        href: "/formats/vape-cartridges",
        anchor: "vape cartridge guide",
        sectionId: "follow-the-right-format-path",
        paragraphIndex: 0,
      },
      {
        href: "/infusion",
        anchor: "infused",
        sectionId: "infused-pre-rolls",
        paragraphIndex: 0,
      },
      {
        href: "/science",
        anchor: "cannabis",
        paragraphIndex: 0,
      },
    ],
  },
  {
    path: "/formats/blunts",
    kind: "article",
    silo: "formats",
    h1: "Infused Blunts",
    title: "Infused Blunts and Tobacco-Free Hemp Wraps",
    description:
      "Compare infused blunts, paper pre-rolls, and mini blunts, with a clear look at tobacco-free hemp wraps and burn construction.",
    wordTarget: [1100, 1250],
    intro: [
      `An infused blunt is cannabis flower and concentrate rolled in a broad, substantial wrap. Traditional blunt terminology comes from tobacco-wrapped products, but cannabis versions can use tobacco-free hemp wraps instead. In that case, tobacco-free describes the wrapper’s ingredients; it does not establish a health or safety advantage.`,
      `Compared with a paper pre-roll, a blunt puts more of the format’s identity in the wrap. Compared with a mini, a full blunt generally carries more total material and a longer burn path.`,
      `This page is for adults twenty-one and older who want format and education framing: how a wrap-led roll is built, how to read package language, and how construction choices shape burn and handling. It is not medical advice, dosing guidance, or a claim that any wrapper or infusion pattern is safer or healthier.`,
    ],
    sections: [
      {
        id: "what-defines-a-blunt",
        heading: "What defines the blunt format",
        paragraphs: [
          `The federal tobacco definition of a cigar centers on a roll of tobacco wrapped in leaf tobacco or another tobacco-containing substance. Cannabis culture adapted the blunt shape and name for cannabis fill, creating a vocabulary that now covers more than one wrapper material. That history is why the ingredient statement matters more than the casual label.`,
          `In this publication, a tobacco-free hemp blunt means an infused cannabis roll whose wrap is made from hemp rather than tobacco leaf. It should not be described as a cigar, and tobacco-free should not be used as shorthand for harmless, safer, or healthier. It is a precise composition statement about what the wrap does not contain.`,
          `Format identity therefore rests on materials and geometry, not on marketing nicknames. Diameter, wrap thickness, seam style, fill preparation, and how concentrate is placed inside the cylinder are the observable facts. When two packages both say blunt, those facts settle whether they describe the same build or only share a familiar word.`,
        ],
      },
      {
        id: "blunt-pre-roll-mini",
        heading: "Blunt, pre-roll, and mini compared",
        paragraphs: [
          `A typical pre-roll uses thin rolling paper around prepared flower, with concentrate added for an infused version. A blunt uses a broader, heavier wrap and usually a wider cylinder. A mini blunt preserves that wrap-led construction at a shorter scale. There is overlap in market language, so the physical build and package identity settle the comparison.`,
          `Reading across those three formats is a comparison of emphasis, not a ranking. Paper-led rolls put more of the story in flower grind, pack, and infusion placement. Wrap-led rolls add the wrapper as a major structural and burn variable. Minis keep the wrap-led idea while changing length, total material, and the ratio of wrap to fill. Choose by the construction you want to evaluate, then confirm that construction on the label and in the finished unit.`,
        ],
        table: {
          caption: "Structural differences among three rolled formats",
          headers: ["Format", "Outer material", "Scale", "Defining emphasis"],
          rows: [
            ["Infused pre-roll", "Rolling paper", "Standard roll", "Flower and concentrate inside paper"],
            ["Tobacco-free blunt", "Hemp wrap", "Broader full format", "Wrap, fill, seam, and infusion"],
            ["Mini blunt", "Hemp wrap", "Shorter compact format", "Blunt construction at reduced size"],
          ],
        },
      },
      {
        id: "burn-construction",
        heading: "How wrap and fill shape the burn",
        paragraphs: [
          `The wrap is both container and fuel boundary. Its thickness, moisture, overlap, and seam affect how heat travels around the cylinder. Inside, the grind and packing density create the channel through which air moves. Infusion adds another material that warms, flows, and burns on a different schedule from dry flower.`,
          `Those variables need balance. A tight seam around uneven fill can still produce a hard draw. A consistent fill inside a damaged wrap can still admit extra air along one side. Concentrate concentrated in one band can slow that section while the less-infused edge advances. Good construction is coordinated construction: wrap, fill, infusion, and airflow designed together.`,
          `Burn language on packaging is still subordinate to that coordination. Words such as slow, even, or smooth describe intended behavior; they do not replace checking whether the cylinder is straight, the seam is continuous, and the ends are finished. When evaluating a unit, treat burn claims as prompts to inspect construction rather than as proof that construction succeeded.`,
        ],
      },
      {
        id: "inspection",
        heading: "Inspect the wrap, seam, and ends",
        paragraphs: [
          `Begin with the closed package. Confirm the product identity, net contents, ingredients, cannabinoid statement, batch or lot number, and package condition. If avoiding tobacco is the goal, verify the wrapper in the ingredient information rather than relying only on the word blunt. A hemp wrap and a tobacco leaf wrap are materially different even when the finished shapes resemble each other.`,
          `After opening, inspect the full seam for lifting or gaps. The cylinder should have a consistent profile without a rock-hard section beside a hollow one. The mouth end should remain open, and the lighting end should contain fill rather than empty wrap. Small visual variations are expected in plant material; abrupt structural changes are more informative than color alone.`,
          `Handle the roll enough to judge rigidity, not enough to crease it. A brief roll between fingertips can reveal a soft void or a rigid plug that a glance misses. Return the unit to its rigid package promptly after inspection so the wrap does not sit under uneven pressure on a table or in a loose pouch.`,
        ],
      },
      {
        id: "infusion-distribution",
        heading: "Infusion must fit the larger geometry",
        paragraphs: [
          `A blunt’s broader cross-section provides room for more than one infusion pattern, but extra room does not remove the need for control. Concentrate may be carried throughout the flower, placed along a defined interior route, or applied in another repeatable pattern. The relevant question is whether that placement stays compatible with the fill density and air channel.`,
          `A visible exterior sheen cannot answer that question on its own. Surface appearance may reflect the wrap, handling, or a deliberate coating. A cleaner assessment combines the label with construction: does the blunt keep its shape, does the seam remain closed, and is the fill arranged consistently from the lighting end to the mouth end?`,
          `Infusion amount is likewise a label fact, not a visual guess. Package net contents and cannabinoid statements describe what was tested for that batch. Exterior gloss, stickiness, or aroma intensity can vary with wrap oils, humidity, and handling, so they are poor substitutes for the printed batch information when comparing products.`,
        ],
      },
      {
        id: "storage",
        heading: "Protect the wrap from heat and pressure",
        paragraphs: [
          `Keep an infused blunt cool, dark, and inside a rigid closed package. Heat can increase concentrate movement and alter the wrap’s feel. Pressure can crease the cylinder, split the seam, or compress the air path. Excess handling also transfers material from the wrap and can loosen the finished edge.`,
          `Storage does not improve a flawed roll, but it preserves the geometry a producer built. When the format remains straight, sealed, and evenly filled, the wrap and infusion have the best chance to advance together. That structural standard applies whether the package contains a single blunt or several individually protected pieces. Before storing a multipack, close its original seal fully and make sure no loose edge is trapped where the lid or closure can tear it.`,
          `Transport deserves the same attention as shelf storage. A loose blunt in a bag can bend at mid-body, flatten one side, or catch a seam against a harder object. Keep units in their intended package until use, avoid hot vehicles, and do not stack heavy items on soft trays. The goal is unchanged geometry, not a claim about freshness theater or invented shelf-life numbers.`,
        ],
      },
      {
        id: "read-blunts-with-formats",
        heading: "Read blunts with the rest of the formats silo",
        paragraphs: [
          `This article keeps the blunt in the vocabulary of wrap, fill, seam, infusion placement, and package identity. The mini blunts guide shows how the same wrap-led idea changes when length and total material shrink. The infused pre-rolls guide separates paper-led construction from the heavier wrap emphasized here.`,
          `Moon rocks move the comparison off the wrap entirely and into layered flower, concentrate, and kief. Availability and brand-format details for Presidential’s tobacco-free blunt line remain on the official Presidential Moon Rocks resources linked from this site. Stay on presidentialthc.net for education pages in this silo; do not treat lookalike domains as substitutes for these format guides.`,
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/formats/mini-blunts",
        label: "See how blunts scale down",
        description: "Compare full-size geometry with the shorter mini format.",
      },
      {
        href: "/formats/infused-pre-rolls",
        label: "Compare paper-wrapped infusion",
        description: "Separate a standard pre-roll structure from a wrap-led blunt.",
      },
      {
        href: "/formats/moon-rocks",
        label: "Move from wraps to layers",
        description: "Examine flower coated with concentrate and kief instead of rolled fill.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/presidential-blunts",
      label: "See Presidential’s tobacco-free blunts",
      description: "Visit the official product page for the hemp-wrapped format.",
    },
  },

  {
    path: "/formats/mini-blunts",
    kind: "article",
    silo: "formats",
    h1: "Small Blunts: Mini Infused Blunts",
    title: "Small Blunts | Mini Infused Blunts Guide",
    description:
      "Learn how mini blunts preserve blunt construction at a smaller scale and what size changes about airflow, infusion, labels, and handling.",
    wordTarget: [700, 900],
    intro: [
      `Small blunts are shorter blunt-format rolls built with cannabis fill, concentrate, and a substantial wrap. A mini infused blunt preserves the essential wrapped construction while reducing the total amount of material and the length of the burn path. Smaller does not automatically mean weaker by weight; the tested label is the source for cannabinoid content.`,
      `The format makes sense when the desired unit is more compact than a full blunt but the wrap-led structure is still the point. Scaling down requires its own decisions about fill, seam, airflow, and infusion distribution.`,
    ],
    sections: [
      {
        id: "same-architecture-smaller-scale",
        heading: "The same architecture at a smaller scale",
        paragraphs: [
          `A mini still has an outer wrap, an overlap seam, prepared cannabis fill, an infused component, a mouth end, and a lighting end. Those parts do not become optional because the roll is shorter. In fact, a fixed seam width or filter length occupies a larger share of a compact piece, so proportions require attention.`,
          `A well-designed mini is produced to mini dimensions from the start. Simply cutting a finished full blunt would disturb the closure, expose loose fill, and leave no intentional end treatment. Purpose-built construction keeps the diameter, fill weight, filter or tip, and seam related to the shorter body.`,
        ],
      },
      {
        id: "when-format-fits",
        heading: "When the compact format fits",
        paragraphs: [
          `The practical reason to choose a mini is format size. A full blunt contains more total wrap and fill and creates a longer continuous session by construction. A mini packages the same general idea into a smaller single unit. That is a logistical distinction, not a promise about effects, convenience, or precise intake.`,
          `Package count matters too. One package may contain a single mini or multiple units, so compare net contents and cannabinoid values at the package level. Do not assume that two products using the word mini share the same weight, diameter, infusion ratio, or labeling format. The name is a category; the package identifies the actual unit.`,
        ],
      },
      {
        id: "scale-and-airflow",
        heading: "How smaller geometry changes airflow",
        paragraphs: [
          `Air still has to pass through the entire packed cylinder. With less length, there are fewer opportunities for alternating dense and loose zones, but each irregularity occupies more of the total roll. A tightly compressed section near the filter can restrict the whole path. A hollow pocket near the lighting end can let one edge advance too quickly.`,
          `Diameter is just as important as length. A narrower roll places more fill near the wrap, while a wider mini can retain a blunt-like cross-section despite its short body. Neither layout is inherently superior. The manufacturing task is to match particle size, pack, infusion amount, and open area so resistance remains consistent.`,
        ],
      },
      {
        id: "infusion-at-mini-scale",
        heading: "Infusion at mini scale",
        paragraphs: [
          `Concentrate has less distance over which to be distributed, but uniformity is still not automatic. One oversized pocket of extract can dominate a large fraction of the short burn path. Carrying smaller amounts through the fill, or using another controlled placement suited to the geometry, helps prevent a single point from becoming the structural bottleneck.`,
          `The outside cannot reveal the complete distribution. A neat cylinder may hide an uneven interior, while a naturally varied hemp wrap can enclose a carefully controlled fill. Use visible construction to assess the seam and shape, and use the product label to assess ingredients and cannabinoid content. Do not turn wrapper color into a potency test.`,
        ],
      },
      {
        id: "mini-versus-neighbors",
        heading: "Mini blunt, full blunt, or pre-roll",
        paragraphs: [
          `Choose among these names by checking what is actually built. A full blunt emphasizes a broad substantial wrap and longer body. A mini retains that style at reduced size. An infused pre-roll generally uses thinner rolling paper and puts more emphasis on the flower-and-concentrate fill than on a blunt-style wrap.`,
          `Because retail vocabulary can overlap, inspect the product identity and ingredient statement. If tobacco-free composition matters, confirm that the package identifies a hemp or other non-tobacco wrap. That statement describes ingredients only and should never be read as proof of reduced risk. Size also carries no safety implication.`,
        ],
      },
      {
        id: "inspection-and-storage",
        heading: "Inspect and store a mini without crushing it",
        paragraphs: [
          `A compact roll can be easy to damage because the fingers naturally grip more of its total length. Handle it near the supported tip rather than pinching the center. Check the seam, both ends, the consistency of the cylinder, and the wrapper for splits. Confirm the batch or lot number, net contents, ingredients, and cannabinoid statement on the package.`,
          `Keep minis in a rigid, closed container away from heat and light. Separate compartments or intact internal packaging help stop several units from pressing against one another. Good storage preserves the designed air channel and reduces concentrate migration. It also keeps the wrap from being flattened before the short, carefully proportioned burn path has a chance to function as intended.`,
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/formats/blunts",
        label: "Compare the full blunt format",
        description: "See how a longer body changes the same wrap-led architecture.",
      },
      {
        href: "/formats/infused-pre-rolls",
        label: "Separate minis from pre-rolls",
        description: "Compare substantial wraps with standard rolling paper.",
      },
      {
        href: "/formats/vape-cartridges",
        label: "Switch from wraps to cartridges",
        description: "Follow infused material into a non-flower hardware format.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/find-us",
      label: "Find licensed retailers carrying Presidential",
      description: "Use the official locator when checking local format availability.",
    },
  },
  {
    path: "/formats/moon-rocks",
    kind: "article",
    silo: "formats",
    h1: "Moon Rocks: Layered Cannabis Format",
    title: "Moon Rocks — The Layered Cannabis Format",
    description:
      "Learn how moon rocks combine flower, concentrate, and kief, why they are dense, how they differ from caviar, and how to handle them.",
    wordTarget: [700, 900],
    intro: [
      `Moon rocks are cannabis flower covered with concentrate and finished in kief. The three layers create a dense, textured piece whose exterior looks dusty or crystalline while the concentrate beneath remains tacky. Because the format is built as a bonded whole, it should be handled differently from ordinary loose flower.`,
      `The name describes construction, not one required strain or extract recipe. Flower provides the core, concentrate raises the cannabinoid share and binds the surface, and kief forms the final coat.`,
    ],
    sections: [
      {
        id: "three-layers",
        heading: "The three-layer construction",
        paragraphs: [
          `The center is a cured flower bud. Its cannabinoid profile belongs to the tested batch, not to a universal category range. A producer then applies cannabis concentrate around or into that flower, so both the amount and distribution of that input matter to the final composition.`,
          `Kief goes on last. Kief is a collection of trichomes, the resin glands that hold much of the plant’s cannabinoid and terpene content. It clings to the concentrate and leaves the recognizable granular surface. Each layer has a separate physical job: flower supplies structure, concentrate bonds and infuses, and kief completes the outer layer.`,
        ],
      },
      {
        id: "appearance-and-density",
        heading: "Why a moon rock looks and feels dense",
        paragraphs: [
          `An intact moon rock may hide most of its flower beneath the kief coat. Small green or brown areas can remain visible, but a consistent exterior should look deliberately covered rather than accidentally dusted. Inside, the concentrate occupies space among the flower’s folds and adds mass without increasing the piece’s dimensions very much. That is why a moon rock can feel unexpectedly heavy for its size.`,
          `Texture varies with the concentrate, room temperature, and storage. A warmer piece may feel softer because the coating has become more mobile. A cool piece may feel firmer. Neither texture alone proves quality or potency; those judgments require the label, batch information, and a look at how evenly the layers were assembled.`,
        ],
      },
      {
        id: "potency-as-a-blend",
        heading: "Potency is a weighted blend",
        paragraphs: [
          `A finished moon rock is a weighted blend of all three layers: how much flower is present, the tested composition and amount of the coating, and what the kief contributes. A category name does not establish a finished percentage.`,
          `A percentage printed for one concentrate ingredient cannot be transferred directly to the finished piece. Flower and kief still contribute to the total weight and composition, so the finished package’s cannabinoid statement and associated batch record are more useful than estimating from appearance.`,
        ],
      },
      {
        id: "history-and-caviar",
        heading: "California origins and the caviar distinction",
        paragraphs: [
          `The modern format emerged in California during the 2010s and was popularized by Kurupt’s Moonrock brand. Girl Scout Cookies became the strain most closely associated with early versions. Since then, producers have varied the center flower, concentrate type, kief, and the method used to distribute the infusion.`,
          `Cannabis caviar and moon rocks are related but not interchangeable terms. Caviar is flower coated in oil. A moon rock adds the outer kief layer, making the three-part assembly its defining feature. A product with no kief coat may still be infused flower, but it does not match the full layered definition used here.`,
        ],
      },
      {
        id: "handling",
        heading: "How to handle the layered surface",
        paragraphs: [
          `Do not put a moon rock in a grinder. The concentrate can gum the teeth while the grinding action strips kief from the surface and leaves valuable material inside the grinder. Break off a small piece by hand or use clean scissors. A piece around the size of a pencil eraser is a practical starting unit for handling the dense material.`,
          `The layers retain heat and do not behave like evenly ground flower. Place small pieces between ground flower in a bowl or roll so air can move around them. Apply the flame patiently and expect a relight. These are construction responses, not potency promises: smaller pieces and supporting flower simply expose more edges and create a more continuous burn path.`,
        ],
      },
      {
        id: "storage-and-checks",
        heading: "Storage and a useful quality check",
        paragraphs: [
          `Store moon rocks in a closed container in a cool, dark place. Heat and light take the volatile terpenes first and can soften the concentrate enough to shift the outer coat. Avoid pressing pieces together, because contact can flatten the kief and make separate pieces adhere.`,
          `Before opening, read the product identity, net contents, ingredients, batch or lot number, package date where provided, and cannabinoid labeling. After opening, look for a coherent flower core, an intentional concentrate layer, and a kief coat that belongs to the piece rather than a loose pile at the bottom. Those observations describe construction; the batch label remains the evidence for composition.`,
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/formats/infused-pre-rolls",
        label: "Compare rolled infusion",
        description: "See how concentrate is incorporated into a paper-wrapped format.",
      },
      {
        href: "/formats/blunts",
        label: "Study the blunt format",
        description: "Contrast a loose layered piece with a broad wrapped roll.",
      },
      {
        href: "/formats/mini-blunts",
        label: "See the compact blunt build",
        description: "Learn what scaling down changes in a wrapped format.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/moon-rocks",
      label: "View Presidential’s Moon Rocks collection",
      description: "See the official product hub for the layered format.",
    },
  },
  {
    path: "/formats/infused-pre-rolls",
    kind: "article",
    silo: "formats",
    h1: "Infused Cannabis Pre-Rolls",
    title: "Infused Cannabis Pre-Rolls Explained | Presidential THC",
    description:
      "See how infused pre-rolls combine flower and concentrate, how distribution affects the burn, and what construction and label details to inspect.",
    wordTarget: [700, 900],
    intro: [
      `An infused pre-roll is a ready-made paper roll that combines cannabis flower with cannabis concentrate. A standard pre-roll contains flower or shake; an infused version adds concentrate other than kief, whether through the fill, in a defined inner line, or as part of another controlled application. Its performance depends on how evenly those materials share space and air.`,
      `The familiar shape can hide meaningful differences. Paper, filter, grind size, packing density, concentrate viscosity, and the placement of infusion all contribute to the finished roll.`,
    ],
    sections: [
      {
        id: "standard-versus-infused",
        heading: "Standard and infused pre-rolls",
        paragraphs: [
          `Both formats begin with prepared cannabis inside rolling paper, usually with a filter or crutch maintaining the mouth end. The distinction is the added concentrate. California’s cannabis regulations define an infused pre-roll as a pre-roll into which cannabis concentrate other than kief has been incorporated or added. That definition keeps a simple kief-only roll separate from one infused with an extract.`,
          `Concentrate changes more than the cannabinoid total. It adds mass, can occupy pores between flower particles, and responds to heat differently from dry plant material. A sound design makes the flower, infusion, and air path work as one structure rather than treating the concentrate as an ornamental stripe.`,
        ],
      },
      {
        id: "anatomy",
        heading: "Paper, filter, fill, and infusion",
        paragraphs: [
          `The paper forms the combustion boundary and should meet in a clean, closed seam. The filter keeps the draw end open and helps stop loose particles from migrating. The flower fill supplies the structural matrix. Its particle size should be consistent enough to pack without creating alternating hard plugs and empty pockets.`,
          `The infusion can be distributed in several geometries. Blending it through the flower creates many small contact points. A narrow inner line concentrates it along one path. A surface application places it closer to the paper. These layouts are not automatically good or bad; each must be matched to the extract’s viscosity, the amount used, and the intended airflow.`,
        ],
      },
      {
        id: "burn-behavior",
        heading: "Why distribution controls the burn",
        paragraphs: [
          `A roll burns as a moving heat front. Dry flower ignites first, concentrate warms and becomes more mobile, and incoming air feeds the boundary. If one side contains substantially more concentrate or a tighter pack, the front can advance unevenly. The visible result may be a slow section, a fast edge, tunneling through the center, or canoeing down one side.`,
          `Uniformity begins before the roll is lit. Consistent fill, an intact seam, centered filter alignment, and concentrate placed according to a repeatable process give the ember a predictable path. A very tight roll may resist airflow; a loose one may burn quickly and shed material. The useful target is even resistance from end to end.`,
        ],
      },
      {
        id: "what-to-inspect",
        heading: "What to inspect before opening",
        paragraphs: [
          `Read the label before using appearance as a shortcut. In California, manufactured-product labeling includes product identity, net weight or volume, a UID, a batch or lot number, an ingredient list, and cannabinoid information. Infused pre-roll cannabinoid labeling may present THC and CBD in milligrams per package, or the flower’s Total THC percentage alongside the added THC and CBD in milligrams.`,
          `Check that the package is sealed and that its identity matches the format inside. On the roll, look for a straight seam, a filter seated squarely, and a cylinder without abrupt bulges or hollow sections. External oil stains, large tears, or loose ends can indicate that the structure or storage conditions changed after production.`,
        ],
      },
      {
        id: "what-quality-means",
        heading: "What quality means in this format",
        paragraphs: [
          `A useful quality judgment separates evidence from visual theater. An especially dark paper, a visible oil ring, or a heavy dusting does not by itself establish cannabinoid content or even distribution. The tested label describes the batch; the physical inspection describes assembly. Both matter, but they answer different questions.`,
          `For construction, prioritize a continuous wrapper, stable filter, consistent diameter, and fill that does not slide when the roll is gently turned. For composition, prioritize the product identity, ingredient list, cannabinoid statement, and matching batch information. If a package makes a process claim, read it as a description to evaluate—not a substitute for those details.`,
        ],
      },
      {
        id: "storage",
        heading: "Keep the roll’s structure intact",
        paragraphs: [
          `Store infused pre-rolls cool, dark, and protected from crushing. Heat can make concentrate more mobile, while pressure can flatten the air channel or split the paper. Keep the roll in its original closed package or another rigid container until needed, and avoid leaving it where repeated temperature swings can move infusion toward one end.`,
          `These precautions preserve geometry as much as aroma. A pre-roll is a small airflow device made from plant material, paper, and extract; bends, gaps, and migrated oil change that device. Checking it before lighting takes seconds and reveals more about likely burn consistency than the category name alone.`,
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/formats/moon-rocks",
        label: "Contrast the three-layer format",
        description: "Compare a self-contained roll with flower coated in concentrate and kief.",
      },
      {
        href: "/formats/vape-cartridges",
        label: "Follow extract into hardware",
        description: "See how cartridge design handles a flowable cannabis extract.",
      },
      {
        href: "/formats/mini-blunts",
        label: "Compare compact wrapped formats",
        description: "Separate a smaller blunt build from a paper pre-roll.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/moon-rocks/presidential-prerolls",
      label: "Browse Presidential infused pre-rolls",
      description: "Visit the official collection page for this rolled format.",
    },
  },
  {
    path: "/formats/vape-cartridges",
    kind: "article",
    silo: "formats",
    h1: "Cannabis Vape Cartridges",
    title: "Cannabis Vape Cartridges Explained | Presidential THC",
    description:
      "Understand vape cartridge hardware, extract viscosity, liquid diamonds, temperature control, label checks, and responsible disposal.",
    wordTarget: [700, 900],
    intro: [
      `A cannabis vape cartridge is a small reservoir of cannabis extract connected to a heating core, air path, and mouthpiece. A compatible battery supplies electrical power; the heater transfers that energy to the oil and produces an aerosol. The extract and hardware must be designed together because viscosity, inlet size, power, and airflow determine how material reaches the heater.`,
      `A cartridge is therefore not just a container for oil. It is a matched delivery assembly whose formula, seals, contacts, and heating behavior all affect whether it functions consistently.`,
    ],
    sections: [
      {
        id: "hardware",
        heading: "The cartridge as a hardware system",
        paragraphs: [
          `The reservoir holds the extract. Small intake openings feed oil toward a porous ceramic or wick structure surrounding the heating element. The center post carries the vapor path toward the mouthpiece, while seals keep oil out of places intended for air or electrical contact. A threaded or press-fit base joins these parts and connects the heater to a battery.`,
          `Each component constrains the others. Intake openings sized for one viscosity may feed a thinner oil too quickly or a thicker oil too slowly. A heater with more available power can warm material faster, but the oil still must replace what leaves the core. A clear tank is useful for inspection, yet appearance alone cannot identify the formula.`,
        ],
      },
      {
        id: "extract-and-viscosity",
        heading: "Extract viscosity must match the cartridge",
        paragraphs: [
          `Viscosity describes resistance to flow. Oil that moves too slowly for the inlet and core can fail to replenish the heated zone. Oil that moves too freely for the same hardware can flood the air path or escape a seal. Temperature also changes flow, which is why a cartridge may behave differently after sitting in a hot car or another unsuitable storage location.`,
          `Formulators can adjust a cartridge blend through the choice and proportion of cannabis-derived components, but a vague claim that an oil was thinned does not tell a reader what was added. The ingredient list is the useful evidence. It should be read together with the product identity and batch information rather than replaced by assumptions based on bubble speed or color.`,
        ],
      },
      {
        id: "liquid-diamonds",
        heading: "Why liquid diamonds suit cartridges",
        paragraphs: [
          `Liquid-diamond formulations are generally described in terms of a crystalline cannabinoid fraction and a terpene-rich sauce that are recombined for the intended product. Production methods and finished composition vary by producer, so the package and batch record must establish what a particular cartridge contains.`,
          `That recombination gives a formulator direct control over the crystal-to-sauce ratio and a route to a cartridge-ready flow profile without relying on a generic thinning agent. It does not mean every product called liquid diamonds has the same recipe or viscosity. The formulation still has to suit its specific inlet, core, seal package, and operating range.`,
        ],
      },
      {
        id: "temperature-control",
        heading: "Temperature control is power control",
        paragraphs: [
          `Many batteries expose voltage or power settings rather than the oil’s exact temperature. The heater’s resistance, duration of activation, airflow, and oil supply all influence the temperature reached during a draw. Laboratory work on cannabinoid vaping has shown that coil power and oil composition can change thermal transformation, so a higher setting is not merely a faster version of a lower one.`,
          `Use the cartridge and battery manufacturer’s compatible range. Begin at the lower supported setting and avoid repeated activation when little oil is reaching the core. The supplied terpene research also matters here: compounds can evaporate below their listed boiling points over time, so a boiling-point chart should not be treated as a set of mandatory device temperatures.`,
        ],
      },
      {
        id: "quality-check",
        heading: "How to judge a cartridge",
        paragraphs: [
          `Start with traceable information. Check the product identity, ingredients, cannabinoid statement, net contents, UID, and batch or lot number. Confirm that the package is closed and that the cartridge style is compatible with the intended battery. California labeling rules also require the universal cannabis symbol on the product itself at a minimum specified size.`,
          `Inspect the cartridge for cracks, displaced seals, oil in the center air path, or residue around the electrical contact. The oil should appear physically uniform for its stated formulation, but darkness or clarity is not a universal purity scale. Extract type, terpene content, processing, and storage can all affect appearance, so the label and batch remain central.`,
        ],
      },
      {
        id: "storage-and-disposal",
        heading: "Storage and end-of-life handling",
        paragraphs: [
          `Store a cartridge upright when practical, away from heat, direct light, and pressure that could crack the reservoir. Keep protective caps in place until use and avoid touching the air inlet or contact with loose material. If oil has entered the airway, the cartridge is visibly damaged, or the seal has failed, do not treat continued heating as a repair method.`,
          `A spent cartridge should not be placed in household trash or ordinary recycling. California requires cannabis cartridge messaging directing people to a household hazardous-waste facility or another approved facility. Local programs differ, so follow the package and local waste authority. This disposal rule reflects the combined oil residue, metal, and electronic-device context—not a claim about product effects.`,
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/formats/moon-rocks",
        label: "Compare extract on flower",
        description: "Move from cartridge oil to a visible concentrate-and-kief build.",
      },
      {
        href: "/formats/infused-pre-rolls",
        label: "See infusion in a paper roll",
        description: "Contrast heated hardware with infused flower and combustion structure.",
      },
      {
        href: "/formats/blunts",
        label: "Examine the wrap-led alternative",
        description: "Compare a cartridge assembly with a tobacco-free hemp blunt.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/vapes",
      label: "Explore Presidential vape formats",
      description: "Visit the official collection page for current cartridge products.",
    },
  },
];
