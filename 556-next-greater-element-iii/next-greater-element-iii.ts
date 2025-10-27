function nextGreaterElement(n: number): number {
    const digits = n.toString().split('').map(Number);
    const len = digits.length;

    let i = len - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }

    if (i < 0) return -1; 
    let j = len - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }

    [digits[i], digits[j]] = [digits[j], digits[i]];

    let left = i + 1, right = len - 1;
    while (left < right) {
        [digits[left], digits[right]] = [digits[right], digits[left]];
        left++;
        right--;
    }

    const result = Number(digits.join(''));
    return result <= 0x7FFFFFFF ? result : -1;
}
