class Solution:
    def compareVersion(self, version1: str, version2: str) -> int:
        v1_parts = version1.split('.')
        v2_parts = version2.split('.')
        
        max_length = max(len(v1_parts), len(v2_parts))
 
        v1_parts += ['0'] * (max_length - len(v1_parts))
        v2_parts += ['0'] * (max_length - len(v2_parts))
        
        for i in range(max_length):
            num1 = int(v1_parts[i])
            num2 = int(v2_parts[i])
            
            if num1 > num2:
                return 1
            elif num1 < num2:
                return -1
                
        return 0
