class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = new Array()
    const temp = new Array()
    const n = nums.length
    function check(idx) {
        if(idx === n){
           // console.log(temp)
            result.push([...temp])
            return
        }
        for(let j = idx; j < n; j++){
            [nums[idx],nums[j]] = [nums[j],nums[idx]]
            temp.push(nums[idx])
            check(idx + 1) 
            temp.pop();
            [nums[idx],nums[j]] = [nums[j],nums[idx]]
        }
    }


    check(0)
    return result
    }
}
