class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const map = new Map()
        for(const num of nums){
            map.set(num,(map.get(num) || 0) + 1)
        }
        const sortedMap = [...map.entries()].sort((a,b)=>b[1]-a[1])
        let res = []
        let j=0
        for(const [keys,data] of sortedMap){
            res.push(keys)
            j++
            if(j === k) break
        }
        return res
    }
    
    

}
