function findMinHeightTrees(n: number, edges: number[][]): number[] {
    if (n === 1) return [0];

    const graph: number[][] = Array.from({ length: n }, () => []);
    const degree: number[] = new Array(n).fill(0);

    for (const [a, b] of edges) {
        graph[a].push(b);
        graph[b].push(a);
        degree[a]++;
        degree[b]++;
    }

    let leaves: number[] = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) leaves.push(i);
    }

    let remainingNodes = n;
    while (remainingNodes > 2) {
        remainingNodes -= leaves.length;
        const newLeaves: number[] = [];

        for (const leaf of leaves) {
            for (const neighbor of graph[leaf]) {
                degree[neighbor]--;
                if (degree[neighbor] === 1) {
                    newLeaves.push(neighbor);
                }
            }
        }
        leaves = newLeaves;
    }

    return leaves;
}
