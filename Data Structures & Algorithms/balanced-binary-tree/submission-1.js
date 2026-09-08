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
     * @return {boolean}
     */
    isBalanced(root) {
        let res = true;
        function checkBalance(node) {
            if (node == null) return 0;
            if (res == false) return false;

            let left = checkBalance(node.left);
            let right = checkBalance(node.right);

            if (Math.abs(left - right) > 1) {
                res = false;
            }

            return 1 + Math.max(left, right);
        }
        checkBalance(root);

        return res;
    }
}
