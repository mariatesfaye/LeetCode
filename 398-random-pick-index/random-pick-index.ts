class Solution {
    private map: Map<number, number[]>;

    constructor(nums: number[]) {
        this.map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (!this.map.has(nums[i])) {
                this.map.set(nums[i], []);
            }
            this.map.get(nums[i])!.push(i);
        }
    }

    pick(target: number): number {
        const indices = this.map.get(target)!;
        const randomIndex = Math.floor(Math.random() * indices.length);
        return indices[randomIndex];
    }
}
