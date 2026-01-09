class Solution(object):
    def dominantIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max_num = max(nums)
        max_index = nums.index(max_num)

        for i, num in enumerate(nums):
            if i != max_index and max_num < 2 * num:
                return -1

        return max_index
