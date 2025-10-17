function findLongestWord(s: string, dictionary: string[]): string {
    let result = "";

    function isSubsequence(word: string, s: string): boolean {
        let i = 0;
        let j = 0;

        while (i < s.length && j < word.length) {
            if (s[i] === word[j]) {
                j++;
            }
            i++;
        }
        return j === word.length;
    }

    for (const word of dictionary) {
        if (isSubsequence(word, s)) {
            if (
                word.length > result.length || 
                (word.length === result.length && word < result)
            ) {
                result = word;
            }
        }
    }

    return result;
}
