class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        def binarySearch(nums, target, findFirst):
            left, right = 0, len(nums) - 1
            result = -1
            
            while left <= right:
                mid = (left + right) // 2
                if nums[mid] == target:
                    result = mid 
                    if findFirst:
                        right = mid - 1
                    else:
                        left = mid + 1   
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            
            return result

        first = binarySearch(nums, target, True)
        last = binarySearch(nums, target, False)
        
        return [first, last]