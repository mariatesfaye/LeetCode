class RandomizedSet {
    private nums: number[];
    private valToIndex: Map<number, number>;

    constructor() {
        this.nums = [];
        this.valToIndex = new Map();
    }

    insert(val: number): boolean {
        if (this.valToIndex.has(val)) return false;

        this.valToIndex.set(val, this.nums.length);
        this.nums.push(val);
        return true;
    }

    remove(val: number): boolean {
        if (!this.valToIndex.has(val)) return false;

        const idx = this.valToIndex.get(val)!;
        const lastVal = this.nums[this.nums.length - 1];

        this.nums[idx] = lastVal;
        this.valToIndex.set(lastVal, idx);

        this.nums.pop();
        this.valToIndex.delete(val);

        return true;
    }

    getRandom(): number {
        const randIdx = Math.floor(Math.random() * this.nums.length);
        return this.nums[randIdx];
    }
}
