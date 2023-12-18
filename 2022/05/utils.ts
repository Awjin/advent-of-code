import { read } from "../../utils/input";

type Instruction = {
  count: number;
  start: number;
  end: number;
};

export function getData(): { stacks: string[][]; procedure: Instruction[] } {
  const data = read(2022, 5, { preserveSpaces: true, preserveNewlines: true });
  const split = data.findIndex(([value]) => value === "\n");
  const firstHalf = data.slice(0, split - 1);
  const secondHalf = data.slice(split + 1);

  const rows = firstHalf.map(([line]) => {
    const fixedWidthColumns = /.{1,4}/g;
    const delimiters = /[\s+\[\]]/g;
    return line
      .match(fixedWidthColumns)!
      .map((column) => column.replace(delimiters, ""));
  });

  const stacks: string[][] = [];
  for (const row of rows.reverse()) {
    for (let i = 0; i < row.length; i++) {
      const crate = row[i];
      if (crate === "") continue;
      stacks[i] = [...(stacks[i] ?? []), crate];
    }
  }

  const procedure = secondHalf.map(([line]) => {
    const instruction = line.split(" ").map(Number);
    return {
      count: instruction[1],
      start: instruction[3] - 1,
      end: instruction[5] - 1,
    };
  });

  return { stacks, procedure };
}
