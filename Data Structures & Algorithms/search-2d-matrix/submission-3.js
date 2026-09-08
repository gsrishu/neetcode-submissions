class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let len = matrix.length
        let col = -1
        for(let i = 0; i < matrix.length; i++){
            if(target >= matrix[i][0]) col = i
            else break
        }
        if(col == -1) return false
        console.log(col)
        if(matrix[col][0] == target) return true
        let l = 0, r = matrix[col].length
        
        while( l <= r){
            let mid = Math.floor((l+r)/2)
            if(matrix[col][mid] == target) return true
            else if(matrix[col][mid] < target)  l = mid+1
            else r = mid -1
        }
        return false
    }
}
