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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        function check(node) {
            if (node == null) return;

            if (node.val > p.val && node.val > q.val) return check(node.left);
            if (node.val < p.val && node.val < q.val) return check(node.right);
            return node;
        }
        // let l1 = Math.min(p.val, q.val);
        // let l2 = Math.max(p.val, q.val);
        return check(root);
    }
}
