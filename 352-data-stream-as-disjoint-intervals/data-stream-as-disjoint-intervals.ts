class SummaryRanges {
    private intervals: number[][];

    constructor() {
        this.intervals = [];
    }

    addNum(value: number): void {
        const intervals = this.intervals;
        if (intervals.length === 0) {
            intervals.push([value, value]);
            return;
        }

        let left = 0, right = intervals.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (intervals[mid][0] <= value && value <= intervals[mid][1]) {
                return;
            } else if (intervals[mid][0] > value) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        const leftInterval = left - 1 >= 0 ? intervals[left - 1] : null;
        const rightInterval = left < intervals.length ? intervals[left] : null;

        const canMergeLeft = leftInterval && leftInterval[1] + 1 >= value;
        const canMergeRight = rightInterval && rightInterval[0] - 1 <= value;

        if (canMergeLeft && canMergeRight) {
            leftInterval![1] = rightInterval![1];
            intervals.splice(left, 1);
        } else if (canMergeLeft) {
            leftInterval![1] = Math.max(leftInterval![1], value);
        } else if (canMergeRight) {
            rightInterval![0] = Math.min(rightInterval![0], value);
        } else {
            intervals.splice(left, 0, [value, value]);
        }
    }

    getIntervals(): number[][] {
        return this.intervals;
    }
}
