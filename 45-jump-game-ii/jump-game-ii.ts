function jump(nums: number[]): number {
    const n: number = nums.length;
    if (n <= 1) return 0;
    
    let jumps: number = 0; 
    let currentEnd: number = 0; 
    let farthest: number = 0;

    for (let i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (i === currentEnd) {
            jumps++; 
            currentEnd = farthest;
            if (currentEnd >= n - 1) break;
        }
    }
    
    return jumps;
}