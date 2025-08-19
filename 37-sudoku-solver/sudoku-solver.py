class Solution:
    def solveSudoku(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]
        empty_cells = []

        for i in range(9):
            for j in range(9):
                if board[i][j] != '.':
                    digit = board[i][j]
                    box_idx = (i // 3) * 3 + j // 3
                    rows[i].add(digit)
                    cols[j].add(digit)
                    boxes[box_idx].add(digit)
                else:
                    empty_cells.append((i, j))
        
        def solve(index):
            if index == len(empty_cells):
                return True 
            
            i, j = empty_cells[index]
            box_idx = (i // 3) * 3 + j // 3

            for digit in '123456789':
                if (digit not in rows[i] and 
                    digit not in cols[j] and 
                    digit not in boxes[box_idx]):
                    board[i][j] = digit
                    rows[i].add(digit)
                    cols[j].add(digit)
                    boxes[box_idx].add(digit)

                    if solve(index + 1):
                        return True

                    board[i][j] = '.'
                    rows[i].remove(digit)
                    cols[j].remove(digit)
                    boxes[box_idx].remove(digit)
            
            return False
        
        solve(0)