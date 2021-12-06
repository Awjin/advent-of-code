import { readInput } from "../utils";

interface Line {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export function getOverlapCount(lines: Line[]): number {
  const ventMap: Map<string, number> = new Map();

  for (const line of lines) {
    let x = line.x1;
    let y = line.y1;
    const xStep = line.x1 < line.x2 ? 1 : line.x1 === line.x2 ? 0 : -1;
    const yStep = line.y1 < line.y2 ? 1 : line.y1 === line.y2 ? 0 : -1;

    while (x !== line.x2 + xStep || y !== line.y2 + yStep) {
      const coord = `${x},${y}`;
      ventMap.set(coord, (ventMap.get(coord) ?? 0) + 1);
      x += xStep;
      y += yStep;
    }
  }

  return [...ventMap.values()].filter((val) => val > 1).length;
}

export function getData(): Line[] {
  return readInput(5).map((line) => {
    const start = line[0].split(",").map((num) => parseInt(num));
    const end = line[2].split(",").map((num) => parseInt(num));
    return {
      x1: start[0],
      y1: start[1],
      x2: end[0],
      y2: end[1],
    };
  });
}
