import { getData } from "./utils";

const { trees, rows, cols } = getData();

let visible = 0;

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const tree = trees[row][col];
    let blockedCardinals = 0;

    // Check north.
    for (let i = row - 1; i >= 0; i--) {
      if (trees[i][col] < tree) continue;
      blockedCardinals++;
      break;
    }

    // Check south.
    for (let i = row + 1; i < rows; i++) {
      if (trees[i][col] < tree) continue;
      blockedCardinals++;
      break;
    }

    // Check east.
    for (let i = col + 1; i < cols; i++) {
      if (trees[row][i] < tree) continue;
      blockedCardinals++;
      break;
    }

    // Check west.
    for (let i = col - 1; i >= 0; i--) {
      if (trees[row][i] < tree) continue;
      blockedCardinals++;
      break;
    }

    if (blockedCardinals < 4) visible++;
  }
}

console.log(visible);
