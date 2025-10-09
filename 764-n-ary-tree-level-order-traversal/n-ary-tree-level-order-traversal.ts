/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     children: _Node[]
 *     
 *     constructor(v: number) {
 *         this.val = v;
 *         this.children = [];
 *     }
 * }
 */

function levelOrder(root: _Node | null): number[][] {
    if (!root) return [];

    const result: number[][] = [];
    const queue: _Node[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel: number[] = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!; 
            currentLevel.push(node.val);

            for (const child of node.children) {
                queue.push(child);
            }
        }

        result.push(currentLevel);
    }

    return result;
}
