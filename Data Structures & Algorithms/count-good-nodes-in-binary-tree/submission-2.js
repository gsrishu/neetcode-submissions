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
    goodNodes(root) {
        let res = 0;
        function result(node, maxValue) {
            if (node == null) return;
            if (node.val >= maxValue) res++;
            result(node.left, Math.max(maxValue, node.val));
            result(node.right, Math.max(maxValue, node.val));
        }
        result(root, root.val);
        return res;
    }
}
