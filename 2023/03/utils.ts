import { read } from "../../utils/input";

type Component = {
  type: string;
  parts: number[];
};

class NumberMap {
  private readonly map: {
    [coord: string]: number;
  } = {};

  get(row: number, col: number): number | undefined {
    const coord = this.serializeCoord(row, col);
    return this.map[coord];
  }

  set(row: number, col: number, number: number): void {
    const coord = this.serializeCoord(row, col);
    this.map[coord] = number;
  }

  private serializeCoord(row: number, col: number): string {
    return `${row},${col}`;
  }
}

export function getData(): Component[] {
  const schematic = read(2023, 3).map(([x]) => x);
  const numberMap = new NumberMap();
  const components: Component[] = [];

  // Find all of the numbers.
  schematic.forEach((line, row) => {
    for (const match of line.matchAll(/\d+/g)) {
      const number = match[0];
      for (let i = 0; i < number.length; i++) {
        numberMap.set(row, Number(match.index) + i, Number(number));
      }
    }
  });

  // Find all of the symbols that have adjacent numbers. These are the valid
  // schematic components.
  schematic.forEach((line, row) => {
    for (const match of line.matchAll(/[^\d\.]/g)) {
      const col = Number(match.index);
      const type = match[0];
      const parts = new Set<number>();

      for (const [rowTransform, colTransform] of [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
      ]) {
        const part = numberMap.get(row + rowTransform, col + colTransform);
        part && parts.add(part);
      }

      components.push({
        type,
        parts: [...parts],
      });
    }
  });

  return components;
}
