class Solution:
    def circularArrayLoop(self, nums):
        n = len(nums)

        def next_index(i):
            return (i + nums[i]) % n

        for i in range(n):
            if nums[i] == 0:
                continue

            direction = nums[i] > 0
            slow, fast = i, i

            while True:
                next_slow = next_index(slow)
                next_fast = next_index(fast)
                if nums[fast] * nums[next_fast] <= 0:
                    break
                next_fast = next_index(next_fast)
                if nums[slow] * nums[next_slow] <= 0 or nums[fast] * nums[next_fast] <= 0:
                    break

                slow = next_slow
                fast = next_fast

                if slow == fast:
                    if slow == next_index(slow):
                        break
                    return True

            j = i
            sign = nums[i]
            while nums[j] * sign > 0:
                next_j = next_index(j)
                nums[j] = 0
                j = next_j

        return False
