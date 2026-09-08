class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let result = new Array();
        let temp = new Array();

        function check(index) {
            if (index === nums.length) {
                result.push([...temp]);
                return;
            }
            for (let i = index; i < nums.length; i++) {
                [nums[i], nums[index]] = [nums[index], nums[i]];
                //[nums[i], nums[index]] = [nums[index], nums[i]];
                temp.push(nums[index]);
                check(index + 1);
                temp.pop();
                [nums[i], nums[index]] = [nums[index], nums[i]];
                //[nums[i], nums[index]] = [nums[index], nums[i]];
            }
        }
        check(0);
        return result;
    }
}
