import { readInput } from "../utils";

export function getData(): number[] {
  return readInput(1).map((line) => parseInt(line[0]));
}
