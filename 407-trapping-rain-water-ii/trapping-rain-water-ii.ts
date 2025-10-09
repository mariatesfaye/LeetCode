type Cell = [number, number, number]; 

function trapRainWater(heightMap: number[][]): number {
    const m = heightMap.length;
    const n = heightMap[0].length;
    if (m < 3 || n < 3) return 0; 

    const visited = Array.from({ length: m }, () => Array(n).fill(false));
    const heap: Cell[] = [];

    const compare = (a: Cell, b: Cell) => a[2] - b[2];

    for (let i = 0; i < m; i++) {
        heap.push([i, 0, heightMap[i][0]]);
        heap.push([i, n - 1, heightMap[i][n - 1]]);
        visited[i][0] = true;
        visited[i][n - 1] = true;
    }
    for (let j = 1; j < n - 1; j++) {
        heap.push([0, j, heightMap[0][j]]);
        heap.push([m - 1, j, heightMap[m - 1][j]]);
        visited[0][j] = true;
        visited[m - 1][j] = true;
    }

    heap.sort(compare);

    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let trapped = 0;

    while (heap.length > 0) {
        const [x, y, h] = heap.shift()!;

        for (let [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;

            if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny]) {
                visited[nx][ny] = true;
                const nh = heightMap[nx][ny];
                if (nh < h) {
                    trapped += h - nh;
                }
                heap.push([nx, ny, Math.max(nh, h)]);
                heap.sort(compare); 
            }
        }
    }

    return trapped;
}
