class Solution(object):
    def maxSumOfThreeSubarrays(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        n = len(nums)
        window_sum = [0] * (n - k + 1)
        curr_sum = sum(nums[:k])
        window_sum[0] = curr_sum
        for i in range(1, n - k + 1):
            curr_sum += nums[i + k - 1] - nums[i - 1]
            window_sum[i] = curr_sum
        left = [0] * len(window_sum)
        best = 0
        for i in range(len(window_sum)):
            if window_sum[i] > window_sum[best]:
                best = i
            left[i] = best
        right = [0] * len(window_sum)
        best = len(window_sum) - 1
        for i in range(len(window_sum) - 1, -1, -1):
            if window_sum[i] >= window_sum[best]:
                best = i
            right[i] = best
        max_total = 0
        res = None
        for j in range(k, len(window_sum) - k):
            i = left[j - k]    
            l = right[j + k]   
            total = window_sum[i] + window_sum[j] + window_sum[l]
            if total > max_total:
                max_total = total
                res = [i, j, l]
        
        return res
