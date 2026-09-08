class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        //1st solution
        // const leftMax = new Array()
        // const rightMax = new Array()
        // leftMax[0] = 0
        // rightMax[height.length - 1] = 0
        // let j = height.length - 1
        // for(let i = 0; i < height.length; i++){
        //     if( i != 0){
        //         leftMax[i] = Math.max(leftMax[i - 1],height[i-1])
        //     } 
        //     if(j != height.length - 1){
        //         rightMax[j] = Math.max(rightMax[j+1],height[j+1])
        //     }
        //     j--
        // }
    
        // for(let i =0; i < height.length; i++){
        //     if(leftMax[i] == rightMax[i])

        //     let min = Math.min(leftMax[i],rightMax[i]) - height[i]
        //     if(min > 0) result += min

        // }

        //2nd Solution

        let leftMax = 0, rightMax = 0
        let result = 0
        let i = 0, j = height.length - 1
        while(i < j){
            leftMax = Math.max(leftMax, height[i])
            rightMax = Math.max(rightMax,height[j])
            if(leftMax < rightMax){
                result += leftMax - height[i]
                i++

            }else{
                result += rightMax - height[j]
                j--

            }
        }
        return result
    }
}
