class Solution(object):
    def zeroFilledSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        result = 0
        zero_count = 0
        
        for num in nums:
            if num == 0:
                zero_count += 1
            else:
                result += (zero_count * (zero_count + 1)) // 2
                zero_count = 0

        result += (zero_count * (zero_count + 1)) // 2
        
        return result