function isPalindrome(head: ListNode | null): boolean {
    if (!head || !head.next) return true;

    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast && fast.next) {
        slow = slow!.next;
        fast = fast.next.next;
    }

    let prev: ListNode | null = null;
    let curr: ListNode | null = slow;

    while (curr) {
        const nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    let first = head;
    let second = prev;

    while (second) {
        if (first!.val !== second.val) return false;
        first = first!.next;
        second = second.next;
    }

    return true;
}
