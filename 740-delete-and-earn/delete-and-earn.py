class Solution(object):
    def deleteAndEarn(self, nums):
        from collections import Counter

        count = Counter(nums)
        nums_unique = sorted(count.keys())

        prev = None
        avoid, using = 0, 0 

        for num in nums_unique:
            earn = num * count[num]
            if prev == num - 1:
                avoid, using = max(avoid, using), earn + avoid
            else:
                avoid, using = max(avoid, using), earn + max(avoid, using)
            prev = num

        return max(avoid, using)
