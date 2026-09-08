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
        if (root == null) {
            return 0;
        }

        let queue = new Array();
        queue.push(root);
        queue.push("/");
        let res = 0;
        //console.log(queue);
        while (queue.length > 0) {
            let temp = queue.shift();
            if (temp == "/") {
                res++;
                if (queue.length > 0) {
                    queue.push("/");
                }
                continue;
            }
            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
           // console.log(queue);
        }

        return res;
    }
}
