function countNodes(root: TreeNode | null): number {
    if (!root) return 0;

    const getLeftHeight = (node: TreeNode | null): number => {
        let height = 0;
        while (node) {
            height++;
            node = node.left;
        }
        return height;
    };

    const getRightHeight = (node: TreeNode | null): number => {
        let height = 0;
        while (node) {
            height++;
            node = node.right;
        }
        return height;
    };

    const leftHeight = getLeftHeight(root);
    const rightHeight = getRightHeight(root);

    if (leftHeight === rightHeight) {
        return (1 << leftHeight) - 1; 
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
}
