from collections import defaultdict, deque

class Solution(object):
    def findLadders(self, beginWord, endWord, wordList):
        """
        :type beginWord: str
        :type endWord: str
        :type wordList: List[str]
        :rtype: List[List[str]]
        """
        
        wordSet = set(wordList)
        
        if endWord not in wordSet:
            return []

        parents = defaultdict(list)

        level = {beginWord}
        found = False
        
        while level and not found:
            next_level = defaultdict(list)

            for word in level:
                if word in wordSet:
                    wordSet.remove(word)
            
            for word in level:
                for i in range(len(word)):
                    for c in "abcdefghijklmnopqrstuvwxyz":
                        
                        new_word = word[:i] + c + word[i+1:]
                        
                        if new_word in wordSet:
                            next_level[new_word].append(word)
                            
                            if new_word == endWord:
                                found = True
            
            for word, prevs in next_level.items():
                parents[word].extend(prevs)
            
            level = next_level.keys()

        res = []
        
        def backtrack(word, path):
            if word == beginWord:
                res.append(path[::-1])
                return
            
            for prev in parents[word]:
                backtrack(prev, path + [prev])
        
        if found:
            backtrack(endWord, [endWord])
        
        return res