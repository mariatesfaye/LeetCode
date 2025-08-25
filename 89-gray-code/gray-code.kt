class Solution {
    fun grayCode(n: Int): List<Int> {
        val result = mutableListOf<Int>()
        val total = 1 shl n 

        for (i in 0 until total) {
            result.add(i xor (i shr 1))
        }
        return result
    }
}
