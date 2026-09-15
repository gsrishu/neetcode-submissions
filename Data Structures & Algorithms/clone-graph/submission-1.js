/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null
        
        const map = new Map()

        function dfs(node){
            if(map.get(node)) return map.get(node)

            const newNode = new Node(node.val)

            map.set(node,newNode)

            for(const n of node.neighbors){
                newNode.neighbors.push(dfs(n))
            }

            return newNode
        }

       return dfs(node)
    }
}