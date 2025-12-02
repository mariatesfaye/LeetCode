from collections import Counter

class Solution(object):
    def minStickers(self, stickers, target):
        """
        :type stickers: List[str]
        :type target: str
        :rtype: int
        """
        sticker_counts = [Counter(sticker) for sticker in stickers]
        memo = {} 

        def dfs(remain):
            if remain == '':
                return 0
            if remain in memo:
                return memo[remain]

            remain_count = Counter(remain)
            res = float('inf')

            for sticker in sticker_counts:
                if sticker[remain[0]] == 0:
                    continue
                new_remain = ''
                for ch in remain_count:
                    if remain_count[ch] > sticker[ch]:
                        new_remain += ch * (remain_count[ch] - sticker[ch])

                tmp = dfs(new_remain)
                if tmp != -1:
                    res = min(res, 1 + tmp)

            memo[remain] = -1 if res == float('inf') else res
            return memo[remain]

        return dfs(target)
