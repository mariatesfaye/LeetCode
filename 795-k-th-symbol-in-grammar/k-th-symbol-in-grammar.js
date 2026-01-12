/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
    if (n === 1) return 0; 
    const mid = 1 << (n - 2); 
    if (k <= mid) {
        return kthGrammar(n - 1, k);
    } else {
        return kthGrammar(n - 1, k - mid) ^ 1;
    }
};
