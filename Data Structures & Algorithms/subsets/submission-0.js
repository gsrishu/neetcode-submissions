class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = new Array()
        let i = 0
        const subset = []
        function unique(i){
            if(i == nums.length){
                res.push([...subset])
                return

            } 

            //inclusion
            subset.push(nums[i])
            unique(i+1)

            //exclusion
            subset.pop()
            unique(i+1)

        }
        unique(i)
        return res

    }
}
