function subarraySum(nums: number[], k: number): number {
    const prefixMap = new Map<number, number>();
    prefixMap.set(0, 1); 
    let currentSum = 0;
    let count = 0;

    for (const num of nums) {
        currentSum += num;

        if (prefixMap.has(currentSum - k)) {
            count += prefixMap.get(currentSum - k)!;
        }

        prefixMap.set(currentSum, (prefixMap.get(currentSum) || 0) + 1);
    }

    return count;
}
