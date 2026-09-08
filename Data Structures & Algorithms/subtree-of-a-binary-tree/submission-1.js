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
        function sameTree(node1, node2) {
            if (node1 == null && node2 == null) return true;
            if (node1 == null || node2 == null) return false;
            if (node1.val != node2.val) return false;
            let left = sameTree(node1.left, node2.left);
            if (left == false) return false;
            let right = sameTree(node1.right, node2.right);
            if (right == false) return false;

            return true;
        }

        const queue = new Array();
        queue.push(root);
        let startNode = null;
        while (queue.length > 0) {
            let pop = queue.shift();
            if (pop.val == subRoot.val) {
                let res = sameTree(pop, subRoot);
                if(res == true) return true
            }
            if (pop.left) queue.push(pop.left);
            if (pop.right) queue.push(pop.right);
        }
        console.log(startNode)

        return false
    }
}
