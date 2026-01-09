class WordFilter(object):

    def __init__(self, words):
        """
        :type words: List[str]
        """
        self.lookup = {}

        for index, word in enumerate(words):
            length = len(word)
            for i in range(1, length + 1):
                pref = word[:i]
                for j in range(length):
                    suff = word[j:]
                    self.lookup[(pref, suff)] = index

    def f(self, pref, suff):
        """
        :type pref: str
        :type suff: str
        :rtype: int
        """
        return self.lookup.get((pref, suff), -1)
