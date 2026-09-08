class Trie {
    constructor() {
        this.node = new Array(26);
        this.flag = false;
    }
    isExists(char) {
        return this.node[char.charCodeAt(0) - "a".charCodeAt(0)];
    }
    insertIn(char, newNode) {
        this.node[char.charCodeAt(0) - "a".charCodeAt(0)] = newNode;
    }
}
class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    constructor() {
        this.head = new Trie();
    }
    insert(word) {
        let temp = this.head;
        for (const c of word) {
            if (!temp.isExists(c)) {
                temp.insertIn(c, new Trie());
            }
            temp = temp.isExists(c);
        }
        temp.flag = true;
    }
    findWords(board, words) {
        for (const char of words) {
            this.insert(char);
        }

        const result = new Set();
        const path = new Set();
        const [row, col] = [board.length, board[0].length];
        function check(i, j, node, word) {
            if (i < 0 || j < 0 || i >= row || j >= col) return;
            let key = `${i}-${j}`;
            if (path.has(key)) return;
            const nextNode = node.isExists(board[i][j]);
            if (!nextNode) return;
            path.add(key);
            word += board[i][j];

            if (nextNode.flag) result.add(word);
            check(i + 1, j, nextNode, word);
            check(i - 1, j, nextNode, word);
            check(i, j + 1, nextNode, word);
            check(i, j - 1, nextNode, word);
             //word -= board[i][j];
            path.delete(key);
        }
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                check(i, j, this.head, "");
            }
        }

        return [...result];
    }
}
