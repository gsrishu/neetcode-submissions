class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for(const str of strs){
            res +=`${str.length}#${str}` 
        }
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i =0
        const res = []
        while(i < str.length){

            const findIndex = str.indexOf('#',i)
            const number = Number(str.slice(i,findIndex))
            res.push(str.slice(findIndex + 1, findIndex + 1 + number))
            i = findIndex + 1 + number
        }
        return res
    }
}
