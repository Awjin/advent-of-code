import { Dir, readDisk } from "./utils";

const root = readDisk();

let sum = 0;

function sumSmallDirs(dirs: Dir[]) {
  for (const { size, children } of dirs) {
    if (size <= 100000) sum += size;
    sumSmallDirs(children);
  }
}

sumSmallDirs(root.children);

console.log(sum);
