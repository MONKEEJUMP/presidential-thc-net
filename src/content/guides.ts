import type { PageContent } from "./types";

export const guidesHub: PageContent = {
  path: "/guides",
  kind: "hub",
  silo: "guides",
  h1: "Infused Cannabis Guides",
  title: "Practical Guides to Infused Cannabis | Presidential THC",
  description:
    "Practical Presidential THC guides to handling, storing, heating, and evaluating infused cannabis formats through labels, construction, and careful routines.",
  wordTarget: [400, 600],
  intro: [
    "Infused cannabis needs a different approach from ordinary flower because concentrate changes its density, texture, potency, and burn. These five guides explain the practical fundamentals: how to handle moon rocks, protect infused products in storage, choose a temperature, inspect quality, and begin with the format responsibly.",
    "Start with the question in front of you, then use the connected guides to build a complete routine. The chemistry and advice stay focused on construction, labels, storage, equipment, and observable product behavior. It does not predict personal effects or replace the information printed on a product package.",
  ],
  sections: [
    {
      id: "smoking-moon-rocks",
      heading: "Handle Moon Rocks Before You Light Them",
      paragraphs: [
        "Moon rocks combine flower, concentrate, and kief, so a grinder is the wrong preparation tool. The guide explains how to separate a small piece by hand or with scissors, place it where air can still move, and use a slow flame without stripping away the outer kief layer.",
        "It also compares glass with paper and shows why surrounding a moon-rock piece with ground flower can produce a more even burn. Expect a dense infused piece to need patience and an occasional relight.",
      ],
    },
    {
      id: "storing-infused-cannabis",
      heading: "Protect the Product From Heat, Light, and Time",
      paragraphs: [
        "Storage begins with three pressures: heat, light, and time. Terpenes are volatile, and the supplied research notes that heat and light take them first, so cool, dark storage and a securely closing container are the basic priorities.",
        "The storage guide covers container fit, separation between formats, handling practices, and visible changes worth noticing. It also offers a simple routine for opening, inspecting, and returning the product to storage promptly.",
      ],
    },
    {
      id: "temperature-control",
      heading: "Use Temperature as a Control, Not a Contest",
      paragraphs: [
        "A boiling point is not an on-off switch. Compounds can evaporate below their listed boiling points over time, which means a device setting should be treated as one part of a heat-and-time system rather than a promise of exact internal temperature.",
        "The temperature guide organizes the supplied reference points for caryophyllene, pinene, THC, myrcene, limonene, linalool, and CBD. It then explains the practical start-low, adjust-gradually method for rosin, resin, and diamond-based extracts.",
      ],
    },
    {
      id: "quality-signals",
      heading: "Judge What You Can Actually Observe",
      paragraphs: [
        "Quality inspection is strongest when it uses visible and checkable signals. Appearance, aroma, kief coverage, construction, package information, and burn consistency can be described without guessing how a product will affect a particular person.",
        "The quality guide turns those signals into a repeatable inspection sequence. It also separates an unusual but explainable feature from a real mismatch between the package description, the stated format, and the product inside.",
      ],
    },
    {
      id: "beginner-path",
      heading: "Begin With the Format and the Label",
      paragraphs: [
        "The beginner's guide defines infusion in plain language and compares moon rocks, infused pre-rolls, tobacco-free blunts, minis, and cartridges. It explains why THC percentages from different materials and finished formats need batch-specific context.",
        "From there, it builds a simple path: read the package, understand the construction, start with a small amount, and learn the handling method before changing variables. Four sideways links lead to every other practical guide in this silo.",
      ],
    },
  ],
  childLinks: [
    {
      href: "/guides/how-to-smoke-moon-rocks",
      label: "Learn how to prepare and smoke moon rocks",
      description: "A grinder-free method for separating, layering, lighting, and relighting the three-layer format.",
    },
    {
      href: "/guides/how-to-store-infused-cannabis",
      label: "Build a storage routine for infused cannabis",
      description: "Container, temperature, light, handling, and inspection guidance for infused formats.",
    },
    {
      href: "/guides/temperature-guide",
      label: "Use the cannabis extract temperature guide",
      description: "Reference points and a gradual method for working with rosin, resin, and diamonds.",
    },
    {
      href: "/guides/what-to-look-for",
      label: "Inspect infused cannabis quality",
      description: "A practical review of appearance, aroma, coating, packaging, and burn behavior.",
    },
    {
      href: "/guides/beginners-guide",
      label: "Start with the beginner's guide",
      description: "A plain-language introduction to infusion, formats, potency context, and next steps.",
    },
  ],
  relatedLinks: [
    {
      href: "/",
      label: "Explore the Presidential THC reference pillar",
      description: "See how the science, infusion process, formats, and practical guides fit together.",
    },
  ],
  contextualLinks: [
    {
      href: "/infusion",
      anchor: "infused",
      paragraphIndex: 0,
    },
    {
      href: "/formats",
      anchor: "blunts",
      sectionId: "beginner-path",
      paragraphIndex: 0,
    },
    {
      href: "/",
      anchor: "THC",
      sectionId: "beginner-path",
      paragraphIndex: 0,
    },
    {
      href: "/about",
      anchor: "chemistry",
      paragraphIndex: 1,
    },
    {
      href: "/science",
      anchor: "cannabis",
      paragraphIndex: 0,
    },
  ],
};

export const howToSmokeMoonRocks: PageContent = {
  path: "/guides/how-to-smoke-moon-rocks",
  kind: "article",
  silo: "guides",
  h1: "How to Smoke Moon Rocks",
  title: "How to Smoke Moon Rocks Properly | Presidential THC",
  description:
    "Learn how to prepare, layer, light, and relight Moon Rocks without a grinder while preserving airflow, concentrate, and the outer kief coating.",
  wordTarget: [700, 900],
  intro: [
    "Do not put a moon rock in a grinder. Break off a piece about the size of a pencil eraser by hand or with scissors, place it in a bowl with room for airflow, and light it slowly; for a steadier burn, layer the piece between ground flower. Glass is easier to manage than paper, and a relight is normal because the concentrate-rich piece is dense.",
    "That method follows the format's construction. A moon rock has flower at its center, a concentrate layer around it, and kief on the outside. Preparation should keep those layers together while exposing enough surface for heat and air to move through the piece.",
  ],
  sections: [
    {
      id: "skip-the-grinder",
      heading: "Why the Grinder Stays on the Shelf",
      paragraphs: [
        "A grinder is designed to reduce dry flower into loose, fairly uniform pieces. A moon rock behaves differently: its concentrate coating can gum the teeth while the mechanical action strips kief from the surface. The result is harder to remove from the grinder and no longer preserves the intended three-layer construction.",
        "Use clean fingers for a piece that separates without much pressure. If the coating pulls or the center resists, small scissors offer more control. Work over a clean tray or the bowl itself so loose kief remains with the material instead of being left on a table.",
      ],
    },
    {
      id: "start-with-a-small-piece",
      heading: "Separate One Small Piece",
      paragraphs: [
        "The supplied handling guidance starts with a piece around the size of a pencil eraser. That is a preparation reference, not a universal serving promise. Infused cannabis can vary by flower, concentrate, kief, batch, and how evenly those layers are distributed, so the package remains the source for the specific product.",
        "Keep the separated piece compact enough to preserve its layers but open enough at the edges to catch heat. Avoid compressing it into a hard plug. If additional material is used, add it in separate steps rather than turning the bowl into one dense mass with no air path.",
      ],
    },
    {
      id: "choose-glass",
      heading: "Use Glass for Easier Control",
      paragraphs: [
        "A bowl makes the moon rock visible while it is being prepared and lit. It also keeps the dense piece supported when the concentrate softens. Paper can work, but the material is sticky, heavy, and less uniform than ground flower, which makes distribution and airflow harder to control inside a roll.",
        "For a paper format, use the layering method: spread ground flower, place small moon-rock pieces along the center, then cover them with another light layer of flower. The surrounding flower helps carry the burn rather than asking one concentrate-rich line to stay lit by itself.",
      ],
    },
    {
      id: "leave-airflow",
      heading: "Build an Air Path",
      paragraphs: [
        "Airflow matters because the concentrate changes the density of the material. In a bowl, do not pack the opening so tightly that air cannot pass around the infused piece. A loose bed of ground flower below and a light cover above can support the piece while leaving small channels for air.",
        "The same principle applies in paper. Large, uneven chunks create dense spots that heat and burn at different rates from the surrounding flower. Smaller separated pieces, distributed along the roll, reduce that contrast without grinding away the kief coat.",
      ],
    },
    {
      id: "light-slowly",
      heading: "Bring the Flame in Slowly",
      paragraphs: [
        "Use a patient flame and aim for an even start rather than holding intense heat on one point. The outer kief catches first, while the concentrate beneath it warms and the flower core begins to burn. Moving too quickly can light the surface without establishing the center.",
        "A moon rock may go out and need to be lit again. That does not automatically identify a defect; the format is denser than loose flower and its three materials do not burn at identical rates. Relight the unburned edge and keep the air path open instead of repeatedly heating one charred spot.",
      ],
    },
    {
      id: "finish-and-store",
      heading: "Keep the Remaining Material Clean",
      paragraphs: [
        "Handle only the amount being prepared. Return the rest to cool, dark storage promptly because heat and light take the volatile terpenes first. Keep stray ash, used tools, and loose debris away from the stored product, and close its container securely after each use.",
        "The whole method can be remembered in six moves: skip the grinder, separate a small piece, choose a controllable setup, layer when useful, leave airflow, and light slowly. Those steps respect the moon rock's construction instead of trying to make it behave exactly like ordinary ground flower.",
        "If the first light is uneven, pause and look at the material before changing the setup. A blocked air path, one oversized piece, or a surface-only light each calls for a different correction. Observation keeps a routine adjustment from becoming repeated heat applied without a clear purpose.",
      ],
    },
  ],
  relatedLinks: [
    {
      href: "/guides",
      label: "Return to the practical guides hub",
    },
    {
      href: "/guides/how-to-store-infused-cannabis",
      label: "Protect the moon rocks between sessions",
    },
    {
      href: "/guides/what-to-look-for",
      label: "Check construction and burn quality",
    },
    {
      href: "/guides/beginners-guide",
      label: "Review the infused cannabis basics",
    },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com/find-us",
    label: "find licensed retailers carrying Presidential formats",
    description: "Use the official locator when local product availability is the next practical question.",
  },
};

export const howToStoreInfusedCannabis: PageContent = {
  path: "/guides/how-to-store-infused-cannabis",
  kind: "article",
  silo: "guides",
  h1: "How to Store It",
  title: "How to Store Infused Cannabis | Presidential THC",
  description:
    "Learn how to store infused cannabis in a clean, closed container away from heat and light while limiting handling and monitoring product condition.",
  wordTarget: [700, 900],
  intro: [
    "Store infused cannabis in a clean, securely closed container in a cool, dark place. Heat, light, and time are the three main pressures to control, and terpenes are the first part of the product that heat and light take away. Keep different formats separated, minimize open-container time, and inspect the product before returning it to storage.",
    "Good storage does not freeze a product in its original state forever. It slows avoidable change and keeps the flower, concentrate, kief, or wrap from being exposed to conditions that work against its construction.",
  ],
  sections: [
    {
      id: "three-storage-pressures",
      heading: "Control Heat, Light, and Time",
      paragraphs: [
        "Heat can soften concentrate, alter how a coating sits on flower, and speed the loss of volatile aroma compounds. Light adds another source of exposure, while time allows small changes to accumulate. A consistently cool, dark location addresses the first two and makes the third easier to manage.",
        "Consistency matters more than inventing a complicated ritual. Choose one suitable storage location, return the product there after handling, and avoid places that regularly heat up or sit in direct light. The goal is a stable environment, not frequent movement between extremes.",
      ],
    },
    {
      id: "container-choice",
      heading: "Choose a Container That Fits the Format",
      paragraphs: [
        "A useful container closes securely, stays clean, and gives the product enough room to be removed without scraping away its surface. Moon rocks need space for the kief coat; pre-rolls and minis need support that does not bend the paper; a cartridge should remain protected from debris and impact.",
        "An opaque container adds protection from light. If the container is clear, the storage location itself must provide darkness. Oversized containers leave material moving around, while an overly tight container can press or smear a concentrate coating, so fit is part of the decision.",
      ],
    },
    {
      id: "separate-formats",
      heading: "Keep Formats and Batches Separate",
      paragraphs: [
        "Do not combine unrelated infused products just to save space. Flower coated with concentrate and kief has different handling needs from a wrapped pre-roll, blunt, mini, or sealed cartridge. Separation also keeps each package's identity and handling instructions connected to the correct item.",
        "The same principle helps with batches. If two packages carry different descriptions or numbers, preserve that distinction rather than mixing their contents. A later inspection is more useful when the product can still be matched to the information it arrived with.",
      ],
    },
    {
      id: "clean-handling",
      heading: "Reduce Handling and Open Time",
      paragraphs: [
        "Plan the handling step before opening the container. Set out the clean tool or surface, remove only what is needed, and close the remaining product again. For moon rocks, use fingers or scissors instead of a grinder so the concentrate does not gum the teeth and the kief stays with the piece.",
        "Repeated touching transfers material away from the product and onto hands or tools. It also gives heat and room light more opportunities to reach the exposed surface. A short, deliberate routine protects both the construction and the cleanliness of the stored portion.",
      ],
    },
    {
      id: "signs-of-change",
      heading: "Notice Changes Without Guessing",
      paragraphs: [
        "Use observable comparisons: is the aroma less distinct than when the package was opened, has the concentrate shifted or softened, has the kief coat rubbed away, or has a paper format bent or loosened? Those details describe product condition without making claims about personal effects.",
        "A single visual change does not explain its own cause. Warm storage, bright exposure, repeated handling, or simply time may contribute. Record what you can see and smell, compare it with the package description, and avoid treating an uncertain change as proof of one specific problem.",
      ],
    },
    {
      id: "simple-routine",
      heading: "Use a Repeatable Storage Routine",
      paragraphs: [
        "A reliable routine is short: verify the label, keep the product in a fitting container, store it cool and dark, open it only when needed, use clean handling, inspect it, and close it again. That sequence works across infused flower and wrapped formats while respecting their physical differences.",
        "Keep the original package information with the product and follow any instructions printed there. General storage principles provide a baseline, but the specific format, container, and batch information remain relevant. When availability or replacement is the question, use the brand's official licensed-retailer path rather than treating this reference site as a store.",
        "Review the location whenever the season or room conditions change. A place that stays cool and dark at one time may receive direct light or more heat at another. Moving the closed container to a more stable spot is a storage correction; repeatedly opening it to check conditions is not.",
        "The container also needs to remain identifiable. Preserve the printed package or keep it directly with the inner container, especially when more than one infused format is stored. That small organizational step protects the connection among the material, its description, its batch, and its directions.",
      ],
    },
  ],
  relatedLinks: [
    {
      href: "/guides",
      label: "Browse every infused cannabis guide",
    },
    {
      href: "/guides/how-to-smoke-moon-rocks",
      label: "Prepare stored moon rocks without grinding",
    },
    {
      href: "/guides/what-to-look-for",
      label: "Use observable quality checks",
    },
    {
      href: "/guides/beginners-guide",
      label: "Follow the beginner handling path",
    },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com/find-us",
    label: "check licensed retail availability for Presidential products",
    description: "The official locator is the appropriate destination for current retailer availability.",
  },
};

export const temperatureGuide: PageContent = {
  path: "/guides/temperature-guide",
  kind: "article",
  silo: "guides",
  h1: "Temperature Guide",
  title: "Temperature Guide for Cannabis Extracts | Presidential THC",
  description:
    "Compare cannabis extract temperature principles, boiling-point context, device adjustment, and label guidance without treating one setting as universal.",
  wordTarget: [700, 900],
  intro: [
    "Start an adjustable device low and work upward in small steps. Rosin belongs at the lower end of the practical range, resin in the middle, and diamond-based material higher, but a boiling-point chart does not translate directly into a perfect device setting. Heat level, exposure time, hardware, and the extract itself all shape what happens.",
    "A 2022 study supplied for this project found that vaporizers operating well below listed boiling points could still evaporate compounds almost completely over time. Boiling point marks where a compound leaves quickly, not the first temperature at which it can leave.",
  ],
  sections: [
    {
      id: "reference-table",
      heading: "Reference Points for Major Compounds",
      paragraphs: [
        "The table organizes the verified reference values supplied for this site. Aromas identify the familiar scent family associated with each terpene; they are descriptions, not predictions about a person's experience. CBD is shown as a range because the underlying sources do not agree on one value.",
      ],
      table: {
        caption: "Verified boiling-point references for selected cannabis compounds",
        headers: ["Compound", "Reference point", "Descriptive note"],
        rows: [
          ["Caryophyllene", "266°F / 130°C", "Peppery; also present in black pepper and cloves"],
          ["Pinene", "311°F / 156°C", "Pine and rosemary; alpha and beta forms"],
          ["THC", "315°F / 157°C", "Neutral chemical reference"],
          ["Myrcene", "334°F / 167°C", "Musky and earthy; common in cannabis"],
          ["Limonene", "349°F / 176°C", "Bright citrus"],
          ["Linalool", "388°F / 198°C", "Floral and lavender"],
          ["CBD", "320–356°F / 160–180°C", "Range reflects disagreement among sources"],
        ],
      },
    },
    {
      id: "boiling-point-limits",
      heading: "Why Boiling Point Is Not the Whole Story",
      paragraphs: [
        "A boiling point is a laboratory reference for a compound, not a complete model of a cartridge or concentrate chamber. A device displays or implies a heat level, while the material experiences changing temperature across space and time. That difference is why the table should guide comparison instead of being treated as an exact recipe.",
        "Time matters alongside heat. A compound may leave gradually below its boiling point, and a higher setting can make that process happen faster. The sensible use of the table is to understand relative order and volatility while observing the behavior of the actual extract and hardware.",
      ],
    },
    {
      id: "start-low",
      heading: "Start Low and Change One Step at a Time",
      paragraphs: [
        "Beginning low creates a readable baseline. Allow the device to reach its setting, use the same operating method, and observe whether the material moves and vaporizes consistently. If it does not, raise the setting one small step rather than jumping across the control range.",
        "Change only temperature when comparing settings. A different draw length, hardware position, or amount of material makes the comparison harder to interpret. A gradual sequence helps separate a temperature issue from an airflow, contact, or loading issue.",
      ],
    },
    {
      id: "matching-extracts",
      heading: "Match the Starting Range to the Extract",
      paragraphs: [
        "Live rosin is the lower-temperature starting point in this guide. Producers control press conditions to balance consistency, flow, yield and retention of volatile compounds, but exact settings vary with the material and process.",
        "Live resin sits in the middle because its fresh-frozen, low-temperature process is designed to preserve volatile material. Diamond-based extracts start higher in this relative sequence. The order is a practical comparison among these three extract families, not a universal number for every device or formulation.",
      ],
    },
    {
      id: "too-low-too-high",
      heading: "Read Too-Cold and Too-Hot Signals",
      paragraphs: [
        "A too-low setting may leave the material moving slowly or inconsistently over the available time. Before raising it, confirm that the device has reached temperature, that airflow is open, and that the extract is contacting the heated area as intended. Temperature cannot correct a blocked path or poor loading.",
        "At the other extreme, unusually rapid material change, darkening, or a loss of distinct aroma are reasons to step back. These are observable process signals, not medical or effect claims. Reduce the setting, let the system stabilize, and compare one controlled step at a time.",
      ],
    },
    {
      id: "working-method",
      heading: "Keep a Simple Temperature Method",
      paragraphs: [
        "Use the same sequence each time: identify the extract, begin at the lower appropriate part of the device's range, allow time, observe material behavior, and make one small adjustment. Keep the compound table nearby for context, but do not chase a terpene's exact boiling point on the display.",
        "Device scales and production methods vary, especially for liquid diamonds, whose controlled crystal-to-sauce ratio differs by producer. The label and hardware instructions belong in the decision. The useful goal is stable operation with a gradual adjustment path, not the highest number a device can reach.",
      ],
    },
    {
      id: "record-the-comparison",
      heading: "Compare Settings With the Same Reference",
      paragraphs: [
        "A simple written note can keep the comparison honest: identify the extract family, device setting, and observable material behavior. The purpose is not to create a universal chart from one product. It is to avoid forgetting which variable changed and then crediting temperature for a difference caused by hardware, airflow, or loading.",
        "Return to the supplied table as a chemical reference and to the package as the product reference. Together they provide better context than either one alone. The table orders selected compounds; the package identifies the actual extract and formulation being operated in the device.",
      ],
    },
  ],
  relatedLinks: [
    {
      href: "/guides",
      label: "See the complete practical guide collection",
    },
    {
      href: "/guides/what-to-look-for",
      label: "Connect temperature with observable quality",
    },
    {
      href: "/guides/how-to-store-infused-cannabis",
      label: "Limit heat exposure during storage",
    },
    {
      href: "/guides/beginners-guide",
      label: "Put temperature in beginner-friendly context",
    },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com/find-us",
    label: "locate official Presidential products at licensed retailers",
    description: "Use the brand's official retail locator when looking for a labeled format locally.",
  },
};

export const whatToLookFor: PageContent = {
  path: "/guides/what-to-look-for",
  kind: "article",
  silo: "guides",
  h1: "What to Look For",
  title: "How to Judge Infused Cannabis Quality | Presidential THC",
  description:
    "A practical framework for judging infused cannabis by construction, aroma, coating, labels, packaging, and burn behavior.",
  wordTarget: [700, 900],
  intro: [
    "Judge infused cannabis with evidence you can inspect: the format should match its description, the construction should look intentional, the aroma should remain distinct, the package should identify what is inside, and the material should burn or operate consistently for that format. No single visual detail proves quality by itself, so compare several signals before reaching a conclusion.",
    "The point is not to reward the flashiest surface. It is to understand whether flower, concentrate, kief, wrap, or cartridge hardware appear to work as one coherent product and whether the package gives enough context to identify it.",
  ],
  sections: [
    {
      id: "identify-format",
      heading: "Start by Identifying the Format",
      paragraphs: [
        "A moon rock should present the three layers named in the format: flower, concentrate, and an outer coat of kief. An infused pre-roll, blunt, or mini places its material inside a wrap. A cartridge combines extract with hardware, so the oil path and the physical condition of the cartridge are part of the inspection.",
        "Do not apply the same surface test to every product. A visible kief coat is relevant to a moon rock but not to a sealed cartridge. Begin with what the format claims to be, then choose observations that make sense for that construction.",
      ],
    },
    {
      id: "appearance-construction",
      heading: "Inspect Appearance and Construction",
      paragraphs: [
        "Look for deliberate distribution rather than one isolated patch doing all the work. On a moon rock, note whether the kief sits across the concentrate-coated flower and whether handling has exposed large bare areas. On a wrapped format, look for a straight, intact body without obvious compression at one point.",
        "Uniform does not mean machine-perfect. Flower has natural variation, kief has texture, and production methods differ. The useful question is whether the visible components support the named format, not whether every edge and granule looks identical.",
      ],
    },
    {
      id: "aroma",
      heading: "Use Aroma as a Condition Check",
      paragraphs: [
        "Terpenes are volatile aroma compounds, and heat and light take them first. A distinct aroma that fits the package description is therefore a useful condition signal. Make the observation promptly rather than leaving the container open under room light for an extended comparison.",
        "Aroma alone cannot establish potency, extract method, or personal effects. It works best beside construction and label information. If the package describes an aromatic profile but the material is indistinct, record the mismatch without inventing a cause that the available evidence cannot prove.",
      ],
    },
    {
      id: "kief-coat",
      heading: "Read the Kief Coat in Context",
      paragraphs: [
        "Kief is collected trichomes, the resin glands that hold most of the plant's cannabinoids and terpenes. On a moon rock, it forms the third layer over concentrate-coated flower. The coat is both a visible signature and a physical surface that can be stripped by rough handling or a grinder.",
        "Look for coverage while allowing for natural texture and movement in the package. Loose kief is not automatically evidence that the whole product is poor, but extensive bare coating can show that the outer layer no longer sits where the three-layer design intends it to be.",
      ],
    },
    {
      id: "read-package",
      heading: "Make the Package Explain the Product",
      paragraphs: [
        "Read the format name, cannabinoid information, batch identifiers, and any storage or hardware instructions shown on the package. The details should describe the same item visible inside. Keep the package with the product so those identifiers are available later instead of relying on memory.",
        "Percentages require context. Flower, concentrate and a finished moon rock are different samples. A moon rock is a weighted blend of its layers, so an ingredient percentage cannot be copied onto the whole piece; use the finished product label and associated batch record.",
      ],
    },
    {
      id: "burn-behavior",
      heading: "Observe Burn or Hardware Behavior",
      paragraphs: [
        "Infused material is denser than ordinary loose flower and may need a slower light or a relight. That expected difference should not be confused with random distribution that repeatedly blocks airflow or leaves one section untouched. For paper formats, note whether the burn moves through the body rather than racing down one side.",
        "For cartridges, inspect consistency through the oil path and use temperature gradually. Hardware, extract viscosity, and heat work together, so one difficult draw does not identify the cause by itself. A useful quality judgment combines appearance, package fit, aroma, and repeatable operation instead of turning one moment into the entire verdict.",
        "Repeat the observation under the same basic setup before comparing products. If packing density, piece size, temperature, or airflow changes at the same time, the result cannot isolate construction quality. A controlled comparison is slower, but it gives each visible signal a clearer meaning.",
      ],
    },
  ],
  relatedLinks: [
    {
      href: "/guides",
      label: "Return to the guide index",
    },
    {
      href: "/guides/how-to-smoke-moon-rocks",
      label: "Compare quality with proper moon-rock handling",
    },
    {
      href: "/guides/temperature-guide",
      label: "Interpret heat-related operating signals",
    },
    {
      href: "/guides/how-to-store-infused-cannabis",
      label: "Preserve the condition you inspected",
    },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com/find-us",
    label: "see where Presidential formats are carried",
    description: "For availability, continue to the official locator for licensed retailers.",
  },
};

export const beginnersGuide: PageContent = {
  path: "/guides/beginners-guide",
  kind: "article",
  silo: "guides",
  h1: "Beginner's Guide",
  title: "Beginner's Guide to Infused Cannabis | Presidential THC",
  description:
    "A plain-language introduction to infused cannabis, major formats, potency context, labels, handling, and next steps.",
  wordTarget: [700, 900],
  intro: [
    "Infused cannabis combines flower or a finished format with cannabis concentrate, which changes the product's construction and can raise its reported potency above ordinary flower. Begin by identifying the format, reading its package, and using the preparation method made for that format. For moon rocks, start with a piece around the size of a pencil eraser, never use a grinder, and expect a slower burn.",
    "This guide explains the basic vocabulary without making promises about effects. Percentages describe tested material, while handling, temperature, storage, and physical construction explain how that material behaves as a product.",
  ],
  sections: [
    {
      id: "what-infused-means",
      heading: "What Infused Means",
      paragraphs: [
        "Infusion brings cannabis concentrate into a flower-based or finished format. In a classic moon rock, the three visible layers are flower, concentrate, and kief. Kief is collected trichomes: the resin glands that hold most of the plant's cannabinoids and terpenes.",
        "The concentrate contributes more than a number on the label. It changes texture, density, airflow, and the way heat moves through the material. That is why infused formats need their own handling instructions instead of being treated as ordinary ground flower with a different name.",
      ],
    },
    {
      id: "major-formats",
      heading: "Know the Major Formats",
      paragraphs: [
        "Moon rocks make their layers visible around a flower center. Infused pre-rolls distribute flower and concentrate inside paper. Tobacco-free blunts use a non-tobacco wrap, while minis bring a similar wrapped construction into a smaller format. Vape cartridges pair an extract with hardware that heats and moves the material through a dedicated path.",
        "Size alone does not define the underlying material. A mini is smaller than a full blunt, and a cartridge uses hardware instead of a flower wrap, but each still needs a label that identifies what was made. Start with the format name and construction before comparing percentages across categories.",
      ],
    },
    {
      id: "potency-context",
      heading: "Put Potency Numbers in Context",
      paragraphs: [
        "Potency belongs to the specific tested material. A concentrate input and a finished moon rock are not interchangeable samples, because the finished product is a weighted blend of flower, concentrate and kief.",
        "Do not compare one layer with a complete format as though they are the same sample. Read the product's own label, keep the batch information with it, and remember that percentages describe composition. They do not explain every detail of construction, distribution, storage history, or hardware.",
      ],
    },
    {
      id: "first-handling-step",
      heading: "Start With a Small, Controllable Step",
      paragraphs: [
        "For moon rocks, separate a piece around the size of a pencil eraser by hand or with scissors. A grinder can gum its teeth with concentrate and strip the kief from the surface. Place the piece where air can pass around it, use a slow flame, and expect that the dense material may need to be lit again.",
        "Glass makes the piece easier to see and support. If paper is used, place small moon-rock pieces between layers of ground flower to help carry a more even burn. Whatever the format, change one preparation variable at a time so the result remains understandable.",
      ],
    },
    {
      id: "labels-storage-temperature",
      heading: "Use the Label, Storage, and Temperature Together",
      paragraphs: [
        "Keep the package with the product and read its format, cannabinoid information, batch identifiers, and printed handling directions. Store the product securely closed in a cool, dark place. Heat and light take volatile terpenes first, while unnecessary handling can move kief or concentrate away from the intended construction.",
        "For adjustable hardware, start low and work upward gradually. Rosin begins lower, resin in the middle, and diamonds higher in the relative sequence supplied for this guide set. Boiling points are reference values, not direct device recipes, because compounds can evaporate below those points over time.",
      ],
    },
    {
      id: "where-to-go-next",
      heading: "Follow the Guide That Matches the Next Question",
      paragraphs: [
        "If the immediate task is preparation, continue to the moon-rock smoking guide. If the product will be kept for later, use the storage routine. The temperature guide explains compound reference points and gradual adjustment, while the quality guide organizes appearance, aroma, package, coating, and burn observations.",
        "Those four paths cover the practical loop: identify, prepare, control, inspect, and store. This site remains a reference publication rather than a shop. When the next question is where Presidential products are available, the official brand locator points to licensed retailers and keeps availability separate from educational guidance.",
        "Move through the guides in the order the product requires, not as a checklist that must be completed every time. A stored moon rock may need handling guidance next; a cartridge may send the reader directly to temperature and quality checks. The format decides the useful path.",
      ],
    },
  ],
  relatedLinks: [
    {
      href: "/guides/how-to-smoke-moon-rocks",
      label: "Use the complete moon-rock preparation method",
    },
    {
      href: "/guides/how-to-store-infused-cannabis",
      label: "Set up cool, dark infused-cannabis storage",
    },
    {
      href: "/guides/temperature-guide",
      label: "Understand extract temperature reference points",
    },
    {
      href: "/guides/what-to-look-for",
      label: "Build a practical quality inspection",
    },
  ],
  externalLink: {
    href: "https://presidentialmoonrocks.com/find-us",
    label: "explore licensed retailers for Presidential products",
    description: "Use the official locator after the format and handling questions are understood.",
  },
};

export const guidesPages: PageContent[] = [
  guidesHub,
  howToSmokeMoonRocks,
  howToStoreInfusedCannabis,
  temperatureGuide,
  whatToLookFor,
  beginnersGuide,
];

export default guidesPages;
