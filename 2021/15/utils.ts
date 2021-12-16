import { read } from "../../utils/input";
import { aStar, Node } from "./a-star";

export function findCheapestPath(nodes: Node[][]): number {
  const start = nodes[0][0];
  const lastRow = nodes[nodes.length - 1];
  const finish = lastRow[lastRow.length - 1];

  const neighbors = (node: Node) => getNeighbors(node, nodes);
  const visitCost = (neighbor: Node) => neighbor.metadata.cost;
  const heuristic = (neighbor: Node) => manhattanDistance(neighbor, finish);

  return aStar(start, finish, neighbors, visitCost, heuristic);
}

function getNeighbors(node: Node, nodes: Node[][]): Node[] {
  const neighbors = [];
  const deltas = [
    { row: -1, col: 0 },
    { row: 0, col: -1 },
    { row: 0, col: 1 },
    { row: 1, col: 0 },
  ];
  for (const delta of deltas) {
    const row = node.metadata.row + delta.row;
    const col = node.metadata.col + delta.col;
    if (nodes[row] === undefined) continue;
    if (nodes[row][col] === undefined) continue;
    neighbors.push(nodes[row][col]);
  }
  return neighbors;
}

function manhattanDistance(start: Node, finish: Node): number {
  const a = finish.metadata.row - start.metadata.row;
  const b = finish.metadata.col - start.metadata.col;
  return a + b;
}

export function getData(): number[][] {
  return read(2021, 15).map((line) => line[0].split("").map(Number));
}

export function processSearchSpace(cave: number[][]): Node[][] {
  return cave.map((costs, row) =>
    costs.map(
      (cost, col) =>
        new Node({
          row,
          col,
          cost,
        })
    )
  );
}
