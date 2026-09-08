class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()
    //     for (const str of strs){
    //         map.set(str.split('').sort().join(''),map.get(str)? map.get(str) + 1: 1)
    //     }
    const res = []
    let visited = Array(strs.length).fill(0)
    for (const [index,str] of strs.entries()){
         if(visited[index]) continue
        let current = []
        current.push(str)
        visited[index] = 1
        for(let j = index + 1; j < strs.length; j++){
            if(visited[j]) continue
            let temp = strs[j].split('').sort().join('')
            if(temp === str.split('').sort().join('')){
                current.push(strs[j])
                visited[j] = 1
            }
      
        }
        res.push(current)
        current = []

    }
    return res
     }
}
