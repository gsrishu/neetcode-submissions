class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length== 0) return 0
     const set = new Set(nums)
     let longest = 1
     for (const num of nums){
        let currentLongest = 0
        if(!set.has(num-1)){
            let temp = num
            while(set.has(temp)){
                currentLongest++
                temp += 1
            }
        }
        longest = Math.max(longest,currentLongest)
     }
     return longest
    }

}
