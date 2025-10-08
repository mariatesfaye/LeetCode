interface NestedInteger {
    isInteger(): boolean;
    getInteger(): number | null;
    getList(): NestedInteger[] | null;
}

class NestedIterator {
    private flatList: number[] = [];
    private index: number = 0;

    constructor(nestedList: NestedInteger[]) {
        this.flatten(nestedList);
    }

    private flatten(nestedList: NestedInteger[]) {
        for (const ni of nestedList) {
            if (ni.isInteger()) {
                this.flatList.push(ni.getInteger()!);
            } else {
                this.flatten(ni.getList()!);
            }
        }
    }

    next(): number {
        return this.flatList[this.index++];
    }

    hasNext(): boolean {
        return this.index < this.flatList.length;
    }
}
