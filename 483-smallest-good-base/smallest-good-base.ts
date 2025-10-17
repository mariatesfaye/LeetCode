function smallestGoodBase(n: string): string {
    const num = BigInt(n);

    for (let m = 63; m >= 1; m--) {
        const k = findBase(num, m);
        if (k !== -1n) {
            return k.toString();
        }
    }

    return (num - 1n).toString();

    function findBase(n: bigint, m: number): bigint {
        let left = 2n;
        let right = n - 1n;

        while (left <= right) {
            const mid = (left + right) / 2n;
            const sum = geometricSum(mid, BigInt(m));

            if (sum === n) {
                return mid;
            } else if (sum < n) {
                left = mid + 1n;
            } else {
                right = mid - 1n;
            }
        }

        return -1n;
    }

    function geometricSum(k: bigint, m: bigint): bigint {
        let sum = 1n;
        let curr = 1n;

        for (let i = 1n; i <= m; i++) {
            curr *= k;
            sum += curr;
            if (sum < 0n || sum > 1e20) break; 
        }

        return sum;
    }
}
