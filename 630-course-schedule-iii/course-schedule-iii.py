import heapq

class Solution(object):
    def scheduleCourse(self, courses):
        """
        :type courses: List[List[int]]
        :rtype: int
        """
        courses.sort(key=lambda x: x[1])
        
        total_time = 0
        max_heap = []  

        for duration, lastDay in courses:
            total_time += duration
            heapq.heappush(max_heap, -duration)
            if total_time > lastDay:
                longest = -heapq.heappop(max_heap)
                total_time -= longest
        
        return len(max_heap)
