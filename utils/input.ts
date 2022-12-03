import { readFileSync } from "fs";

export function read(
  year: number,
  day: number,
  options?: { preserveNewlines: boolean }
): string[][] {
  const input = process.env["test"] ? "test" : "input";
  return readFileSync(`${year}/${dayString(day)}/${input}`)
    .toString()
    .trim()
    .split(options?.preserveNewlines ? /\n/ : /\n+/)
    .map((line: string) =>
      line
        .trim()
        .split(/\s+/)
        .map((value: string) => (value === "" ? "\n" : value))
    );
}

export function dayString(day?: number | string): string | undefined {
  if (day === undefined) return undefined;
  let dayString = `${day}`;
  return dayString.length === 1 ? `0${dayString}` : dayString;
}
