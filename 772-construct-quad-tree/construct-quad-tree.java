public class Solution {
    public Node construct(int[][] grid) {
        return build(grid, 0, 0, grid.length);
    }

    private Node build(int[][] grid, int r, int c, int length) {
        if (length == 1) {
            return new Node(grid[r][c] == 1, true);
        }

        int half = length / 2;

        Node topLeft = build(grid, r, c, half);
        Node topRight = build(grid, r, c + half, half);
        Node bottomLeft = build(grid, r + half, c, half);
        Node bottomRight = build(grid, r + half, c + half, half);

        if (topLeft.isLeaf && topRight.isLeaf && bottomLeft.isLeaf && bottomRight.isLeaf &&
            topLeft.val == topRight.val &&
            topRight.val == bottomLeft.val &&
            bottomLeft.val == bottomRight.val) {

            return new Node(topLeft.val, true);
        } else {
            return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight);
        }
    }
}
