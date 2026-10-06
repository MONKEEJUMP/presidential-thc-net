import type { PageContent } from "./types";

// InLinks FIX-10 entity markup (schema-50405), hand-curated: only entities that match the page,
// Wikipedia references only, no facts. Merged into the existing WebPage node, never a second node.
type EntityRef = { "@type": "Thing" | "State"; name: string; sameAs: string };

const wiki = (type: EntityRef["@type"], name: string, slug: string): EntityRef => ({
  "@type": type,
  name,
  sameAs: `https://en.wikipedia.org/wiki/${slug}`,
});

export const pageEntities: Record<PageContent["path"], { about?: EntityRef[]; mentions?: EntityRef[] }> = {
  "/": { about: [wiki("Thing", "Tetrahydrocannabinol", "Tetrahydrocannabinol")] },
  "/science": { about: [wiki("Thing", "Cannabis", "Cannabis_(drug)")] },
  "/infusion": { mentions: [wiki("Thing", "Kief", "Kief"), wiki("Thing", "Flower", "Flower")] },
  "/formats": { about: [wiki("Thing", "Blunt (cannabis)", "Blunt_(cannabis)")] },
  "/about": {
    about: [wiki("Thing", "Chemistry", "Chemistry")],
    mentions: [wiki("Thing", "Cannabis", "Cannabis_(drug)")],
  },
  "/states": {
    mentions: [
      wiki("State", "California", "California"),
      wiki("State", "Oklahoma", "Oklahoma"),
      wiki("State", "New York", "New_York_(state)"),
      wiki("State", "Nevada", "Nevada"),
      wiki("State", "Michigan", "Michigan"),
      wiki("State", "Arizona", "Arizona"),
      wiki("State", "Washington", "Washington_(state)"),
    ],
  },
};
