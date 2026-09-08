class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const map = new Map()
        for (const str of strs){
            let sortedStr = str.split('').sort().join('')
            if(!map.has(sortedStr)) map.set(sortedStr,[])
            map.get(sortedStr).push(str)
        }
        console.log([...map.values()])
        return [...map.values()]

    }
}
