class Solution(object):
    def getMaxRepetitions(self, s1, n1, s2, n2):
        """
        :type s1: str
        :type n1: int
        :type s2: str
        :type n2: int
        :rtype: int
        """
        if n1 == 0:
            return 0
        
        indexr = {}
        s1_count = 0 
        s2_count = 0 
        index = 0 
        
        while s1_count < n1:
            s1_count += 1
            for ch in s1:
                if ch == s2[index]:
                    index += 1
                    if index == len(s2):
                        s2_count += 1
                        index = 0
            if index in indexr:
                s1_count_prev, s2_count_prev = indexr[index]
                cycle_len = s1_count - s1_count_prev
                cycle_count = s2_count - s2_count_prev
                remaining = n1 - s1_count
                cycles = remaining // cycle_len
                s1_count += cycles * cycle_len
                s2_count += cycles * cycle_count
            else:
                indexr[index] = (s1_count, s2_count)
        
        return s2_count // n2
