function topKFrequent(nums: number[], k: number): number[] {
    const freqMap = new Map<number, number>();

    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
    }

    const sorted = Array.from(freqMap.keys()).sort((a, b) => {
        return (freqMap.get(b) ?? 0) - (freqMap.get(a) ?? 0);
    });

    return sorted.slice(0, k);
}
