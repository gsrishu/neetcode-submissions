class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {

        const result = []
        const subset = []
        let i = 0
        nums = nums.sort()
        function allSubset(i){
            if(i == nums.length){
                result.push([...subset])
                return
            }
            //inclusion
            subset.push(nums[i])
            allSubset(i+1)

            //removing the duplicate number
            let idx = i + 1
            while(idx < nums.length && nums[idx] == nums[idx - 1]) idx++
                   
            //exclusion
            subset.pop()
            allSubset(idx)

        }
        allSubset(i)
        return result
    }
}
