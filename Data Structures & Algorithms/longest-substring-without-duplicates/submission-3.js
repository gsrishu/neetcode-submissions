class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length == 0) return 0
        let l = 0, r = 0
        const map = new Map()
        let currentMax = 0
        while(r < s.length){
            if(map.has(s[r]) && map.get(s[r])  >= l){
                let findIndex = map.get(s[r])
                l = findIndex + 1
            }
            map.set(s[r],r)
            currentMax = Math.max(currentMax, r - l + 1)
            r++
        }
        return currentMax
    }
}
