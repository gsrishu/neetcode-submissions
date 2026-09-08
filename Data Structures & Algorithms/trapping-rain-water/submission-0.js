class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        const leftMax = new Array()
        const rightMax = new Array()
        leftMax[0] = 0
        rightMax[height.length - 1] = 0
        let j = height.length - 1
        for(let i = 0; i < height.length; i++){
            if( i != 0){
                leftMax[i] = Math.max(leftMax[i - 1],height[i-1])
            } 
            if(j != height.length - 1){
                rightMax[j] = Math.max(rightMax[j+1],height[j+1])
            }
            j--
        }
        let result = 0
        for(let i =0; i < height.length; i++){

            let min = Math.min(leftMax[i],rightMax[i]) - height[i]
            if(min > 0) result += min

        }
        return result


    }
}
