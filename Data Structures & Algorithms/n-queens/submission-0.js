class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        let result = new Array();
        let temp = new Array();
        for(let i = 0;i < n;i++){
            temp.push(new Array(n).fill("."))
        }
        function isSafe(row, col) {
            // //row
            for (let i = 0; i < n; i++) {
                if (temp[row][i] == "Q") return false;
            }
            //column
            for (let i = 0; i < n; i++) {
                if (temp[i][col] == "Q") return false;
            }
            //left h
            for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
                if (temp[i][j] == "Q") return false;
            }
            //right h
            for (let i = row , j = col; i >= 0 && j < n; i--, j++) {
                if (temp[i][j] == "Q") return false;
            }
            return true
        }

        function nQueens(row) {
            if (row == n) {
                result.push(temp.map((row)=>row.join("")));
                return;
            }
            for (let j = 0; j < n; j++) {
                if (isSafe(row,j)) {
                    temp[row][j] = "Q";
                    nQueens(row + 1);
                    temp[row][j] = ".";
                }
            }
        }
        nQueens(0);
        return result
    }
}
