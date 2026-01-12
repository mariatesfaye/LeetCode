/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    const n = arr.length;
    let suffixMin = Array(n + 1).fill(Infinity);
    for (let i = n - 1; i >= 0; i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1], arr[i]);
    }

    let chunks = 0;
    let prefixMax = -Infinity;
    for (let i = 0; i < n; i++) {
        prefixMax = Math.max(prefixMax, arr[i]);
        if (prefixMax <= suffixMin[i + 1]) {
            chunks++;
        }
    }

    return chunks;
};
