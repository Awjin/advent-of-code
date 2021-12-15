import { read } from "../../utils/input";

/**
 * Given a set of polymerization rules, we can generate the polymerization tree
 * tree for a polymer. For example, take the following rules:
 *
 *   AA -> B
 *   AB -> A
 *   BA -> A
 *
 * For the polymer AA, this generates the following tree (where inserted
 * elements are shown lower-cased):
 *
 *   Step 0:       AA
 *                /  \
 *   Step 1:    Ab   bA     ==> inserted: [b]
 *             / \   / \
 *   Step 2:  Aa aB Ba aA   ==> inserted: [a, a]
 *                ...
 *
 * Performing a level-order traversal of the tree gives us the element count:
 *   - The root contains elements { A: 2 }.
 *   - After step 1, the count is { A: 2, B: 1 }.
 *   - After step 2, the count is { A: 4, B: 1 }.
 *
 * Repeat this process for each pair contained in the template.
 */
export function getElementRange(
  template: string,
  rules: Record<string, string>,
  steps: number
): number {
  const elementCounts: Record<string, number> = {};

  // Count each element in the template.
  for (const element of template) {
    elementCounts[element] = (elementCounts[element] ?? 0) + 1;
  }

  // Count each inserted element.
  for (let i = 0; i < template.length - 1; i++) {
    const pair = template.slice(i, i + 2);
    levelOrderTraversal({ [pair]: 1 });
  }

  function levelOrderTraversal(currLevel: Record<string, number>) {
    for (let i = 0; i < steps; i++) {
      const nextLevel: Record<string, number> = {};
      for (const [pair, count] of Object.entries(currLevel)) {
        const insertion = rules[pair];
        elementCounts[insertion] = (elementCounts[insertion] ?? 0) + count;
        const leftChild = `${pair[0]}${insertion}`;
        const rightChild = `${insertion}${pair[1]}`;
        nextLevel[leftChild] = (nextLevel[leftChild] ?? 0) + count;
        nextLevel[rightChild] = (nextLevel[rightChild] ?? 0) + count;
      }
      currLevel = nextLevel;
    }
  }

  const sorted = Object.values(elementCounts).sort((a, b) => a - b);
  return sorted[sorted.length - 1] - sorted[0];
}

export function getData(): { template: string; rules: Record<string, string> } {
  const input = read(2021, 14);
  const template = input[0][0];
  const rules: Record<string, string> = {};
  input.slice(1).forEach((line) => {
    rules[line[0]] = line[2];
  });
  return { template, rules };
}
