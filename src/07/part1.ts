import { getData } from "./utils";

const crabs = getData();

let minFuel = Infinity;
for (const target of crabs) {
  let fuel = 0;
  for (const crab of crabs) {
    fuel += Math.abs(target - crab);
  }
  minFuel = Math.min(fuel, minFuel);
}

console.log(minFuel);
