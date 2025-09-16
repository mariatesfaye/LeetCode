function addOperators(num: string, target: number): string[] {
    const result: string[] = [];

    function backtrack(index: number, path: string, value: number, prev: number) {
        if (index === num.length) {
            if (value === target) {
                result.push(path);
            }
            return;
        }

        for (let i = index; i < num.length; i++) {
            if (i !== index && num[index] === '0') break;

            const currStr = num.substring(index, i + 1);
            const currNum = Number(currStr);

            if (index === 0) {
                backtrack(i + 1, currStr, currNum, currNum);
            } else {
                backtrack(i + 1, path + '+' + currStr, value + currNum, currNum);

                backtrack(i + 1, path + '-' + currStr, value - currNum, -currNum);

                backtrack(i + 1, path + '*' + currStr, value - prev + prev * currNum, prev * currNum);
            }
        }
    }

    backtrack(0, "", 0, 0);
    return result;
}
