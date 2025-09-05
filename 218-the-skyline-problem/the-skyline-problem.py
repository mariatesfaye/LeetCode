import heapq

class Solution:
    def getSkyline(self, buildings):

        events = []
        for L, R, H in buildings:
            events.append((L, -H)) 
            events.append((R, H))

        events.sort(key=lambda x: (x[0], x[1]))

        result = []
        heap = [0]
        prev = 0 
        removed = {}  

        for x, h in events:
            if h < 0:
                heapq.heappush(heap, h)
            else:
                removed[-h] = removed.get(-h, 0) + 1

            while heap and removed.get(heap[0], 0) > 0:
                removed[heap[0]] -= 1
                if removed[heap[0]] == 0:
                    del removed[heap[0]]
                heapq.heappop(heap)

            current = -heap[0] if heap else 0
            if current != prev:
                result.append([x, current])
                prev = current

        return result
