import { calories } from "./utils";

const max = calories.sort((a, b) => b - a)[0];

console.log(max);
