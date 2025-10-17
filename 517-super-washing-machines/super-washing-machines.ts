function findMinMoves(machines: number[]): number {
    const total = machines.reduce((a, b) => a + b, 0);
    const n = machines.length;

    if (total % n !== 0) return -1;

    const target = total / n;
    let maxMoves = 0;
    let load = 0;

    for (let i = 0; i < n; i++) {
        const diff = machines[i] - target;
        load += diff;
        maxMoves = Math.max(maxMoves, Math.abs(load), diff);
    }

    return maxMoves;
}
