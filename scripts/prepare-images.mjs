import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = String.raw`J:\presidential-official\sources\client\google-drive-drop\_EXTRACTED\Product Graphics-20260703T032133Z-3-001\Product Graphics`;
const crestSource = String.raw`J:\presidential-official\sources\vercel-draft\assets\img\crest.png`;
const outputRoot = path.join(projectRoot, "public", "images");
const assetsFile = path.join(projectRoot, "src", "content", "assets.ts");
const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const maxContentBytes = 160 * 1024;

const pageSpecs = [
  { route: "/", count: 9 },
  { route: "/science", count: 5 },
  { route: "/infusion", count: 5 },
  { route: "/formats", count: 5 },
  { route: "/guides", count: 5 },
  { route: "/science/thca-vs-thc", count: 3 },
  { route: "/science/decarboxylation", count: 3 },
  { route: "/science/reading-a-lab-report", count: 3 },
  { route: "/science/terpenes", count: 3 },
  { route: "/science/cannabinoids", count: 3 },
  { route: "/science/distillate", count: 3 },
  { route: "/science/live-resin", count: 3 },
  { route: "/science/live-rosin", count: 3 },
  { route: "/science/liquid-diamonds", count: 3 },
  { route: "/infusion/how-infusion-works", count: 3 },
  { route: "/infusion/surface-vs-saturation", count: 3 },
  { route: "/infusion/kief-and-trichomes", count: 3 },
  { route: "/infusion/why-infused-burns-differently", count: 3 },
  { route: "/infusion/potency-by-format", count: 3 },
  { route: "/formats/moon-rocks", count: 3 },
  { route: "/formats/infused-pre-rolls", count: 3 },
  { route: "/formats/blunts", count: 3 },
  { route: "/formats/mini-blunts", count: 3 },
  { route: "/formats/vape-cartridges", count: 3 },
  { route: "/guides/how-to-smoke-moon-rocks", count: 3 },
  { route: "/guides/how-to-store-infused-cannabis", count: 3 },
  { route: "/guides/temperature-guide", count: 3 },
  { route: "/guides/what-to-look-for", count: 3 },
  { route: "/guides/beginners-guide", count: 3 },
  { route: "/about", count: 3 },
];

const folderTargets = new Map([
  ["Blunts", 30],
  ["Mini Blunts", 14],
  ["Mini Prerolls", 8],
  ["Moonrocks", 17],
  ["Prerolls", 25],
  ["Singles Mini Blunts", 10],
]);

const folders = [...folderTargets.keys()];
const formatDetails = new Map([
  ["Blunts", { slug: "blunt", label: "blunt" }],
  ["Mini Blunts", { slug: "mini-blunt", label: "mini blunt" }],
  ["Mini Prerolls", { slug: "mini-pre-roll", label: "mini pre-roll" }],
  ["Moonrocks", { slug: "moon-rocks", label: "moon rocks" }],
  ["Prerolls", { slug: "infused-pre-roll", label: "infused pre-roll" }],
  ["Singles Mini Blunts", { slug: "single-mini-blunt", label: "single mini blunt" }],
]);

const flavorSignatures = [
  { tokens: ["orangepushpop"], slug: "orange-push-pop", label: "Orange Push Pop" },
  { tokens: ["daniellarrusso", "daniellarusso"], slug: "daniel-larusso", label: "Daniel Larusso" },
  { tokens: ["ghosthazetrain", "ghosthaze"], slug: "ghost-haze", label: "Ghost Haze" },
  { tokens: ["cherrygelato"], slug: "cherry-gelato", label: "Cherry Gelato" },
  { tokens: ["galacticgas"], slug: "galactic-gas", label: "Galactic Gas" },
  { tokens: ["galriccookie", "garliccookie"], slug: "garlic-cookie", label: "Garlic Cookie" },
  { tokens: ["papayapunch"], slug: "papaya-punch", label: "Papaya Punch" },
  { tokens: ["rainbowbelts"], slug: "rainbow-belts", label: "Rainbow Belts" },
  { tokens: ["lauracharles"], slug: "laura-charles", label: "Laura Charles" },
  { tokens: ["ninobrown"], slug: "nino-brown", label: "Nino Brown" },
  { tokens: ["nycdiesel"], slug: "nyc-diesel", label: "NYC Diesel" },
  { tokens: ["peachmango"], slug: "peach-mango", label: "Peach Mango" },
  { tokens: ["pinkcookie"], slug: "pink-cookie", label: "Pink Cookie" },
  { tokens: ["bluedream"], slug: "blue-dream", label: "Blue Dream" },
  { tokens: ["capjunky"], slug: "cap-junky", label: "Cap Junky" },
  { tokens: ["gorillagoo"], slug: "gorilla-goo", label: "Gorilla Goo" },
  { tokens: ["kinglouis", "kinglblunt"], slug: "king-louis", label: "King Louis" },
  { tokens: ["watermelon"], slug: "watermelon", label: "Watermelon" },
  { tokens: ["strawberry"], slug: "strawberry", label: "Strawberry" },
  { tokens: ["skywalker"], slug: "skywalker", label: "Skywalker" },
  { tokens: ["pineapple"], slug: "pineapple", label: "Pineapple" },
  { tokens: ["tropical"], slug: "tropical", label: "Tropical" },
  { tokens: ["apricotti"], slug: "apricotti", label: "Apricotti" },
  { tokens: ["blueraz"], slug: "blue-raz", label: "Blue Raz" },
  { tokens: ["crescendo", "cresendo"], slug: "crescendo", label: "Crescendo" },
  { tokens: ["whoasiwhoa", "whosiwhoa"], slug: "whoa-si-whoa", label: "Whoa Si Whoa" },
  { tokens: ["xxj13", "xj13"], slug: "xj13", label: "XJ-13" },
  { tokens: ["sfvog"], slug: "sfv-og", label: "SFV OG" },
  { tokens: ["presidentialminipreroll", "presidentialpreroll", "presminisingle", "presminiblunt", "presmoonrock", "presblunt"], slug: "classic", label: "Classic" },
  { tokens: ["prex"], slug: "x-series", label: "X Series" },
  { tokens: ["opp"], slug: "opp", label: "OPP" },
  { tokens: ["waui"], slug: "waui", label: "Waui" },
  { tokens: ["grape"], slug: "grape", label: "Grape" },
  { tokens: ["cherry"], slug: "cherry", label: "Cherry" },
  { tokens: ["xxx"], slug: "xxx", label: "XXX" },
];

const priorityAssignments = [
  { route: "/formats/moon-rocks", folders: ["Moonrocks"] },
  { route: "/formats/infused-pre-rolls", folders: ["Prerolls", "Mini Prerolls"] },
  { route: "/formats/blunts", folders: ["Blunts"] },
  { route: "/formats/mini-blunts", folders: ["Mini Blunts", "Singles Mini Blunts"] },
  { route: "/guides/how-to-smoke-moon-rocks", folders: ["Moonrocks"] },
  { route: "/formats", folders: ["Moonrocks", "Prerolls", "Blunts", "Mini Blunts", "Mini Prerolls"] },
  { route: "/", folders },
];

function compareSources(a, b) {
  return sourcePenalty(a) - sourcePenalty(b) || a.name.localeCompare(b.name, "en", { numeric: true });
}

function sourcePenalty(source) {
  const name = source.name.toLowerCase();
  return (name.includes("img_") ? 20 : 0)
    + (name.includes("logo") ? 10 : 0)
    + (name.includes("notrophie") ? 8 : 0)
    + (name.includes("copy no") ? 5 : 0);
}

function identifyFlavor(source) {
  const compact = path.basename(source.name, path.extname(source.name)).toLowerCase().replace(/[^a-z0-9]+/g, "");
  const match = flavorSignatures.find((candidate) => candidate.tokens.some((token) => compact.includes(token)));
  return match ?? { slug: "signature", label: "Signature" };
}

function hashFile(filePath) {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    const stream = createReadStream(filePath);
    stream.on("error", reject);
    stream.on("data", (chunk) => hash.update(chunk));
    stream.on("end", () => resolve(hash.digest("hex")));
  });
}

async function scanSources() {
  const sources = [];
  for (const folder of folders) {
    const folderPath = path.join(sourceRoot, folder);
    for (const entry of await fs.readdir(folderPath, { withFileTypes: true })) {
      if (!entry.isFile() || !imageExtensions.has(path.extname(entry.name).toLowerCase())) continue;
      const filePath = path.join(folderPath, entry.name);
      sources.push({ folder, name: entry.name, filePath, hash: await hashFile(filePath) });
    }
  }

  const hashGroups = new Map();
  for (const source of sources) {
    const group = hashGroups.get(source.hash) ?? [];
    group.push(source);
    hashGroups.set(source.hash, group);
  }

  const unique = [...hashGroups.values()].map((group) => group.sort((a, b) => {
    const copyScore = (value) => /^copy of /i.test(value.name) ? 1 : 0;
    return copyScore(a) - copyScore(b) || a.name.localeCompare(b.name, "en", { numeric: true });
  })[0]);

  return {
    totalSources: sources.length,
    duplicateSourceHashesExcluded: sources.length - unique.length,
    unique,
  };
}

function selectSources(uniqueSources) {
  const selected = [];
  for (const [folder, target] of folderTargets) {
    const candidates = uniqueSources.filter((source) => source.folder === folder).sort(compareSources);
    if (candidates.length < target) {
      throw new Error(`Need ${target} unique sources from ${folder}, found ${candidates.length}.`);
    }
    selected.push(...candidates.slice(0, target));
  }

  if (selected.length !== 104 || new Set(selected.map((source) => source.hash)).size !== 104) {
    throw new Error(`Expected 104 unique selected sources, found ${selected.length}.`);
  }
  return selected;
}

function assignSources(selected) {
  const remainingByFolder = new Map(folders.map((folder) => [
    folder,
    selected.filter((source) => source.folder === folder),
  ]));
  const assignments = new Map(pageSpecs.map(({ route }) => [route, []]));

  const takeFromFolder = (folder) => {
    const source = remainingByFolder.get(folder)?.shift();
    if (!source) throw new Error(`No selected sources remain in ${folder}.`);
    return source;
  };

  for (const priority of priorityAssignments) {
    const count = pageSpecs.find((page) => page.route === priority.route)?.count;
    if (!count) throw new Error(`Unknown priority route ${priority.route}.`);
    const pageImages = assignments.get(priority.route);
    for (let index = 0; index < count; index += 1) {
      pageImages.push(takeFromFolder(priority.folders[index % priority.folders.length]));
    }
  }

  let folderCursor = 0;
  for (const page of pageSpecs) {
    const pageImages = assignments.get(page.route);
    while (pageImages.length < page.count) {
      let source;
      for (let tries = 0; tries < folders.length; tries += 1) {
        const folder = folders[folderCursor % folders.length];
        folderCursor += 1;
        if (remainingByFolder.get(folder).length > 0) {
          source = takeFromFolder(folder);
          break;
        }
      }
      if (!source) throw new Error(`Ran out of sources while filling ${page.route}.`);
      pageImages.push(source);
    }
  }

  const used = [...assignments.values()].flat();
  const unusedSelected = [...remainingByFolder.values()].flat();
  if (used.length !== 104 || unusedSelected.length !== 0 || new Set(used.map((source) => source.hash)).size !== 104) {
    throw new Error("Image assignment did not consume exactly 104 unique sources.");
  }
  return assignments;
}

function makeIdentity(source, collisionCounts) {
  const flavor = identifyFlavor(source);
  const format = formatDetails.get(source.folder);
  const identityKey = `${flavor.slug}-${format.slug}`;
  const collisionNumber = (collisionCounts.get(identityKey) ?? 0) + 1;
  collisionCounts.set(identityKey, collisionNumber);

  const variantWords = [null, "alternate", "secondary", "archive", "classic"];
  const variant = collisionNumber <= variantWords.length
    ? variantWords[collisionNumber - 1]
    : `edition-${collisionNumber}`;
  const filenameParts = ["presidential", flavor.slug, format.slug, variant, "packaging"].filter(Boolean);
  const filename = `${filenameParts.join("-")}.webp`;
  const wordCount = filename.replace(/\.webp$/, "").split("-").length;
  if (wordCount < 3 || wordCount > 8 || filename.includes("_") || filename !== filename.toLowerCase()) {
    throw new Error(`Invalid generated filename: ${filename}`);
  }
  return {
    flavorSlug: flavor.slug,
    flavorLabel: flavor.label,
    formatSlug: format.slug,
    formatLabel: format.label,
    filename,
    variant,
  };
}

async function renderContentImage(source, destination) {
  const attempts = [
    [1200, 78],
    [1200, 72],
    [1080, 74],
    [1080, 68],
    [960, 70],
    [960, 64],
    [840, 62],
    [720, 58],
    [640, 54],
  ];
  let best;
  for (const [maxEdge, quality] of attempts) {
    const rendered = await sharp(source.filePath)
      .rotate()
      .resize({ width: maxEdge, height: maxEdge, fit: "inside", withoutEnlargement: true })
      .webp({ quality, alphaQuality: 82, effort: 6, smartSubsample: true })
      .toBuffer({ resolveWithObject: true });
    best = rendered;
    if (rendered.data.length <= maxContentBytes) break;
  }
  if (!best) throw new Error(`Sharp produced no output for ${source.filePath}.`);
  await fs.writeFile(destination, best.data);
  return { width: best.info.width, height: best.info.height, bytes: best.data.length };
}

async function renderCrest() {
  const destination = path.join(outputRoot, "presidential-crest.webp");
  const rendered = await sharp(crestSource)
    .rotate()
    .resize({ width: 600, height: 600, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90, effort: 6, smartSubsample: true })
    .toBuffer({ resolveWithObject: true });
  await fs.writeFile(destination, rendered.data);
  return { width: rendered.info.width, height: rendered.info.height, bytes: rendered.data.length };
}

function countWords(value) {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

async function main() {
  await fs.mkdir(outputRoot, { recursive: true });
  const scan = await scanSources();
  const selected = selectSources(scan.unique);
  const assignments = assignSources(selected);
  const collisionCounts = new Map();
  const manifest = {};
  const outputHashes = new Set();
  let maxOutputBytes = 0;

  for (const page of pageSpecs) {
    manifest[page.route] = [];
    for (const source of assignments.get(page.route)) {
      const identity = makeIdentity(source, collisionCounts);
      const destination = path.join(outputRoot, identity.filename);
      const rendered = await renderContentImage(source, destination);
      const shape = rendered.width === rendered.height ? "square" : "portrait";
      if (rendered.height < rendered.width || rendered.width > 1200 || rendered.height > 1200) {
        throw new Error(`Output is not square/portrait within 1200px: ${identity.filename}`);
      }
      const variantPhrase = identity.variant ? ` in an ${identity.variant}` : " in a";
      const alt = `Presidential ${identity.flavorLabel} ${identity.formatLabel} packaging artwork${variantPhrase} ${shape} layout`
        .replace(/\s+/g, " ")
        .trim();
      const captionVariant = identity.variant ? `, ${identity.variant} edition` : "";
      const caption = `Presidential ${identity.flavorLabel} ${identity.formatLabel} package artwork${captionVariant}.`;
      if (countWords(alt) < 5 || countWords(alt) > 15) throw new Error(`Alt text length is invalid: ${alt}`);

      const outputHash = await hashFile(destination);
      if (outputHashes.has(outputHash)) throw new Error(`Converted output duplicated another image: ${identity.filename}`);
      outputHashes.add(outputHash);
      maxOutputBytes = Math.max(maxOutputBytes, rendered.bytes);
      manifest[page.route].push({
        src: `/images/${identity.filename}`,
        width: rendered.width,
        height: rendered.height,
        alt,
        caption,
      });
    }
  }

  const allImages = Object.values(manifest).flat();
  const altTexts = allImages.map((image) => image.alt);
  if (allImages.length !== 104 || new Set(altTexts).size !== 104) {
    throw new Error("Manifest must contain 104 images and 104 unique alt strings.");
  }
  for (const [route, images] of Object.entries(manifest)) {
    const bytes = await Promise.all(images.map((image) => fs.stat(path.join(projectRoot, "public", image.src))));
    const totalBytes = bytes.reduce((sum, stat) => sum + stat.size, 0);
    if (totalBytes >= 1.7 * 1024 * 1024) {
      throw new Error(`${route} content images total ${(totalBytes / 1024 / 1024).toFixed(2)} MB.`);
    }
  }

  const generated = `import type { ContentImage } from "./types";\n\nexport const pageImages: Record<string, ContentImage[]> = ${JSON.stringify(manifest, null, 2)};\n\nexport const contentImages = pageImages;\n`;
  await fs.writeFile(assetsFile, generated, "utf8");
  const crest = await renderCrest();
  const expectedFiles = new Set([
    "presidential-crest.webp",
    ...allImages.map((image) => path.basename(image.src)),
  ]);
  const staleOutputsRemoved = [];
  for (const entry of await fs.readdir(outputRoot, { withFileTypes: true })) {
    if (!entry.isFile() || !/^presidential-.*\.webp$/i.test(entry.name) || expectedFiles.has(entry.name)) continue;
    await fs.unlink(path.join(outputRoot, entry.name));
    staleOutputsRemoved.push(entry.name);
  }

  console.log(JSON.stringify({
    sourceFilesScanned: scan.totalSources,
    uniqueSourceHashes: scan.unique.length,
    duplicateSourceHashesExcluded: scan.duplicateSourceHashesExcluded,
    packagingImagesGenerated: allImages.length,
    manifestRoutes: Object.keys(manifest).length,
    maxOutputBytes,
    crest,
    staleOutputsRemoved,
  }, null, 2));
}

await main();
