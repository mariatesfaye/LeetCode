from collections import Counter, defaultdict

class Solution(object):
    def isPossible(self, nums):
        count = Counter(nums)
        need = defaultdict(int)

        for x in nums:
            if count[x] == 0:
                continue  
            if need[x] > 0:
                need[x] -= 1
                need[x + 1] += 1

            elif count[x+1] > 0 and count[x+2] > 0:
                count[x+1] -= 1
                count[x+2] -= 1
                need[x + 3] += 1

            else:
                return False

            count[x] -= 1

        return True
