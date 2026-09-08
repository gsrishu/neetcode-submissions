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
     * @return {number[]}
     */
    rightSideView(root) {
        const result = new Array()

        function returnSide(node, depth){
            if(node == null) return 
            if(depth == result.length) result.push(node.val)
           // console.log("right Call",node.val,depth)
             returnSide(node.right,depth + 1)
            //console.log("left Call",node.val,depth)
             returnSide(node.left,depth + 1)
        }
        returnSide(root,0)

        return result

    }
}
