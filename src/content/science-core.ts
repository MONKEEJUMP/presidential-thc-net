import type { PageContent } from "./types";

export const scienceCorePages: PageContent[] = [
  {
    path: "/science/thca-vs-thc",
    kind: "article",
    silo: "science",
    h1: "THCa vs THC",
    title: "THCa vs THC — What the Label Actually Means",
    description:
      "Understand the chemical relationship between THCa and THC, the 0.877 conversion factor, and the correct way to calculate Total THC.",
    wordTarget: [1100, 1250],
    intro: [
      "THCa is the acidic precursor found in the living cannabis plant, while THC is the corresponding form produced when heat drives decarboxylation. A percentage of THCa is not interchangeable with the same percentage of THC: the label calculation must account for the mass lost during conversion, which is why Total THC uses a factor of 0.877.",
      "That distinction explains why a concentrate reported as 99% THCa cannot become 99% THC. Its theoretical ceiling after complete conversion is about 87% THC before any practical losses are considered. The same arithmetic applies whether the product is flower, an infused format, or a high-purity isolate—the molecule names stay separate, and the mass factor still belongs between them.",
      "This page is for adults twenty-one and older who want label-education chemistry, not medical advice, dosing guidance, or claims about personal outcomes. Keep the package face and the matched laboratory report side by side. The useful skill is reading which analyte was measured, which value was calculated, and what the 0.877 factor is doing when those numbers are combined.",
    ],
    sections: [
      {
        id: "one-molecule-two-forms",
        heading: "One cannabinoid in two chemical forms",
        paragraphs: [
          "The lowercase “a” in THCa stands for acid. In the plant, the molecule carries a carboxyl group that THC does not. Applying heat can remove that group as carbon dioxide, leaving the lower-mass THC molecule behind. The names look nearly identical on a package, but the distinction is chemically meaningful and changes the arithmetic used to describe potency.",
          "A cannabinoid panel therefore keeps THCa and THC in separate rows. The THCa value reports how much precursor was measured in the sample, while the THC value reports how much THC was already present when the laboratory analyzed it. Neither row should be silently substituted for the other. Total THC is the calculated bridge between them.",
          "Raw flower and many unfinished concentrates are often THCa-dominant on the panel because decarboxylation has not yet been driven to completion. Finished extracts and heated materials can show more THC already present. Those patterns describe heating and process history; they do not erase the need to convert residual THCa before comparing totals across products.",
        ],
      },
      {
        id: "why-0877",
        heading: "Why the conversion factor is 0.877",
        paragraphs: [
          "THCa has a molecular weight of 358.47 grams per mole. THC has a molecular weight of 314.46 grams per mole. Dividing the second number by the first gives approximately 0.877. In plain language, the THC portion retained after the carboxyl group leaves represents 87.7% of the starting THCa mass.",
          "The factor is a mass adjustment, not a prediction that a heating method will convert exactly 87.7% of every sample. It describes the theoretical relationship between the two molecules. Real handling introduces variables, while the label formula assumes conversion for the purpose of putting THCa and existing THC on one comparable line.",
          "Keep the verbs separate. Decarboxylation is the reaction that removes the carboxyl group. The 0.877 factor is the mass correction applied when that reaction is assumed for labeling. Evaporation, airflow, and device settings describe how heat is delivered; they are related practical topics, but they are not substitutes for the molecular-weight math on the report.",
        ],
      },
      {
        id: "total-thc-formula",
        heading: "The Total THC formula, worked through",
        paragraphs: [
          "The standard calculation is Total THC = (THCa × 0.877) + THC. Multiply the reported THCa percentage by 0.877, then add the THC that the laboratory measured directly. Keep every input in the same unit: percentages with percentages, or milligrams with milligrams.",
          "Consider a sample reported at 82% THCa and 3% THC. The converted THCa contribution is 71.914% because 82 × 0.877 = 71.914. Add the existing 3% THC and the calculated Total THC is 74.914%, commonly rounded to 74.9%. The calculation does not add THCa and THC as though their molecular masses were equal.",
          "If a package prints only Total THC, the printed figure still rests on that same conversion logic even when the THCa and THC rows are not shown on the face. Reconstructing the arithmetic requires the component values from the matched Certificate of Analysis. When those rows are available, check that the printed total agrees with the formula before treating the headline number as a free-standing fact.",
        ],
        table: {
          caption: "Worked Total THC calculation for an 82% THCa sample",
          headers: ["Step", "Calculation", "Result"],
          rows: [
            ["Convert THCa", "82 × 0.877", "71.914%"],
            ["Add measured THC", "71.914 + 3", "74.914%"],
            ["Round for reading", "74.914 → 74.9", "74.9% Total THC"],
          ],
        },
      },
      {
        id: "ninety-nine-percent",
        heading: "Why 99% THCa is not 99% THC",
        paragraphs: [
          "THCa crystals can reach 99% purity and above because a growing crystal lattice accepts THCa molecules while solvents, lipids, and other cannabinoids remain in the surrounding liquid. That is a statement about the composition of the crystal before conversion. It is not a statement that all of that mass remains as THC afterward.",
          "At 99% THCa, the theoretical converted amount is 99 × 0.877, or 86.823% THC. If the report also lists a small amount of THC already present, that amount is added separately. This is why the largest number on a cannabinoid panel may not be the number that best represents the sample after heating.",
          "High THCa purity is therefore useful information about the material as tested, not a promise that the same percentage will appear as THC after heat. Reading the analyte name beside the percentage keeps a purity claim, a converted estimate, and a Total THC line from collapsing into one interchangeable boast.",
        ],
      },
      {
        id: "common-mistakes",
        heading: "Common label-reading mistakes",
        paragraphs: [
          "Adding THCa and THC without the 0.877 factor overstates the converted total because it treats two different molecular masses as equal. The corrected approach converts the precursor first, then adds measured THC. Skipping the factor is the most common arithmetic error when someone tries to rebuild Total THC by hand.",
          "Another frequent mistake is treating the largest face percentage as Total THC without checking the analyte name. A package may highlight THCa, THC, or a calculated total. Typography and placement do not redefine chemistry. Match the printed figure to its label text, then to the corresponding laboratory row.",
          "A third mistake is comparing products with mismatched units or mismatched batches. Percentage totals and milligram amounts cannot be mixed in one equation, and a Certificate of Analysis belongs to a specific production run. Confirm batch identity before using one report to interpret another package.",
        ],
      },
      {
        id: "read-the-label",
        heading: "A reliable label-reading sequence",
        paragraphs: [
          "Start by identifying whether a prominent percentage is labeled THCa, THC, or Total THC. Next, locate the corresponding rows on the cannabinoid panel and check whether the printed total agrees with the formula. Finally, match the report to the product’s batch information so that the calculation belongs to the item being examined, not a different production run.",
          "For amount-based comparisons, use the calculated total rather than treating raw THCa as ready-made THC. Also keep “theoretical” in view: the formula standardizes label interpretation, but it does not certify that every heating device, flame, or sample converts the precursor completely. The result is a disciplined reading of the chemistry, not a guarantee about a particular use condition.",
          "Do not let typography decide which value matters. A package may display one figure prominently while the supporting report shows several related rows. The useful question is not simply “what is the biggest percentage?” but “what exactly was measured, and what was calculated?” Reading the analyte name beside its number prevents a THCa result, a THC result, and a Total THC result from collapsing into the same claim. Once those categories stay separate, products with different ratios can be compared on consistent terms.",
        ],
      },
      {
        id: "read-with-science-silo",
        heading: "Read THCa versus THC with the rest of the science silo",
        paragraphs: [
          "This article separates the two forms and works the Total THC arithmetic. The decarboxylation page explains the heat-driven reaction that removes the carboxyl group and why temperature and time travel together. The laboratory-report guide shows where acidic, neutral, and calculated rows appear on a Certificate of Analysis.",
          "Cannabinoid and terpene pages widen the panel without changing the THCa–THC rule: other analytes stay in their own rows, and boiling-point or volatility references describe evaporation more directly than conversion. Availability and brand-format details remain on the official Presidential Moon Rocks resources linked from this site.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/science/decarboxylation",
        label: "Follow the heat-driven conversion",
        description: "See what changes when THCa loses carbon dioxide.",
      },
      {
        href: "/science/reading-a-lab-report",
        label: "Put the formula to work on a COA",
        description: "Locate THCa, THC, and Total THC in a laboratory report.",
      },
      {
        href: "/science/cannabinoids",
        label: "Map the wider cannabinoid panel",
        description: "Place THC and THCa alongside CBD, CBG, and CBN.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/presidential-thc",
      label: "See Presidential’s THC reference page",
      description: "Continue with the brand’s own overview of Presidential THC.",
    },
  },
  {
    path: "/science/decarboxylation",
    kind: "article",
    silo: "science",
    h1: "Decarboxylation",
    title: "Decarboxylation — How Heat Turns THCa Into THC",
    description:
      "Learn what decarboxylation changes, why temperature and time work together, and how flames and vape coils drive THCa conversion.",
    wordTarget: [1100, 1250],
    intro: [
      "Decarboxylation is the heat-driven reaction that converts THCa into THC by releasing a carboxyl group as carbon dioxide. It changes both the molecule and its mass, so it is the reason a laboratory must adjust THCa by 0.877 when calculating Total THC.",
      "A lighter and a vaporizer coil create very different heating environments, but both can supply the energy that moves this conversion forward. Temperature matters together with exposure time; neither number describes the whole process alone.",
      "This page is for adults twenty-one and older who want educational chemistry framing, not medical advice, dosing guidance, or promises about personal outcomes. Keep the package label and matched laboratory report nearby, and treat Total THC as standardized chemical potential rather than a guarantee that one heating method fully reproduces the calculated total.",
    ],
    sections: [
      {
        id: "the-reaction",
        heading: "What the reaction removes",
        paragraphs: [
          "THCa carries a carboxyl group that distinguishes it from THC. During decarboxylation, that portion departs as carbon dioxide. The remaining molecule has less mass: THCa is 358.47 grams per mole, while THC is 314.46 grams per mole. The molecular ratio, 314.46 divided by 358.47, is approximately 0.877.",
          "That mass change is easy to overlook because the label names differ by a single letter. Yet one gram of pure THCa cannot yield one gram of THC. Even under the formula’s ideal assumption of full conversion, only 87.7% of the starting THCa mass remains as theoretical THC. The lost portion did not vanish from the arithmetic; it left in a different chemical form.",
          "The carboxyl group is also why the names THCa and THC are not interchangeable on a laboratory panel. One analyte still carries that acidic fragment; the other does not. Reporting systems that list both values are describing two related but distinct molecules, and the conversion factor exists precisely because those molecules do not share the same mass.",
        ],
      },
      {
        id: "temperature-and-time",
        heading: "Temperature and time work as a pair",
        paragraphs: [
          "Decarboxylation is not best understood as a single switch temperature. Heat supplies energy, and time determines how long the sample experiences that energy. A shorter, hotter event and a longer, gentler event are different routes through the same general reaction, with different opportunities for conversion across the material.",
          "The important editorial distinction is between starting a reaction and completing it. Reaching a temperature for an instant does not prove that every THCa molecule in a dense or uneven sample has followed the same path. Conversely, lower heat sustained over time can continue changing the precursor. This is why device settings alone cannot be translated into an exact conversion percentage.",
          "Uniform laboratory ovens are still a different heating history from consumer hardware. Controlled samples can be held at a chosen temperature for a defined interval, while flame and coil systems create gradients, brief peaks, and uneven contact. The chemistry is the same class of reaction; the heating profile is not interchangeable, so consumer settings should not be treated as oven recipes.",
        ],
      },
      {
        id: "flame",
        heading: "What a lighter does",
        paragraphs: [
          "A lighter creates an intense, localized heat source. Material directly at the flame encounters a rapid temperature rise, while nearby material warms through the moving hot zone. The result is a gradient rather than a uniform laboratory oven: distance from the flame, density, and airflow all change the time spent under heat.",
          "That unevenness explains why “a flame was present” is not the same statement as “the entire sample converted completely.” The reaction may proceed at different rates from one part of the material to another. For label interpretation, the Total THC formula remains a theoretical comparison tool rather than a measurement of what one lighting event produced.",
          "Airflow during lighting further reshapes the gradient. Moving air can carry heat away from one zone while another remains closer to the flame. Density and moisture also change how quickly heat penetrates. Those physical facts keep the lighter discussion descriptive: flame supplies energy, but distribution across the material is not automatic or complete.",
        ],
      },
      {
        id: "vape-coil",
        heading: "What a vape coil does",
        paragraphs: [
          "A vape coil transfers controlled electrical heat into the extract around it. Instead of a visible flame touching plant material, the oil warms against hardware whose setting and heat delivery shape the exposure. Compounds can begin evaporating below their published boiling points and continue leaving the liquid over time, so a boiling-point chart should not be treated as an on-off control panel.",
          "The same caution applies to decarboxylation. A selected setting identifies the device’s target or operating level, not a guaranteed temperature for every microscopic part of the oil at every moment. Contact, flow, and duration determine the actual heating history. The coil’s job is energy transfer; the chemistry responds over time.",
          "Conversion and evaporation are related to heat but they are not synonyms. Decarboxylation describes a molecular reaction in which THCa loses carbon dioxide and becomes THC. Evaporation describes molecules moving into the vapor phase. A heated sample can be undergoing both processes during the same interval, and a boiling-point reference addresses the second process more directly than the first. Keeping those verbs separate makes temperature discussions much clearer.",
          "Device displays report a control target, not a continuous map of every microliter of oil. Oil nearer the heated surface experiences a different history than oil farther away, and fresh material entering the heated zone during a draw changes the exposure again. Reading the setting as an average operating intention is more accurate than treating it as a laboratory set point for the whole chamber.",
        ],
      },
      {
        id: "potency-math",
        heading: "Why decarboxylation matters for potency math",
        paragraphs: [
          "A potency estimate that adds THCa and THC directly overstates the converted total because it ignores the mass released as carbon dioxide. The useful label equation is Total THC = (THCa × 0.877) + THC. It first converts the precursor into a THC-equivalent amount, then adds THC already measured in the sample.",
          "For example, 70% THCa contributes a theoretical 61.39% THC after the mass adjustment. If the sample also contains 4% THC, its calculated Total THC is 65.39%. That number supports consistent label comparison and amount calculations. It still assumes full conversion of the THCa term, so it should be read as standardized chemical potential rather than a promise that every heating method will reproduce the total exactly.",
          "Rounding on consumer labels can also shift displayed totals by small amounts even when the underlying formula is the same. Prefer the most precise values available on the matched report when checking arithmetic. If a package prints only Total THC without showing the THCa and THC inputs, the printed total still rests on that conversion logic, but the check cannot be reconstructed without the component rows.",
        ],
      },
      {
        id: "formula-limits",
        heading: "What the formula does not measure",
        paragraphs: [
          "The Total THC equation answers a labeling and comparison question. It does not measure how much conversion occurred during one lighter pass, one vaporizer session, or one incomplete heating interval. Incomplete contact, short exposure, or uneven gradients can leave precursor unconverted even when the calculated potential looks high on paper.",
          "It also does not invent dosing instructions. Chemical potential on a label is a standardized description of measured cannabinoids after the mass adjustment. Personal use decisions, product format choice, and legal limits belong to separate questions that this science page does not answer.",
        ],
      },
      {
        id: "reading-decarb-with-science",
        heading: "Read decarboxylation with the rest of the science silo",
        paragraphs: [
          "This article explains the reaction and the mass factor. The THCa versus THC page works the same 0.877 arithmetic from molecular weights through a full Total THC example. The laboratory-report guide shows where acidic, neutral, and calculated rows appear on a Certificate of Analysis.",
          "Temperature and terpene pages add a second distinction: volatility and boiling-point references describe evaporation more directly than decarboxylation. Keep those verbs separate when comparing extract heat, device settings, and label math. Availability and brand-format details remain on the official Presidential Moon Rocks resources linked from this site.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/science/thca-vs-thc",
        label: "Check the 0.877 conversion math",
        description: "Work from molecular weight to a complete Total THC example.",
      },
      {
        href: "/science/terpenes",
        label: "Compare heat with terpene volatility",
        description: "Learn why boiling points do not behave like hard switches.",
      },
      {
        href: "/science/reading-a-lab-report",
        label: "Trace conversion values on the report",
        description: "Read the acidic, neutral, and calculated cannabinoid rows.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/learn/different-extracts-need-different-heat",
      label: "Compare heat across extract types",
      description: "Read the official guide to how extract formats meet temperature.",
    },
  },
  {
    path: "/science/reading-a-lab-report",
    kind: "article",
    silo: "science",
    h1: "Reading a Lab Report",
    title: "How to Read a Cannabis Lab Report | Presidential THC",
    description:
      "A field guide to cannabis Certificates of Analysis, including batch identity, cannabinoid math, terpene data, compliance results, and limits.",
    wordTarget: [700, 900],
    intro: [
      "A cannabis laboratory report, commonly called a Certificate of Analysis or COA, records results for a specific tested batch. Read it in this order: confirm the product and batch identity, inspect the cannabinoid panel and Total THC math, review the terpene panel when present, then check the compliance sections and the laboratory’s report details.",
      "A COA can tell you what the submitted sample measured and whether listed tests passed or failed. It cannot, by itself, describe every unit in a batch, predict flavor from one number, or replace the need to match the report to the package in hand.",
    ],
    sections: [
      {
        id: "identity",
        heading: "Begin with identity, not potency",
        paragraphs: [
          "The first task is proving that the report belongs to the product. Look for the product name or sample description, batch or lot number, laboratory identity, report date, and any sample identifiers. Formats vary among laboratories, but the batch connection is fundamental: a precise number from the wrong batch is not useful evidence about the package being examined.",
          "Compare the batch number character by character. Then note when the sample was received, analyzed, and reported if those fields are provided. Dates establish the sequence of the record; they do not automatically tell you how the product was stored after testing. Keep the COA tied to its documented sample rather than treating it as a permanent profile for every item with the same name.",
        ],
      },
      {
        id: "cannabinoid-panel",
        heading: "Read the cannabinoid panel row by row",
        paragraphs: [
          "The cannabinoid panel separates analytes such as THCa and THC because the acidic precursor and the converted molecule are not identical. Reports may express concentration as a percentage, milligrams per gram, or another clearly labeled unit. Before comparing numbers, confirm that the units match; a percentage and a milligram value should not be placed side by side as though they use the same scale.",
          "Find THCa, then THC, then the reported Total THC. The check is Total THC = (THCa × 0.877) + THC. If a sample lists 60% THCa and 5% THC, the calculated total is 57.62%: 60 × 0.877 equals 52.62, plus 5. Small differences can come from displayed rounding, so calculate with the most precise values available on the report.",
        ],
      },
      {
        id: "terpene-panel",
        heading: "Treat the terpene panel as a profile",
        paragraphs: [
          "A terpene panel lists volatile aromatic compounds individually. Names such as caryophyllene, pinene, myrcene, limonene, and linalool are more informative together than as a single “total terpenes” figure because their proportions describe the measured composition. The panel is an analytical profile, not a flavor guarantee detached from storage and processing.",
          "Terpenes can be lost through drying, curing, and storage, with losses reaching half of the total. That volatility makes the report date and batch match especially important. A terpene result documents the tested sample at a point in time; subsequent exposure to heat, light, or extended storage is outside the measurement printed on that page.",
        ],
      },
      {
        id: "compliance",
        heading: "Separate potency from compliance testing",
        paragraphs: [
          "Potency occupies visual attention, but a compliance COA can contain much more. California’s Department of Cannabis Control lists required testing categories that include cannabinoids and terpenes, residual solvents and processing chemicals, residual pesticides, heavy metals, microbial impurities, mycotoxins, moisture content and water activity, and foreign material. The COA records a pass or fail for the substances covered by the applicable test.",
          "Check each named section instead of assuming one overall potency result means every compliance category was analyzed. Also distinguish a numeric result, a reporting limit, and a pass/fail conclusion; they answer different questions. A blank field should not be interpreted as zero without the report’s legend explaining what the notation means.",
        ],
      },
      {
        id: "limits",
        heading: "Know what the document does not prove",
        paragraphs: [
          "A COA is evidence about the sample a licensed laboratory received, the methods it used, and the analytes it reported. It does not narrate how every package was handled after sampling, and it does not turn a limited panel into an unlimited screen for every possible compound. The scope is the set of tests actually shown.",
          "Finish with three checks: correct batch, understandable units, and complete relevant sections. Recalculate Total THC when the component rows are available, read terpenes as a composition rather than a verdict, and retain the qualifiers printed by the laboratory. That sequence turns a dense report into a traceable record without asking it to answer questions it was not designed to test.",
          "When two displayed values appear inconsistent, pause before calling the report wrong. First check whether one row uses a different unit, whether the total applies the 0.877 conversion factor, and whether the document rounds its visible numbers. If the mismatch remains after those checks, the report itself should control the interpretation rather than an assumption based on front-label shorthand. A transparent comparison records the exact rows used and preserves the laboratory’s notation.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/science/thca-vs-thc",
        label: "Recalculate the Total THC line",
        description: "Use the molecular-weight adjustment without mixing units.",
      },
      {
        href: "/science/terpenes",
        label: "Decode the named aroma compounds",
        description: "Put the terpene rows into a volatility and flavor context.",
      },
      {
        href: "/science/cannabinoids",
        label: "Identify the minor cannabinoid entries",
        description: "Understand why CBD, CBG, and CBN remain separate analytes.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/learn/infusion-science",
      label: "Explore the official infusion science overview",
      description: "Connect laboratory composition with the structure of an infused product.",
    },
  },
  {
    path: "/science/terpenes",
    kind: "article",
    silo: "science",
    h1: "Cannabis Terpenes: What Weed Terpenes Are",
    title: "Cannabis Terpenes | Aroma, Flavor, and Volatility",
    description:
      "A precise guide to cannabis terpenes, their aroma vocabulary, reference boiling points, volatility, and processing tradeoffs.",
    wordTarget: [1100, 1250],
    intro: [
      "Weed terpenes are the volatile aromatic compounds that supply much of cannabis’s identifiable scent and flavor vocabulary. Their relative proportions matter more than any single name, and their volatility means cultivation is only the beginning: drying, curing, extraction, heat, light, and storage can all reshape what remains.",
      "Boiling points help compare compounds, but they are not device instructions. Evaporation begins below a listed boiling point and unfolds over time, so flavor cannot be reduced to one temperature on a dial.",
      "This page is for adults twenty-one and older who want science and education framing around aroma, flavor, and volatility—not medical advice, dosing guidance, or therapeutic claims about named terpenes. The useful skill is reading a terpene panel as a measured mixture, connecting that mixture to processing history, and keeping boiling-point references in proportion.",
    ],
    sections: [
      {
        id: "aroma-profile",
        heading: "A profile, not a one-word flavor",
        paragraphs: [
          "A terpene panel describes a mixture. Caryophyllene is associated with pepper and clove, pinene with pine and rosemary, myrcene with musky and earthy notes, limonene with bright citrus, and linalool with floral or lavender character. Terpinolene adds citrus and fruity reference notes. Those descriptors are vocabulary for the compounds, not a guarantee that a finished product will smell like one isolated ingredient.",
          "Concentration and proportion shape the profile together. Two samples can contain the same named terpene yet present different overall aromas because the surrounding compounds and their ratios differ. This is why a complete panel is more useful than choosing one row and treating it as the identity of the material.",
          "Aroma vocabulary also travels poorly when it is flattened into a single marketing word. “Citrus,” “pine,” or “earthy” can each arise from more than one compound, and several compounds can contribute to the same perceived note. The panel’s job is to list what was measured; sensory language is a translation aid, not a one-to-one map from one row to one smell.",
        ],
      },
      {
        id: "boiling-points",
        heading: "Reference boiling points",
        paragraphs: [
          "The table gives useful comparison points at standard pressure. Caryophyllene sits at the low end of this set, while linalool is highest among the five values supplied in the project research brief. Terpinolene is included to complete the six-terpene overview, using the boiling-point range reported in a primary analytical study and aroma vocabulary from primary flavoromics research.",
          "Read the order as a comparison of pure compounds under reference conditions, not as a ranked list of flavors or a recipe for a finished extract. Cannabis material is a mixture, and each component occupies only part of that mixture. The table can show that caryophyllene and linalool have widely separated reference points, but it cannot tell you the exact concentration of either compound in a product. That information belongs on a batch-specific terpene panel.",
          "Reference boiling points also assume standard pressure and pure compounds. Real flower, resin, or oil is neither pure nor held at a single uniform temperature. Device settings, chamber geometry, airflow, and contact time change how heat reaches the material, so a chart is a comparison tool rather than a control panel for aroma delivery.",
        ],
        table: {
          caption: "Reference boiling points and aroma descriptors for six terpenes",
          headers: ["Compound", "Reference boiling point", "Aroma vocabulary"],
          rows: [
            ["Caryophyllene", "266°F / 130°C", "Pepper, clove"],
            ["Pinene (alpha and beta forms)", "311°F / 156°C", "Pine, rosemary"],
            ["Myrcene", "334°F / 167°C", "Musky, earthy"],
            ["Limonene", "349°F / 176°C", "Bright citrus"],
            ["Terpinolene", "363–365°F / 184–185°C", "Citrus, fruity"],
            ["Linalool", "388°F / 198°C", "Floral, lavender"],
          ],
        },
      },
      {
        id: "not-a-switch",
        heading: "Why boiling point is not an on-off switch",
        paragraphs: [
          "A boiling point is where a compound leaves rapidly under the stated conditions, not the first temperature at which molecules enter the vapor phase. A 2022 study cited in the project research brief found that vaporizers operating well below published boiling points still evaporated the compounds almost completely over time. Duration and heat transfer belong in the explanation alongside temperature.",
          "That finding resolves a common chart-reading mistake. A device does not have to reach 388°F before any linalool can leave, nor does crossing 388°F mean every trace disappears at once. Published values organize volatility; actual delivery depends on the material, hardware, exposure, and time.",
          "Keep evaporation separate from decarboxylation when reading heat discussions. Evaporation describes aromatic molecules moving into the vapor phase. Decarboxylation describes an acidic cannabinoid losing carbon dioxide and becoming its neutral form. Both respond to heat, but a boiling-point chart answers the first question more directly than the second. Mixing those verbs produces confused temperature advice.",
        ],
      },
      {
        id: "processing",
        heading: "Processing decides what survives",
        paragraphs: [
          "Volatile compounds can change during drying, curing and storage, which is why processing choices are part of flavor science. Live-resin production uses fresh-frozen material and controlled extraction conditions intended to retain compounds that ordinary postharvest handling can reduce. Exact settings vary by producer.",
          "Storage continues the same contest after extraction. Heat and light take terpenes first, so a profile measured at production is not protected from later handling. A cool, dark environment slows the conditions that strip away the most volatile part of the composition. The point is preservation of measured material, not the invention of aroma after the fact.",
          "This gives terpene preservation a chain rather than a single checkpoint. Harvest timing establishes the starting material, processing determines which volatile fraction carries forward, and storage affects what remains when the container is opened. A strong result at one stage cannot erase losses at another. When comparing extract styles, ask which steps were designed to retain the original aromatic fraction and which steps deliberately favor another goal, such as a different consistency or a more neutral base.",
          "Loss figures from postharvest research are ranges, not fixed rules for every cultivar and every lot. The project research record notes that terpene loss across drying, curing, and storage can reach half of the starting total. That upper-bound language explains why process history matters; it does not license a claim that every dried sample lost exactly fifty percent. Batch panels remain the evidence for what a specific product still contains.",
        ],
      },
      {
        id: "entourage-hypothesis",
        heading: "Keep the entourage effect in scientific proportion",
        paragraphs: [
          "The entourage effect proposes that multiple cannabis compounds may interact in ways that are not captured by considering one molecule alone. It remains a working hypothesis, not settled science. A terpene panel can establish which compounds a laboratory measured and in what amounts; it cannot, by itself, prove a particular combined biological outcome.",
          "That boundary does not make terpene data unimportant. The panel is valuable for composition, aroma comparison, quality control, and tracking what processing preserved. It simply should not be stretched into medical or effects claims. The defensible reading is chemical and sensory: identify the mixture, note its volatility, and compare it with the product’s processing history.",
          "Named terpenes on a label therefore support identification and comparison, not invented outcome stories. Avoid translating a single row into a mood, a medical use, or a dosing instruction. The educational value of the panel is that it records composition at a point in time; interpretation stays inside aroma, flavor, volatility, and process evidence.",
        ],
      },
      {
        id: "read-terpenes-with-science",
        heading: "Read terpenes with the rest of the science silo",
        paragraphs: [
          "This article keeps terpenes in the vocabulary of mixture, volatility, and process history. The laboratory-report guide shows where a terpene panel sits beside cannabinoid and compliance sections on a Certificate of Analysis. The decarboxylation page separates heat-driven conversion of THCa from evaporation of aromatic compounds.",
          "Live-resin and live-rosin pages then follow the cold-chain and solventless routes that try to retain more of the harvest-day aromatic fraction. Availability and brand-format details remain on the official Presidential Moon Rocks resources linked from this site.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/science/live-resin",
        label: "See why fresh-freezing protects aroma",
        description: "Follow the cold chain from harvest through extraction.",
      },
      {
        href: "/science/live-rosin",
        label: "Study solventless terpene preservation",
        description: "Compare washing, freeze-drying, and press temperatures.",
      },
      {
        href: "/science/decarboxylation",
        label: "Separate evaporation from conversion",
        description: "Distinguish terpene volatility from THCa decarboxylation.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/learn/flavor-science",
      label: "Read Presidential’s flavor science guide",
      description: "Continue with the official site’s discussion of flavor construction.",
    },
  },
  {
    path: "/science/cannabinoids",
    kind: "article",
    silo: "science",
    h1: "Cannabinoids in Infused Cannabis",
    title: "Cannabinoids Beyond THC | Presidential THC",
    description:
      "A descriptive guide to THC, THCa, CBD, CBG, and CBN, including their plant chemistry and the way laboratories list them.",
    wordTarget: [1100, 1250],
    intro: [
      "Cannabinoids are a family of related compounds found in cannabis, and a laboratory panel separates them because each name represents a distinct analyte. THC and its acidic precursor THCa may dominate the label, but CBD, CBG, and CBN can appear in their own rows and should be read independently rather than folded into one generic potency number.",
      "The plant builds much of this chemistry in acidic forms. Heat can remove carbon dioxide from those precursors, while storage and oxidation can change the profile further; the label is therefore a measured snapshot of a particular batch.",
      "This page is for adults twenty-one and older who want a descriptive reading of cannabinoid panels on infused cannabis products—not medical advice, dosing guidance, or therapeutic claims about named compounds. Match each row to a distinct analyte, relate acidic precursors to their decarboxylated counterparts, and keep Total THC from swallowing every other name on the label.",
    ],
    sections: [
      {
        id: "family-tree",
        heading: "A compact chemical family tree",
        paragraphs: [
          "Cannabigerolic acid, abbreviated CBGA, acts as a central branch point in cannabinoid biosynthesis. Plant enzymes can convert it into other acidic cannabinoids, including THCa and CBDA. Research that rebuilt the pathway in yeast demonstrated production of CBGA, THCa, and CBDA using the relevant biosynthetic machinery, helping establish the precursor relationships without relying on product folklore.",
          "Those acidic molecules can lose carbon dioxide through decarboxylation. THCa becomes THC, CBDA becomes CBD, and CBGA becomes CBG. The resulting names are not interchangeable with their precursors. A laboratory that measures both forms reports them separately because their molecular masses and chemical identities differ.",
          "For infused products, the family tree matters because flower, extract, and coating layers can each contribute different mixes of precursors and neutrals. A label that lists THCa beside THC describes two measured forms across that stack, not a marketing synonym. CBGA’s branch-point role explains why CBDA, THCa, and related acids can appear together without implying that CBD or CBG are “kinds of THC.” Read each name as its own molecule on the pathway.",
        ],
      },
      {
        id: "thc-thca",
        heading: "THC and THCa",
        paragraphs: [
          "THCa is the acidic precursor present in the living plant. Heat converts it to THC by removing a carboxyl group as carbon dioxide. The mass change is the reason Total THC cannot be calculated by simply adding the two percentages: THCa has a molecular weight of 358.47 grams per mole, compared with 314.46 for THC.",
          "On a report, look for separate THCa, THC, and Total THC entries. The calculated relationship is Total THC = (THCa × 0.877) + THC. A sample with 50% THCa and 2% THC therefore has a theoretical Total THC of 45.85%, subject to the report’s rounding. The calculation standardizes the panel; it does not merge the underlying molecules into one laboratory result.",
          "Infused formats make the distinction practical. A coating, distillate, or crystal fraction may contain more decarboxylated THC than the flower it coats, while another lot may report substantial THCa. Comparing packages by one headline potency number without checking whether the panel is THCa-heavy, THC-heavy, or already totaled with the 0.877 factor invites apples-to-oranges mistakes. When two products advertise high Total THC, open the COA and ask which share came from measured THC versus calculated conversion from THCa.",
        ],
      },
      {
        id: "cbd-cbg",
        heading: "CBD and CBG",
        paragraphs: [
          "CBD is the neutral form associated with the acidic precursor CBDA. CBG is the neutral form associated with CBGA, the central precursor that can also feed other branches of the plant’s cannabinoid pathway. Describing those origins is more precise than calling either compound a different “type of THC.” They have their own structures and their own report lines.",
          "Some panels show both the acidic and neutral form for a cannabinoid, while others emphasize only compounds included in the laboratory’s method or detected above its reporting threshold. Read the exact analyte name and unit. A CBD value does not stand in for CBDA, and a CBG value does not reveal how much CBGA was present unless the corresponding acid row is also reported.",
          "On infused-product panels, CBD and CBG usually appear as minor cannabinoids relative to the THC and THCa majority. That minor status does not make the rows optional footnotes. They remain independent analytes for batch comparison, not substitutes for Total THC math. If CBDA or CBGA also appear, treat those acids like THCa relative to THC—related by pathway, reported separately, never assumed from the neutral value alone.",
        ],
      },
      {
        id: "cbn",
        heading: "CBN and a profile that changes over time",
        paragraphs: [
          "CBN is cannabinol, another distinct cannabinoid that can appear on a panel. Primary analytical research describes CBN formation through oxidation of THC during storage and exposure to environmental factors. That makes CBN different from the simple acid-to-neutral pairs above: it is often discussed as part of a changing or aged chemical profile rather than as a direct synonym for THC.",
          "A CBN percentage still means only what the named row says. It should not be added into Total THC, and its presence does not authorize a medical or effects conclusion. The defensible statement is compositional: the laboratory measured a separate molecule in the submitted sample, under the method and reporting limits identified by the COA.",
          "In an infused stack that has been stored, heated during manufacture, or held under light and air, a detectable CBN row can mark that the THC-related fraction has aged or oxidized relative to an earlier snapshot. That stays compositional. It does not license an effects claim about CBN, nor change how Total THC is calculated from THCa and THC.",
        ],
      },
      {
        id: "panel-reading",
        heading: "How to read the group on a label",
        paragraphs: [
          "Begin with the batch number so the report and package match. Then note every cannabinoid’s full name, whether it is acidic or neutral, its unit, and whether the value is a direct measurement or a calculated total. Percentages and milligrams per gram describe concentration on different scales and should be converted before comparison.",
          "Next, keep totals narrow. Total THC combines THCa after the 0.877 mass adjustment with measured THC; it does not mean “all cannabinoids.” CBD, CBG, and CBN remain separate unless the report provides a separately defined total for them. Finally, respect the panel’s scope: it describes analytes the laboratory tested and reported for that sample. It is a chemistry record, not a complete prediction about the product or the person encountering it.",
          "The suffix is part of the analyte name, not optional punctuation. THCa and THC occupy separate rows for the same reason CBDA and CBD can occupy separate rows: one is an acidic precursor and one is its decarboxylated counterpart. If a panel lists only one member of a pair, do not invent the missing value. Report what was measured, use a defined formula only where one is supplied, and leave unrelated cannabinoids out of that calculation.",
          "For infused cannabis specifically, confirm that each cannabinoid row’s unit matches how the product is sold—percent by weight, milligrams per gram, or milligrams per serving—and that batch identity ties the package to the COA. Do not invent a medical story from a minor-cannabinoid percentage, and do not fold CBD, CBG, or CBN into Total THC. The panel records measured composition for adults twenty-one and older; it does not prescribe use, dose, or outcome.",
        ],
      },
      {
        id: "infused-products-and-silo",
        heading: "Cannabinoids across infused products and the science silo",
        paragraphs: [
          "Infused flower, coated pre-rolls, and extract-heavy formats still resolve to the same panel grammar: THCa and THC for the dominant pathway, CBD/CBDA and CBG/CBGA as separate branch-point relatives, and CBN as a distinct oxidation-related analyte when reported. Distillate, liquid-diamonds, live-resin, and live-rosin pages explain how stacked materials are made; this article names the molecules the laboratory lists.",
          "The THCa-versus-THC guide deepens the precursor math. Decarboxylation separates conversion from evaporation. The laboratory-report article places the cannabinoid group beside compliance sections on a Certificate of Analysis. Brand-format details remain on the official Presidential Moon Rocks resources linked from this site.",
        ],
      },
    ],
    relatedLinks: [
      {
        href: "/science/reading-a-lab-report",
        label: "Navigate a complete cannabinoid panel",
        description: "Match analytes, units, calculations, and batch identity.",
      },
      {
        href: "/science/thca-vs-thc",
        label: "Resolve the precursor distinction",
        description: "See why the acidic and neutral forms require different math.",
      },
      {
        href: "/science/liquid-diamonds",
        label: "Examine high-purity THCa crystals",
        description: "Learn how crystallization separates THCa from surrounding sauce.",
      },
    ],
    externalLink: {
      href: "https://presidentialmoonrocks.com/learn",
      label: "Browse Presidential’s official learning library",
      description: "Continue with the brand’s collection of extract and infusion references.",
    },
  },
];
