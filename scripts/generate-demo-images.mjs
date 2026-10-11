import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = readFileSync(
  resolve(projectRoot, "src/data/products.ts"),
  "utf8",
);
const imagePaths = [
  ...new Set(catalog.matchAll(/"(\/images\/products\/[^\"]+\.svg)"/g)),
].map(([, imagePath]) => imagePath);
const colors = [
  ["#ef927f", "#f5c6a8", "#fff1df"],
  ["#df91a9", "#f5c9ce", "#fff0ed"],
  ["#e8bd53", "#f5dfa0", "#fff5d9"],
  ["#75a993", "#c7dfca", "#eef5e9"],
  ["#618db7", "#b8d8e9", "#eaf4f8"],
  ["#8a7bad", "#d6c8e8", "#f4eff8"],
  ["#ca835c", "#e8c5a7", "#f8eee4"],
  ["#596b72", "#b8c4c1", "#edf0ec"],
  ["#d28579", "#f3d2c1", "#faf0e7"],
  ["#77874f", "#c5cf9a", "#f0f2df"],
];

function hash(value) {
  return [...value].reduce(
    (total, character) => total + character.charCodeAt(0),
    0,
  );
}

function garmentMarkup(type, color, accent, alt) {
  const detail = alt
    ? `<path d="M300 250V${type === "dress" ? "560" : "475"}" stroke="${accent}" stroke-width="5" stroke-dasharray="8 10" opacity=".8"/><path d="M265 300H335" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>`
    : `<path d="M255 315H345" stroke="${accent}" stroke-width="5" stroke-linecap="round"/><circle cx="300" cy="355" r="6" fill="${accent}"/><circle cx="300" cy="385" r="6" fill="${accent}"/>`;

  if (type === "dress") {
    return `<path d="M238 207L275 188H325L362 207L405 258L371 286L353 266L375 389L438 592Q300 636 162 592L225 389L247 266L229 286L195 258L238 207Z" fill="${color}"/><path d="M275 190Q300 220 325 190L339 214Q300 245 261 214L275 190Z" fill="${accent}"/><path d="M226 393Q300 419 374 393" stroke="${accent}" stroke-width="7" opacity=".85"/><path d="M200 526Q300 550 400 526" stroke="${accent}" stroke-width="5" opacity=".6"/>${detail}`;
  }

  if (type === "bottoms") {
    return `<path d="M225 210H375L390 305L367 610H307L300 393L293 610H233L210 305L225 210Z" fill="${color}"/><path d="M225 210H375V278H225V210Z" fill="${accent}"/><path d="M300 280V390" stroke="${accent}" stroke-width="6"/><path d="M235 305H270M330 305H365" stroke="${accent}" stroke-width="5" stroke-linecap="round"/>${detail}`;
  }

  if (type === "romper") {
    return `<path d="M242 207L277 188H323L358 207L402 252L370 284L350 264L363 394L389 490L354 610H300L286 500L272 610H218L183 490L209 394L222 264L202 284L170 252L242 207Z" fill="${color}"/><path d="M277 190Q300 220 323 190L338 215Q300 244 262 215L277 190Z" fill="${accent}"/><path d="M212 395Q300 424 388 395M219 492H287M313 492H381" stroke="${accent}" stroke-width="6"/>${detail}`;
  }

  if (type === "set") {
    return `<path d="M185 214L225 194H275L315 214L350 257L322 285L302 264L311 417H189L198 264L178 285L150 257L185 214Z" fill="${color}"/><path d="M225 196Q250 224 275 196L287 218Q250 245 213 218L225 196Z" fill="${accent}"/><path d="M354 347H450L463 406L445 566H404L402 449L400 566H359L341 406L354 347Z" fill="${accent}"/><path d="M191 398H309M350 405H455" stroke="#fffaf2" stroke-width="6" opacity=".75"/>${detail}`;
  }

  return `<path d="M238 207L275 188H325L362 207L407 259L373 288L350 265L362 486H238L250 265L227 288L193 259L238 207Z" fill="${color}"/><path d="M275 190Q300 220 325 190L339 215Q300 245 261 215L275 190Z" fill="${accent}"/><path d="M256 396H344V464H256V396Z" fill="${accent}" opacity=".72"/><path d="M256 486H344" stroke="${accent}" stroke-width="7"/>${detail}`;
}

function makeSvg(imagePath, index) {
  const filename = imagePath.split("/").at(-1);
  const isAlt = filename.includes("-alt");
  const productKey = filename
    .replace(/-alt\.svg$/, ".svg")
    .replace(/\.svg$/, "");
  const type = /dress|frock/.test(productKey)
    ? "dress"
    : /shorts/.test(productKey)
      ? "bottoms"
      : /romper|bodysuit/.test(productKey)
        ? "romper"
        : /set/.test(productKey)
          ? "set"
          : "top";
  const [color, accent, background] = colors[hash(productKey) % colors.length];
  const offset = isAlt ? 0 : (index % 3) * 12;
  const artwork = garmentMarkup(
    type,
    isAlt ? accent : color,
    isAlt ? color : accent,
    isAlt,
  );

  return `<svg width="600" height="700" viewBox="0 0 600 700" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="100" y="150" width="400" height="510" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
      <feGaussianBlur stdDeviation="12"/>
    </filter>
  </defs>
  <rect width="600" height="700" rx="40" fill="${isAlt ? "#f2eee8" : background}"/>
  <circle cx="300" cy="330" r="218" fill="${isAlt ? background : "#ffffff"}" fill-opacity=".62"/>
  <circle cx="438" cy="173" r="34" fill="${accent}" fill-opacity=".35"/>
  <path d="M120 590C210 566 390 566 480 590" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity=".75"/>
  <path d="M276 139Q300 107 324 139L300 164L276 139Z" stroke="#8b8278" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M300 164V194" stroke="#8b8278" stroke-width="8" stroke-linecap="round"/>
  <g transform="translate(${offset} 0)" filter="url(#shadow)" opacity=".13">${artwork}</g>
  <g transform="translate(${offset} 0)">${artwork}</g>
  <path d="M103 628H497" stroke="#ded8cf" stroke-width="2"/>
  <circle cx="300" cy="650" r="4" fill="${color}"/>
</svg>
`;
}

let created = 0;
for (const imagePath of imagePaths) {
  const outputPath = resolve(projectRoot, "public", imagePath.slice(1));
  if (existsSync(outputPath)) continue;
  mkdirSync(dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, makeSvg(imagePath, created), "utf8");
  created += 1;
}

console.log(
  `Created ${created} demo images; ${imagePaths.length} product image paths are in the catalog.`,
);
