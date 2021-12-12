import { addEnergy, getData, resolveFlashes } from "./utils";

const octopodes = getData();

let flashCount = 0;
for (let i = 0; i < 100; i++) {
  const flashed = addEnergy(octopodes);
  flashCount += resolveFlashes(octopodes, flashed);
}

console.log(flashCount);
