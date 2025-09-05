class Solution:
    def maxSlidingWindow(self, nums, k):
        from collections import deque
        
        if not nums or k == 0:
            return []

        dq = deque() 
        result = []

        for i in range(len(nums)):
            while dq and dq[0] <= i - k:
                dq.popleft()

            while dq and nums[dq[-1]] < nums[i]:
                dq.pop()

            dq.append(i)

            if i >= k - 1:
                result.append(nums[dq[0]])

        return result
