import { getData } from "./utils";

const rucksacks = getData();

let sum = 0;

for (let i = 0; i < rucksacks.length; i += 3) {
  const first = rucksacks[i];
  const second = rucksacks[i + 1];
  const third = rucksacks[i + 2];
  const overlaps: Record<string, number> = {};

  for (const item of first) {
    overlaps[item] = 1;
  }

  for (const item of second) {
    if (overlaps[item]) {
      overlaps[item] = 2;
    }
  }

  for (const item of third) {
    if (overlaps[item] === 2) {
      sum += item;
      break;
    }
  }
}

console.log(sum);
