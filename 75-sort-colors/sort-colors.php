class Solution {

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function sortColors(&$nums) {
        $low = 0;
        $mid = 0;
        $high = count($nums) - 1;

        while ($mid <= $high) {
            if ($nums[$mid] == 0) {
                [$nums[$low], $nums[$mid]] = [$nums[$mid], $nums[$low]];
                $low++;
                $mid++;
            } elseif ($nums[$mid] == 1) {
                $mid++;
            } else {
                [$nums[$mid], $nums[$high]] = [$nums[$high], $nums[$mid]];
                $high--;
            }
        }
    }
}
