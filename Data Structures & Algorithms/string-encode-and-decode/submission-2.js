class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length == 0) return ""
        let result = new String()
        for(const str of strs ){
            const len = str.length
            result = result + len + '#' + str
        }
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str.length == 0) return []
    let result = new Array()
    let i = 0
     while(i<str.length){
        const staringIndex = str.indexOf("#",i)
        let start = Number(str.slice(i,staringIndex))
        result.push(str.slice(staringIndex+1,staringIndex+1+start))
        i = staringIndex+1+start
      }
      return result
    }
}
