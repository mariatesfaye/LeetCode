function wiggleSort(nums: number[]): void {
    const n = nums.length;

    const sorted = [...nums].sort((a, b) => a - b);
    const median = sorted[Math.floor((n - 1) / 2)];

    const virtualIndex = (i: number): number => (1 + 2 * i) % (n | 1);

    let left = 0, i = 0, right = n - 1;

    while (i <= right) {
        const vi = virtualIndex(i);
        const vleft = virtualIndex(left);
        const vright = virtualIndex(right);

        if (nums[vi] > median) {
            [nums[vi], nums[vleft]] = [nums[vleft], nums[vi]];
            i++;
            left++;
        } else if (nums[vi] < median) {
            [nums[vi], nums[vright]] = [nums[vright], nums[vi]];
            right--;
        } else {
            i++;
        }
    }
}
