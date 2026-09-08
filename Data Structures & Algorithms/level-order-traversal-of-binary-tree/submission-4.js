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
        if (root == null) return [];

        let queue = new Array();
        queue.push(root);
        queue.push("/");
        let i = 0;
        const result = new Array();
        let tempArray = new Array();
        while (i < queue.length) {
            let temp = queue[i];
            i++;

            if (temp == "/") {
                result.push(tempArray);
                tempArray = [];
                if (i < queue.length) queue.push("/");
            } else {
                tempArray.push(temp.val);
            }
            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
        }
        return result;
    }
}
