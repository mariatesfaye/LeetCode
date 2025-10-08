function removeDuplicateLetters(s: string): string {
    const lastIndex: Record<string, number> = {};
    const seen = new Set<string>();
    const stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        lastIndex[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (seen.has(char)) continue;

        while (
            stack.length > 0 &&
            char < stack[stack.length - 1] &&
            lastIndex[stack[stack.length - 1]] > i
        ) {
            seen.delete(stack.pop()!);
        }

        stack.push(char);
        seen.add(char);
    }

    return stack.join('');
}
