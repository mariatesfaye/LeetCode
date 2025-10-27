function updateMatrix(mat: number[][]): number[][] {
    const m = mat.length;
    const n = mat[0].length;
    const dist = Array.from({ length: m }, () => Array(n).fill(Infinity));
    const queue: [number, number][] = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                dist[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (queue.length > 0) {
        const [r, c] = queue.shift()!;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 && nr < m &&
                nc >= 0 && nc < n &&
                dist[nr][nc] > dist[r][c] + 1
            ) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    return dist;
}
