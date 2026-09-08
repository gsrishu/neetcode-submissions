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
        let k = s1.length
        for(let i = 0; i < s2.length;i++){
            //  let l = i, r=  i + s1.length
            //  while( l < r && r <= s2.length){
            //      wMap.set(s2[l], (wMap.get(s2[l]) || 0) + 1)
            //      l++
            //  }
            //  if(this.mapEqual(map,wMap)) return true
            //  wMap.clear()
            wMap.set(s2[i], (wMap.get(s2[i]) || 0) + 1)
            if(i >= k){
                let findChar = wMap.set(s2[i-k], wMap.get(s2[i-k]) - 1)
                if(wMap.get(s2[i-k]) == 0) wMap.delete(s2[i-k])
            }
            if(i >= k-1 && this.mapEqual(map,wMap)) return true

        }
        return false
    }
}
