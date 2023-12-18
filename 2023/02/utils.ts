import { read } from "../../utils/input";

export type Cubes = {
  r: number;
  g: number;
  b: number;
};

type Game = {
  id: number;
  subsets: Cubes[];
};

export function getData(): Game[] {
  return read(2023, 2, { preserveSpaces: true }).map(([line]) => {
    const id = Number(line.match(/(\d+):/)![1]);

    const subsets = line.split(";").map((subset) => {
      const info: Cubes = { r: 0, g: 0, b: 0 };
      const matches = subset.matchAll(/(\d+) ([rgb])/g);
      for (const [_, count, color] of matches) {
        info[color as "r" | "g" | "b"] = Number(count);
      }
      return info;
    });

    return {
      id,
      subsets,
    };
  });
}
