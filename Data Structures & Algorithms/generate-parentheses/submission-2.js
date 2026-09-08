class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = new Array()
        const temp = new Array()
        function check(open,close){
            if(open == n && close == n){
                result.push(temp.join(''))
            }
            if(open < n){
                temp.push('(')
                check(open + 1,close)
                temp.pop()
            }
            if(close < open){
                temp.push(')')
                check(open,close + 1)
                temp.pop()
            }

        }
        check(0,0)
        return result
    }
}
