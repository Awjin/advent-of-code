import { read } from "../../utils/input";

export function getData(): number[] {
  return read(2021, 1).map((line) => parseInt(line[0]));
}
