import { getData } from "./utils";

const commands = getData();

let x = 0;
let y = 0;
let aim = 0;
for (const { direction, distance } of commands) {
  switch (direction) {
    case "down":
      aim += distance;
      break;
    case "up":
      aim -= distance;
      break;
    case "forward":
      x += distance;
      y += distance * aim;
      break;
  }
}

console.log(x * y);
