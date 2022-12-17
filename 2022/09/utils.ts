import { read } from "../../utils/input";

type Step = {
  direction: string;
  distance: number;
};

type Coord = {
  x: number;
  y: number;
};

export function getData(): Step[] {
  return read(2022, 9).map((line) => {
    return {
      direction: line[0],
      distance: Number(line[1]),
    };
  });
}

export function getTailPositions(
  motions: Step[],
  ropeLength: number
): Set<string> {
  const knots = new Array(ropeLength).fill({ x: 0, y: 0 });
  const tailPositions = new Set<string>();

  for (const { direction, distance } of motions) {
    const step = {
      x: direction === "R" ? 1 : direction === "L" ? -1 : 0,
      y: direction === "U" ? 1 : direction === "D" ? -1 : 0,
    };

    for (let _ = 0; _ < distance; _++) {
      // Move the head of the rope.
      knots[0] = move(knots[0], step);

      // Move the rest of the rope.
      for (let i = 1; i < ropeLength; i++) {
        const dx = knots[i - 1].x - knots[i].x;
        const dy = knots[i - 1].y - knots[i].y;
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        // If a knot doesn't need to move, the knots behind it also don't.
        if (absDx < 2 && absDy < 2) break;

        knots[i] = move(knots[i], {
          x: dx === 0 ? 0 : dx / absDx,
          y: dy === 0 ? 0 : dy / absDy,
        });
      }

      // Track the tail position after each move.
      const tail = knots[ropeLength - 1];
      tailPositions.add(`${tail.x},${tail.y}`);
    }
  }

  return tailPositions;
}

function move(coord: Coord, vector: Coord): Coord {
  return {
    x: coord.x + vector.x,
    y: coord.y + vector.y,
  };
}
