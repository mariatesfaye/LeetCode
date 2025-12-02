class MagicDictionary(object):

    def __init__(self):
        self.words = set()

    def buildDict(self, dictionary):
        """
        :type dictionary: List[str]
        :rtype: None
        """
        self.words = set(dictionary)

    def search(self, searchWord):
        """
        :type searchWord: str
        :rtype: bool
        """
        for i in range(len(searchWord)):
            for c in 'abcdefghijklmnopqrstuvwxyz':
                if c != searchWord[i]:
                    new_word = searchWord[:i] + c + searchWord[i+1:]
                    if new_word in self.words:
                        return True
        return False
