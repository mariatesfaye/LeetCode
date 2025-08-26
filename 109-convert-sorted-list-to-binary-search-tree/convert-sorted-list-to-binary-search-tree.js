/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;

    function findMiddle(start) {
        let prev = null;
        let slow = start;
        let fast = start;

        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }

        if (prev) prev.next = null;

        return slow;
    }

    if (!head.next) return new TreeNode(head.val);

    const mid = findMiddle(head);
    const root = new TreeNode(mid.val);

    root.left = head !== mid ? sortedListToBST(head) : null;
    root.right = sortedListToBST(mid.next);

    return root;
};
