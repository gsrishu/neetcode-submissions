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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let str = "";

        function test(node) {
            if (node == null) {
                str += "n";
                str += ",";
                return;
            }
            str += String(node.val);
            str += ",";

            test(node.left);
            test(node.right);
        }
        test(root);
        return str;
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        //console.log(data);
        let temp = data.split(",");
        //console.log(temp);
        temp.pop();
        let index = 0;
        function build() {
            let val = temp[index];
            index++;
            if (val == "n") return null;
            let node = new TreeNode(Number(val));
            node.left = build();
            node.right = build();
            return node;
        }

        return build();
    }
}
