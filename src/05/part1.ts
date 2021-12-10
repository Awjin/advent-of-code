import { getData, getOverlapCount } from "./utils";

console.log(
  getOverlapCount(
    getData().filter((line) => line.x1 === line.x2 || line.y1 === line.y2)
  )
);
