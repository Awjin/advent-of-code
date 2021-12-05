import { getData } from "./utils";

const sonarData = getData();

let largerThanPrev = 0;
for (let i = 1; i < sonarData.length; i++) {
  if (sonarData[i] > sonarData[i - 1]) {
    largerThanPrev++;
  }
}

console.log(largerThanPrev);
