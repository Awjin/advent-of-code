import { findCheapestPath, getData, processSearchSpace } from "./utils";

const tile = getData();

const cave: number[][] = [];
const tileSize = tile.length;
const caveSize = tileSize * 5;
for (let row = 0; row < caveSize; row++) {
  cave.push([]);
  for (let col = 0; col < caveSize; col++) {
    const originalCost = tile[row % tileSize][col % tileSize];
    let cost =
      originalCost + Math.floor(row / tileSize) + Math.floor(col / tileSize);
    if (cost > 9) cost = cost % 9 || 9;
    cave[row].push(cost);
  }
}

const nodes = processSearchSpace(cave);

console.log(findCheapestPath(nodes));
