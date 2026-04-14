import heapq

class Solution(object):
    def lastStoneWeight(self, stones):
        heap = [-s for s in stones]
        heapq.heapify(heap)
        
        while len(heap) > 1:
            first = -heapq.heappop(heap)
            second = -heapq.heappop(heap)
            
            if first != second:
                heapq.heappush(heap, -(first - second))
        
        return -heap[0] if heap else 0