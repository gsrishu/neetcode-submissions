/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = rightnode.val
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {

        function checkBinary(node,minValue,maxValue){

            if(node == null) return 
            if(node.val <= minValue || node.val >=  maxValue) return false
            let left = checkBinary(node.left,minValue,node.val)
            if(left == false) return false
            let right = checkBinary(node.right,node.val,maxValue)
            if(right == false) return false
            return true
        }
        
        return checkBinary(root,-Infinity,Infinity);
    }
}
