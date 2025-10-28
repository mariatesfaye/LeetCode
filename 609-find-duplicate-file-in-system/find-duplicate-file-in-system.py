class Solution(object):
    def findDuplicate(self, paths):
        """
        :type paths: List[str]
        :rtype: List[List[str]]
        """
        from collections import defaultdict
        
        content_map = defaultdict(list)
        
        for path in paths:
            parts = path.split(" ")
            dir_path = parts[0]
            
            for file_info in parts[1:]:
                name, content = file_info.split("(")
                content = content[:-1] 
                content_map[content].append(dir_path + "/" + name)

        return [file_paths for file_paths in content_map.values() if len(file_paths) > 1]
