import { read } from "../../utils/input";

export function getData(): string[] {
  return read(2023, 1).map(([x]) => x.toLowerCase());
}

export function sum(lines: string[]): number {
  return lines
    .map((x) => x.replace(/[a-z]/g, ""))
    .map((x) => x.charAt(0) + x.charAt(x.length - 1))
    .map(Number)
    .reduce((a, b) => a + b);
}
