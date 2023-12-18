import { readFileSync } from "fs";

export function read(
  year: number,
  day: number,
  options?: {
    preserveSpaces?: boolean;
    preserveNewlines?: boolean;
  }
): string[][] {
  let file = readFileSync(
    `${year}/${dayString(day)}/${process.env["test"] ? "test" : "input"}`
  ).toString();

  if (options?.preserveSpaces) {
    file = file.replace(/\n$/, "");
  } else {
    file = file.trim();
  }

  const lines = file.split(options?.preserveNewlines ? /\n/ : /\n+/);

  return lines.map((x: string) => {
    const line = options?.preserveSpaces ? [x] : x.trim().split(/\s+/);
    return line.map((value: string) => (value === "" ? "\n" : value));
  });
}

export function dayString(day?: number | string): string | undefined {
  if (day === undefined) return undefined;
  let dayString = `${day}`;
  return dayString.length === 1 ? `0${dayString}` : dayString;
}
