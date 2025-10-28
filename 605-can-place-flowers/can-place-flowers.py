class Solution(object):
    def canPlaceFlowers(self, flowerbed, n):
        """
        :type flowerbed: List[int]
        :type n: int
        :rtype: bool
        """
        count = 0
        length = len(flowerbed)
        
        for i in range(length):
            if flowerbed[i] == 0:
                empty_left = (i == 0) or (flowerbed[i-1] == 0)
                empty_right = (i == length-1) or (flowerbed[i+1] == 0)
                
                if empty_left and empty_right:
                    flowerbed[i] = 1 
                    count += 1
        
        return count >= n
