import { read } from "../../utils/input";

interface Fold {
  direction: "x" | "y";
  crease: number;
}

export function fold(
  dots: Set<string>,
  direction: "x" | "y",
  crease: number
): Set<string> {
  const newDots = new Set<string>();
  const idx = direction === "x" ? 0 : 1;
  for (const dot of dots) {
    const coords = deserialize(dot);
    if (coords[idx] > crease) {
      coords[idx] -= (coords[idx] - crease) * 2;
    }
    newDots.add(coords.join(","));
  }
  return newDots;
}

export function deserialize(dot: string): number[] {
  return dot.split(",").map(Number);
}

export function getData(): {
  dots: Set<string>;
  folds: Fold[];
} {
  const dots = new Set<string>();
  const folds: Fold[] = [];
  for (const line of read(2021, 13)) {
    if (line[0] === "fold") {
      const [direction, crease] = line[2].split("=");
      folds.push({
        direction: direction as "x" | "y",
        crease: Number(crease),
      });
    } else {
      dots.add(line[0]);
    }
  }
  return { dots, folds };
}
