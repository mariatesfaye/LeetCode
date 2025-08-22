class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return String
     */
    function getPermutation($n, $k) {
        $nums = range(1, $n);
        $factorials = [1];
        for ($i = 1; $i <= $n; $i++) {
            $factorials[$i] = $factorials[$i - 1] * $i;
        }

        $k--; 
        $result = '';

        for ($i = $n; $i >= 1; $i--) {
            $fact = $factorials[$i - 1];
            $index = intdiv($k, $fact);
            $result .= $nums[$index];
            array_splice($nums, $index, 1);
            $k %= $fact;
        }

        return $result;
    }
}
