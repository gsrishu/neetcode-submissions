class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {

        const freq = new Array(26).fill(0)

        for(const task of tasks){
            freq[task.charCodeAt(0) - 65]++
        }
        const maxFreq = Math.max(...freq)

        const maxNum = freq.filter((x)=>x == maxFreq).length

        let res = (maxFreq - 1) * (n + 1) + maxNum

        return Math.max(tasks.length,res)
    }
}
