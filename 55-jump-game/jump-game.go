func canJump(nums []int) bool {
    farthest := 0
    n := len(nums)

    for i := 0; i < n; i++ {
        if i > farthest {
            return false
        }
        if i + nums[i] > farthest {
            farthest = i + nums[i]
        }
    }

    return true
}
