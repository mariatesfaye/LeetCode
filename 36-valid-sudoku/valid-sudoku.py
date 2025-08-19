class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        """
        :type board: List[List[str]]
        :rtype: bool
        """

        rows = [set() for _ in range(9)]
        cols = [set() for _ in range(9)]
        boxes = [set() for _ in range(9)]

        for i in range(9):
            for j in range(9):
                if board[i][j] != '.':
                    digit = board[i][j]

                    box_idx = (i // 3) * 3 + j // 3
                    
                    if (digit in rows[i] or 
                        digit in cols[j] or 
                        digit in boxes[box_idx]):
                        return False

                    rows[i].add(digit)
                    cols[j].add(digit)
                    boxes[box_idx].add(digit)
        
        return True