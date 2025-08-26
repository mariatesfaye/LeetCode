/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder || !inorder || preorder.length !== inorder.length) return null;

    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let preIndex = 0;

    function helper(left, right) {
        if (left > right) return null;

        let rootVal = preorder[preIndex++];
        let root = new TreeNode(rootVal);

        let index = inorderMap.get(rootVal);

        root.left = helper(left, index - 1);
        root.right = helper(index + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
};