class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        // const pecificRegion = [0,heights[0].length - 1]
        // const atlanticRegin = [heights.length - 1,]
        const [row, col] = [heights.length, heights[0].length];
        const result = new Array()
        function dfs(i, j) {
            const inBoundry = i >= 0 && i < row && j >= 0 && j < col;
            if (!inBoundry) return;

            if (i == row - 1 && j > 0) {
                result.push(heights[i][j]);
                return;
            }
            if (i == 0 && j < col - 1) {
                result.push(heights[i][j]);
                return;
            }
            dfs(i + 1, j);
            dfs(i - 1, j);
            dfs(i, j + 1);
            dfs(i, j - 1);
        }
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                if((i == 0 && j < col - 1)){
                    console.log(i,j)
                    dfs(i, j);
                }
                else if(i == row - 1 && j > 0){
                    console.log(i,j)
                    dfs(i, j);
                }else if(j == 0){}
            }
        }

        return result
    }
}
