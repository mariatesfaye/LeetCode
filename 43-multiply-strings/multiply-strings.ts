function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return "0";
    
    const m: number = num1.length;
    const n: number = num2.length;
    const result: number[] = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const digit1: number = num1.charCodeAt(i) - '0'.charCodeAt(0);
            const digit2: number = num2.charCodeAt(j) - '0'.charCodeAt(0);
            const product: number = digit1 * digit2;
           
            const pos1: number = i + j;
            const pos2: number = i + j + 1;
            const sum: number = product + result[pos2];
            
            result[pos2] = sum % 10; 
            result[pos1] += Math.floor(sum / 10); 
        }
    }

    let resultStr: string = "";
    let leadingZero: boolean = true;
    for (let digit of result) {
        if (digit !== 0 || !leadingZero) {
            resultStr += digit;
            leadingZero = false;
        }
    }

    return resultStr.length === 0 ? "0" : resultStr;
}