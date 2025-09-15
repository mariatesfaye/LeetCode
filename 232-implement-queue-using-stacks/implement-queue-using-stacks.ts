class MyQueue {
    private inStack: number[] = [];
    private outStack: number[] = [];

    push(x: number): void {
        this.inStack.push(x);
    }

    pop(): number {
        this.shiftStacks();
        return this.outStack.pop()!;
    }

    peek(): number {
        this.shiftStacks();
        return this.outStack[this.outStack.length - 1];
    }

    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }

    private shiftStacks(): void {
        if (this.outStack.length === 0) {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop()!);
            }
        }
    }
}
