function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;

    const charToWord = new Map<string, string>();
    const wordToChar = new Map<string, string>();

    for (let i = 0; i < pattern.length; i++) {
        const ch = pattern[i];
        const word = words[i];

        if (charToWord.has(ch)) {
            if (charToWord.get(ch) !== word) return false;
        } else {
            charToWord.set(ch, word);
        }

        if (wordToChar.has(word)) {
            if (wordToChar.get(word) !== ch) return false;
        } else {
            wordToChar.set(word, ch);
        }
    }

    return true;
}
