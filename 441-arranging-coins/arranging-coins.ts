function arrangeCoins(n: number): number {
    let left = 0;
    let right = n;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const coins = (mid * (mid + 1)) / 2;

        if (coins === n) return mid;
        else if (coins < n) left = mid + 1;
        else right = mid - 1;
    }

    return right;
}
