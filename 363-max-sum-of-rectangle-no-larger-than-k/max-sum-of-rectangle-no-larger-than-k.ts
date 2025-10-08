function maxSumSubmatrix(matrix: number[][], k: number): number {
    const m = matrix.length;
    const n = matrix[0].length;
    let maxSum = -Infinity;

    for (let left = 0; left < n; left++) {
        const rowSums = new Array(m).fill(0);

        for (let right = left; right < n; right++) {
            for (let i = 0; i < m; i++) {
                rowSums[i] += matrix[i][right];
            }

            maxSum = Math.max(maxSum, maxSubArrayNoLargerThanK(rowSums, k));
            if (maxSum === k) return k; // best possible
        }
    }

    return maxSum;
}

function maxSubArrayNoLargerThanK(arr: number[], k: number): number {
    const prefixSums: number[] = [0]; 
    let currSum = 0;
    let maxSum = -Infinity;

    for (let num of arr) {
        currSum += num;

        const target = currSum - k;
        const idx = lowerBound(prefixSums, target);
        if (idx < prefixSums.length) {
            maxSum = Math.max(maxSum, currSum - prefixSums[idx]);
        }

        insertSorted(prefixSums, currSum);
    }

    return maxSum;
}

function lowerBound(arr: number[], target: number): number {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

function insertSorted(arr: number[], val: number): void {
    let left = 0, right = arr.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < val) left = mid + 1;
        else right = mid;
    }
    arr.splice(left, 0, val);
}
