function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
    const n = profits.length;
    const projects: [number, number][] = [];
    for (let i = 0; i < n; i++) {
        projects.push([capital[i], profits[i]]);
    }
    projects.sort((a, b) => a[0] - b[0]);

    class MaxHeap {
        private heap: number[] = [];

        private swap(i: number, j: number) {
            [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
        }

        private parent(i: number): number { return Math.floor((i - 1) / 2); }
        private left(i: number): number { return 2 * i + 1; }
        private right(i: number): number { return 2 * i + 2; }

        push(val: number) {
            this.heap.push(val);
            this.heapifyUp(this.heap.length - 1);
        }

        pop(): number | undefined {
            if (this.heap.length === 0) return undefined;
            const max = this.heap[0];
            const end = this.heap.pop()!;
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this.heapifyDown(0);
            }
            return max;
        }

        size(): number {
            return this.heap.length;
        }

        private heapifyUp(idx: number) {
            while (idx > 0) {
                let p = this.parent(idx);
                if (this.heap[p] >= this.heap[idx]) break;
                this.swap(p, idx);
                idx = p;
            }
        }

        private heapifyDown(idx: number) {
            let left = this.left(idx);
            let right = this.right(idx);
            let largest = idx;

            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }
            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }
            if (largest !== idx) {
                this.swap(largest, idx);
                this.heapifyDown(largest);
            }
        }
    }

    let maxProfitHeap = new MaxHeap();
    let i = 0; 

    for (let _ = 0; _ < k; _++) {
        while (i < n && projects[i][0] <= w) {
            maxProfitHeap.push(projects[i][1]);
            i++;
        }

        if (maxProfitHeap.size() === 0) break;

        w += maxProfitHeap.pop()!;
    }

    return w;
}
