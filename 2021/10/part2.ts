import { getData, IncompleteError, parse, syntax } from "./utils";

const lines = getData();

const autocompleteBounty: Record<string, number> = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4,
};

let scores = [];
for (const line of lines) {
  try {
    parse(line);
  } catch (error) {
    if (error instanceof IncompleteError) {
      let score = 0;
      for (let i = error.openers.length - 1; i >= 0; i--) {
        const opener = error.openers[i];
        const closer = syntax[opener];
        score *= 5;
        score += autocompleteBounty[closer];
      }
      scores.push(score);
    }
  }
}

console.log(scores.sort((a, b) => a - b)[(scores.length - 1) / 2]);
