function convertToBase7(num: number): string {
    if (num === 0) return "0";

    const isNegative = num < 0;
    let n = Math.abs(num);
    let result = "";

    while (n > 0) {
        result = (n % 7).toString() + result;
        n = Math.floor(n / 7);
    }

    return isNegative ? "-" + result : result;
}
