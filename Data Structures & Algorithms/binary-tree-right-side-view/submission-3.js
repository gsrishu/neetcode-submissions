/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(root == null) return []
         const result = new Array()
         const queue = new Array()
         queue.push(root)
         queue.push("/")
         let index = 0
         while(index < queue.length){
            let pop = queue[index]
            index ++
            if(pop == "/"){
                result.push(queue[index - 2].val)
                if(index < queue.length) queue.push("/")

            }
            if(pop.left) queue.push(pop.left)
            if(pop.right) queue.push(pop.right)
         }
         return result
    }
}
