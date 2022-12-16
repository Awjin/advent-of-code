import { Dir, readDisk } from "./utils";

const root = readDisk();

const diskSize = 70000000;
const updateSize = 30000000;
const freeSpace = diskSize - root.size;
const neededSpace = updateSize - freeSpace;

let deletionTarget: Dir = {
  size: Infinity,
  name: "",
  children: [],
};

function findDeletionTarget(dirs: Dir[]) {
  for (const dir of dirs) {
    if (dir.size < neededSpace) continue;
    if (dir.size < deletionTarget.size) deletionTarget = dir;
    findDeletionTarget(dir.children);
  }
}

findDeletionTarget(root.children);

console.log(deletionTarget.size);
