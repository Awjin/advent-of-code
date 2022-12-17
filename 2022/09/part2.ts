import { getData, getTailPositions } from "./utils";

const motions = getData();
const positions = getTailPositions(motions, 10);

console.log(positions.size);
