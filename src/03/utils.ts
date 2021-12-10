import { readInput } from "../utils";

export const binaryNumLength = 12;

export function mostCommonBitMask(binaryNums: number[], index: number): number {
  let count = 0;
  const mask = 2 ** (binaryNumLength - 1 - index);
  for (const num of binaryNums) {
    count += (num & mask) === mask ? 1 : 0;
  }
  return count >= binaryNums.length / 2 ? mask : 0;
}

export function getData(): number[] {
  return readInput(3).map((line) => parseInt(line[0], 2));
}
