import { getData } from "./utils";

const pairs = getData();

let overlappingPairs = 0;
for (const [a, b] of pairs) {
  if (
    (a.end >= b.start && a.end <= b.end) ||
    (b.end >= a.start && b.end <= a.end)
  ) {
    overlappingPairs++;
  }
}

console.log(overlappingPairs);
