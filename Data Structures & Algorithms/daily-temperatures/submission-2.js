class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */

    dailyTemperatures(temperatures) {

        const stack = new Array()
        const res = new Array()
        let top  = temperatures.length - 1
        for(let i = temperatures.length -1; i >= 0; i--){
                while(stack.length >= 0 && temperatures[stack[stack.length -1]] <= temperatures[i]){
                    stack.pop()
                }

                if(stack.length == 0) res[top] = 0
                else res[top] = (stack[stack.length -1] - i)
                top--
             stack.push(i)
        }
        return res
    }
}
