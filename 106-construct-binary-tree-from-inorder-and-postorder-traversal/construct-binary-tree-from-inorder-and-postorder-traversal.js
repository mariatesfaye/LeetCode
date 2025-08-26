/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!inorder || !postorder || inorder.length !== postorder.length) return null;

    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    function helper(left, right) {
        if (left > right) return null;

        const rootVal = postorder[postIndex--];
        const root = new TreeNode(rootVal);

        const index = inorderMap.get(rootVal);

        root.right = helper(index + 1, right);
        root.left = helper(left, index - 1);

        return root;
    }

    return helper(0, inorder.length - 1);
};