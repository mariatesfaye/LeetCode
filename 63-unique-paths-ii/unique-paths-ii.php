class Solution {

    /**
     * @param Integer[][] $obstacleGrid
     * @return Integer
     */
    function uniquePathsWithObstacles($obstacleGrid) {
        $m = count($obstacleGrid);
        $n = count($obstacleGrid[0]);

        if ($obstacleGrid[0][0] == 1 || $obstacleGrid[$m-1][$n-1] == 1) {
            return 0;
        }

        $dp = array_fill(0, $m, array_fill(0, $n, 0));
        $dp[0][0] = 1; 

        for ($i = 1; $i < $m; $i++) {
            $dp[$i][0] = ($obstacleGrid[$i][0] == 0 && $dp[$i-1][0] == 1) ? 1 : 0;
        }

        for ($j = 1; $j < $n; $j++) {
            $dp[0][$j] = ($obstacleGrid[0][$j] == 0 && $dp[0][$j-1] == 1) ? 1 : 0;
        }

        for ($i = 1; $i < $m; $i++) {
            for ($j = 1; $j < $n; $j++) {
                if ($obstacleGrid[$i][$j] == 0) {
                    $dp[$i][$j] = $dp[$i-1][$j] + $dp[$i][$j-1];
                } else {
                    $dp[$i][$j] = 0;
                }
            }
        }

        return $dp[$m-1][$n-1];
    }
}
