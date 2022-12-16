import { read } from "../../utils/input";

export function getData(): { trees: number[][]; rows: number; cols: number } {
  const trees = read(2022, 8).map(([line]) => line.split("").map(Number));
  return {
    trees,
    rows: trees.length,
    cols: trees[0].length,
  };
}
