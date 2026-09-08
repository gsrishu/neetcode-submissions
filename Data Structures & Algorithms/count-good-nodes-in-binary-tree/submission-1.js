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
        function checkGoodNode(node, maxValue) {
            if (node.val >= maxValue) res++;
            if (node.left) checkGoodNode(node.left, Math.max(maxValue, node.val));
            if (node.right) checkGoodNode(node.right, Math.max(maxValue, node.val));
        }
        checkGoodNode(root, root.val);
        return res;
    }
}
