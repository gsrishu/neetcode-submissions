class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(s.length < t.length) return ""
        if(s == t) return s
        let map = new Map()
        let sourceSum = 0
        for(const c of t){
            if(!map.get(c)) sourceSum++
            map.set(c,(map.get(c) || 0) + 1)
           
        }
        //console.log(map,sourceSum)

        let l = 0, r = 0
        const checkMap = new Map()
        let checkSum = 0
        let currentMin = Infinity
        let subString = []
        while(r < s.length){

            if(map.has(s[r])){
                checkMap.set(s[r], (checkMap.get(s[r]) || 0) + 1)
                if(checkMap.get(s[r]) == map.get(s[r])) checkSum ++
            }
            //if this is a valid substring try to shrink it for minimal 
           // console.log("======",checkMap,checkSum,sourceSum,"=======")
            while(checkSum == sourceSum && l < s.length){
                if(currentMin > r -l){
                    currentMin = r - l
                    subString = [l,r]
                }
                if(checkMap.has(s[l])){
                    checkMap.set(s[l],checkMap.get(s[l]) - 1)
                    if(checkMap.get(s[l]) < map.get(s[l]) ) checkSum --
                }
                 l++;
            }

            r++
           // console.log("**********",l,r,"**********")
        }
        return s.slice(subString[0],subString[1] + 1)
        
    }
}
