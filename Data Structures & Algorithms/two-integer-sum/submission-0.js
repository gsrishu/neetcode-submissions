class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const map = new Map()
        for(const [index,num] of nums.entries()){
            const check = target - num
            if(map.has(check)) return [map.get(check),index]

            map.set(num,index)
        }
    }
}
