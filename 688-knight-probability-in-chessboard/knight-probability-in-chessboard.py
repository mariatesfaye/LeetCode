class Solution(object):
    def knightProbability(self, n, k, row, column):
        """
        :type n: int
        :type k: int
        :type row: int
        :type column: int
        :rtype: float
        """
        moves = [(2,1), (1,2), (-1,2), (-2,1),
                 (-2,-1), (-1,-2), (1,-2), (2,-1)]
        
        memo = {}
        
        def dp(r, c, moves_left):
            if r < 0 or r >= n or c < 0 or c >= n:
                return 0
            if moves_left == 0:
                return 1
            if (r, c, moves_left) in memo:
                return memo[(r, c, moves_left)]
            
            prob = 0
            for dr, dc in moves:
                prob += dp(r + dr, c + dc, moves_left - 1)
            prob /= 8.0
            
            memo[(r, c, moves_left)] = prob
            return prob
        
        return dp(row, column, k)
