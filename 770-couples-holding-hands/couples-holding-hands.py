class Solution(object):
    def minSwapsCouples(self, row):
        """
        :type row: List[int]
        :rtype: int
        """
        pos = {person: i for i, person in enumerate(row)}
        swaps = 0
        for i in range(0, len(row), 2):
            x = row[i]
            y = x ^ 1  
            if row[i+1] == y:
                continue
            swaps += 1
            partner_index = pos[y]
            other = row[i+1]
            row[partner_index], row[i+1] = other, y
            pos[other] = partner_index
            pos[y] = i+1

        return swaps
