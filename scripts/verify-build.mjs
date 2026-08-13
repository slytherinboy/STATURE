import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";

const requiredFiles = [
  "out/index.html",
  "out/404.html",
  "out/favicon.ico",
  "out/favicon.svg",
  "out/favicon-32x32.png",
  "out/apple-touch-icon.png",
  "out/site.webmanifest",
  "out/_headers",
];

await Promise.all(requiredFiles.map((file) => access(file, constants.R_OK)));

const html = await readFile("out/index.html", "utf8");
for (const marker of [
  "SOCLE par STATURE",
  "Un site qui donne du",
  "SOCLE — Abonnement",
  "SOCLE — Propriété",
  "staturesn@gmail.com",
  "Aïssatou Ndiaye",
]) {
  if (!html.includes(marker)) {
    throw new Error(`Build verification failed: missing ${marker}`);
  }
}

console.log("Verified Cloudflare Pages output and STATURE brand assets.");
