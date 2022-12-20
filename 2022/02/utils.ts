import { read } from "../../utils/input";

export type Shape = "rock" | "paper" | "scissors";
export type Result = "win" | "loss" | "draw";

export function getData(): string[][] {
  return read(2022, 2);
}

export const winningMatchups: Record<Shape, Shape> = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

export const losingMatchups: Record<Shape, Shape> = {
  rock: "paper",
  paper: "scissors",
  scissors: "rock",
};

const shapeScores: Record<Shape, number> = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const resultScores: Record<Result, number> = {
  win: 6,
  loss: 0,
  draw: 3,
};

export function score(strategy: Shape[][]): number {
  return strategy
    .map(([enemy, me]) => {
      const result =
        me === enemy ? "draw" : winningMatchups[me] === enemy ? "win" : "loss";
      return resultScores[result] + shapeScores[me];
    })
    .reduce((a, b) => a + b);
}
