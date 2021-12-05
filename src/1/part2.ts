import { getData } from "./utils";

const sonarData = getData();

const windowSize = 3;
let largerThanPrev = 0;
for (let i = 0; i < sonarData.length - windowSize; i++) {
  if (sonarData[i + windowSize] > sonarData[i]) {
    largerThanPrev++;
  }
}

console.log(largerThanPrev);
