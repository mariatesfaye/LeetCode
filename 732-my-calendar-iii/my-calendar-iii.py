class MyCalendarThree(object):

    def __init__(self):
        self.timeline = {}

    def book(self, startTime, endTime):
        self.timeline[startTime] = self.timeline.get(startTime, 0) + 1
        self.timeline[endTime] = self.timeline.get(endTime, 0) - 1

        active = 0
        max_k = 0

        for time in sorted(self.timeline):
            active += self.timeline[time]
            max_k = max(max_k, active)

        return max_k
