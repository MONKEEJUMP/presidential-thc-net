import { aboutPage } from "./about";
import { formatsPages } from "./formats";
import { guidesPages } from "./guides";
import { infusionPages } from "./infusion";
import { pillarPage } from "./pillar";
import { scienceCorePages } from "./science-core";
import { scienceExtractPages } from "./science-extracts";
import { statesPages } from "./states";

import type { PageContent } from "./types";

export const pages: PageContent[] = [
  pillarPage,
  ...scienceExtractPages,
  ...scienceCorePages,
  ...infusionPages,
  ...formatsPages,
  ...guidesPages,
  ...statesPages,
  aboutPage,
];

export const pagesByPath = new Map(pages.map((page) => [page.path, page]));

export function getPage(path: string): PageContent | undefined {
  return pagesByPath.get(path);
}
