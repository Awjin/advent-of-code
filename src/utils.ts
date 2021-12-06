import { readFileSync } from "fs";

export function readInput(problem: number): string[][] {
  return readFileSync(`src/${problem}/input`)
    .toString()
    .trim()
    .split("\n")
    .filter((line) => line.length > 1 && line[0] !== "\n")
    .map((line) => line.trim().split(/\s+/));
}
