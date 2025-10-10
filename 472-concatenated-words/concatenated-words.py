class Solution(object):
    def findAllConcatenatedWordsInADict(self, words):
        wordSet = set(words)
        memo = {}

        def canForm(word):
            if word in memo:
                return memo[word]
            for i in range(1, len(word)):
                prefix = word[:i]
                suffix = word[i:]
                if prefix in wordSet and (suffix in wordSet or canForm(suffix)):
                    memo[word] = True
                    return True
            memo[word] = False
            return False

        result = []
        for word in words:
            if not word:
                continue
            wordSet.remove(word)
            if canForm(word):
                result.append(word)
            wordSet.add(word)
        return result
