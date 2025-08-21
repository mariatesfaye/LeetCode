func spiralOrder(matrix [][]int) []int {
    if len(matrix) == 0 {
        return []int{}
    }

    m, n := len(matrix), len(matrix[0])
    result := make([]int, 0, m*n)

    top, bottom := 0, m-1
    left, right := 0, n-1

    for top <= bottom && left <= right {
        for c := left; c <= right; c++ {
            result = append(result, matrix[top][c])
        }
        top++

        for r := top; r <= bottom; r++ {
            result = append(result, matrix[r][right])
        }
        right--

        if top <= bottom {
            for c := right; c >= left; c-- {
                result = append(result, matrix[bottom][c])
            }
            bottom--
        }

        if left <= right {
            for r := bottom; r >= top; r-- {
                result = append(result, matrix[r][left])
            }
            left++
        }
    }

    return result
}
