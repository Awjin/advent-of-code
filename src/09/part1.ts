import { findLocalMins, getData } from "./utils";

const map = getData();

console.log(findLocalMins(map).reduce((acc, node) => acc + node.val + 1, 0));
