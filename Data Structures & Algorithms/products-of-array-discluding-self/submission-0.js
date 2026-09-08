class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = new Array()
        const leftProduct = new Array()
        let temp = 1
        for(const num of nums){
            temp *= num
            leftProduct.push(temp)
        }
        const rightProduct = new Array()
        temp = 1
        for(let j = nums.length -1;  j>=0 ; j--){
            temp *= nums[j]
            rightProduct[j] = temp
        }

            for(let i = 0; i < nums.length;i++){
                if(i == 0) result[i]= rightProduct[i+1]
                else if(i == nums.length -1) result[i] = leftProduct[i-1]
                else result[i] = (leftProduct[i-1] * rightProduct[i+1])
            }

            return result
    }

}
