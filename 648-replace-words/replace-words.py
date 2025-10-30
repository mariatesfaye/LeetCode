class TrieNode(object):
    def __init__(self):
        self.children = {}
        self.is_end = False

class Solution(object):
    def replaceWords(self, dictionary, sentence):
        """
        :type dictionary: List[str]
        :type sentence: str
        :rtype: str
        """
        # Build Trie
        root = TrieNode()
        for word in dictionary:
            node = root
            for char in word:
                if char not in node.children:
                    node.children[char] = TrieNode()
                node = node.children[char]
            node.is_end = True

        def find_root(word):
            node = root
            prefix = ""
            for char in word:
                if char not in node.children:
                    break
                node = node.children[char]
                prefix += char
                if node.is_end:
                    return prefix
            return word
        return " ".join(find_root(word) for word in sentence.split())
