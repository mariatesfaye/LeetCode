function countArrangement(n: number): number {
    let count = 0;
    const used = new Array(n + 1).fill(false);

    function backtrack(pos: number) {
        if (pos > n) {
            count++;
            return;
        }

        for (let num = 1; num <= n; num++) {
            if (!used[num] && (num % pos === 0 || pos % num === 0)) {
                used[num] = true;
                backtrack(pos + 1);
                used[num] = false; 
            }
        }
    }

    backtrack(1);
    return count;
}
