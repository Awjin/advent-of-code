import {
  Result,
  Shape,
  getData,
  losingMatchups,
  score,
  winningMatchups,
} from "./utils";

const shapeDict: Record<string, Shape> = {
  A: "rock",
  B: "paper",
  C: "scissors",
};

const resultDict: Record<string, Result> = {
  X: "loss",
  Y: "draw",
  Z: "win",
};

const strategy = getData().map(([a, b]) => {
  const enemy = shapeDict[a];
  const result = resultDict[b];
  const me =
    result === "draw"
      ? enemy
      : result === "win"
      ? losingMatchups[enemy]
      : winningMatchups[enemy];
  return [enemy, me];
});

console.log(score(strategy));
