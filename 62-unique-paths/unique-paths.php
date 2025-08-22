class Solution {

    /**
     * @param Integer $m
     * @param Integer $n
     * @return Integer
     */
    function uniquePaths($m, $n) {
        return $this->binomialCoefficient($m + $n - 2, min($m - 1, $n - 1));
    }

    private function binomialCoefficient($n, $k) {
        $result = 1;
        for ($i = 1; $i <= $k; $i++) {
            $result = $result * ($n - $k + $i) / $i;
        }
        return (int)$result;
    }
}
