class Solution(object):
    def timeRequiredToBuy(self, tickets, k):
        time = 0
        t = tickets[k]
        
        for i in range(len(tickets)):
            if i <= k:
                time += min(tickets[i], t)
            else:
                time += min(tickets[i], t - 1)
        
        return time