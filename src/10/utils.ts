import { readInput } from "../utils";

export class IllegalCharError extends Error {
  constructor(readonly char: string) {
    super();
  }
}

export class IncompleteError extends Error {
  constructor(readonly openers: string[]) {
    super();
  }
}

const openers = ["(", "[", "{", "<"];
const closers = [")", "]", "}", ">"];

export const syntax: Record<string, string> = {};
openers.forEach((opener, i) => {
  syntax[opener] = closers[i];
});

export function parse(line: string): void {
  const danglingOpeners = [];

  for (const char of line) {
    if (syntax[char]) {
      danglingOpeners.push(char);
      continue;
    }

    const opener = danglingOpeners.pop()!;
    if (syntax[opener] !== char) {
      throw new IllegalCharError(char);
    }
  }

  if (danglingOpeners.length > 0) {
    throw new IncompleteError(danglingOpeners);
  }
}

export function getData(): string[] {
  return readInput(10).flatMap((line) => line);
}
