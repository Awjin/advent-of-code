import { getData } from "./utils";

const commands = getData();

let x = 0;
let y = 0;
for (const { direction, distance } of commands) {
  switch (direction) {
    case "down":
      y += distance;
      break;
    case "up":
      y -= distance;
      break;
    case "forward":
      x += distance;
      break;
  }
}

console.log(x * y);
