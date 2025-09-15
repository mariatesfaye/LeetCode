function deleteNode(node: ListNode | null): void {
    if (node === null || node.next === null) return;

    node.val = node.next.val;        
    node.next = node.next.next;      
}
