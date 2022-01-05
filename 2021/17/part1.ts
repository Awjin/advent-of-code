import { distance, getData } from "./utils";

const target = getData();
const velocity = -target.bottomRight.y - 1;

console.log(distance(velocity));
