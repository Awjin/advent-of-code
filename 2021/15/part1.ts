import { findCheapestPath, getData, processSearchSpace } from "./utils";

const cave = getData();
const nodes = processSearchSpace(cave);

console.log(findCheapestPath(nodes));
