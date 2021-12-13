import { fold, getData } from "./utils";

const { dots, folds } = getData();

const { direction, crease } = folds[0];
const newDots = fold(dots, direction, crease);

console.log(newDots.size);
