function calcEquation(
  equations: string[][],
  values: number[],
  queries: string[][]
): number[] {
  const graph = new Map<string, Map<string, number>>();

  for (let i = 0; i < equations.length; i++) {
    const [dividend, divisor] = equations[i];
    const value = values[i];

    if (!graph.has(dividend)) graph.set(dividend, new Map());
    if (!graph.has(divisor)) graph.set(divisor, new Map());

    graph.get(dividend)!.set(divisor, value);
    graph.get(divisor)!.set(dividend, 1 / value);
  }

  function dfs(
    start: string,
    end: string,
    visited: Set<string>
  ): number {
    if (!graph.has(start)) return -1;
    if (start === end) return 1;

    visited.add(start);

    const neighbors = graph.get(start)!;
    for (const [neighbor, val] of neighbors.entries()) {
      if (!visited.has(neighbor)) {
        const product = dfs(neighbor, end, visited);
        if (product !== -1) {
          return val * product;
        }
      }
    }

    return -1;
  }

  const results: number[] = [];

  for (const [start, end] of queries) {
    if (!graph.has(start) || !graph.has(end)) {
      results.push(-1);
    } else {
      results.push(dfs(start, end, new Set()));
    }
  }

  return results;
}
