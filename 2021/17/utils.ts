import { read } from "../../utils/input";

interface Coords {
  x: number;
  y: number;
}

class Target {
  constructor(readonly topLeft: Coords, readonly bottomRight: Coords) {}

  contains(coords: Coords): boolean {
    return (
      coords.x >= this.topLeft.x &&
      coords.x <= this.bottomRight.x &&
      coords.y <= this.topLeft.y &&
      coords.y >= this.bottomRight.y
    );
  }

  reachableFrom(coords: Coords): boolean {
    return coords.x <= this.bottomRight.x && coords.y >= this.bottomRight.y;
  }
}

export class Probe {
  coords: Coords = { x: 0, y: 0 };
  private xVelocity: number;
  private yVelocity: number;

  constructor(readonly xInitVelocity: number, readonly yInitVelocity: number) {
    this.xVelocity = this.xInitVelocity;
    this.yVelocity = this.yInitVelocity;
  }

  move(): void {
    this.coords.x += this.xVelocity;
    this.coords.y += this.yVelocity;
    this.xVelocity = Math.max(0, this.xVelocity - 1);
    this.yVelocity--;
  }
}

export function distance(velocity: number): number {
  // Sum of arithmetic sequence, where n == a_n == `velocity`.
  // https://en.m.wikipedia.org/wiki/Arithmetic_progression#Sum
  return (velocity * (1 + velocity)) / 2;
}

export function getData(): Target {
  const [xRange, yRange] = read(2021, 17)[0]
    .slice(2)
    .map((statement) =>
      statement
        .split("=")[1]
        .split("..")
        .map((num) => parseInt(num))
    );
  return new Target(
    { x: xRange[0], y: yRange[1] },
    { x: xRange[1], y: yRange[0] }
  );
}
