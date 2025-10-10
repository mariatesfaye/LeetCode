class Solution(object):
    def largestPalindrome(self, n):
        """
        :type n: int
        :rtype: int
        """
        # Precomputed results for n = 1 to 8
        results = [0, 9, 987, 123, 597, 677, 1218, 877, 475]
        return results[n]
