
class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        
        const rowMap = new Map()
        const colMap = new Map()
        const boxMap = new Map()

        for(let i = 0; i < 9; i++){
            for (let j = 0; j < 9; j++){
                 if(board[i][j] == ".") continue
                if(rowMap.has(`${i}-${board[i][j]}`) ||  colMap.has(`${j}-${board[i][j]}`) || boxMap.has(`${Math.floor(i/3)}-${Math.floor(j/3)}-${board[i][j]}`)) return false

                rowMap.set(`${i}-${board[i][j]}`, true)
                colMap.set(`${j}-${board[i][j]}`,true)
                boxMap.set(`${Math.floor(i/3)}-${Math.floor(j/3)}-${board[i][j]}`,true)
            }
        }
        return true
    }
}
