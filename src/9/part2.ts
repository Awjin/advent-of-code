import { findLocalMins, findNeighbors, getData, Node } from "./utils";

const map = getData();

const mins = findLocalMins(map);
const basins = mins.map((min) => getBasinSize(map, min));
const largestBasins = basins.sort((a, b) => b - a).slice(0, 3);

console.log(largestBasins.reduce((acc, size) => acc * size));

function getBasinSize(nodes: Node[][], min: Node): number {
  let size = 0;
  const queue = [min];
  while (queue.length > 0) {
    const curr = queue.shift()!;
    if (curr.visited || curr.val === 9) continue;
    curr.visited = true;
    queue.push(...findNeighbors(nodes, curr));
    size++;
  }
  return size;
}
