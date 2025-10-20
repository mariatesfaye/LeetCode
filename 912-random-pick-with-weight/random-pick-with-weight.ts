class Solution {
    private prefixSums: number[];
    private totalSum: number;

    constructor(w: number[]) {
        this.prefixSums = new Array(w.length);
        this.prefixSums[0] = w[0];

        for (let i = 1; i < w.length; i++) {
            this.prefixSums[i] = this.prefixSums[i - 1] + w[i];
        }

        this.totalSum = this.prefixSums[this.prefixSums.length - 1];
    }

    pickIndex(): number {
        const target = Math.floor(Math.random() * this.totalSum) + 1;
        return this.binarySearch(target);
    }

    private binarySearch(target: number): number {
        let low = 0;
        let high = this.prefixSums.length - 1;

        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (target > this.prefixSums[mid]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }

        return low;
    }
}
