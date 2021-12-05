import { readInput } from "../utils";

interface Command {
  direction: string;
  distance: number;
}

export function getData(): Command[] {
  return readInput(2).map((line) => {
    return {
      direction: line[0],
      distance: parseInt(line[1]),
    };
  });
}
