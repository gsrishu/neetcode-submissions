class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false

    const map = new Map()
        for(const i of s){
            map.set(i,(map.get(i)|| 0)  + 1 )
        }
        for(const j of t){
            if(!map.get(j)){
                return false
            }
            map.set(j,(map.get(j) - 1))
        }
        return true
}
}
