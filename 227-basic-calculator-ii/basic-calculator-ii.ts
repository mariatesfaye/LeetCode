function calculate(s: string): number {
    const stack: number[] = [];
    let num = 0;
    let sign = '+'; 
    const n = s.length;

    for (let i = 0; i < n; i++) {
        const ch = s[i];

        if (ch >= '0' && ch <= '9') {
            num = num * 10 + Number(ch);
        }

        if ((ch !== ' ' && isNaN(Number(ch))) || i === n - 1) {
            if (sign === '+') {
                stack.push(num);
            } else if (sign === '-') {
                stack.push(-num);
            } else if (sign === '*') {
                const prev = stack.pop()!;
                stack.push(prev * num);
            } else if (sign === '/') {
                const prev = stack.pop()!;
                stack.push(Math.trunc(prev / num)); 
            }
            sign = ch;
            num = 0;
        }
    }

    return stack.reduce((a, b) => a + b, 0);
}
