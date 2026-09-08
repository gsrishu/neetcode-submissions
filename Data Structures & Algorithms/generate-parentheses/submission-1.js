class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {

        const result = new Array()
        let str = new Array()
        function generate(start, closed){
         if( start === n && closed == n){
            result.push(str.join(''))
            return
         }
         if(start < n){
            str.push('(')
            generate(start+1,closed)
            str.pop()
         }
         if(closed < start){
            str.push(')')
            generate(start,closed+1)
           str.pop()
         }

        }
        generate(0,0)
        return result


    }
}
