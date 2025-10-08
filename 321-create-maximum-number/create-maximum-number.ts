function maxNumber(nums1: number[], nums2: number[], k: number): number[] {
    function getMaxSubsequence(nums: number[], k: number): number[] {
        const stack: number[] = [];
        let drop = nums.length - k;

        for (const num of nums) {
            while (drop > 0 && stack.length && stack[stack.length - 1] < num) {
                stack.pop();
                drop--;
            }
            stack.push(num);
        }

        return stack.slice(0, k);
    }

    function merge(a: number[], b: number[]): number[] {
        const res: number[] = [];
        while (a.length || b.length) {
            if (a > b) {
                res.push(a.shift()!);
            } else {
                res.push(b.shift()!);
            }
        }
        return res;
    }

    let best: number[] = [];

    const start = Math.max(0, k - nums2.length);
    const end = Math.min(k, nums1.length);

    for (let i = start; i <= end; i++) {
        const part1 = getMaxSubsequence(nums1, i);
        const part2 = getMaxSubsequence(nums2, k - i);
        const candidate = merge([...part1], [...part2]);
        if (candidate > best) {
            best = candidate;
        }
    }

    return best;
}
