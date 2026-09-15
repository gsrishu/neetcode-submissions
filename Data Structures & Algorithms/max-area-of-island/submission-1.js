class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const [row, col] = [grid.length, grid[0].length];
        let result = 0;
        const visited = new Set();
        let temp = 0

        function dfs(i, j) {
            if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] == 0) return;

            let key = `${i}-${j}`;
            if (visited.has(key)) return;
            temp++
            visited.add(key);
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }

        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                temp = 0
                if (grid[i][j] == 1 && !visited.has(`${i}-${j}`)) dfs(i, j);
                result = Math.max(result,temp)
            }
        }

        return result
    }
}
