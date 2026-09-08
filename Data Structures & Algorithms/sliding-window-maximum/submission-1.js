
class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {

        const queue = new Array()
        const res = new Array()
        for(let r = 0;  r < nums.length; r++){

            if(queue.length && queue[0] <= r - k ) queue.shift()
              
            while(queue.length && nums[queue.at(-1)] <= nums[r]) queue.pop()

            queue.push(r)

            if(r >= k -1) res.push(nums[queue[0]])
        }
        return res
    }
        
}
