class Solution(object):
    def validIPAddress(self, queryIP):
        """
        :type queryIP: str
        :rtype: str
        """
        if self.isIPv4(queryIP):
            return "IPv4"
        elif self.isIPv6(queryIP):
            return "IPv6"
        else:
            return "Neither"
    
    def isIPv4(self, IP):
        parts = IP.split('.')
        if len(parts) != 4:
            return False
        for part in parts:
            if len(part) == 0 or (part[0] == '0' and len(part) != 1):
                return False
            if not part.isdigit():
                return False
            num = int(part)
            if num < 0 or num > 255:
                return False
        return True
    
    def isIPv6(self, IP):
        parts = IP.split(':')
        if len(parts) != 8:
            return False
        hex_digits = '0123456789abcdefABCDEF'
        for part in parts:
            if len(part) == 0 or len(part) > 4:
                return False
            for ch in part:
                if ch not in hex_digits:
                    return False
        return True
