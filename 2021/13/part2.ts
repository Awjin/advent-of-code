import { deserialize, fold, getData } from "./utils";

let { dots, folds } = getData();

for (const { direction, crease } of folds) {
  dots = fold(dots, direction, crease);
}

const page: string[][] = [];
for (const dot of dots) {
  const [x, y] = deserialize(dot);
  page[y] = page[y] ?? [];
  page[y][x] = "##";
}

let text = "";
for (const row of page) {
  for (const col of row) {
    text += col ?? "  ";
  }
  text += "\n";
}

console.log(text);
