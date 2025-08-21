func generateMatrix(n int) [][]int {
    matrix := make([][]int, n)
    for i := range matrix {
        matrix[i] = make([]int, n)
    }

    top, bottom := 0, n-1
    left, right := 0, n-1
    num := 1

    for top <= bottom && left <= right {
        for c := left; c <= right; c++ {
            matrix[top][c] = num
            num++
        }
        top++

        for r := top; r <= bottom; r++ {
            matrix[r][right] = num
            num++
        }
        right--

        if top <= bottom {
            for c := right; c >= left; c-- {
                matrix[bottom][c] = num
                num++
            }
            bottom--
        }

        if left <= right {
            for r := bottom; r >= top; r-- {
                matrix[r][left] = num
                num++
            }
            left++
        }
    }

    return matrix
}
