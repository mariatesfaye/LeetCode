class Solution:
    def maxSlidingWindow(self, nums, k):
        from collections import deque
        
        if not nums or k == 0:
            return []

        dq = deque()  # will store indices
        result = []

        for i in range(len(nums)):
            # Remove indices out of the window
            while dq and dq[0] <= i - k:
                dq.popleft()

            # Remove smaller values from the back
            while dq and nums[dq[-1]] < nums[i]:
                dq.pop()

            dq.append(i)

            # Starting to add max values to result once we hit the window size
            if i >= k - 1:
                result.append(nums[dq[0]])

        return result
