var copyRandomList = function(head) {
    if (!head) return null;

    const map = new Map();

    let curr = head;
    while (curr) {
        map.set(curr, new _Node(curr.val, null, null));
        curr = curr.next;
    }

    curr = head;
    while (curr) {
        const copyNode = map.get(curr);
        copyNode.next = curr.next ? map.get(curr.next) : null;
        copyNode.random = curr.random ? map.get(curr.random) : null;
        curr = curr.next;
    }

    return map.get(head);
};
