import { mkdirSync, writeFileSync } from "fs";
import { dayString } from "../src/utils";

const day = dayString(process.argv[2]);
const dir = `src/${day}`;

mkdirSync(`${dir}`);
writeFileSync(`${dir}/README.md`, "");
writeFileSync(`${dir}/input`, "");
writeFileSync(`${dir}/test`, "");
writeFileSync(`${dir}/part1.ts`, 'import { getData } from "./utils";\n\n');
writeFileSync(`${dir}/part2.ts`, 'import { getData } from "./utils";\n\n');
writeFileSync(
  `${dir}/utils.ts`,
  `import { readInput } from "../utils";

export function getData() {
  return readInput(${day}).map((line) => {});
}
`
);
