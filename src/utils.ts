import { readFileSync } from "fs";

export function readInput(day: number): string[][] {
  const input = process.env["aoc-test"] ? "test" : "input";
  return readFileSync(`src/${day}/${input}`)
    .toString()
    .trim()
    .split("\n")
    .filter((line) => line.length > 1 && line[0] !== "\n")
    .map((line) => line.trim().split(/\s+/));
}
