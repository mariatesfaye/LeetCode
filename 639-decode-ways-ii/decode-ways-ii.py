class Solution(object):
    def numDecodings(self, s):
        """
        :type s: str
        :rtype: int
        """
        MOD = 10**9 + 7
        n = len(s)
        if not s:
            return 0

        def ways1(ch):
            if ch == '*': return 9
            if ch == '0': return 0
            return 1

        def ways2(a, b):
            if a == '*' and b == '*':
                return 15 
            if a == '*':
                if '0' <= b <= '6': return 2 
                else: return 1         
            if b == '*':
                if a == '1': return 9     
                if a == '2': return 6   
                return 0
            num = int(a + b)
            return 1 if 10 <= num <= 26 else 0

        dp0, dp1 = 1, ways1(s[0]) 

        for i in range(1, n):
            dp2 = (ways1(s[i]) * dp1 + ways2(s[i-1], s[i]) * dp0) % MOD
            dp0, dp1 = dp1, dp2

        return dp1
