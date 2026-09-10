class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const queue = new Array();
        const [row, col] = [grid.length, grid[0].length];
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (grid[i][j] == 2) {
                    queue.push([i, j]);
                }
            }
        }

        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];
        let result = 0;
        let flag = false;
        while (queue.length) {
            const currentSize = queue.length;
            for (let x = 0; x < currentSize; x++) {
                const [i, j] = queue.shift();
                for (const [di, dj] of directions) {
                    const ni = di + i;
                    const nj = dj + j;
                    const isBoundery = ni >= 0 && ni < row && nj >= 0 && nj < col;
                    if (!isBoundery) continue;

                    if (grid[ni][nj] == 1) {
                        grid[ni][nj] = 2;
                        queue.push([ni, nj]);
                    }
                }
            }
            if(queue.length) result++
        }
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if (grid[i][j] == 1) {
                    result = -1;
                    break;
                }
            }
        }

        return result;
    }
}
