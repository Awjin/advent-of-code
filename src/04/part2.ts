import { getData } from "./utils";

console.log(solve());

function solve(): number | undefined {
  const { boards, calledNums } = getData();

  let unfinished = boards;
  for (const calledNum of calledNums) {
    const temp = unfinished[0];
    unfinished = unfinished.filter((board) => {
      board.mark(calledNum);
      return !board.isBingo;
    });
    if (unfinished.length === 0) {
      return temp.sumUnmarked() * calledNum;
    }
  }
}
