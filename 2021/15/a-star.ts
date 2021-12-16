export class Node {
  gScore = Infinity;
  fScore = Infinity;

  constructor(public metadata?: any) {}
}

class PriorityQueue {
  // TODO: Technically, this should be a binary heap to speed up inserts.
  private readonly queue: Node[] = [];
  private readonly inQueue = new Set<Node>();

  get filled(): boolean {
    return this.queue.length > 0;
  }

  add(node: Node): void {
    if (this.inQueue.has(node)) return;
    this.inQueue.add(node);
    const idx = this.queue.findIndex((queued) => node.fScore < queued.fScore);
    this.queue.splice(idx > -1 ? idx : this.queue.length, 0, node);
  }

  shift(): Node {
    const node = this.queue.shift()!;
    this.inQueue.delete(node);
    return node;
  }
}

/** https://en.m.wikipedia.org/wiki/A*_search_algorithm#Pseudocode */
export function aStar(
  start: Node,
  finish: Node,
  neighbors: (node: Node) => Node[],
  visitCost: (neighbor: Node) => number,
  heuristic: (neighbor: Node) => number
): number {
  const queue = new PriorityQueue();
  start.gScore = 0;
  queue.add(start);

  while (queue.filled) {
    const curr = queue.shift();
    if (curr === finish) return curr.gScore;

    for (const neighbor of neighbors(curr)) {
      const gScore = curr.gScore + visitCost(neighbor);
      if (gScore < neighbor.gScore) {
        neighbor.gScore = gScore;
        neighbor.fScore = gScore + heuristic(neighbor);
        queue.add(neighbor);
      }
    }
  }

  throw Error("Search failed.");
}
