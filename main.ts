// feel-curious — a program that writes one short text to /output/entry.txt.
//
// The text is a quiet kitchen-morning scene. Its intrigue is a single small
// concrete detail that is never explained: one blue piece of beach glass in
// a jar on the sill, always facing the door, though no one remembers turning
// it. Everything else is plain sensory texture — light, glass, a cooling
// kettle — so the calm comes from the scene itself, and the last line leaves
// the morning open instead of closing it.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Morning light falls through the kitchen window in one long bar. " +
  "On the sill, a jar of beach glass \u2014 green, white, one blue piece \u2014 " +
  "catches it, and the one blue piece always faces the door, " +
  "though no one remembers turning it. The kettle ticks as it cools.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
