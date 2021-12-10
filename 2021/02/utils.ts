import { read } from "../../utils/input";

interface Command {
  direction: string;
  distance: number;
}

export function getData(): Command[] {
  return read(2021, 2).map((line) => {
    return {
      direction: line[0],
      distance: parseInt(line[1]),
    };
  });
}
