class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const inbound = new Array(numCourses).fill(0);
        const graph = new Array(numCourses).fill(null).map(() => []);
        for(const [i,j] of prerequisites){
            inbound[i]++
            graph[j].push(i)
        }
        const queue = new Array()
        let idx = 0

        for(let i = 0; i< inbound.length;i++){
            if(inbound[i] == 0) queue.push(i)
        }
        const topo = new Array()
        while(idx < queue.length){
            const node = queue[idx++]
            topo.push(node)
            for(let i =0 ; i < graph[node].length;i++){
                inbound[i]--
                if(inbound[i] === 0) queue.push(i)
            }

        }
        return (topo.length == numCourses) ? true : false
    }
}
