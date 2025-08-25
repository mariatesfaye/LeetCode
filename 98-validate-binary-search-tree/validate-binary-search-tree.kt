/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun isValidBST(root: TreeNode?): Boolean {
        return helper(root, null, null)
    }
    
    private fun helper(node: TreeNode?, min: Int?, max: Int?): Boolean {
        if (node == null) return true
        
        val value = node.`val`

        if (min != null && value <= min) return false
        if (max != null && value >= max) return false

        if (!helper(node.left, min, value)) return false

        if (!helper(node.right, value, max)) return false
        
        return true
    }
}
