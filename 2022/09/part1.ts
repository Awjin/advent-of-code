import { getData, getTailPositions } from "./utils";

const motions = getData();
const positions = getTailPositions(motions, 2);

console.log(positions.size);
