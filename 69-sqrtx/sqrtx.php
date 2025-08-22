class Solution {

    /**
     * @param Integer $x
     * @return Integer
     */
    function mySqrt($x) {
        if ($x < 2) return $x;

        $left = 1;
        $right = $x;
        $ans = 0;

        while ($left <= $right) {
            $mid = intdiv($left + $right, 2);
            if ($mid <= intdiv($x, $mid)) {
                $ans = $mid; 
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }

        return $ans;
    }
}
