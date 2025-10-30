# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

from collections import defaultdict

class Solution(object):
    def findDuplicateSubtrees(self, root):
        """
        :type root: TreeNode
        :rtype: List[TreeNode]
        """
        subtree_count = defaultdict(int)
        result = []

        def serialize(node):
            if not node:
                return "#"
            
            left_serial = serialize(node.left)
            right_serial = serialize(node.right)

            serial = "{},{},{}".format(node.val, left_serial, right_serial)
            
            subtree_count[serial] += 1
            
            if subtree_count[serial] == 2:
                result.append(node)
            
            return serial

        serialize(root)
        return result
