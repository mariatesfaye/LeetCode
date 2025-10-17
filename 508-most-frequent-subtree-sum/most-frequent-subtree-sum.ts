function findFrequentTreeSum(root: TreeNode | null): number[] {
    if (!root) return [];

    const countMap = new Map<number, number>();
    let maxFreq = 0;

    function dfs(node: TreeNode | null): number {
        if (!node) return 0;

        const leftSum = dfs(node.left);
        const rightSum = dfs(node.right);

        const subtreeSum = node.val + leftSum + rightSum;

        const freq = (countMap.get(subtreeSum) || 0) + 1;
        countMap.set(subtreeSum, freq);

        maxFreq = Math.max(maxFreq, freq);

        return subtreeSum;
    }

    dfs(root);

    const result: number[] = [];
    for (const [sum, freq] of countMap.entries()) {
        if (freq === maxFreq) {
            result.push(sum);
        }
    }

    return result;
}
