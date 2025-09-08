function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    const result: number[] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let rightMostVal = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!; 
            rightMostVal = node.val;    

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(rightMostVal);
    }

    return result;
}
