class Solution(object):
    def orderOfLargestPlusSign(self, n, mines):
        """
        :type n: int
        :type mines: List[List[int]]
        :rtype: int
        """
        grid = [[1] * n for _ in range(n)]
        for x, y in mines:
            grid[x][y] = 0
        dp = [[0] * n for _ in range(n)]
        for i in range(n):
            count = 0
            for j in range(n):
                count = count + 1 if grid[i][j] == 1 else 0
                dp[i][j] = count
            count = 0
            for j in range(n-1, -1, -1):
                count = count + 1 if grid[i][j] == 1 else 0
                dp[i][j] = min(dp[i][j], count)
        for j in range(n):
            count = 0
            for i in range(n):
                count = count + 1 if grid[i][j] == 1 else 0
                dp[i][j] = min(dp[i][j], count)
            count = 0
            for i in range(n-1, -1, -1):
                count = count + 1 if grid[i][j] == 1 else 0
                dp[i][j] = min(dp[i][j], count)
        return max(max(row) for row in dp)
