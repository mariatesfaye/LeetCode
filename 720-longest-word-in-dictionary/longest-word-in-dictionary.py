class Solution(object):
    def longestWord(self, words):
        words.sort()
        built = set([""])
        ans = ""
        
        for word in words:
            if word[:-1] in built:
                built.add(word)
                if len(word) > len(ans):
                    ans = word
                    
        return ans
