class Solution {
    private val memo = mutableMapOf<Pair<String, String>, Boolean>()

    fun isScramble(s1: String, s2: String): Boolean {
        if (s1 == s2) return true
        if (s1.length != s2.length) return false
        if (s1.toCharArray().sorted() != s2.toCharArray().sorted()) return false

        val key = Pair(s1, s2)
        if (memo.containsKey(key)) return memo[key]!!

        val n = s1.length
        for (i in 1 until n) {
            if (isScramble(s1.substring(0, i), s2.substring(0, i)) &&
                isScramble(s1.substring(i), s2.substring(i))) {
                memo[key] = true
                return true
            }
            if (isScramble(s1.substring(0, i), s2.substring(n - i)) &&
                isScramble(s1.substring(i), s2.substring(0, n - i))) {
                memo[key] = true
                return true
            }
        }

        memo[key] = false
        return false
    }
}
