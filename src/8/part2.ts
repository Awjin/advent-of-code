import { getData } from "./utils";

const entries = getData();

let total = 0;
for (const { inputs, outputs } of entries) {
  const map = mapPatternsToNumbers(inputs);
  total += parseInt(outputs.map((output) => map[alphabetize(output)]).join(""));
}

console.log(total);

function mapPatternsToNumbers(patterns: string[]): Record<string, number> {
  const translations: Record<string, number> = {};
  const one = patterns.find((pattern) => pattern.length === 2)!;
  const four = patterns.find((pattern) => pattern.length === 4)!;
  for (let pattern of patterns) {
    pattern = alphabetize(pattern);
    switch (pattern.length) {
      case 2:
        translations[pattern] = 1;
        break;
      case 3:
        translations[pattern] = 7;
        break;
      case 4:
        translations[pattern] = 4;
        break;
      case 7:
        translations[pattern] = 8;
        break;
      case 5:
        translations[pattern] =
          overlapCount(one, pattern) === 2
            ? 3
            : overlapCount(four, pattern) === 2
            ? 2
            : 5;
        break;
      case 6:
        translations[pattern] =
          overlapCount(one, pattern) === 1
            ? 6
            : overlapCount(four, pattern) === 3
            ? 0
            : 9;
    }
  }
  return translations;
}

function alphabetize(pattern: string) {
  return pattern.split("").sort().join("");
}

function overlapCount(pattern1: string, pattern2: string): number {
  let overlaps = 0;
  for (const char of pattern1) {
    if (pattern2.includes(char)) {
      overlaps++;
    }
  }
  return overlaps;
}
