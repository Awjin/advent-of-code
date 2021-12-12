import { read } from "../../utils/input";

export function countAllPaths(
  edges: Record<string, string[]>,
  specialRevisitAvailable = false,
  curr = "start",
  path: string[] = []
): number {
  if (curr === "end") return 1;

  const isSmall = curr === curr.toLowerCase();
  if (isSmall && path.includes(curr)) {
    if (specialRevisitAvailable && curr !== "start") {
      specialRevisitAvailable = false;
    } else {
      return 0;
    }
  }

  return edges[curr].reduce(
    (acc, neighbor) =>
      acc +
      countAllPaths(edges, specialRevisitAvailable, neighbor, [...path, curr]),
    0
  );
}

export function getData(): Record<string, string[]> {
  const edges: Record<string, string[]> = {};
  read(2021, 12).forEach((line) => {
    const [a, b] = line[0].split("-");
    edges[a] = edges[a] ?? [];
    edges[b] = edges[b] ?? [];
    edges[a].push(b);
    edges[b].push(a);
  });
  return edges;
}
