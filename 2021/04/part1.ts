import { getData } from "./utils";

console.log(solve());

function solve(): number | undefined {
  const { calledNums, boards } = getData();

  for (const calledNum of calledNums) {
    for (const board of boards) {
      board.mark(calledNum);
      if (board.isBingo) {
        return board.sumUnmarked() * calledNum;
      }
    }
  }
}
