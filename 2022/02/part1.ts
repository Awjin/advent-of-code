import { Shape, getData, score } from "./utils";

const dict: Record<string, Shape> = {
  A: "rock",
  B: "paper",
  C: "scissors",
  X: "rock",
  Y: "paper",
  Z: "scissors",
};

const strategy = getData().map(([enemy, me]) => [dict[enemy], dict[me]]);

console.log(score(strategy));
