import { readInput } from "../utils";

export interface Node {
  row: number;
  col: number;
  val: number;
  visited: boolean;
}

export function findLocalMins(nodes: Node[][]): Node[] {
  const mins = [];
  for (let row = 0; row < nodes.length; row++) {
    for (let col = 0; col < nodes[row].length; col++) {
      const curr = nodes[row][col];
      const neighbors = findNeighbors(nodes, curr);
      if (neighbors.some((neighbor) => neighbor.val <= curr.val)) continue;
      mins.push(curr);
    }
  }
  return mins;
}

export function findNeighbors(nodes: Node[][], curr: Node): Node[] {
  const neighbors = [];
  const { row, col } = curr;
  if (row >= 1) neighbors.push(nodes[row - 1][col]);
  if (col >= 1) neighbors.push(nodes[row][col - 1]);
  if (row < nodes.length - 1) neighbors.push(nodes[row + 1][col]);
  if (col < nodes[row].length - 1) neighbors.push(nodes[row][col + 1]);
  return neighbors;
}

export function getData(): Node[][] {
  const nodes: Node[][] = [];
  readInput(9).forEach((line, i) => {
    const row: Node[] = [];
    line[0].split("").forEach((num, j) => {
      row.push({
        row: i,
        col: j,
        val: parseInt(num),
        visited: false,
      });
    });
    nodes.push(row);
  });
  return nodes;
}
