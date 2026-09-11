class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const [row, col] = [heights.length, heights[0].length];
        const pecificRegion = new Array();
        const atlanticRegin = new Array();
        const pecific = new Set();
        const atlantic = new Set();
        const directions = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        function bfs(starts, visited) {
            const queue = [...starts];
            for (const [i, j] of queue) {
                visited.add(`${i},${j}`);
            }
            while (queue.length) {
                const [di, dj] = queue.shift();
                for (const [i, j] of directions) {
                    const ni = di + i;
                    const nj = dj + j;
                    const isBoundary = ni >= 0 && ni < row && nj >= 0 && nj < col;
                    if (!isBoundary) continue;
                    if (visited.has(`${ni},${nj}`)) continue;
                    if (heights[ni][nj] < heights[di][dj]) continue;
                    visited.add(`${ni},${nj}`);
                    queue.push([ni, nj]);
                }
            }
        }

        for (let i = 0; i < col; i++) {
            pecificRegion.push([0, i]);
            atlanticRegin.push([row - 1, i]);
        }
        for (let i = 0; i < row; i++) {
            pecificRegion.push([i, 0]);
            atlanticRegin.push([i, col -1]);
        }
        bfs(pecificRegion, pecific);
        bfs(atlanticRegin, atlantic);
        const result = new Array();
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                let key = `${i},${j}`;
                if (pecific.has(key) && atlantic.has(key)) result.push([i, j]);
            }
        }

        return result;
    }
}
