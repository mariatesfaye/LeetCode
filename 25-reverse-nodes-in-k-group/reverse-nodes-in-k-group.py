# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseKGroup(self, head, k):
        """
        :type head: Optional[ListNode]
        :type k: int
        :rtype: Optional[ListNode]
        """

        def getLength(node):
            count = 0
            while node:
                count += 1
                node = node.next
            return count

        if not head or k == 1:
            return head

        if getLength(head) < k:
            return head
 
        prev = None
        curr = head
        for _ in range(k):

            next_node = curr.next

            curr.next = prev

            prev = curr
            curr = next_node

        head.next = self.reverseKGroup(curr, k)

        return prev