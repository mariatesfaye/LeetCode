// The guess API is defined for you.
// function guess(num: number): number;

function guessNumber(n: number): number {
    let left = 1;
    let right = n;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        const res = guess(mid);

        if (res === 0) {
            return mid;
        } else if (res < 0) {
            right = mid - 1; 
        } else {
            left = mid + 1;  
        }
    }

    return -1; 
}
