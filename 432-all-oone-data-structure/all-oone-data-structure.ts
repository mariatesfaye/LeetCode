class Node {
    count: number;
    keys: Set<string>;
    prev: Node | null;
    next: Node | null;
    constructor(count: number) {
        this.count = count;
        this.keys = new Set();
        this.prev = null;
        this.next = null;
    }
}

class AllOne {
    keyToNode: Map<string, Node>;
    head: Node;
    tail: Node; 

    constructor() {
        this.keyToNode = new Map();

        this.head = new Node(0);
        this.tail = new Node(Infinity);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    private addNodeAfter(newNode: Node, prevNode: Node) {
        newNode.prev = prevNode;
        newNode.next = prevNode.next;
        prevNode.next!.prev = newNode;
        prevNode.next = newNode;
    }

    private removeNode(node: Node) {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }

    inc(key: string): void {
        if (!this.keyToNode.has(key)) {
            let node = this.head.next!;
            if (node.count !== 1) {
                const newNode = new Node(1);
                this.addNodeAfter(newNode, this.head);
                node = newNode;
            }
            node.keys.add(key);
            this.keyToNode.set(key, node);
        } else {
            const currNode = this.keyToNode.get(key)!;
            const nextCount = currNode.count + 1;
            let nextNode = currNode.next!;
            if (nextNode.count !== nextCount) {
                const newNode = new Node(nextCount);
                this.addNodeAfter(newNode, currNode);
                nextNode = newNode;
            }
            nextNode.keys.add(key);
            this.keyToNode.set(key, nextNode);

            currNode.keys.delete(key);
            if (currNode.keys.size === 0) {
                this.removeNode(currNode);
            }
        }
    }

    dec(key: string): void {
        const currNode = this.keyToNode.get(key)!;
        if (currNode.count === 1) {
            this.keyToNode.delete(key);
            currNode.keys.delete(key);
            if (currNode.keys.size === 0) {
                this.removeNode(currNode);
            }
        } else {
            const prevCount = currNode.count - 1;
            let prevNode = currNode.prev!;
            if (prevNode.count !== prevCount) {
                const newNode = new Node(prevCount);
                this.addNodeAfter(newNode, prevNode);
                prevNode = newNode;
            }
            prevNode.keys.add(key);
            this.keyToNode.set(key, prevNode);

            currNode.keys.delete(key);
            if (currNode.keys.size === 0) {
                this.removeNode(currNode);
            }
        }
    }

    getMaxKey(): string {
        if (this.tail.prev === this.head) return "";
        const keys = this.tail.prev!.keys;
        return keys.values().next().value;
    }

    getMinKey(): string {
        if (this.head.next === this.tail) return "";
        const keys = this.head.next!.keys;
        return keys.values().next().value;
    }
}
