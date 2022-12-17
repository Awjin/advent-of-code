import { Cpu, getData, exec } from "./utils";

const ops = getData();

const crt = new Array(6).fill("");
const crtWidth = 40;

function paintCrt(cpu: Cpu) {
  const idx = cpu.cycle - 1;
  const col = idx % crtWidth;
  const row = Math.floor(idx / crtWidth);
  const sprite = [cpu.registerX - 1, cpu.registerX, cpu.registerX + 1];
  crt[row] += sprite.includes(col) ? "#" : ".";
}

exec(ops, paintCrt);

console.log(crt);
