function checkInclusion(s1: string, s2: string): boolean {
    const len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;

    const count1 = new Array(26).fill(0);
    const count2 = new Array(26).fill(0);

    for (let i = 0; i < len1; i++) {
        count1[s1.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i) - 97]++;
    }

    const matches = (a: number[], b: number[]) => {
        for (let i = 0; i < 26; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    };

    if (matches(count1, count2)) return true;

    for (let i = len1; i < len2; i++) {
        count2[s2.charCodeAt(i) - 97]++;
        count2[s2.charCodeAt(i - len1) - 97]--;
        if (matches(count1, count2)) return true;
    }

    return false;
}
