class MyCircularQueue(object):

    def __init__(self, k):
        """
        Initialize your data structure here. Set the capacity to k.
        """
        self.queue = [0] * k 
        self.head = 0 
        self.tail = 0 
        self.size = 0      
        self.capacity = k

    def enQueue(self, value):
        """
        Insert an element into the circular queue. Return True if the operation is successful.
        """
        if self.isFull():
            return False
        self.queue[self.tail] = value
        self.tail = (self.tail + 1) % self.capacity
        self.size += 1
        return True

    def deQueue(self):
        """
        Delete an element from the circular queue. Return True if the operation is successful.
        """
        if self.isEmpty():
            return False
        self.head = (self.head + 1) % self.capacity
        self.size -= 1
        return True

    def Front(self):
        """
        Get the front item from the queue.
        """
        if self.isEmpty():
            return -1
        return self.queue[self.head]

    def Rear(self):
        """
        Get the last item from the queue.
        """
        if self.isEmpty():
            return -1
        return self.queue[(self.tail - 1 + self.capacity) % self.capacity]

    def isEmpty(self):
        """
        Checks whether the circular queue is empty.
        """
        return self.size == 0

    def isFull(self):
        """
        Checks whether the circular queue is full.
        """
        return self.size == self.capacity
