class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if not s:
            return ""
        
        start, max_length = 0, 1  
        
        def expand_around_center(left, right):
            """Expand around center to find palindrome length and boundaries."""
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1

            return right - left - 1, left + 1
        
        for i in range(len(s)):

            length, left = expand_around_center(i, i)
            if length > max_length:
                max_length = length
                start = left
 
            length, left = expand_around_center(i, i + 1)
            if length > max_length:
                max_length = length
                start = left
        
        return s[start:start + max_length]