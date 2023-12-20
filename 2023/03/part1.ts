import { getData } from "./utils";

const components = getData();

const sum = components
  .map(({ parts }) => parts.reduce((a, b) => a + b))
  .reduce((a, b) => a + b);

console.log(sum);
