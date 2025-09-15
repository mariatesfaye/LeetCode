function summaryRanges(nums: number[]): string[] {
    const result: string[] = [];
    const n = nums.length;

    if (n === 0) return result;

    let start = nums[0];

    for (let i = 1; i <= n; i++) {
        if (i === n || nums[i] !== nums[i - 1] + 1) {
            if (start === nums[i - 1]) {
                result.push(`${start}`);
            } else {
                result.push(`${start}->${nums[i - 1]}`);
            }

            if (i < n) start = nums[i];
        }
    }

    return result;
}
