import { read } from "../../utils/input";

export interface Cpu {
  cycle: number;
  registerX: number;
}

export function getData(): string[][] {
  return read(2022, 10);
}

export function exec(ops: string[][], beforeEach: (cpu: Cpu) => void): void {
  let cpu = {
    cycle: 1,
    registerX: 1,
  };

  for (const op of ops) {
    switch (op[0]) {
      case "noop":
        cpu = tick();
        break;
      case "addx":
        cpu = tick();
        cpu = tick();
        cpu = {
          cycle: cpu.cycle,
          registerX: cpu.registerX + Number(op[1]),
        };
        break;
    }
  }

  function tick(): Cpu {
    beforeEach(cpu);
    return {
      cycle: cpu.cycle + 1,
      registerX: cpu.registerX,
    };
  }
}
