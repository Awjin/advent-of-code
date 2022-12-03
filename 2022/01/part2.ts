import { calories } from "./utils";

const topThree = calories.sort((a, b) => b - a).slice(0, 3);
const total = topThree.reduce((a, b) => a + b);

console.log(total);
