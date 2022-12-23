import { getData, monkeyBusiness } from "./utils";

const monkeys = getData();

const result = monkeyBusiness(monkeys, 10000);

console.log(result);
