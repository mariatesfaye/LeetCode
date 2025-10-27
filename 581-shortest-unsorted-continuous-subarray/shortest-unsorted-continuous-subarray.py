class Solution(object):
    def findUnsortedSubarray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        start, end = 0, n - 1

        while start < n - 1 and nums[start] <= nums[start + 1]:
            start += 1

        if start == n - 1:
            return 0

        while end > 0 and nums[end] >= nums[end - 1]:
            end -= 1

        sub_min = min(nums[start:end + 1])
        sub_max = max(nums[start:end + 1])

        while start > 0 and nums[start - 1] > sub_min:
            start -= 1

        while end < n - 1 and nums[end + 1] < sub_max:
            end += 1

        return end - start + 1
