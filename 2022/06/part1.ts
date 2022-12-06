import { findDistinctSequence, getData } from "./utils";

const stream = getData();

console.log(findDistinctSequence(stream, 4));
