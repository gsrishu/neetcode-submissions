class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        for(const num of nums){
            map.set(num,(map.get(num) || 0 ) + 1)
        }
        const sorted = [...map.entries()].sort((a,b)=>b[1]-a[1])
        const res = new Array()
        let i = 0
        for(const [keys,data] of sorted){
           res.push(keys)
           i++;
           if(i == k) break

        }
        return res
       
    }
}
