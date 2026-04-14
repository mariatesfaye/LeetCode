class Solution(object):
    def countStudents(self, students, sandwiches):
        count = [0, 0]
        
        for s in students:
            count[s] += 1
        
        for sandwich in sandwiches:
            if count[sandwich] == 0:
                return sum(count)
            
            count[sandwich] -= 1
        
        return 0