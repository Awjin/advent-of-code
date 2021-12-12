import { addEnergy, getData, resolveFlashes } from "./utils";

const octopodes = getData();

let step = 0;
while (true) {
  const flashed = addEnergy(octopodes);
  resolveFlashes(octopodes, flashed);
  step++;
  if (
    octopodes.flatMap((row) => row).every((octopus) => octopus.energy === 0)
  ) {
    console.log(step);
    break;
  }
}
