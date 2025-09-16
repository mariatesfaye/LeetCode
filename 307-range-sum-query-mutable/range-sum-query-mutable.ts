class NumArray {
    private fenwicks: number[];
    private nums: number[];
    private n: number;

    constructor(nums: number[]) {
        this.n = nums.length;
        this.nums = nums.slice();
        this.fenwicks = new Array(this.n + 1).fill(0);

        for (let i = 0; i < this.n; i++) {
            this._fenwicksUpdate(i + 1, nums[i]);
        }
    }

    update(index: number, val: number): void {
        const diff = val - this.nums[index];
        this.nums[index] = val;
        this._fenwicksUpdate(index + 1, diff);
    }

    sumRange(left: number, right: number): number {
        return this._fenwicksQuery(right + 1) - this._fenwicksQuery(left);
    }

    private _fenwicksUpdate(i: number, delta: number): void {
        while (i <= this.n) {
            this.fenwicks[i] += delta;
            i += i & (-i); 
        }
    }

    private _fenwicksQuery(i: number): number {
        let sum = 0;
        while (i > 0) {
            sum += this.fenwicks[i];
            i -= i & (-i);  
        }
        return sum;
    }
}
