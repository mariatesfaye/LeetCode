class Solution(object):
    def findSubstringInWraproundString(self, s):
        """
        :type s: str
        :rtype: int
        """
        max_len = [0] * 26
        cur_len = 0 
        
        for i in range(len(s)):
            if i > 0 and (ord(s[i]) - ord(s[i-1]) == 1 or (s[i-1] == 'z' and s[i] == 'a')):
                cur_len += 1
            else:
                cur_len = 1
            
            index = ord(s[i]) - ord('a')
            max_len[index] = max(max_len[index], cur_len)
        
        return sum(max_len)
