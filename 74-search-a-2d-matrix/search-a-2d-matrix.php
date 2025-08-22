class Solution {

    /**
     * @param Integer[][] $matrix
     * @param Integer $target
     * @return Boolean
     */
    function searchMatrix($matrix, $target) {
        $m = count($matrix);
        $n = count($matrix[0]);

        $left = 0;
        $right = $m * $n - 1;

        while ($left <= $right) {
            $mid = intdiv($left + $right, 2);
            $midValue = $matrix[intdiv($mid, $n)][$mid % $n];

            if ($midValue == $target) {
                return true;
            } elseif ($midValue < $target) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }

        return false;
    }
}
