class MyCircularDeque(object):

    def __init__(self, k):
        """
        Initialize your data structure here.
        :type k: int
        """
        self.k = k
        self.deque = [0] * k
        self.front = 0
        self.rear = 0
        self.count = 0

    def insertFront(self, value):
        """
        :type value: int
        :rtype: bool
        """
        if self.isFull():
            return False
        self.front = (self.front - 1 + self.k) % self.k
        self.deque[self.front] = value
        self.count += 1
        return True

    def insertLast(self, value):
        """
        :type value: int
        :rtype: bool
        """
        if self.isFull():
            return False
        self.deque[self.rear] = value
        self.rear = (self.rear + 1) % self.k
        self.count += 1
        return True

    def deleteFront(self):
        """
        :rtype: bool
        """
        if self.isEmpty():
            return False
        self.front = (self.front + 1) % self.k
        self.count -= 1
        return True

    def deleteLast(self):
        """
        :rtype: bool
        """
        if self.isEmpty():
            return False
        self.rear = (self.rear - 1 + self.k) % self.k
        self.count -= 1
        return True

    def getFront(self):
        """
        :rtype: int
        """
        if self.isEmpty():
            return -1
        return self.deque[self.front]

    def getRear(self):
        """
        :rtype: int
        """
        if self.isEmpty():
            return -1
        return self.deque[(self.rear - 1 + self.k) % self.k]

    def isEmpty(self):
        """
        :rtype: bool
        """
        return self.count == 0

    def isFull(self):
        """
        :rtype: bool
        """
        return self.count == self.k
