class Solution(object):
    def largestRectangleArea(self, heights):
        stack = [] 
        max_area = 0
        heights.append(0)  
        
        for i in range(len(heights)):
            while stack and heights[i] < heights[stack[-1]]:
                h = heights[stack.pop()]
 
                left = stack[-1] if stack else -1
                width = i - left - 1
                
                max_area = max(max_area, h * width)
            
            stack.append(i)
        
        return max_area