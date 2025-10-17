function reversePairs(nums: number[]): number {
    function mergeSort(left: number, right: number): number {
        if (left >= right) return 0;

        const mid = Math.floor((left + right) / 2);
        let count = mergeSort(left, mid) + mergeSort(mid + 1, right);

        let j = mid + 1;
        for (let i = left; i <= mid; i++) {
            while (j <= right && nums[i] > 2 * nums[j]) {
                j++;
            }
            count += j - (mid + 1);
        }

        const temp: number[] = [];
        let i = left, k = mid + 1;
        while (i <= mid && k <= right) {
            if (nums[i] <= nums[k]) {
                temp.push(nums[i++]);
            } else {
                temp.push(nums[k++]);
            }
        }
        while (i <= mid) temp.push(nums[i++]);
        while (k <= right) temp.push(nums[k++]);

        for (let p = 0; p < temp.length; p++) {
            nums[left + p] = temp[p];
        }

        return count;
    }

    return mergeSort(0, nums.length - 1);
}
