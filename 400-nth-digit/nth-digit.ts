function findNthDigit(n: number): number {
    let digitLength = 1;    
    let count = 9;          
    let start = 1;        

    while (n > digitLength * count) {
        n -= digitLength * count;
        digitLength++;
        count *= 10;
        start *= 10;
    }

    const number = start + Math.floor((n - 1) / digitLength);
    const digitIndex = (n - 1) % digitLength;

    return Number(number.toString()[digitIndex]);
}
