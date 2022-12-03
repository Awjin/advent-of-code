import { mkdirSync, writeFileSync } from "fs";

import { dayString } from "./input";

const year = process.argv[2];
const day = process.argv[3];

if (!year || !day) {
  console.log("  Invalid input.\n", " Usage: npm run scaffold -- $year $day");
} else {
  const dir = `${year}/${dayString(day)}`;
  mkdirSync(`${dir}`, { recursive: true });
  write(`${dir}/README.md`, "");
  write(`${dir}/test`, "");
  write(`${dir}/input`, "");
  write(
    `${dir}/utils.ts`,
    `import { read } from "../../utils/input";

export function getData() {
  return read(${year}, ${day});
}
`
  );
  write(
    `${dir}/part1.ts`,
    `import { getData } from "./utils";

console.log(getData());
`
  );
  write(`${dir}/part2.ts`, "");
}

function write(filename: string, contents: string) {
  try {
    writeFileSync(filename, contents, { flag: "wx" });
  } catch (_) {}
}
