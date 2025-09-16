class MyMinHeap {
    private data: number[] = [];

    size(): number {
        return this.data.length;
    }

    peek(): number {
        return this.data[0];
    }

    insert(val: number): void {
        this.data.push(val);
        this.bubbleUp();
    }

    extract(): number {
        if (this.size() === 0) return -1;
        const top = this.data[0];
        const end = this.data.pop()!;
        if (this.size() > 0) {
            this.data[0] = end;
            this.bubbleDown();
        }
        return top;
    }

    private bubbleUp(): void {
        let idx = this.data.length - 1;
        const element = this.data[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.data[parentIdx];
            if (element >= parent) break;
            this.data[parentIdx] = element;
            this.data[idx] = parent;
            idx = parentIdx;
        }
    }

    private bubbleDown(): void {
        let idx = 0;
        const length = this.data.length;
        const element = this.data[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swapIdx: number | null = null;

            if (leftChildIdx < length) {
                if (this.data[leftChildIdx] < element) {
                    swapIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                if (
                    (swapIdx === null && this.data[rightChildIdx] < element) ||
                    (swapIdx !== null && this.data[rightChildIdx] < this.data[leftChildIdx])
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if (swapIdx === null) break;

            this.data[idx] = this.data[swapIdx];
            this.data[swapIdx] = element;
            idx = swapIdx;
        }
    }
}

class MyMaxHeap {
    private data: number[] = [];

    size(): number {
        return this.data.length;
    }

    peek(): number {
        return this.data[0];
    }

    insert(val: number): void {
        this.data.push(val);
        this.bubbleUp();
    }

    extract(): number {
        if (this.size() === 0) return -1;
        const top = this.data[0];
        const end = this.data.pop()!;
        if (this.size() > 0) {
            this.data[0] = end;
            this.bubbleDown();
        }
        return top;
    }

    private bubbleUp(): void {
        let idx = this.data.length - 1;
        const element = this.data[idx];

        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.data[parentIdx];
            if (element <= parent) break;
            this.data[parentIdx] = element;
            this.data[idx] = parent;
            idx = parentIdx;
        }
    }

    private bubbleDown(): void {
        let idx = 0;
        const length = this.data.length;
        const element = this.data[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swapIdx: number | null = null;

            if (leftChildIdx < length) {
                if (this.data[leftChildIdx] > element) {
                    swapIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                if (
                    (swapIdx === null && this.data[rightChildIdx] > element) ||
                    (swapIdx !== null && this.data[rightChildIdx] > this.data[leftChildIdx])
                ) {
                    swapIdx = rightChildIdx;
                }
            }

            if (swapIdx === null) break;

            this.data[idx] = this.data[swapIdx];
            this.data[swapIdx] = element;
            idx = swapIdx;
        }
    }
}

class MedianFinder {
    private maxHeap: MyMaxHeap; // smaller half
    private minHeap: MyMinHeap; // larger half

    constructor() {
        this.maxHeap = new MyMaxHeap();
        this.minHeap = new MyMinHeap();
    }

    addNum(num: number): void {
        if (this.maxHeap.size() === 0 || num <= this.maxHeap.peek()) {
            this.maxHeap.insert(num);
        } else {
            this.minHeap.insert(num);
        }

        // Balance sizes
        if (this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.insert(this.maxHeap.extract());
        } else if (this.minHeap.size() > this.maxHeap.size()) {
            this.maxHeap.insert(this.minHeap.extract());
        }
    }

    findMedian(): number {
        if (this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.peek();
        } else {
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        }
    }
}
