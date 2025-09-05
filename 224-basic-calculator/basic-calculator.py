class Solution:
    def calculate(self, s):
        stack = []
        result = 0  # current result
        number = 0  # current number being built
        sign = 1    # current sign (+1 or -1)
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
                # Push current result and sign on the stack for later
                stack.append(result)
                stack.append(sign)
                # Reset for new sub-expression
                result = 0
                sign = 1
            elif char == ')':
                result += sign * number
                number = 0
                # Pop sign and previous result
                prev_sign = stack.pop()
                prev_result = stack.pop()
                result = prev_result + prev_sign * result
            # skip spaces
            i += 1

        # Add the last number
        result += sign * number
        return result
