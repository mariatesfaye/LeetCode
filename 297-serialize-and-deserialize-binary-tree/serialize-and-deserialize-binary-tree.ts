function serialize(root: TreeNode | null): string {
    const result: string[] = [];

    function dfs(node: TreeNode | null): void {
        if (!node) {
            result.push("null");
            return;
        }
        result.push(node.val.toString());
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return result.join(",");
}

function deserialize(data: string): TreeNode | null {
    const nodes = data.split(",");
    let index = 0;

    function dfs(): TreeNode | null {
        if (index >= nodes.length) return null;
        const val = nodes[index++];
        if (val === "null") return null;
        const node = new TreeNode(parseInt(val));
        node.left = dfs();
        node.right = dfs();
        return node;
    }

    return dfs();
}
