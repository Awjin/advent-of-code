import { getData } from "./utils";

const rucksacks = getData();

let sum = 0;

for (const rucksack of rucksacks) {
  const left = rucksack.slice(0, rucksack.length / 2);
  const right = rucksack.slice(rucksack.length / 2);
  const overlaps: Record<string, boolean> = {};

  for (const item of left) {
    overlaps[item] = true;
  }

  for (const item of right) {
    if (overlaps[item]) {
      sum += item;
      break;
    }
  }
}

console.log(sum);
