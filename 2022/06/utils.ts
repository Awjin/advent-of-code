import { read } from "../../utils/input";

export function getData(): string {
  return read(2022, 6)[0][0];
}

export function findDistinctSequence(
  string: string,
  length: number
): number | undefined {
  for (let i = 0; i < string.length; i++) {
    const sequence = string.slice(i, i + length);
    const set = new Set([...sequence]);
    if (set.size < length) continue;
    return i + length;
  }
}
