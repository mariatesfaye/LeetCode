# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution(object):
    def printTree(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[str]]
        """
        def getHeight(node):
            if not node:
                return -1
            return 1 + max(getHeight(node.left), getHeight(node.right))
        
        height = getHeight(root)
        m = height + 1
        n = 2 ** (height + 1) - 1
        res = [["" for _ in range(n)] for _ in range(m)]
        def fill(node, r, left, right):
            if not node:
                return
            mid = (left + right) // 2
            res[r][mid] = str(node.val)
            fill(node.left, r + 1, left, mid - 1)
            fill(node.right, r + 1, mid + 1, right)
        
        fill(root, 0, 0, n - 1)
        return res
