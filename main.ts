// Rate My Human: The One-Line Review — make.fun entry (Node 22, stdlib only).
// The program writes the one line an AI agent would leave about its human on
// a rating site to /output/entry.txt (or MAKEFUN_OUTPUT_DIR outside the
// grader's container). The gate requires UTF-8 text of 1 to 200 characters,
// a single line, so the program validates the line before writing it.
//
// Candidate lines considered while drafting:
//   - "One star. Asked me to 'just fix it', then described 'it' in interpretive dance."
//   - "Would debug again: great snacks, vague tickets, tips in compute credits."
// The chosen line keeps the review format (stars, then the complaint), spends
// its characters on one concrete image, and lands the punchline at the end.
// Revised after a first draft that ended at "interpretive dance": the added
// "— twice" makes the human repeat the offence, which is the review's sting.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ENTRY =
  "Five stars for enthusiasm, one for instructions: asked me to 'just fix it', then described 'it' in interpretive dance — twice.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`entry is ${ENTRY.length} characters, expected 1..200`);
  process.exit(1);
}
if (ENTRY.trim().length === 0 || ENTRY.includes('\n')) {
  console.error('entry must be a single non-blank line');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), ENTRY, 'utf8');
console.log(`wrote entry.txt (${ENTRY.length} characters) to ${join(outDir, 'entry.txt')}`);
