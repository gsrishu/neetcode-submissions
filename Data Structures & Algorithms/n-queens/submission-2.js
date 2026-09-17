class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const result = new Array()
    const temp = new Array()
    for (let i = 0; i < n; i++) {
        temp.push(new Array(n).fill("."))
    }
    function isSafe(row, col) {

        //row
        for (let i = 0; i < n; i++) {
            if (temp[row][i] === 'Q') return false
        }
        //col
        for (let i = 0; i < n; i++) {
            if (temp[i][col] === 'Q') return false
        }
        //left v
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (temp[i][j] === 'Q') return false
        }
        //right v
        for (let i = row, j = col; i >= 0 && j < n ; i--, j++) {
            if (temp[i][j] === 'Q') return false
        }

        return true



    }

    function check(index) {
        if (index === n) {
            result.push(temp.map(row => row.join("")))
            return
        }
        for (let i = 0; i < n; i++) {
            if (isSafe(index, i)) {
                temp[index][i] = 'Q'
                check(index + 1)
                temp[index][i] = "."
            }
        }

    }

    check(0)
    return result
    }
}
