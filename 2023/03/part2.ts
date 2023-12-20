import { getData } from "./utils";

const components = getData();

const sum = components
  .filter(({ type, parts }) => type === "*" && parts.length === 2)
  .map(({ parts }) => parts[0] * parts[1])
  .reduce((a, b) => a + b);

console.log(sum);
