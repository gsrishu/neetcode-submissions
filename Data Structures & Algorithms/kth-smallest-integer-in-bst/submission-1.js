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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res;
        let count = 0;
        function lowest(node) {
            if (node == null) return false;
            lowest(node.left);
            count++;
            if (count == k) {
                res = node.val;
                return true;
            }
            lowest(node.right);
        }
        lowest(root);
        return res;
    }
}
