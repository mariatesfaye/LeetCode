class Solution:
    def calculate(self, s):
        stack = []
        result = 0 
        number = 0 
        sign = 1 
        i = 0
        n = len(s)

        while i < n:
            char = s[i]

            if char.isdigit():
                number = number * 10 + int(char)
            elif char == '+':
                result += sign * number
                number = 0
                sign = 1
            elif char == '-':
                result += sign * number
                number = 0
                sign = -1
            elif char == '(':
                stack.append(result)
                stack.append(sign)
                result = 0
                sign = 1
            elif char == ')':
                result += sign * number
                number = 0
                prev_sign = stack.pop()
                prev_result = stack.pop()
                result = prev_result + prev_sign * result
            i += 1

        result += sign * number
        return result
