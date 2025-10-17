function findLUSlength(strs: string[]): number {
    function isSubsequence(a: string, b: string): boolean {
        let i = 0, j = 0;
        while (i < a.length && j < b.length) {
            if (a[i] === b[j]) i++;
            j++;
        }
        return i === a.length;
    }

    strs.sort((a, b) => b.length - a.length);

    for (let i = 0; i < strs.length; i++) {
        let uncommon = true;
        for (let j = 0; j < strs.length; j++) {
            if (i === j) continue;
            if (isSubsequence(strs[i], strs[j])) {
                uncommon = false;
                break;
            }
        }
        if (uncommon) return strs[i].length;
    }

    return -1;
}
