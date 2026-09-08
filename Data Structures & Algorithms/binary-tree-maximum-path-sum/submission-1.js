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
    maxPathSum(root) {
        let result = -Infinity;

        function checkSum(node) {
            if (node == null) return 0;
            let left =  Math.max(0,checkSum(node.left));
            let right = Math.max(0,checkSum(node.right));
            result = Math.max(result, left + right + node.val);
            return node.val + Math.max(left ,right);
        }
        checkSum(root);
        return result;
    }
}
