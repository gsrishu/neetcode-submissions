class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    mapEqual(m1,m2){
        if(m1.size != m2.size) return false
        for(const [char,count] of m1){
            if(m2.get(char) != count) return false
        }
        return true
    }

    checkInclusion(s1, s2) {
        if (s1.length <= 0) {
            return true;
        }
        if(s1.length > s2.length) return false
        const map = new Map()
        for (const s of s1){
            map.set(s, (map.get(s) || 0) + 1)
        }
        const wMap = new Map()
        
        for(let i = 0; i < s2.length;i++){
             let l = i, r=  i + s1.length
             while( l < r && r <= s2.length){
                 wMap.set(s2[l], (wMap.get(s2[l]) || 0) + 1)
                 l++
             }
             if(this.mapEqual(map,wMap)) return true
             wMap.clear()
        }
        map.clear()
        return false
    }
}
