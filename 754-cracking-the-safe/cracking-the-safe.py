class Solution(object):
    def crackSafe(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        visited = set()
        result = []
        start = "0" * (n - 1)
        def dfs(node):
            for digit in range(k):
                edge = node + str(digit)
                if edge not in visited:
                    visited.add(edge)
                    dfs(edge[1:])
                    result.append(str(digit))
        dfs(start)
        return start + "".join(result[::-1])
