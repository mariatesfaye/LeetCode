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
    fun reverseBetween(head: ListNode?, left: Int, right: Int): ListNode? {
        if (head == null || left == right) return head

        val dummy = ListNode(0)
        dummy.next = head
        var prev: ListNode? = dummy

        for (i in 1 until left) {
            prev = prev?.next
        }

        val start = prev?.next
        var then = start?.next

        for (i in 0 until right - left) {
            start?.next = then?.next
            then?.next = prev?.next
            prev?.next = then
            then = start?.next
        }

        return dummy.next
    }
}
