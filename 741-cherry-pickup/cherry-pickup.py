class Solution(object):
    def cherryPickup(self, grid):
        n = len(grid)
        memo = {}

        def dp(r1, c1, r2):
            c2 = r1 + c1 - r2
            if r1 >= n or c1 >= n or r2 >= n or c2 >= n:
                return float('-inf')
            if grid[r1][c1] == -1 or grid[r2][c2] == -1:
                return float('-inf')
            if r1 == c1 == r2 == c2 == n-1:
                return grid[r1][c1]

            if (r1, c1, r2) in memo:
                return memo[(r1, c1, r2)]
            res = max(
                dp(r1+1, c1, r2+1),
                dp(r1+1, c1, r2),
                dp(r1, c1+1, r2+1),
                dp(r1, c1+1, r2)
            )

            if res == float('-inf'):
                memo[(r1, c1, r2)] = float('-inf')
                return float('-inf')

            ans = grid[r1][c1]
            if r1 != r2 or c1 != c2:
                ans += grid[r2][c2]

            memo[(r1, c1, r2)] = ans + res
            return memo[(r1, c1, r2)]

        return max(dp(0, 0, 0), 0)
