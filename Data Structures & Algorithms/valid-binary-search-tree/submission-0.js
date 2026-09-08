/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = rightnode.val
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        function checkBinary(node, min, max) {
            if (node == null) return true;
            if (node.val <= min) return false;
            if (node.val >= max) return false;

            let left = checkBinary(node.left, min, node.val);
            if (left == false) return false;
            let right = checkBinary(node.right, node.val, max);
            if (right == false) return false;

            return true;
        }

        return checkBinary(root, -Infinity, Infinity);
    }
}
