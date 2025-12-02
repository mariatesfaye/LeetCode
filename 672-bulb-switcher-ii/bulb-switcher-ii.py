class Solution(object):
    def flipLights(self, n, presses):
        if presses == 0:
            return 1
        if n == 1:
            return 2
        if n == 2:
            return 3 if presses == 1 else 4
        return 4 if presses == 1 else 7 if presses == 2 else 8
