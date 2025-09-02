from collections import defaultdict
from math import gcd

class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        if len(points) <= 2:
            return len(points)

        max_points = 0

        for i in range(len(points)):
            slopes = defaultdict(int)
            duplicates = 1 
            for j in range(i + 1, len(points)):
                x1, y1 = points[i]
                x2, y2 = points[j]

                dx = x2 - x1
                dy = y2 - y1

                if dx == 0 and dy == 0:

                    duplicates += 1
                else:
                    g = gcd(dx, dy)
                    slope = (dy // g, dx // g)

                    if slope[1] < 0:
                        slope = (-slope[0], -slope[1])
                    elif slope[1] == 0:
                        slope = (1, 0)
                    elif slope[0] == 0: 
                        slope = (0, 1)

                    slopes[slope] += 1

            current_max = max(slopes.values(), default=0)
            max_points = max(max_points, current_max + duplicates)

        return max_points
