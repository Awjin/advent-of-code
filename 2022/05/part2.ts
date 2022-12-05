import { getData } from "./utils";

const { stacks, procedure } = getData();

for (const { count, start, end } of procedure) {
  const moved = stacks[start].slice(-count);
  stacks[start] = stacks[start].slice(0, -count);
  stacks[end] = [...stacks[end], ...moved];
}

const topCrates = stacks.map((stack) => stack.slice(-1));

console.log(topCrates.join(""));
