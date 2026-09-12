class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const [row, col] = [board.length, board[0].length];
        const visited = new Set();
        function dfs(i, j,component) {
            const isBoundry = i >= 0 && i < row && j >= 0 && j < col;
            if (!isBoundry) return false;
            const key = `${i}-${j}`;
            if (visited.has(key)) return false;
            visited.add(key);
            if (board[i][j] == "X") return false;
                  component.push([i,j])
          const isBoundary = i == 0 || j == col - 1 || j == 0 || i == row - 1
            let a = dfs(i + 1, j,component);
            let b = dfs(i - 1, j,component);
            let c = dfs(i, j + 1,component);
            let d = dfs(i, j - 1,component);
            return isBoundary || a || b || c || d
        }
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (board[i][j] == "O" && !visited.has(`${i}-${j}`)) {
                    let component = []
                    let check = dfs(i, j,component);
                    if(!check){
                        for(let [k,l] of component){
                            board[k][l] = 'X'
                        }
                    }
                }
            }
        }

        return board;
    }
}
