class Solution(object):
    def countSubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        def expand(left, right):
            count = 0
            while left >= 0 and right < len(s) and s[left] == s[right]:
                count += 1
                left -= 1
                right += 1
            return count

        total = 0
        for i in range(len(s)):
            total += expand(i, i)
            total += expand(i, i + 1)
        
        return total
