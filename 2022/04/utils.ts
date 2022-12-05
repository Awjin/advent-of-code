import { read } from "../../utils/input";

type Duty = {
  start: number;
  end: number;
};

export function getData(): Duty[][] {
  return read(2022, 4).map(([line]) => {
    const pair = line.split(",");
    return pair.map((elf) => {
      const [start, end] = elf.split("-");
      return { start: Number(start), end: Number(end) };
    });
  });
}
