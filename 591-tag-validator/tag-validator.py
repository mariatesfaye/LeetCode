class Solution(object):
    def isValid(self, code):
        """
        :type code: str
        :rtype: bool
        """
        stack = []
        i, n = 0, len(code)

        def valid_tag(tag):
            # Only uppercase A-Z, length 1–9
            return 1 <= len(tag) <= 9 and all('A' <= c <= 'Z' for c in tag)

        while i < n:
            # --- Handle CDATA ---
            if i > 0 and code.startswith("<![CDATA[", i):
                j = code.find("]]>", i)
                if j == -1:
                    return False
                i = j + 3

            # --- Handle End Tag ---
            elif code.startswith("</", i):
                j = code.find(">", i)
                if j == -1:
                    return False
                tag = code[i+2:j]
                if not valid_tag(tag):
                    return False
                if not stack or stack[-1] != tag:
                    return False
                stack.pop()
                i = j + 1
                # If stack empty but there is more code → invalid
                if not stack and i != n:
                    return False

            # --- Handle Start Tag ---
            elif code.startswith("<", i):
                j = code.find(">", i)
                if j == -1:
                    return False
                tag = code[i+1:j]
                if not valid_tag(tag):
                    return False
                stack.append(tag)
                i = j + 1

            # --- Plain text ---
            else:
                if not stack:  # text outside of tag
                    return False
                i += 1

        return not stack
