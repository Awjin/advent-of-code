import { add, getData } from "../18/utils";

const snailNums = getData();

let max = -Infinity;
for (const num1 of snailNums) {
  for (const num2 of snailNums) {
    if (num2 === num1) continue;
    const sum = add([num1, num2]);
    if (sum > max) max = sum;
  }
}

console.log(max);
