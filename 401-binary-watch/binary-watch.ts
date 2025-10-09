function readBinaryWatch(turnedOn: number): string[] {
    const result: string[] = [];

    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const bitsOn = countBits(h) + countBits(m);
            if (bitsOn === turnedOn) {
                result.push(`${h}:${m.toString().padStart(2, '0')}`);
            }
        }
    }

    return result;
}

function countBits(num: number): number {
    let count = 0;
    while (num > 0) {
        count += num & 1;
        num >>= 1;
    }
    return count;
}
