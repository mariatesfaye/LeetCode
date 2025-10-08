function maxEnvelopes(envelopes: number[][]): number {
    envelopes.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }
        return a[0] - b[0];
    });

    const heights = envelopes.map(e => e[1]);

    const tails: number[] = [];
    for (const height of heights) {
        let left = 0, right = tails.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < height) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (left === tails.length) {
            tails.push(height);
        } else {
            tails[left] = height;
        }
    }

    return tails.length;
}
