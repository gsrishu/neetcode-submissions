class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const indegree = new Array(numCourses).fill(0);
        const graph = new Array(numCourses).fill(null).map(() => []);

        for (const [i, j] of prerequisites) {
            indegree[i]++;
            graph[j].push(i);
        }

        const queue = new Array();
        for (let i = 0; i < indegree.length; i++) {
            if (indegree[i] == 0) {
                queue.push(i);
            }
        }

        const topo = new Array();
        let idx = 0;
        while (idx < queue.length) {
            const node = queue[idx];
            idx++;
            topo.push(node);
            for (const i of graph[node]) {
                indegree[i]--;
                if (indegree[i] == 0) {
                    queue.push(i);
                }
            }
        }
        return topo.length == numCourses ? true : false;
    }
}
