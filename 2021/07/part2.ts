import { getData } from "./utils";

const crabs = getData();

let minFuel = Infinity;
for (const target of crabs) {
  let fuel = 0;
  for (const crab of crabs) {
    const distance = Math.abs(target - crab);
    // Sum of arithmetic sequence
    // https://en.m.wikipedia.org/wiki/Arithmetic_progression
    fuel += (distance * (distance + 1)) / 2;
  }
  minFuel = Math.min(fuel, minFuel);
}

console.log(minFuel);
