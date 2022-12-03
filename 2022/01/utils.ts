import { read } from "../../utils/input";

export const calories: number[] = [];

const data = read(2022, 1, { preserveNewlines: true }).flat();
let curr = 0;
for (const value of data) {
  if (value === "\n") {
    calories.push(curr);
    curr = 0;
  } else {
    curr += Number(value);
  }
}
