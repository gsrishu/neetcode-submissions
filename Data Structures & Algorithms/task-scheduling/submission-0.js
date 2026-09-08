class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const heap = new MaxPriorityQueue()
        const map = new Map()
        for(const task of tasks){
            map.set(task,map.get(task) + 1 || 1) 
        }
        for(const [m,val] of map){
            heap.enqueue(val)
        }
        let res = 0
        while(heap.size()){
            let temp = []
            for(let i = 0; i < n + 1; i++){
                if(heap.size()){
                    temp.push(heap.dequeue() - 1)
                    res++
                }else{
                    if(temp[0] > 0) res++
                }
            }
            for(let i = 0; i < temp.length; i++){
               if(temp[i] > 0){
                 heap.enqueue(temp[i])
               }
            }

        }
        return res
        // console.log(heap.size())
        // return n
    }
}
