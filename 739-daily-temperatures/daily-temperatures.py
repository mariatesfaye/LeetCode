class Solution(object):
    def dailyTemperatures(self, temperatures):
        n = len(temperatures)
        result = [0] * n
        stack = [] 
        
        for i, temp in enumerate(temperatures):
            while stack and temp > temperatures[stack[-1]]:
                prev = stack.pop()
                result[prev] = i - prev
            
            stack.append(i)
        
        return result