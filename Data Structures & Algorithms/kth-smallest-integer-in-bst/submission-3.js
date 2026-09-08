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
            let left = lowest(node.left);
            if(left) return true
            count++;
            if (count == k) {
                res = node.val;
                return true;
            }
           let right =  lowest(node.right);
           if(right) return true
        }
        lowest(root);
        return res;
    }
}
