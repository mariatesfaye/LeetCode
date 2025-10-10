class Solution(object):
    def totalHammingDistance(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        total = 0
        n = len(nums)
        
        for i in range(32):
            count_ones = 0
            for num in nums:
                if (num >> i) & 1:
                    count_ones += 1
            count_zeros = n - count_ones
            total += count_ones * count_zeros
        
        return total
