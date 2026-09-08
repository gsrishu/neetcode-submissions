class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a,b)=>a-b)
        console.log(nums)
        const res = new Array()


          for(let i = 0; i < nums.length - 2; i++){
            if(nums[i] > 0) break
            if(i > 0 && nums[i] == nums[i-1]) continue
            let [s,t] = [i+1,nums.length-1]
            let temp = -1
            while(s < t ){
                 temp = nums[i] + nums[s] + nums[t]
                 if(temp == 0) {
                    res.push([nums[i],nums[s],nums[t]])
                    s++
                    t--
                    while(s < t && nums[s] == nums[s-1]) s++
                    while(s < t && nums[t] == nums[t+1]) t--
                 }
                else if(temp>0) t--
                else s++
            }
          }

        return res
    }
}
