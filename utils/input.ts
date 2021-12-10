import { readFileSync } from "fs";

export function read(year: number, day: number): string[][] {
  const input = process.env["test"] ? "test" : "input";
  return readFileSync(`${year}/${dayString(day)}/${input}`)
    .toString()
    .trim()
    .split(/\n+/)
    .map((line) => line.trim().split(/\s+/));
}

export function dayString(day: number | string) {
  let dayString = `${day}`;
  return dayString.length === 1 ? `0${dayString}` : dayString;
}
