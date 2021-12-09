import { getData } from "./utils";

const outputs = getData().flatMap((entries) => entries.outputs);

let distinguishables = 0;
for (const output of outputs) {
  if (
    output.length === 2 ||
    output.length === 3 ||
    output.length === 4 ||
    output.length === 7
  ) {
    distinguishables++;
  }
}

console.log(distinguishables);
