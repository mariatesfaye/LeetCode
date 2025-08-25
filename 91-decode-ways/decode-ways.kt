class Solution {
    fun numDecodings(s: String): Int {
        if (s.isEmpty() || s[0] == '0') return 0

        val n = s.length
        val dp = IntArray(n + 1)
        dp[0] = 1
        dp[1] = 1

        for (i in 2..n) {
            val oneDigit = s.substring(i - 1, i).toInt()
            if (oneDigit in 1..9) {
                dp[i] += dp[i - 1]
            }

            val twoDigit = s.substring(i - 2, i).toInt()
            if (twoDigit in 10..26) {
                dp[i] += dp[i - 2]
            }
        }

        return dp[n]
    }
}
