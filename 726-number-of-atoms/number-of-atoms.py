from collections import defaultdict

class Solution(object):
    def countOfAtoms(self, formula):
        """
        :type formula: str
        :rtype: str
        """
        import collections

        stack = [collections.Counter()]
        i = 0
        n = len(formula)

        while i < n:
            if formula[i] == '(':
                stack.append(collections.Counter())
                i += 1
            elif formula[i] == ')':
                i += 1
                start = i
                while i < n and formula[i].isdigit():
                    i += 1
                multiplicity = int(formula[start:i] or 1)
                top = stack.pop()
                for elem, count in top.items():
                    stack[-1][elem] += count * multiplicity
            else:
                start = i
                i += 1
                while i < n and formula[i].islower():
                    i += 1
                elem = formula[start:i]
                start_num = i
                while i < n and formula[i].isdigit():
                    i += 1
                num = int(formula[start_num:i] or 1)
                stack[-1][elem] += num
        result = ""
        for elem in sorted(stack[-1]):
            count = stack[-1][elem]
            result += elem + (str(count) if count > 1 else "")
        return result
