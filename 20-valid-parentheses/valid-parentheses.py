class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        
        brackets = {')': '(', '}': '{', ']': '['}
        
        for char in s:
            if char in brackets.values():
               
                stack.append(char)
            elif char in brackets:
              
                if not stack or stack.pop() != brackets[char]:
                    return False
            else:
 
                return False

        return len(stack) == 0