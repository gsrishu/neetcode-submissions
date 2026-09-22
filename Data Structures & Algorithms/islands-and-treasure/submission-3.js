class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const [row, col] = [grid.length, grid[0].length];
        const visited = new Set();
        function dfs(i, j, dist) {
            let boundery = i >= 0 && i < row && j >= 0 && j < col;
            if (!boundery || grid[i][j] == -1 || dist > grid[i][j]) return;
            grid[i][j] = dist;
            dfs(i + 1, j, dist + 1);
            dfs(i - 1, j, dist + 1);
            dfs(i, j + 1, dist + 1);
            dfs(i, j - 1, dist + 1);
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
