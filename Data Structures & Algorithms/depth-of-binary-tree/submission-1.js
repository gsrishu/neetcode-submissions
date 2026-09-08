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
     * @return {number}
     */
    maxDepth(root) {
        if(root == null) return 0
        let res = 0
        const queue = new Array()
        queue.push(root)
        queue.push("/")
        let i = 0
        while(i < queue.length){
            let temp = queue[i]
           // console.log(temp,"===")
            i++
            if(temp == "/"){
                res++
                if(i < queue.length) queue.push("/")
            }
            if(temp.left) queue.push(temp.left)
            if(temp.right) queue.push(temp.right)
         
        }
        return res
        
    }
}
