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

        function search(inorder,findex,slen,rlen){
            for(let i = slen; i <= rlen; i++ ){
                if(inorder[i] == findex) return i
            }
            return -1
        }
        let sIdx = 0;
        function buildNodes(preorder, inorder, slen, rlen) {
            if (slen > rlen) return null;

            let node = new TreeNode(preorder[sIdx]);
            let findIndex = search(inorder, preorder[sIdx], slen, rlen);
            sIdx++;

            node.left = buildNodes(preorder, inorder, slen, findIndex - 1);
            node.right = buildNodes(preorder, inorder, findIndex + 1, rlen);
            return node;
        }

        return buildNodes(preorder, inorder, 0, inorder.length - 1);
    }
}
