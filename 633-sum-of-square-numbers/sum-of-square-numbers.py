import math

class Solution(object):
    def judgeSquareSum(self, c):
        """
        :type c: int
        :rtype: bool
        """
        a, b = 0, int(math.sqrt(c))
        while a <= b:
            val = a * a + b * b
            if val == c:
                return True
            elif val < c:
                a += 1
            else:
                b -= 1
        return False
