import { readFileSync } from "fs";

export function readInput(problem: number): string[][] {
  const contents = readFileSync(`src/${problem}/input`).toString().split("\n");
  contents.pop();
  return contents.map((line) => line.split(" "));
}
