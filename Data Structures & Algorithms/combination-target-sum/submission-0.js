class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let i = 0
        let res = new Array()
        let temp = new Array()
        function findSum(i,remaning){

            if(remaning === 0){
                res.push([...temp])
                return 
            }
            if(i === nums.length) return 

            if(nums[i] > remaning){
                findSum(i+1,remaning)
                return 
            }

            temp.push(nums[i])
            findSum(i,remaning - nums[i])

            temp.pop()
            findSum(i+1,remaning)

        }

        findSum(i,target)
        return res
    }
}
