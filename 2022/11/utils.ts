import { read } from "../../utils/input";

type Monkey = {
  items: number[];
  inspect: (item: number) => number;
  target: (worryLevel: number) => number;
  inspectionCount: number;
};

export function getData(): Monkey[] {
  const data = read(2022, 11);
  const monkeys: Monkey[] = [];
  let bigNumManager = 1;

  function danglingNum(idx: number): number {
    return Number(data[idx].slice(-1));
  }

  for (let i = 0; i <= data.length - 6; i += 6) {
    const items = data[i + 1].slice(2).map((x) => Number(x.replace(/,/, "")));

    const [operator, operand] = data[i + 2].slice(-2);

    const divisor = danglingNum(i + 3);
    bigNumManager *= divisor;

    const pass = danglingNum(i + 4);
    const fail = danglingNum(i + 5);

    function inspect(item: number) {
      const x = operand === "old" ? item : Number(operand);
      const worryLevel = operator === "*" ? item * x : item + x;
      return worryLevel % bigNumManager;
    }

    function target(worryLevel: number) {
      return worryLevel % divisor === 0 ? pass : fail;
    }

    monkeys.push({
      items,
      inspect,
      target,
      inspectionCount: 0,
    });
  }

  return monkeys;
}

export function monkeyBusiness(
  monkeys: Monkey[],
  rounds: number,
  relieve?: (worryLevel: number) => number
): number {
  for (let _ = 0; _ < rounds; _++) {
    for (const monkey of monkeys) {
      for (const item of monkey.items) {
        monkey.inspectionCount++;

        let worryLevel = monkey.inspect(item);
        if (relieve) worryLevel = relieve(worryLevel);

        const next = monkey.target(worryLevel);
        monkeys[next].items.push(worryLevel);
      }
      monkey.items = [];
    }
  }

  return monkeys
    .map((x) => x.inspectionCount)
    .sort((a, b) => a - b)
    .slice(-2)
    .reduce((a, b) => a * b);
}
