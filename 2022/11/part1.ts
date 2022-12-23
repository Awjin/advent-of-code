import { getData, monkeyBusiness } from "./utils";

const monkeys = getData();

const result = monkeyBusiness(monkeys, 20, (worryLevel: number) =>
  Math.floor(worryLevel / 3)
);

console.log(result);
