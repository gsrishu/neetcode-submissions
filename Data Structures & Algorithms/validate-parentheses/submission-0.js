class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = []
        for(const c of s){
            if(c == ')'){
                let top = stack.pop()
                if(top != '(') return false
            }else  if(c == '}'){
                let top = stack.pop()
                if(top != '{') return false
            }else  if(c == ']'){
                let top = stack.pop()
                if(top != '[') return false
            }else{
                stack.push(c)
            }
           
        }
        if(stack.length == 0) return true

        return false
    }
}
