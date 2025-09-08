function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const mapST = new Map<string, string>();
    const mapTS = new Map<string, string>();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapST.has(charS) && mapST.get(charS) !== charT) {
            return false;
        }

        if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
            return false;
        }

        mapST.set(charS, charT);
        mapTS.set(charT, charS);
    }

    return true;
}
