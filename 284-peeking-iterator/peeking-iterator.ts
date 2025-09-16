class PeekingIterator {
    private iterator: Iterator;
    private nextElement: number | null;
    private hasMore: boolean;

    constructor(iterator: Iterator) {
        this.iterator = iterator;
        this.hasMore = this.iterator.hasNext();
        this.nextElement = this.hasMore ? this.iterator.next() : null;
    }

    peek(): number {
        return this.nextElement!;
    }

    next(): number {
        const current = this.nextElement!;
        this.hasMore = this.iterator.hasNext();
        this.nextElement = this.hasMore ? this.iterator.next() : null;
        return current;
    }

    hasNext(): boolean {
        return this.hasMore;
    }
}
