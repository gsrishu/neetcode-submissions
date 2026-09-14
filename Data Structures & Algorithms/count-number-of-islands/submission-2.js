class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const [row, col] = [grid.length, grid[0].length];
        const visited = new Set();

        function find(i, j) {
            const stack = [[i, j]];
            while (stack.length) {
                const [di, dj] = stack.pop();
                if (di < 0 || di >= row || dj < 0 || dj >= col || grid[di][dj] == 0) continue;
                const key = `${di}-${dj}`;
                if (visited.has(key)) continue;
                visited.add(key);
                stack.push([di + 1, dj]);
                stack.push([di - 1, dj]);
                stack.push([di, dj + 1]);
                stack.push([di, dj - 1]);
            }
        }
        let result = 0;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (grid[i][j] == 1 && !visited.has(`${i}-${j}`)) {
                    find(i, j)
                    result++
                }
            }
        }
        return result;
    }
}
