class RandomizedCollection {
    private nums: number[];
    private valToIndices: Map<number, Set<number>>;

    constructor() {
        this.nums = [];
        this.valToIndices = new Map();
    }

    insert(val: number): boolean {
        let contains = this.valToIndices.has(val);
        if (!contains) {
            this.valToIndices.set(val, new Set());
        }

        this.valToIndices.get(val)!.add(this.nums.length);
        this.nums.push(val);

        return !contains; 
    }

    remove(val: number): boolean {
        if (!this.valToIndices.has(val) || this.valToIndices.get(val)!.size === 0) {
            return false;
        }

        const indexToRemove = this.valToIndices.get(val)!.values().next().value;

        this.valToIndices.get(val)!.delete(indexToRemove);

        const lastIndex = this.nums.length - 1;
        const lastVal = this.nums[lastIndex];

        if (indexToRemove !== lastIndex) {
            this.nums[indexToRemove] = lastVal;

            this.valToIndices.get(lastVal)!.delete(lastIndex);
            this.valToIndices.get(lastVal)!.add(indexToRemove);
        }

        this.nums.pop();

        if (this.valToIndices.get(val)!.size === 0) {
            this.valToIndices.delete(val);
        }

        return true;
    }

    getRandom(): number {
        const randIndex = Math.floor(Math.random() * this.nums.length);
        return this.nums[randIndex];
    }
}
