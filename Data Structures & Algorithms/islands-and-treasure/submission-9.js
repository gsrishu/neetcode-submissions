class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const [row, col] = [grid.length, grid[0].length];
        const stack = new Array();
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (grid[i][j] == 0) {
                    stack.push([i, j]);
                }
            }
        }

        const direction = [[1,0],[-1,0],[0,1],[0,-1]]
        let idx = 0
            while (idx < stack.length) {
                const [di, dj] = stack[idx];
                idx++
                for(let [i,j] of direction){
                    let ni = di + i
                    let nj = dj + j
                    if (ni < 0 || ni >= row || nj < 0 || nj >= col) continue;
                    if(grid[ni][nj] == 2147483647){
                        grid[ni][nj] = grid[di][dj] +1
                        stack.push([ni,nj])
                    }

                }
            }

        
        return grid;
    }
}
