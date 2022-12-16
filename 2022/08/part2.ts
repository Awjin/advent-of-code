import { getData } from "./utils";

const { trees, rows, cols } = getData();

let maxScenicScore = -Infinity;

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const tree = trees[row][col];
    const viewDistances = [0, 0, 0, 0];

    // Check north.
    for (let i = row - 1; i >= 0; i--) {
      viewDistances[0] = viewDistances[0] + 1;
      if (trees[i][col] >= tree) break;
    }

    // Check south.
    for (let i = row + 1; i < rows; i++) {
      viewDistances[1] = viewDistances[1] + 1;
      if (trees[i][col] >= tree) break;
    }

    // Check east.
    for (let i = col + 1; i < cols; i++) {
      viewDistances[2] = viewDistances[2] + 1;
      if (trees[row][i] >= tree) break;
    }

    // Check west.
    for (let i = col - 1; i >= 0; i--) {
      viewDistances[3] = viewDistances[3] + 1;
      if (trees[row][i] >= tree) break;
    }

    const scenicScore = viewDistances.reduce((a, b) => a * b);
    if (scenicScore > maxScenicScore) maxScenicScore = scenicScore;
  }
}

console.log(maxScenicScore);
