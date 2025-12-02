from collections import deque

class Solution(object):
    def widthOfBinaryTree(self, root):
        if not root:
            return 0

        max_width = 0
        queue = deque([(root, 0)])

        while queue:
            level_len = len(queue)
            _, first_idx = queue[0]

            for _ in range(level_len):
                node, idx = queue.popleft()
                idx -= first_idx

                if node.left:
                    queue.append((node.left, 2 * idx))
                if node.right:
                    queue.append((node.right, 2 * idx + 1))

            last_idx = idx
            max_width = max(max_width, last_idx + 1)

        return max_width
