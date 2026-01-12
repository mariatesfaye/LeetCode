/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    const freq = new Map();
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }
    let arr = Array.from(freq.entries());
    arr.sort((a, b) => b[1] - a[1]);
    if (arr[0][1] > Math.ceil(s.length / 2)) {
        return "";
    }

    let result = Array(s.length);
    let idx = 0;
    for (let [ch, count] of arr) {
        while (count > 0) {
            if (idx >= s.length) {
                idx = 1;
            }
            result[idx] = ch;
            idx += 2;
            count--;
        }
    }

    return result.join("");
};
