class Solution:
    def poorPigs(self, buckets, minutesToDie, minutesToTest):
        tests = minutesToTest // minutesToDie
        states = tests + 1
        
        pigs = 0
        while states ** pigs < buckets:
            pigs += 1
        return pigs
