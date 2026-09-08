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
        let res;
        function checkGoodNode(node, maxValue) {
            if (node == null) return 0;
            if (node.val >= maxValue) res = 1;
            else res = 0;
            maxValue = Math.max(maxValue,node.val)

            res += checkGoodNode(node.left,maxValue);
            res += checkGoodNode(node.right,maxValue);
            return res;
        }

        return checkGoodNode(root, root.val);
    }
}
