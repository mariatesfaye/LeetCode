function trap(height: number[]): number {
    if (height.length < 3) return 0;
    
    let left: number = 0;
    let right: number = height.length - 1;
    let leftMax: number = 0;
    let rightMax: number = 0;
    let water: number = 0;
    
    while (left < right) {
        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

        if (leftMax <= rightMax) {
            water += leftMax - height[left];
            left++;
        } else {
            water += rightMax - height[right];
            right--;
        }
    }
    
    return water;
}