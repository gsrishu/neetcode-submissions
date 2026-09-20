class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let result = 0;
        const visited = new Set();
        const [row, col] = [grid.length, grid[0].length];
        let temp = 0;
        function dfs(i, j) {
            const boundery = i >= 0 && i < row && j >= 0 && j < col;
            if (!boundery || grid[i][j] == 0) return;
            const check = `${i}-${j}`;
            if (visited.has(check)) return;
            temp++;
            visited.add(check);
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                temp = 0
                if (!visited.has(`${i}-${j}`) && grid[i][j] == 1) {
                    dfs(i, j);
                   result = Math.max(result,temp) 
                }
            }
        }
        return result
    }
}
