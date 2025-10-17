function findPoisonedDuration(timeSeries: number[], duration: number): number {
    if (timeSeries.length === 0 || duration === 0) return 0;

    let totalPoisoned = 0;

    for (let i = 0; i < timeSeries.length - 1; i++) {
        const currentAttack = timeSeries[i];
        const nextAttack = timeSeries[i + 1];
        if (nextAttack >= currentAttack + duration) {
            totalPoisoned += duration;
        } else {
            totalPoisoned += (nextAttack - currentAttack);
        }
    }

    totalPoisoned += duration;

    return totalPoisoned;
}
