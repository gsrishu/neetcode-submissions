class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if(digits.length == 0) return []
        const obj = {
            2: ["a", "b", "c"],
            3: ["d", "e", "f"],
            4: ["g", "h", "i"],
            5: ["j", "k", "l"],
            6: ["m", "n", "o"],
            7: ["p", "q", "r", "s"],
            8: ["t", "u", "v"],
            9: ["w", "x", "y", "z"],
        };
        let temp = new Array()
        const result = new Array()
        function check(index){
            if(index == digits.length){
                result.push(temp.join(''))
                return
            }
            const letters = obj[digits[index]];
            for(let i = 0; i < letters.length; i++){
                temp.push(letters[i])
                check(index + 1) 
                temp.pop()

            }
        }

        check(0)
        return result


    }
}
