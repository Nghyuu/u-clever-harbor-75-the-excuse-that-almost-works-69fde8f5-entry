import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

// The excuse: a boring, specific logistics snag. The lift is out, the
// courier refuses the stairs, and someone has to wait downstairs for the
// box. No setup, no signature, no mention of why the box matters.
const line =
  "Lift's out and the courier won't carry the box up six flights, so I'm stuck waiting downstairs.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, line, "utf8");
// The grader collects /output as another user, so the file must be
// world-readable regardless of this shell's umask.
chmodSync(entryPath, 0o644);
