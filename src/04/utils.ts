import { readInput } from "../utils";

class Board {
  static size = 5;

  isBingo = false;

  private readonly squares: Record<
    string,
    {
      row: number;
      col: number;
    }
  > = {};

  private readonly marked: {
    row: Record<string, number>;
    col: Record<string, number>;
  } = { row: {}, col: {} };

  constructor(rows: number[][]) {
    rows.forEach((row, i) => {
      row.forEach((num, j) => {
        this.squares[num] = {
          row: i,
          col: j,
        };
      });
    });
  }

  mark(num: number): void {
    if (this.isBingo) return;

    const square = this.squares[num];
    if (square === undefined) return;

    const { row, col } = square;
    this.marked.row[row] = (this.marked.row[row] ?? 0) + 1;
    this.marked.col[col] = (this.marked.col[col] ?? 0) + 1;
    this.isBingo = this.marked.row[row] === 5 || this.marked.col[col] === 5;
    delete this.squares[num];
  }

  sumUnmarked(): number {
    return Object.keys(this.squares)
      .map((num) => parseInt(num))
      .reduce((accumulator, num) => accumulator + num);
  }
}

export function getData(): { calledNums: number[]; boards: Board[] } {
  const input = readInput(4);

  const calledNums = input[0][0].split(",").map((num) => parseInt(num));

  const boards = [];
  for (let i = 1; i <= input.length - Board.size; i += Board.size) {
    boards.push(
      new Board(
        input
          .slice(i, i + Board.size)
          .map((row) => row.map((num) => parseInt(num)))
      )
    );
  }

  return {
    calledNums,
    boards,
  };
}
