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
        let res = null;

        function checkLCS(node) {
            if (node == null) return;
            //console.log(p.val,"===",node.val, "===",q.val)
            if (p.val < node.val && q.val < node.val) checkLCS(node.left);
            if (p.val > node.val && q.val > node.val) checkLCS(node.right);
            if(res != null) return
            res = node;
        }
        checkLCS(root);
        return res;
    }
}
