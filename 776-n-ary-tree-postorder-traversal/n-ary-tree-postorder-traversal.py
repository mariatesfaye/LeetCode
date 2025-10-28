class Node(object):
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []

class Solution(object):
    def postorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        res = []

        def dfs(node):
            if not node:
                return
            for child in node.children:
                dfs(child)
            res.append(node.val)

        dfs(root)
        return res
