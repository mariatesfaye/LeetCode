function convertBST(root: TreeNode | null): TreeNode | null {
    let sum = 0;

    function reverseInOrder(node: TreeNode | null): void {
        if (!node) return;

        reverseInOrder(node.right);

        sum += node.val;
        node.val = sum;

        reverseInOrder(node.left);
    }

    reverseInOrder(root);
    return root;
}
