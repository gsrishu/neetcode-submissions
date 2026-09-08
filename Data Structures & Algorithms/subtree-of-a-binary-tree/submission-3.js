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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        function sameTree(r, t) {
            if (r == null && t == null) return true;
            if (r == null || t == null) return false;
            if (r.val != t.val) return false;

            let left = sameTree(r.left, t.left);
            if (left == false) return false;

            let right = sameTree(r.right, t.right);
            if (right == false) return false;

            return true;
        }

        const queue = new Array();
        queue.push(root);
        let i = 0;
        let res = false;
        while (i < queue.length) {
            let temp = queue[i];
            if (temp.val == subRoot.val) {
                res = sameTree(temp, subRoot) == true ? true : false;
                if(res == true) break
            }
            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
            i++;
        }

        return res
    }
}
