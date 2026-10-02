class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (n == 0) return true;
        const visited = new Map();
        let res = true
        function DFS(i, prev) {
            const [row, col] = edges[i];
            console.log(row,col)
             if (row >= n || col >= n || res == false) return;
            if (visited.has(col) && col != prev){
                 res =  false;
                 return
            }
             if (!visited.has(col)) visited.set(col);
             prev = row;
             DFS(i + 1, prev);
        }
        
         DFS(0, -1);
         console.log(visited)
        if (res = false) return false;
        return visited.length == n ? true : false;
    }
}
