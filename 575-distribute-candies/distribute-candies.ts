function distributeCandies(candyType: number[]): number {
    const uniqueTypes = new Set(candyType);

    const maxCandies = candyType.length / 2;

    return Math.min(uniqueTypes.size, maxCandies);
}
