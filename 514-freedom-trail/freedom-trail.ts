function findRotateSteps(ring: string, key: string): number {
    const m = ring.length;
    const n = key.length;

    const charIndices = new Map<string, number[]>();
    for (let i = 0; i < m; i++) {
        const c = ring[i];
        if (!charIndices.has(c)) {
            charIndices.set(c, []);
        }
        charIndices.get(c)!.push(i);
    }

    const memo = new Map<string, number>();

    const getDistance = (from: number, to: number): number => {
        const dist = Math.abs(from - to);
        return Math.min(dist, m - dist);
    };

    const dp = (ringPos: number, keyIndex: number): number => {
        if (keyIndex === n) return 0;

        const memoKey = `${ringPos},${keyIndex}`;
        if (memo.has(memoKey)) return memo.get(memoKey)!;

        let minSteps = Infinity;
        const targetChar = key[keyIndex];
        const positions = charIndices.get(targetChar)!;

        for (const pos of positions) {
            const rotateSteps = getDistance(ringPos, pos);
            const pressSteps = 1; 
            const totalSteps = rotateSteps + pressSteps + dp(pos, keyIndex + 1);
            minSteps = Math.min(minSteps, totalSteps);
        }

        memo.set(memoKey, minSteps);
        return minSteps;
    };

    return dp(0, 0);
}
