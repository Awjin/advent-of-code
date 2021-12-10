import { read } from "../../utils/input";

export function getData(): Array<{
  inputs: string[];
  outputs: string[];
}> {
  return read(2021, 8).map((line) => {
    return {
      inputs: line.slice(0, line.length - 5),
      outputs: line.slice(line.length - 4),
    };
  });
}
