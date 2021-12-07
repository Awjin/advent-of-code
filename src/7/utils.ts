import { readInput } from "../utils";

export function getData(): number[] {
  return readInput(7)[0][0]
    .split(",")
    .map((num) => parseInt(num));
}
