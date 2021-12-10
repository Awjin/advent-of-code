import { mkdirSync, writeFileSync } from "fs";

import { dayString } from "./input";

const year = process.argv[2];
const day = dayString(process.argv[3]);
const dir = `${year}/${day}`;

mkdirSync(`${dir}`);
writeFileSync(`${dir}/README.md`, "");
writeFileSync(`${dir}/input`, "");
writeFileSync(`${dir}/test`, "");
writeFileSync(`${dir}/part1.ts`, 'import { getData } from "./utils";\n\n');
writeFileSync(`${dir}/part2.ts`, 'import { getData } from "./utils";\n\n');
writeFileSync(
  `${dir}/utils.ts`,
  `import { read } from "../../utils/input";

export function getData() {
  return read(${year}, ${day}).map((line) => {});
}
`
);
