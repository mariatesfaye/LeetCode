function findAnagrams(s: string, p: string): number[] {
    const result: number[] = [];
    const sLen = s.length;
    const pLen = p.length;

    if (pLen > sLen) return result;

    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    const aCharCode = 'a'.charCodeAt(0);
    const getIndex = (char: string) => char.charCodeAt(0) - aCharCode;

    for (let i = 0; i < pLen; i++) {
        pCount[getIndex(p[i])]++;
        sCount[getIndex(s[i])]++;
    }

    if (arraysEqual(pCount, sCount)) result.push(0);

    for (let i = pLen; i < sLen; i++) {
        sCount[getIndex(s[i])]++; 
        sCount[getIndex(s[i - pLen])]--; 

        if (arraysEqual(pCount, sCount)) {
            result.push(i - pLen + 1);
        }
    }

    return result;
}

function arraysEqual(a: number[], b: number[]): boolean {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
