class Solution(object):
    def solveEquation(self, equation):
        """
        :type equation: str
        :rtype: str
        """
        def parse(expr):
            coef = 0
            const = 0
            i = 0
            n = len(expr)
            sign = 1
            while i < n:
                if expr[i] == '+':
                    sign = 1
                    i += 1
                elif expr[i] == '-':
                    sign = -1
                    i += 1
                else:
                    j = i
                    while j < n and expr[j].isdigit():
                        j += 1
                    if j < n and expr[j] == 'x':
                        num = expr[i:j]
                        coef += sign * (int(num) if num != '' else 1)
                        i = j + 1
                    elif expr[i] == 'x':
                        coef += sign * 1
                        i += 1
                    else:
                        const += sign * int(expr[i:j])
                        i = j
            return coef, const

        lhs, rhs = equation.split('=')
        coef_lhs, const_lhs = parse(lhs)
        coef_rhs, const_rhs = parse(rhs)

        coef = coef_lhs - coef_rhs
        const = const_rhs - const_lhs

        if coef == 0:
            if const == 0:
                return "Infinite solutions"
            else:
                return "No solution"
        else:
            return "x=" + str(const // coef)
