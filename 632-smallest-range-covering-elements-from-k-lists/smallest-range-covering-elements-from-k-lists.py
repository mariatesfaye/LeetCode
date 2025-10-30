import heapq

class Solution(object):
    def smallestRange(self, nums):
        """
        :type nums: List[List[int]]
        :rtype: List[int]
        """
        heap = []
        max_val = float('-inf')

        for i in range(len(nums)):
            heapq.heappush(heap, (nums[i][0], i, 0))
            max_val = max(max_val, nums[i][0])

        best_range = [float('-inf'), float('inf')]

        while True:
            min_val, list_i, elem_i = heapq.heappop(heap)
            if max_val - min_val < best_range[1] - best_range[0]:
                best_range = [min_val, max_val]
            if elem_i + 1 == len(nums[list_i]):
                break 
            
            next_val = nums[list_i][elem_i + 1]
            heapq.heappush(heap, (next_val, list_i, elem_i + 1))
            max_val = max(max_val, next_val)

        return best_range
