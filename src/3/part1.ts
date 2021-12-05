import { binaryNumLength, getData, mostCommonBitMask } from "./utils";

const binaryNums = getData();

let gamma = 0;
for (let i = 0; i < binaryNumLength; i++) {
  gamma += mostCommonBitMask(binaryNums, i);
}

console.log(gamma * (gamma ^ 0b111111111111));
