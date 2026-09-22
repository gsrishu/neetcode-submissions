class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const [row, col] = [grid.length, grid[0].length];
        const stack = new Array();
        function dfs(i, j, dist) {
            stack.push([i, j,dist]);
            while (stack.length) {
                const [di, dj, cdist] = stack.pop();
                if (di < 0 || di >= row || dj < 0 || dj >= col) continue;
                if (grid[di][dj] == -1) continue;
                if (cdist > grid[di][dj]) continue;
                grid[di][dj] = cdist;
                stack.push([di + 1, dj, cdist + 1]);
                stack.push([di - 1, dj, cdist + 1]);
                stack.push([di, dj + 1, cdist + 1]);
                stack.push([di, dj - 1, cdist + 1]);
            }
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (grid[i][j] == 0) {
                    dfs(i, j, 0);
                }
            }
        }
        return grid;
    }
}
