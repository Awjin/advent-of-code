import { readFileSync } from "fs";

export function readInput(problem: number): string[][] {
  return readFileSync(`src/${problem}/input`)
    .toString()
    .trim()
    .split("\n")
    .map((line) => line.trim().split(/\s+/));
}
