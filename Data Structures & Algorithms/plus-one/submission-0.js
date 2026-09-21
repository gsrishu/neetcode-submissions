class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let flag = false
        for(let i = digits.length-1; i >=0; i--){
            if(digits[i] == 9){
                digits[i] = 0
                flag = true

            }else{
                digits[i] = digits[i] + 1
                flag = false
                break
            }
        }
        if(  flag ==  true) digits.unshift(1)
        return digits
    }
}
