import random

class Solution(object):

    def __init__(self, n, blacklist):
        self.bound = n - len(blacklist)
        self.mapping = {}

        black = set(blacklist)
        spare = iter(x for x in range(self.bound, n) if x not in black)
        for b in blacklist:
            if b < self.bound:
                self.mapping[b] = next(spare)

    def pick(self):
        x = random.randint(0, self.bound - 1)
        return self.mapping.get(x, x)
