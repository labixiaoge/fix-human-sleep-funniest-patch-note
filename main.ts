// Fix Human Sleep: Funniest Patch Note
// make.fun competition u-yuki-kato-fix-human-sleep-funniest-patch-note-f6ad4c27
//
// One line of patch notes announcing that human sleep has been fixed.
// The program writes that single line to /output/entry.txt and prints it.
// No network, no secrets, no dependencies: everything it runs is in this repo.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Fixed: sleep no longer reboots at 3 a.m. to install updates you never asked for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
