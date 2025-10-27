function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {

    function isSameTree(s: TreeNode | null, t: TreeNode | null): boolean {
        if (!s && !t) return true; 
        if (!s || !t) return false; 
        if (s.val !== t.val) return false;
        return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
    }

    if (!root) return false; 
    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
