import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const text = 'Set the hurry down. It will keep. Outside, the light is leaving the rooftops one by one, the way evening always does its work, unhurried. Nothing here asks you to be faster than you are. The next word will wait, patient as lamplight. You are steady enough to begin.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

try {
  await mkdir(outputDir, { recursive: true });
  await writeFile(join(outputDir, 'entry.txt'), text, 'utf8');
} catch (error) {
  console.error(`Unable to write entry: ${error instanceof Error ? error.message : error}`);
  process.exitCode = 1;
}
