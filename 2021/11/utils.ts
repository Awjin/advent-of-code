import { read } from "../../utils/input";

export class Octopus {
  flashed = false;

  constructor(
    public energy: number,
    readonly row: number,
    readonly col: number
  ) {}

  energize() {
    if (this.energy < 9) {
      this.energy++;
    } else {
      this.energy = 0;
      this.flashed = true;
    }
  }
}

export function addEnergy(octopodes: Octopus[][]): Octopus[] {
  const flashed = [];
  for (const row of octopodes) {
    for (const octopus of row) {
      octopus.flashed = false;
      octopus.energize();
      if (octopus.flashed) flashed.push(octopus);
    }
  }
  return flashed;
}

export function resolveFlashes(
  octopodes: Octopus[][],
  queue: Octopus[]
): number {
  let flashCount = 0;
  while (queue.length > 0) {
    const curr = queue.shift()!;
    for (const neighbor of findNeighbors(octopodes, curr)) {
      if (neighbor.flashed) continue;
      neighbor.energize();
      if (neighbor.flashed) queue.push(neighbor);
    }
    flashCount++;
  }
  return flashCount;
}

function findNeighbors(octopodes: Octopus[][], curr: Octopus): Octopus[] {
  const neighbors = [];
  const deltas = [
    { row: -1, col: -1 },
    { row: -1, col: 0 },
    { row: -1, col: 1 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
    { row: 1, col: -1 },
    { row: 1, col: 0 },
    { row: 1, col: 1 },
  ];
  for (const delta of deltas) {
    const row = curr.row + delta.row;
    const col = curr.col + delta.col;
    if (octopodes[row] === undefined) continue;
    if (octopodes[row][col] === undefined) continue;
    neighbors.push(octopodes[row][col]);
  }
  return neighbors;
}

export function getData(): Octopus[][] {
  const octopodes: Octopus[][] = [];
  read(2021, 11).forEach((line, i) => {
    const row: Octopus[] = [];
    line[0].split("").forEach((num, j) => {
      row.push(new Octopus(parseInt(num), i, j));
    });
    octopodes.push(row);
  });
  return octopodes;
}
