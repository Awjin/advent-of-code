import { readInput } from "../utils";

export function getData(): Array<{
  inputs: string[];
  outputs: string[];
}> {
  return readInput(8).map((line) => {
    return {
      inputs: line.slice(0, line.length - 5),
      outputs: line.slice(line.length - 4),
    };
  });
}
