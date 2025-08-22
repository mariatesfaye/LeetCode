class Solution {

    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function minimumArea($grid) {
        $minRow = PHP_INT_MAX;
        $maxRow = PHP_INT_MIN;
        $minCol = PHP_INT_MAX;
        $maxCol = PHP_INT_MIN;

        $rows = count($grid);
        $cols = count($grid[0]);

        for ($i = 0; $i < $rows; $i++) {
            for ($j = 0; $j < $cols; $j++) {
                if ($grid[$i][$j] === 1) {
                    $minRow = min($minRow, $i);
                    $maxRow = max($maxRow, $i);
                    $minCol = min($minCol, $j);
                    $maxCol = max($maxCol, $j);
                }
            }
        }

        $height = $maxRow - $minRow + 1;
        $width = $maxCol - $minCol + 1;

        return $height * $width;
    }
}
