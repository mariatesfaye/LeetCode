class Solution(object):
    def findIntegers(self, n):
        """
        :type n: int
        :rtype: int
        """
        bits = bin(n)[2:]
        L = len(bits)

        dp = [0] * (L + 2)
        dp[0] = 1  
        dp[1] = 2 
        for i in range(2, L + 1):
            dp[i] = dp[i - 1] + dp[i - 2]
        
        res = 0
        prev_bit = 0
        for i in range(L):
            if bits[i] == '1':
                res += dp[L - i - 1]
                if prev_bit == 1:
                    return res
                prev_bit = 1
            else:
                prev_bit = 0
        
        return res + 1  
