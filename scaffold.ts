import { mkdirSync, writeFileSync } from "fs";

const day = process.argv[2];
const dir = `src/${day}`;
mkdirSync(`${dir}`);
writeFileSync(`${dir}/input`, "");
writeFileSync(`${dir}/test`, "");
writeFileSync(
  `${dir}/utils.ts`,
  `import { readInput } from "../utils";

export function getData() {
  return readInput(${day}).map((line) => {});
}
`
);
writeFileSync(`${dir}/part1.ts`, "");
writeFileSync(`${dir}/part2.ts`, "");
writeFileSync(`${dir}/README.md`, "");
