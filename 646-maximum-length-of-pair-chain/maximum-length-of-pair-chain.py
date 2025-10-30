class Solution(object):
    def findLongestChain(self, pairs):
        """
        :type pairs: List[List[int]]
        :rtype: int
        """
        pairs.sort(key=lambda x: x[1])
        
        cur = float('-inf')
        count = 0
        
        for pair in pairs:
            if pair[0] > cur:
                cur = pair[1]
                count += 1
                
        return count
