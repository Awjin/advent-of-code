import { binaryNumLength, getData, mostCommonBitMask } from "./utils";

const binaryNums = getData();

const oxygen = filterValues(binaryNums);
const co2 = filterValues(binaryNums, false);

console.log(oxygen * co2);

function filterValues(
  binaryNums: number[],
  filterForMostCommon = true
): number {
  for (let i = 0; i < binaryNumLength; i++) {
    const mask = 2 ** (binaryNumLength - 1 - i);

    const mostCommonBit = mostCommonBitMask(binaryNums, i);
    const filterBit = filterForMostCommon
      ? mostCommonBit
      : mostCommonBit ^ 0b111111111111;

    binaryNums = binaryNums.filter(
      (num) => (num & mask) === (filterBit & mask)
    );
    if (binaryNums.length === 1) break;
  }

  return binaryNums[0];
}
