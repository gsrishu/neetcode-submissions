class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let [start,end] = [0,numbers.length -1]
        console.log(start,end)
        while(start < end){
            if(numbers[start] + numbers[end] == target) return [start+1,end+1]
            else if(numbers[start] + numbers[end] < target) start++
            else end--
        }
        return [start+1,end+1]
    }
}
