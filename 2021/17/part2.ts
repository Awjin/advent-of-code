import { distance, getData, Probe } from "./utils";

const target = getData();

let xMinInitVelocity = 0;
while (distance(xMinInitVelocity) < target.topLeft.x) {
  xMinInitVelocity++;
}
const xMaxInitVelocity = target.bottomRight.x;
const yMinInitVelocity = target.bottomRight.y;
const yMaxInitVelocity = -yMinInitVelocity - 1;

const accurateLaunches = new Set<string>();

for (let x = xMinInitVelocity; x <= xMaxInitVelocity; x++) {
  for (let y = yMinInitVelocity; y <= yMaxInitVelocity; y++) {
    const probe = new Probe(x, y);
    while (target.reachableFrom(probe.coords)) {
      probe.move();
      if (target.contains(probe.coords)) {
        accurateLaunches.add(`${probe.xInitVelocity},${probe.yInitVelocity}`);
      }
    }
  }
}

console.log(accurateLaunches.size);
