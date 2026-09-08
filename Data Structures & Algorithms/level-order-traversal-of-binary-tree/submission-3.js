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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root == null) return []
        const res = new Array();
        let queue = new Array();
        queue.push(root);
        queue.push("/");
        let index = 0;
        let temp = [];
        while (index < queue.length) {
            let pop = queue[index];  
            index++;
            if (pop == "/") {
                //console.log(temp)
                res.push(temp);
                temp = [];
                if (index < queue.length) queue.push("/");
            }else{
                  temp.push(pop.val);
            }
            if (pop.left) queue.push(pop.left);
            if (pop.right) queue.push(pop.right);
        }

        return res;
    }
}
