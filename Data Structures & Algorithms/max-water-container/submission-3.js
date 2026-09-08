class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        if(heights.length == 0) return []
        if(heights.length === 2) return Math.min(heights[0],heights[1])
        let [l,r] = [0,heights.length-1]
        let max = 0
        while(l<r){
            max = Math.max(max,(r-l) * Math.min(heights[l],heights[r]))
            if(heights[l] < heights[r]) l++
            else r--
        }
        return max

    }
}
