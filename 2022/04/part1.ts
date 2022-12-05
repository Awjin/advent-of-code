import { getData } from "./utils";

const pairs = getData();

let fullyContainedPairs = 0;
for (const [a, b] of pairs) {
  if (
    (a.start >= b.start && a.end <= b.end) ||
    (b.start >= a.start && b.end <= a.end)
  ) {
    fullyContainedPairs++;
  }
}

console.log(fullyContainedPairs);
