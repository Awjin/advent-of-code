import { getData, getElementRange } from "./utils";

const { template, rules } = getData();

console.log(getElementRange(template, rules, 40));
