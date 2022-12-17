import { Cpu, getData, exec } from "./utils";

const ops = getData();

let signal = 0;

function mergeSignal(cpu: Cpu) {
  const relevantCycles = [20, 60, 100, 140, 180, 220];
  if (relevantCycles.includes(cpu.cycle)) {
    signal += cpu.cycle * cpu.registerX;
  }
}

exec(ops, mergeSignal);

console.log(signal);
