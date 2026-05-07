class Solution(object):
    def palindromePairs(self, words):
        """
        :type words: List[str]
        :rtype: List[List[int]]
        """
        
        def is_palindrome(s):
            return s == s[::-1]

        word_map = {word: i for i, word in enumerate(words)}
        
        result = []
        
        for i, word in enumerate(words):
            for j in range(len(word) + 1):
                
                left = word[:j]
                right = word[j:]
 
                if is_palindrome(left):
                    rev_right = right[::-1]
                    
                    if rev_right in word_map and word_map[rev_right] != i:
                        result.append([word_map[rev_right], i])

                if j != len(word) and is_palindrome(right):
                    rev_left = left[::-1]
                    
                    if rev_left in word_map and word_map[rev_left] != i:
                        result.append([i, word_map[rev_left]])
        
        return result