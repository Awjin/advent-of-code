import { read } from "../../utils/input";

export function getData(): number[] {
  return read(2021, 7)[0][0]
    .split(",")
    .map((num) => parseInt(num));
}
