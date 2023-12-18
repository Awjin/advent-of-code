import { getData } from "./utils";

const bag = { r: 12, g: 13, b: 14 };

let sum = 0;

for (const { id, subsets } of getData()) {
  if (subsets.every(({ r, g, b }) => r <= bag.r && g <= bag.g && b <= bag.b)) {
    sum += id;
  }
}

console.log(sum);
