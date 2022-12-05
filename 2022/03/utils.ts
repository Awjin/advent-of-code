import { read } from "../../utils/input";

export function getData(): number[][] {
  return read(2022, 3).map(([rucksack]) =>
    rucksack
      .split("")
      .map(
        (item) => item.charCodeAt(0) - (item.toUpperCase() === item ? 38 : 96)
      )
  );
}
