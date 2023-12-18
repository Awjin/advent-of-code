import { getData } from "./utils";

let sum = 0;

for (const { subsets } of getData()) {
  let maxR = -1;
  let maxG = -1;
  let maxB = -1;

  for (const { r, g, b } of subsets) {
    maxR = Math.max(r, maxR);
    maxG = Math.max(g, maxG);
    maxB = Math.max(b, maxB);
  }

  sum += maxR * maxG * maxB;
}

console.log(sum);
