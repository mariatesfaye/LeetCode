class Solution {
    fun restoreIpAddresses(s: String): List<String> {
        val result = mutableListOf<String>()
        backtrack(s, 0, mutableListOf(), result)
        return result
    }

    private fun backtrack(s: String, start: Int, path: MutableList<String>, result: MutableList<String>) {
        if (path.size == 4) {
            if (start == s.length) {
                result.add(path.joinToString("."))
            }
            return
        }

        for (len in 1..3) {
            if (start + len > s.length) break

            val part = s.substring(start, start + len)

            if ((part.startsWith("0") && part.length > 1) || part.toInt() > 255) {
                continue
            }

            path.add(part)
            backtrack(s, start + len, path, result)
            path.removeAt(path.size - 1)
        }
    }
}
