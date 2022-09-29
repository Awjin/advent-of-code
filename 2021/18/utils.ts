import { read } from "../../utils/input";

type SnailNum = string;

export function getData(): SnailNum[] {
  return read(2021, 18).map((line) => line[0]);
}

export function add(nums: SnailNum[]): number {
  const result = nums.reduce((a, b) => reduce(`[${a},${b}]`));
  return magnitude(result);
}

function reduce(num: SnailNum): SnailNum {
  let result = explode(num);
  if (result === num) result = split(num);
  return result === num ? num : reduce(result);
}

function magnitude(num: SnailNum): number {
  // Base case: the snail number has been simplified to its magnitude.
  const pairEnd = num.search("]");
  if (pairEnd < 0) return Number(num);

  // Find the leftmost pair.
  const openBrackets = [...num.slice(0, pairEnd).matchAll(/\[/g)];
  const pairStart = openBrackets[openBrackets.length - 1].index!;
  const pair = num
    .slice(pairStart + 1, pairEnd)
    .split(",")
    .map(Number);

  // Replace that pair with its magnitude and continue simplifying.
  const value = 3 * pair[0] + 2 * pair[1];
  const left = num.slice(0, pairStart);
  const right = num.slice(pairEnd + 1);
  return magnitude(`${left}${value}${right}`);
}

function explode(num: SnailNum): SnailNum {
  let openBrackets = 0;
  for (let i = 0; i < num.length; i++) {
    // Determine whether we are nested inside four pairs.
    if (openBrackets < 5) {
      if (num[i] === "[") openBrackets++;
      if (num[i] === "]") openBrackets--;
      continue;
    }

    // If so, get the exploding pair.
    const pairStart = i - 1;
    const pairEnd = i + num.slice(i).search("]");
    const pair = num
      .slice(pairStart + 1, pairEnd)
      .split(",")
      .map(Number);

    // Add the exploding pair's left value to the first regular number to its
    // left (if any).
    let leftOfPair = num.slice(0, pairStart);
    const regNumsToTheLeft = getRegularNums(leftOfPair);
    if (regNumsToTheLeft.length) {
      const { value, start, end } =
        regNumsToTheLeft[regNumsToTheLeft.length - 1];
      const newValue = value + pair[0];
      const left = leftOfPair.slice(0, start);
      const right = leftOfPair.slice(end);
      leftOfPair = `${left}${newValue}${right}`;
    }

    // Add the exploding pair's right value to the first regular number to its
    // right (if any).
    let rightOfPair = num.slice(pairEnd + 1);
    const regNumsToTheRight = getRegularNums(rightOfPair);
    if (regNumsToTheRight.length) {
      const { value, start, end } = regNumsToTheRight[0];
      const newValue = value + pair[1];
      const left = rightOfPair.slice(0, start);
      const right = rightOfPair.slice(end);
      rightOfPair = `${left}${newValue}${right}`;
    }

    // Replace the exploding pair with the regular number 0.
    return `${leftOfPair}0${rightOfPair}`;
  }

  return num;
}

function split(num: SnailNum): SnailNum {
  const regNums = getRegularNums(num);
  for (const { value, start, end } of regNums) {
    if (value > 9) {
      const left = num.slice(0, start);
      const right = num.slice(end);
      const newPairLeft = Math.floor(value / 2);
      const newPairRight = Math.ceil(value / 2);
      return `${left}[${newPairLeft},${newPairRight}]${right}`;
    }
  }
  return num;
}

function getRegularNums(num: SnailNum): Array<{
  value: number;
  start: number;
  end: number;
}> {
  // Regular numbers are always followed by a "," or "]".
  const pattern = /\d+[,\]]/g;
  return [...num.matchAll(pattern)].flatMap((match) => {
    const regNumStr = match[0].slice(0, -1);
    const regNumIdx = match.index!;
    return {
      value: Number(regNumStr),
      start: regNumIdx,
      end: regNumIdx + regNumStr.length,
    };
  });
}
