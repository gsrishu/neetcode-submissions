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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        function search(inorder, findIndex, left, right) {
            for (let i = left; i < right; i++) {
                if (inorder[i] == findIndex) return i;
            }
            return -1;
        }

        let preIndex = 0;

        function build(preorder, inorder, left, right) {
            if (left > right) return null;
            let node = new TreeNode(preorder[preIndex]);
            let findIndex = search(inorder, preorder[preIndex], left, right + 1);
            preIndex++;
            node.left = build(preorder, inorder, left, findIndex - 1);
            node.right = build(preorder, inorder, findIndex + 1, right);
            return node;
        }
        return build(preorder, inorder, 0, inorder.length - 1);
    }
}
