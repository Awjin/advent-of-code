import { readFileSync } from "fs";

export function readInput(day: number): string[][] {
  const input = process.env["aoc-test"] ? "test" : "input";
  return readFileSync(`src/${dayString(day)}/${input}`)
    .toString()
    .trim()
    .split("\n")
    .filter((line) => line.length > 1 && line[0] !== "\n")
    .map((line) => line.trim().split(/\s+/));
}

export function dayString(day: number | string) {
  let dayString = `${day}`;
  return dayString.length === 1 ? `0${dayString}` : dayString;
}
