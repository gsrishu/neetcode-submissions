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

    diameterOfBinaryTree(root) {
        if (root == null) return 0;
        let count = 0;
        function height(node) {
            if (node == null) return 0;

            let left = height(node.left);
            let right = height(node.right);

            count = Math.max(count, left + right);

            return 1 + Math.max(left, right);
        }
        height(root);
        return count;
    }
}
