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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {

        function checkSame(n, r) {
            if (n == null && r == null) {
                return true;
            }
            if (n == null || r == null) {
                return false;
            }
            if (n.val !== r.val) {
                return false;
            }
            let left = checkSame(n.left, r.left);
            if (left == false) return false;
            let right = checkSame(n.right, r.right);
            if (right == false) return false;

            return true
        }
        return checkSame(p, q);
    }
}
