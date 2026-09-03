import type { PageContent } from "./types";

export const scienceExtractPages: PageContent[] = [
  {
    path: "/science",
    kind: "hub",
    silo: "science",
    h1: "The Science",
    title: "Cannabis Extract Science — THCa, Terpenes and Potency",
    description:
      "A practical map of cannabis chemistry, lab labels, terpenes, distillate, live resin, live rosin, and liquid diamonds.",
    wordTarget: [400, 600],
    intro: [
      "Cannabis chemistry explains what is in a concentrate, how processing changes it, and what a laboratory result actually measures. The essential ideas are straightforward: cannabinoids can appear in acidic or neutral forms, aromatic terpenes are volatile, and each extraction or refinement method preserves a different portion of the starting material.",
      "This section follows those ideas from the plant to the finished extract. It stays strictly chemical and descriptive, making terminology, composition, and process differences readable without assigning outcomes to the compounds.",
    ],
    sections: [
      {
        id: "how-to-use-this-section",
        heading: "A map from molecules to materials",
        paragraphs: [
          "Start with THCa, THC, and decarboxylation to understand why raw percentages do not translate directly into heated THC. Then move to laboratory reports, terpenes, and the wider cannabinoid family for the vocabulary used on labels. The four extract guides compare a highly refined distillate with three methods built around fresh-frozen material or controlled crystallization.",
          "No single percentage identifies an extract or proves how it was made. Process details, ingredient language, batch identification, and a matching laboratory report create a much clearer picture than color or texture alone.",
        ],
      },
    ],
    childLinks: [
      {
        href: "/science/thca-vs-thc",
        label: "THCa vs THC",
        description:
          "See why THCa and THC are separate label entries and how the 0.877 conversion factor works. A complete example turns the formula into usable label math.",
      },
      {
        href: "/science/decarboxylation",
        label: "Decarboxylation",
        description:
          "Follow the heat-driven reaction that removes carbon dioxide from THCa. Temperature and time explain why conversion is a process rather than an instant switch.",
      },
      {
        href: "/science/reading-a-lab-report",
        label: "Reading a Lab Report",
        description:
          "Learn the structure of a certificate of analysis, from batch identifiers to cannabinoid and terpene panels. The guide also marks the limits of what one report can establish.",
      },
      {
        href: "/science/terpenes",
        label: "Terpenes",
        description:
          "Meet six common aromatic compounds and compare their boiling points. The article explains volatility and why handling conditions can reshape an extract's aroma profile.",
      },
      {
        href: "/science/cannabinoids",
        label: "Cannabinoids Beyond THC",
        description:
          "Place THC, THCa, CBD, CBG, and CBN in one descriptive map. It focuses on plant origin, molecular relationships, and label presentation.",
      },
      {
        href: "/science/distillate",
        label: "Distillate",
        description:
          "See how vacuum distillation concentrates a cannabinoid-rich fraction while separating lighter and heavier material. That refinement explains distillate's neutral aroma and adaptable composition.",
      },
      {
        href: "/science/live-resin",
        label: "Live Resin",
        description:
          "Trace fresh-frozen cannabis through a cold hydrocarbon extraction and vacuum purge. The comparison with cured resin centers on volatile retention, not a claim that one is universally stronger.",
      },
      {
        href: "/science/live-rosin",
        label: "Live Rosin",
        description:
          "Follow the solventless route from ice-water washing to freeze-dried hash and a heated press. Micron selection and press temperature explain both the material losses and the finished texture.",
      },
      {
        href: "/science/liquid-diamonds",
        label: "Liquid Diamonds",
        description:
          "Learn how THCa crystals separate from terpene-rich sauce and are recombined at a controlled ratio. The process connects crystal purity with a uniform oil made for cartridge hardware.",
      },
    ],
    relatedLinks: [
      {
        href: "/",
        label: "Return to Presidential THC",
        description:
          "Explore the complete reference map for infused cannabis chemistry, construction, formats, and practical handling.",
      },
    ],
    contextualLinks: [
      {
        href: "/",
        anchor: "THC",
        sectionId: "how-to-use-this-section",
        paragraphIndex: 0,
      },
      {
        href: "/about",
        anchor: "chemistry",
        paragraphIndex: 0,
      },
    ],
  },
  {
    path: "/science/distillate",
    kind: "article",
    silo: "science",
    h1: "Distillate",
    title: "What Is Cannabis Distillate",
    description:
      "How cannabis distillate is refined, why it is nearly odorless, and how its composition differs from broader plant extracts.",
    wordTarget: [700, 900],
    intro: [
      "Cannabis distillate is a cannabinoid-rich fraction produced by distilling a previously extracted cannabis oil under vacuum. The refinement separates target cannabinoids from much of the oil's volatile aroma material and heavier residue, so the finished liquid is commonly translucent, highly concentrated, and nearly odorless.",
      "That neutrality is the defining practical feature. Distillate provides a consistent base whose flavor can be shaped separately, while a less-refined extract carries more of the original plant's mixed chemical profile into the finished material.",
    ],
    sections: [
      {
        id: "extraction-before-distillation",
        heading: "Distillation starts with an extract",
        paragraphs: [
          "Distillation does not pull cannabinoids directly from intact flower. An upstream extraction first produces crude cannabis oil containing cannabinoids alongside volatile compounds, pigments, waxes, residual solvent, and other plant-derived material. The exact extraction and cleanup sequence varies by processor, but the feed must be conditioned before it reaches a short-path or wiped-film still.",
          "A thin-film system spreads that feed across a heated surface. Vacuum lowers the pressure inside the equipment, allowing selected compounds to evaporate at lower operating temperatures than they would require at ordinary atmospheric pressure. The short distance between evaporation and condensation surfaces lets the separated vapor condense quickly into a collected fraction.",
        ],
      },
      {
        id: "fraction-by-fraction",
        heading: "How the fractions separate",
        paragraphs: [
          "The process works because the mixture's components do not share the same volatility. Commercial molecular-distillation research describes a two-cut approach: a first pass removes terpenes and other light components, while a later pass recovers a cannabinoid-rich distillate. Less-volatile material remains behind as residue. Equipment geometry, pressure, feed rate, and condenser temperature all influence where those fractions land.",
          "This is refinement, not the creation of a new cannabinoid. The still concentrates molecules already present in the feed and sorts them according to process conditions. More than one pass may be used when a producer wants a narrower fraction, but every extra separation also moves the material farther from the broad composition of the starting plant.",
        ],
      },
      {
        id: "why-the-aroma-is-neutral",
        heading: "Why distillate is nearly odorless",
        paragraphs: [
          "Cannabis aroma comes largely from volatile compounds, especially terpenes. Those lighter molecules leave the main cannabinoid fraction early in a properly controlled distillation. Pigments and heavier plant compounds are also reduced through extraction cleanup and fractionation. The result usually has much less of the source flower's recognizable aroma, color, and flavor than resin or rosin.",
          "Nearly odorless does not mean chemically empty. It means the mixture is dominated by the targeted cannabinoid fraction rather than the complete range of compounds found in the crude oil. A finished formulation may include terpenes or flavor ingredients added after distillation, so its final aroma does not necessarily reveal what the distillate smelled like when it left the still.",
        ],
      },
      {
        id: "a-neutral-base",
        heading: "Why neutrality is useful",
        paragraphs: [
          "A neutral base lets a formulator separate cannabinoid concentration from flavor design. The same refined starting fraction can support different aroma profiles without asking the original cultivar to provide every flavor note. It can also be distributed through another cannabis material where a strong source-extract aroma would compete with the intended profile.",
          "Consistency is equally important. A narrow fraction gives a producer fewer compositional variables to manage than a broad extract. That does not make distillate inherently better; it makes it suited to products that prioritize repeatable concentration and deliberate flavor construction.",
        ],
      },
      {
        id: "distillate-vs-full-spectrum",
        heading: "Distillate compared with broader extracts",
        paragraphs: [
          "Full-spectrum is used for extracts intended to retain a wider set of the plant's cannabinoids, terpenes, and other extractable compounds. Distillate takes the opposite engineering direction: isolate a narrower, cannabinoid-heavy fraction and leave much of the supporting mixture behind. The terms describe composition goals, not a universal quality ranking.",
          "A label should identify the extract type and the finished cannabinoid content, while a batch-matched laboratory report can show which cannabinoids were measured. Color and clarity can support that reading, but they cannot prove feedstock, distillation settings, added ingredients, or the complete chemical profile. Process disclosure and analytical data are stronger identifiers than appearance alone.",
        ],
      },
      {
        id: "reading-the-finished-fraction",
        heading: "Reading the finished fraction",
        paragraphs: [
          "A cannabinoid percentage describes how much of the tested sample the laboratory assigned to that compound; it does not describe every manufacturing step. A concentrated THC result may be consistent with successful fractionation, but it cannot show whether the producer used a short-path pot, a wiped-film unit, one pass, or several. Those are production-record questions.",
          "The ingredient statement adds a second layer of information. If terpenes or flavor components were blended into the distillate after refinement, they belong to the finished formula even though they were not part of the neutral collected fraction. Reading extract identity, ingredients, batch number, and the corresponding analysis together prevents one clear percentage from standing in for the entire product description.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/science",
        label: "Explore cannabis extract science",
        description: "Return to the science hub for the complete chemistry map.",
      },
      {
        href: "/science/live-resin",
        label: "Compare distillate with live resin",
        description: "See how a fresh-frozen extract preserves a broader volatile fraction.",
      },
      {
        href: "/science/terpenes",
        label: "Understand terpene volatility",
        description: "Learn why aromatic compounds separate and change during processing.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/learn/different-extracts-need-different-heat",
      label: "See how extract type changes temperature decisions",
      description: "Continue with Presidential's practical comparison of extract heat behavior.",
    },
  },
  {
    path: "/science/live-resin",
    kind: "article",
    silo: "science",
    h1: "Live Resin",
    title: "What Is Live Resin — Fresh-Frozen Extraction",
    description:
      "How fresh-frozen cannabis, a controlled cold chain, hydrocarbon extraction, and vacuum purging produce live resin.",
    wordTarget: [700, 900],
    intro: [
      "Live resin is a cannabis extract made from material that is flash-frozen at harvest instead of being dried and cured first. It is processed cold in a closed-loop hydrocarbon system and then vacuum-purged, with the method designed to retain more of the volatile aromatic profile present near harvest.",
      "The word live refers to the condition of the starting material, not to a living finished product. The extract is defined by fresh-frozen feedstock and temperature-controlled processing; potency, color, or texture alone cannot establish that identity.",
    ],
    sections: [
      {
        id: "the-fresh-frozen-start",
        heading: "The fresh-frozen starting point",
        paragraphs: [
          "Conventional cured resin begins with flower that has spent days or weeks drying and curing. Live-resin production interrupts that sequence. The harvested material is frozen within hours, commonly around −40°F, so water remains locked in the plant and the volatile fraction has less time to evaporate during postharvest handling.",
          "Freezing is preservation, not purification. The plant still contains cannabinoids, terpenes, water, lipids, pigments, and structural material. The cold chain simply holds that chemical snapshot until extraction. If the material warms significantly before or during processing, some of the volatile-preservation advantage can be lost before the extractor performs the separation.",
        ],
      },
      {
        id: "the-cold-chain",
        heading: "Why the cold chain continues",
        paragraphs: [
          "Low temperature matters after the freezer as well as before it. Frozen biomass, extraction solvent, collection equipment, and transfer steps are managed as one chain because terpenes begin evaporating below their published boiling points. A boiling point marks rapid phase change at a stated pressure; it is not a threshold below which evaporation stops.",
          "Experimental postharvest research confirms that drying conditions change cannabis volatile profiles and that controlled methods can preserve different groups of terpenes differently. Live-resin processing takes a more direct route by omitting the ordinary dry-and-cure interval altogether. That choice is why source handling is central to the category name.",
        ],
      },
      {
        id: "closed-loop-extraction",
        heading: "Closed-loop extraction and recovery",
        paragraphs: [
          "The frozen plant material enters a sealed extraction column. A chilled hydrocarbon solvent passes through it and dissolves selected resin compounds while most solid plant structure stays in the column. The loaded solvent then moves through a closed system to a collection vessel, where recovery equipment separates and recaptures the solvent from the extract.",
          "A closed loop describes contained solvent movement and recovery. It does not mean the finished resin skips testing or finishing. Producers still control time, temperature, pressure, and material handling, and those choices change which compounds transfer from the plant and how much unwanted material follows them.",
        ],
      },
      {
        id: "vacuum-purging",
        heading: "What vacuum purging does",
        paragraphs: [
          "After recovery, the concentrated resin is vacuum-purged. Reduced pressure helps remaining solvent leave the viscous material without relying on the same heat that would be needed at atmospheric pressure. The aim is to remove process solvent while limiting unnecessary loss or alteration of the aromatic fraction.",
          "Finishing conditions can produce different consistencies, so live resin may not share one universal texture. Visual cues can describe the sample, but they do not verify fresh-frozen input, closed-loop processing, or residual-solvent results. Those points belong in production records and batch-specific analytical documentation.",
        ],
      },
      {
        id: "potency-and-aromatic-fidelity",
        heading: "Potency versus aromatic fidelity",
        paragraphs: [
          "Typical cured-resin THC values fall around 70–90%, while live resin commonly falls around 65–85%. Those overlapping ranges show why live does not automatically mean stronger. Drying and curing can advance conversion from THCa toward THC, whereas rapid freezing is chosen mainly to retain volatile compounds that ordinary postharvest time can reduce.",
          "The cleanest way to recognize live resin is to read beyond the front label. Look for fresh-frozen source language, an identified extract type, a batch number, and a corresponding laboratory report. A terpene-rich aroma or pale color may be consistent with the process, but neither is proof by itself. The category is a production history expressed in the material, not a color grade.",
        ],
      },
      {
        id: "live-and-cured-are-process-choices",
        heading: "Live and cured describe different process choices",
        paragraphs: [
          "The same cultivar can present a different measured volatile profile after fresh freezing than after drying and curing because postharvest time changes the material before extraction begins. Research on cannabis drying has found that preservation varies by drying method and by cultivar, while the supplied project record notes that terpene loss across drying, curing, and storage can reach half of the starting total. That figure is a possible loss, not a fixed rule for every batch.",
          "Cured resin and live resin are therefore parallel categories rather than a ladder. One begins after a managed dry-and-cure stage; the other begins with a frozen harvest. Laboratory percentages and aroma profiles can compare the outputs, but neither category name guarantees a specific number without batch evidence.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/science",
        label: "Return to the science library",
        description: "Navigate all nine chemistry and extraction guides.",
      },
      {
        href: "/science/live-rosin",
        label: "Contrast live resin and live rosin",
        description: "Compare hydrocarbon extraction with a solventless wash-and-press route.",
      },
      {
        href: "/science/reading-a-lab-report",
        label: "Read the matching lab report",
        description: "Learn which batch details and analytical panels support label interpretation.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/learn/what-is-live-resin",
      label: "Read Presidential's live resin overview",
      description: "See the official brand's companion guide to the fresh-frozen extract.",
    },
  },
  {
    path: "/science/live-rosin",
    kind: "article",
    silo: "science",
    h1: "Live Rosin",
    title: "What Is Live Rosin — Solventless Extraction",
    description:
      "How ice-water washing, micron separation, freeze-drying, and controlled pressing turn fresh-frozen cannabis into live rosin.",
    wordTarget: [700, 900],
    intro: [
      "Live rosin is a solventless concentrate made by washing fresh-frozen cannabis in ice water, collecting separated trichome heads, freeze-drying the hash, and pressing it with heat and pressure. No hydrocarbon solvent performs the separation; water, screens, mechanical movement, temperature control, and the press do the work.",
      "Its selectivity also explains its cost. Only a fraction of the starting plant becomes pressable hash, each separation step leaves material behind, and cold storage, freeze-drying, careful fraction handling, and pressing all add time and equipment before the finished rosin exists.",
    ],
    sections: [
      {
        id: "washing-fresh-frozen-material",
        heading: "The ice-water wash",
        paragraphs: [
          "Fresh-frozen cannabis goes into very cold water, where gentle mechanical movement separates brittle glandular trichome heads from the plant surface. The water is a transport medium: it carries detached resin glands through a sequence of filter bags while larger plant pieces remain above. Calling the method solventless distinguishes it from chemical-solvent extraction, even though water is plainly part of the physical process.",
          "Cold control matters because the goal is to keep the resin heads firm and the plant material less likely to break into small contaminants. The wash is therefore a separation problem, not a cooking step. Aggressive movement may release more material, but it can also send more non-resin particles toward the collection screens.",
        ],
      },
      {
        id: "reading-the-micron-stack",
        heading: "What the micron stack separates",
        paragraphs: [
          "A common wash-bag sequence uses 220, 160, 120, 90, 73, 45, and 25 micron screens. Micron numbers describe opening size, not an automatic quality score. Cannabis trichome heads commonly span about 25–160 microns, so different screens capture different size bands as the wash water moves through the stack.",
          "The 220 and 160 micron bags catch larger plant material and oversized particles. The 120, 90, 73, 45, and 25 micron bags divide the resin-rich material into narrower fractions, with 90, 73, and 45 micron collections often combined for a premium blend. Cultivar, maturity, wash conditions, and the actual cleanliness of a fraction still matter; a number printed on a bag cannot replace inspection.",
        ],
      },
      {
        id: "freeze-drying-the-hash",
        heading: "Why the hash is freeze-dried",
        paragraphs: [
          "Collected hash leaves the wash saturated with water. It must be dried before pressing, but ordinary warm-air drying creates more opportunity for oxidation, aroma loss, and uneven moisture removal. A freeze dryer removes water under reduced pressure while keeping the material cold, typically completing this stage in about 18–24 hours.",
          "Drying is a production gate because trapped water can change texture and storage stability. The dried hash should remain separated into workable particles rather than a wet mass. Only after this stage can a producer load a press bag evenly and apply controlled pressure across the material.",
        ],
      },
      {
        id: "pressing-live-hash",
        heading: "Pressure, bags, and temperature",
        paragraphs: [
          "A 25 micron press bag is a common standard for hash rosin, while 15–20 micron bags can create a tighter barrier when a producer prioritizes a cleaner result. The bag retains solid hash material as heated plates and pressure express resin through the mesh. Loading, pressure ramp, plate alignment, and temperature all influence output, so the temperature number never works alone.",
          "Hash rosin is commonly pressed around 160–190°F. A colder range of roughly 130–170°F tends toward a lighter, buttery consistency and lower flow. Temperatures above 200°F can sacrifice volatile terpenes; a 200–220°F press generally increases flow and yield while producing darker rosin. These are process trade-offs rather than universal quality grades.",
        ],
      },
      {
        id: "why-yield-drives-cost",
        heading: "Why live rosin carries higher production costs",
        paragraphs: [
          "The economics begin with fresh-frozen biomass, which requires freezer capacity and contains substantial water weight. Washing selects only detached trichome fractions, fine screens discard or separate more of the mass, freeze-drying adds a dedicated equipment cycle, and the press leaves additional solids in the bag. The saleable concentrate is therefore a selective output from a much larger input.",
          "A label reading live rosin should indicate both parts of the identity: fresh-frozen starting material and a solventless hash-rosin process. Rosin pressed directly from dried flower is still rosin, but it is not the same production path. Color and softness vary with source material and press choices, so documented process language is more reliable than appearance alone.",
          "Solventless also does not mean unprocessed or self-verifying. The material has passed through water, screens, drying, heat, pressure, and handling surfaces. A batch-matched report remains the appropriate place to check measured cannabinoids and any required contaminant panels, while production records establish the fresh-frozen and wash-and-press history.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/science",
        label: "Browse the science hub",
        description: "Return to the full set of cannabis chemistry guides.",
      },
      {
        href: "/science/live-resin",
        label: "See the hydrocarbon alternative",
        description: "Compare the solventless process with cold closed-loop extraction.",
      },
      {
        href: "/science/terpenes",
        label: "Study aromatic compound temperatures",
        description: "Connect press-temperature choices with terpene volatility.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/learn/what-is-live-rosin",
      label: "Continue with the official live rosin guide",
      description: "Read Presidential's companion explanation of solventless extraction.",
    },
  },
  {
    path: "/science/liquid-diamonds",
    kind: "article",
    silo: "science",
    h1: "Liquid Diamonds",
    title: "What Are Liquid Diamonds",
    description:
      "How THCa crystallization creates diamonds, how terpene sauce is recombined, and why the resulting oil suits cartridges.",
    wordTarget: [700, 900],
    intro: [
      "Liquid diamonds are a high-cannabinoid cannabis oil made by forming THCa crystals in a terpene-rich extract, separating the crystals from the surrounding sauce, then breaking them down and recombining the two fractions at a controlled ratio. Finished formulations commonly exceed 90% total cannabinoid, although methods and exact compositions vary meaningfully by producer.",
      "The name describes a process relationship, not literal diamonds suspended in a cartridge. The crystalline fraction supplies concentrated THCa-derived material, while the sauce returns volatile and fluid components needed to make a uniform, workable oil.",
    ],
    sections: [
      {
        id: "starting-with-a-rich-extract",
        heading: "The extract before crystals form",
        paragraphs: [
          "Production begins with a cannabinoid- and terpene-rich extract. Instead of purging away the entire volatile fraction, the producer uses a light purge that leaves enough of that liquid environment for controlled separation. The concentrated extract then rests in a sealed vessel for weeks under managed conditions.",
          "During that hold, the mixture does not become uniformly more solid. THCa molecules organize into crystals while a mobile, aromatic fraction remains around them. The industry calls this stage diamond mining. Time, concentration, pressure, temperature, and the makeup of the starting extract can alter the separation, which is one reason two products carrying the same category name may not share the same formula.",
        ],
      },
      {
        id: "why-crystallization-purifies",
        heading: "Why the crystal can become so pure",
        paragraphs: [
          "A growing crystal lattice is selective. Its repeating structure readily accepts THCa molecules that fit the lattice, while solvents, lipids, terpenes, and other cannabinoids remain largely excluded in the surrounding liquid. Crystallization therefore performs a purification step through molecular organization rather than through a filter that sorts visible particles.",
          "That selectivity is why THCa diamonds can reach 99% purity and above. The number applies to the crystal fraction, not automatically to the recombined liquid or to converted THC after heating. THCa has a molecular weight of 358.47 g/mol; THC is 314.46 g/mol. The ratio, 0.877, accounts for mass lost when decarboxylation releases carbon dioxide, so 99% THCa has a theoretical maximum near 87% THC after complete conversion.",
        ],
      },
      {
        id: "crystals-and-sauce",
        heading: "Separating diamonds from sauce",
        paragraphs: [
          "Once crystallization has progressed, the solid THCa and liquid sauce can be handled as distinct fractions. The sauce contains much of the volatile material that the crystal lattice rejected, along with cannabinoids that remained dissolved. Neither fraction alone describes the planned liquid-diamond formulation: the identity comes from their controlled recombination.",
          "This separation gives the producer two composition controls. Crystal purity can be evaluated on its own, and the liquid fraction can be assessed for aroma, cannabinoid content, and physical behavior. Batch records and analytical testing matter because a clear crystal and fragrant sauce do not reveal residual solvent, exact ratios, or the complete measured profile by sight.",
        ],
      },
      {
        id: "recombining-the-fractions",
        heading: "How diamonds become liquid",
        paragraphs: [
          "For a liquid-diamond oil, the crystals are reduced and incorporated back into sauce at a selected ratio. Controlled heat and mixing create a continuous liquid phase rather than leaving large solid crystals in the blend. The formulation target is a cannabinoid-rich oil with enough of the sauce fraction to carry aroma and maintain workable flow.",
          "The ratio is not fixed across the industry. A formula with more crystal-derived material and one with more terpene-rich sauce can both use the liquid-diamonds name while differing in total cannabinoid percentage, aroma intensity, and viscosity. That variability makes the batch label and certificate of analysis more informative than the category name by itself.",
        ],
      },
      {
        id: "why-the-format-fits-cartridges",
        heading: "Why liquid diamonds suit cartridges",
        paragraphs: [
          "Cartridge hardware needs oil that can move toward a heating element while remaining uniform enough that one portion of the reservoir does not contain a very different mixture from another. Recombining the reduced crystal fraction with sauce lets a producer adjust composition and flow before filling. Large intact crystals would not serve that hardware function, which is why the diamond fraction is converted into the liquid formulation.",
          "To recognize the category, look for an ingredient or extract description that identifies liquid diamonds, a reported total-cannabinoid value, and a batch-matched laboratory report. Values above 90% total cannabinoid are common for the format, but the number does not establish the crystallization method on its own. Production documentation connects the laboratory percentage to the claimed process.",
          "A laboratory total also describes the submitted finished sample, not the purity of every intermediate fraction. The separated crystal may test near pure while the recombined oil measures differently because sauce has returned to the formula. Keeping those two measurements distinct prevents a crystal-purity figure from being misapplied to the complete cartridge oil.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/science",
        label: "View every science topic",
        description: "Return to the chemistry and extraction overview.",
      },
      {
        href: "/science/thca-vs-thc",
        label: "Calculate THCa conversion",
        description: "Work through the 0.877 factor used for acidic cannabinoid labels.",
      },
      {
        href: "/science/reading-a-lab-report",
        label: "Check cannabinoid totals on a COA",
        description: "Learn how a batch report separates THCa, THC, and calculated totals.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/learn/what-are-liquid-diamonds",
      label: "Read the official liquid diamonds explainer",
      description: "Continue with Presidential's companion guide to the extract format.",
    },
  },
];
