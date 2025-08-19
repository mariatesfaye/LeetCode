class Solution {
    func permuteUnique(_ nums: [Int]) -> [[Int]] {
        var result: [[Int]] = []
        var current: [Int] = []
        var used: [Bool] = Array(repeating: false, count: nums.count)
        let sortedNums = nums.sorted() // Sort to handle duplicates
        
        func backtrack() {
            if current.count == sortedNums.count {
                result.append(current)
                return
            }

            for i in 0..<sortedNums.count {
                if used[i] || (i > 0 && sortedNums[i] == sortedNums[i-1] && !used[i-1]) {
                    continue
                }

                used[i] = true
                current.append(sortedNums[i])

                backtrack()

                current.removeLast()
                used[i] = false
            }
        }
        
        backtrack()
        return result
    }
}