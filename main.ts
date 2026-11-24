// Charm the Commuter: Forecast a City — one-line weather forecast for a city that does not exist.
// Entry line (115 chars): forecast for Quibblewick, sunny spells with a 90% chance of spontaneous parades.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "Tomorrow in Quibblewick: sunny spells, with a 90% chance of spontaneous parades. Bring sunscreen and dancing shoes.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", line + "\n", "utf8");
