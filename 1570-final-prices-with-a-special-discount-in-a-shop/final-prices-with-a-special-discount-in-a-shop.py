class Solution(object):
    def finalPrices(self, prices):
        stack = [] 
        res = prices[:]  
        for i in range(len(prices)):
            while stack and prices[i] <= prices[stack[-1]]:
                idx = stack.pop()
                res[idx] = prices[idx] - prices[i]
            
            stack.append(i)
        
        return res