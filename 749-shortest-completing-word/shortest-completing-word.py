class Solution(object):
    def shortestCompletingWord(self, licensePlate, words):
        """
        :type licensePlate: str
        :type words: List[str]
        :rtype: str
        """
        from collections import Counter
        required = Counter(
            ch.lower() for ch in licensePlate if ch.isalpha()
        )

        result = None

        for word in words:
            word_count = Counter(word)
            if all(word_count[ch] >= cnt for ch, cnt in required.items()):
                if result is None or len(word) < len(result):
                    result = word

        return result
