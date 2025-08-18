# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[Optional[ListNode]]
        :rtype: Optional[ListNode]
        """
        import heapq

        dummy = ListNode(0)
        current = dummy

        heap = []

        for i in range(len(lists)):
            if lists[i]:

                heapq.heappush(heap, (lists[i].val, i, lists[i]))

        while heap:
            val, idx, node = heapq.heappop(heap)

            current.next = node
            current = current.next

            if node.next:
                lists[idx] = node.next
                heapq.heappush(heap, (node.next.val, idx, node.next))
        
        return dummy.next