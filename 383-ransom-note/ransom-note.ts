function canConstruct(ransomNote: string, magazine: string): boolean {
    const count: number[] = new Array(26).fill(0);

    for (const ch of magazine) {
        count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (const ch of ransomNote) {
        const idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        if (count[idx] === 0) return false;
        count[idx]--;
    }

    return true;
}
