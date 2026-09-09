class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const queue = new Array();
        const [row, col] = [grid.length, grid[0].length];
        const visited = new Set();
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (grid[i][j] == 0 && !visited.has(`${i}-${j}`)) {
                    queue.push([i, j]);
                }
            }
        }
        let idx = 0
      const direction = [[-1,0],[1,0],[0,1],[0,-1]]
        while (idx < queue.length) {
            let [i, j] = queue[idx];
            idx++
          for(const [di,dj] of direction){
             const ni = i + di
             const nj = j + dj

             const inside = ni >= 0 && ni < row && nj >= 0 && nj < col
             if(!inside) continue

             if(grid[ni][nj]== 2147483647){
                grid[ni][nj] = grid[i][j] +1
                queue.push([ni,nj])
             }
          }
        }
        return grid;
    }
}
