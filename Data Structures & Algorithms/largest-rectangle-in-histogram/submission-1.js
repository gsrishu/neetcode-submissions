class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const l = new Array();
        const r = new Array();
        const stack = new Array()
        //left
        for (let i = 0; i < heights.length; i++) {
            while(stack.length && heights[stack[stack.length -1 ]] >=  heights[i]){
                stack.pop()
            }
            l[i] = stack.length ? stack[stack.length -1 ] : -1
            stack.push(i)
            
        }
        stack.length = 0
        //right
        for (let i = heights.length -1; i >= 0; i--) {
             while(stack.length >= 0 && heights[stack[stack.length - 1 ]]  >= heights[i]){
                stack.pop()
            }
            r[i] = stack.length ? stack[stack.length -1 ] : heights.length
            stack.push(i)
            
        }

        //result
        let result = 0
         for (let i = 0; i < heights.length; i++) {
           let width = r[i] - l[i] - 1
           result = Math.max(result, width * heights[i])
         }

        return result
    }
}
