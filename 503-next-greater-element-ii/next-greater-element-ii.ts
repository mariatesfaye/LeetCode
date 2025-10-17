function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length;
    const ans = new Array(n).fill(-1);
    const stack: number[] = []; 

    for (let i = 0; i < 2 * n; i++) {
        const idx = i % n;
        while (stack.length && nums[stack[stack.length - 1]] < nums[idx]) {
            const top = stack.pop()!;
            ans[top] = nums[idx];
        }
        if (i < n) {
            stack.push(idx);
        }
    }

    return ans;
}
