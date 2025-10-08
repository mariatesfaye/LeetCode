function nthSuperUglyNumber(n: number, primes: number[]): number {
    const size = primes.length;
    const indices = new Array(size).fill(0); 
    const ugly = new Array(n).fill(0);
    ugly[0] = 1;

    for (let i = 1; i < n; i++) {
        let next = Infinity;

        for (let j = 0; j < size; j++) {
            next = Math.min(next, primes[j] * ugly[indices[j]]);
        }

        ugly[i] = next;

        for (let j = 0; j < size; j++) {
            if (primes[j] * ugly[indices[j]] === next) {
                indices[j]++;
            }
        }
    }

    return ugly[n - 1];
}
