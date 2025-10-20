function updateBoard(board: string[][], click: number[]): string[][] {
    const m = board.length;
    const n = board[0].length;

    const dirs = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1],  [1, 0], [1, 1]
    ];

    function inBounds(r: number, c: number): boolean {
        return r >= 0 && r < m && c >= 0 && c < n;
    }

    function countMines(r: number, c: number): number {
        let count = 0;
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (inBounds(nr, nc) && board[nr][nc] === 'M') {
                count++;
            }
        }
        return count;
    }

    function dfs(r: number, c: number) {
        if (!inBounds(r, c) || board[r][c] !== 'E') return;

        const mines = countMines(r, c);
        if (mines > 0) {
            board[r][c] = mines.toString();
        } else {
            board[r][c] = 'B';
            for (const [dr, dc] of dirs) {
                dfs(r + dr, c + dc);
            }
        }
    }

    const [clickR, clickC] = click;
    if (board[clickR][clickC] === 'M') {
        board[clickR][clickC] = 'X';
    } else {
        dfs(clickR, clickC);
    }

    return board;
}
