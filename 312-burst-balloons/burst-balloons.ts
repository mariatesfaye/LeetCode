function maxCoins(nums: number[]): number {
    const n = nums.length;
    const balloons = [1, ...nums, 1];
    const dp: number[][] = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0));

    for (let length = 2; length <= n + 1; length++) {
        for (let left = 0; left + length <= n + 1; left++) {
            let right = left + length;
            for (let i = left + 1; i < right; i++) {
                const coins = dp[left][i] + balloons[left] * balloons[i] * balloons[right] + dp[i][right];
                dp[left][right] = Math.max(dp[left][right], coins);
            }
        }
    }

    return dp[0][n + 1];
}
