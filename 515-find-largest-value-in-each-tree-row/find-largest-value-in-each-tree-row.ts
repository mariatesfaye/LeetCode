function largestValues(root: TreeNode | null): number[] {
    if (!root) return [];

    const result: number[] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let maxVal = -Infinity;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;
            maxVal = Math.max(maxVal, node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(maxVal);
    }

    return result;
}
