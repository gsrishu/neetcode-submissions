class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const [row, col] = [board.length, board[0].length];
        const visited = new Set();
        function dfs(i, j, component) {
            const stack = [[i, j]];
            let isBound = false;
            while (stack.length) {
                const [x, y] = stack.pop();
                const isBoundry = x >= 0 && x < row && y >= 0 && y < col;
                if (!isBoundry) continue;
                const key = `${x}-${y}`;
                if (visited.has(key) || board[x][y] == "X") continue;
                visited.add(key);
                component.push([x, y]);
                if (x == 0 || y == col - 1 || y == 0 || x == row - 1) isBound = true;
                stack.push([x + 1, y]);
                stack.push([x - 1, y]);
                stack.push([x, y + 1]);
                stack.push([x, y - 1]);
            }
            return isBound
        }
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (board[i][j] == "O" && !visited.has(`${i}-${j}`)) {
                    let component = [];
                    let check = dfs(i, j, component);
                    if (!check) {
                        for (let [k, l] of component) {
                            board[k][l] = "X";
                        }
                    }
                }
            }
        }

        return board;
    }
}
