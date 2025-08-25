/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun partition(head: ListNode?, x: Int): ListNode? {
        val beforeHead = ListNode(0)
        val afterHead = ListNode(0)
        
        var before = beforeHead
        var after = afterHead
        var current = head

        while (current != null) {
            if (current.`val` < x) {
                before.next = current
                before = before.next!!
            } else {
                after.next = current
                after = after.next!!
            }
            current = current.next
        }

        after.next = null
        before.next = afterHead.next

        return beforeHead.next
    }
}
