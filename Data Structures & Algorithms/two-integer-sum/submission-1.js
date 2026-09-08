class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map()
        for(const [index,num] of nums.entries()){
            if(map.has(target-num)) return [map.get((target-num)),index]
            map.set(num,index)
        }
        
    }
}
