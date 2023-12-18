import { getData, sum } from "./utils";

const lines = getData().map((x) =>
  x
    .replace(/one/g, "one1one")
    .replace(/two/g, "two2two")
    .replace(/three/g, "three3three")
    .replace(/four/g, "four4four")
    .replace(/five/g, "five5five")
    .replace(/six/g, "six6six")
    .replace(/seven/g, "seven7seven")
    .replace(/eight/g, "eight8eight")
    .replace(/nine/g, "nine9nine")
);

console.log(sum(lines));
