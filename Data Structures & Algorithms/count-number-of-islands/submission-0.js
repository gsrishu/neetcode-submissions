class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const [ROW, COL] = [grid.length, grid[0].length];

        let result = 0;
        const Visited = new Set();

        function DFS(i, j) {
            const key = `${i}-${j}`;
            if (i < 0 || j < 0 || i >= ROW || j >= COL || grid[i][j] === "0" || Visited.has(key))
                return;

            Visited.add(key);
            DFS(i + 1, j); 
            DFS(i - 1, j);
            DFS(i, j + 1);
            DFS(i, j - 1);
        }
        for (let i = 0; i < ROW; i++) {
            for (let j = 0; j < COL; j++) {
                if (grid[i][j] === "1" && !Visited.has(`${i}-${j}`)) {
                    DFS(i, j);
                    result++;
                }
            }
        }

        return result;
    }
}
