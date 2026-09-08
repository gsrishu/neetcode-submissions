class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    clearString(char){
        if(char <= 'z' && char >= 'a' || char <= '9' && char >= '0') return true
        return false
    }
    isPalindrome(s) {
        let clearedString = ""
        for (let char of s.toLowerCase()){
            if(this.clearString(char)){
                clearedString += char.toLowerCase()
            }
        }
        let startPoint = 0, endPoint = clearedString.length -1
        while(startPoint<=endPoint){
            if(clearedString[startPoint] != clearedString[endPoint]) return false
            startPoint++
            endPoint--
        }
        return true
    }
}
