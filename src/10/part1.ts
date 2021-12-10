import { getData, IllegalCharError, parse } from "./utils";

const lines = getData();

const illegalCharBounty: Record<string, number> = {
  ")": 3,
  "]": 57,
  "}": 1197,
  ">": 25137,
};

let score = 0;
for (const line of lines) {
  try {
    parse(line);
  } catch (error) {
    if (error instanceof IllegalCharError) {
      score += illegalCharBounty[error.char];
    }
  }
}

console.log(score);
