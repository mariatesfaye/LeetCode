class MyCalendar(object):

    def __init__(self):
        self.events = []

    def book(self, startTime, endTime):
        for s, e in self.events:
            if max(s, startTime) < min(e, endTime):
                return False

        self.events.append((startTime, endTime))
        return True
