class Trie {
    constructor() {
        this.head = new Array(26);
        this.flag = false;
    }

    isExists(c) {
        return this.head[c.charCodeAt(0) - "a".charCodeAt(0)];
    }
    addWord(c, newNode) {
        this.head[c.charCodeAt(0) - "a".charCodeAt(0)] = newNode;
    }
}

class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    constructor() {
        this.node = new Trie();
    }

    addWord(word) {
        let temp = this.node;
        for (const c of word) {
            if (!temp.isExists(c)) {
                temp.addWord(c, new Trie());
            }
            temp = temp.isExists(c);
        }
        temp.flag = true;
    }

    findWords(board, words) {
        for (let i = 0; i < words.length; i++) {
            this.addWord(words[i]);
        }
        const [row, col] = [board.length, board[0].length];
        const result = new Set();
        const visit = new Set();

        function check(r, c, node, word) {
            if (r < 0 || c < 0 || r >= row || c >= col) return;

            const key = `${r}-${c}`;
            if (visit.has(key)) return;
            const nextNode = node.isExists(board[r][c]);
            if (!nextNode) return;
            visit.add(key);
            word += board[r][c];
            if (nextNode.flag) result.add(word);
            check(r + 1, c, nextNode, word);
            check(r - 1, c, nextNode, word);
            check(r, c + 1, nextNode, word);
            check(r, c - 1, nextNode, word);
            visit.delete(key);
        }
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
                check(i, j, this.node, "");
            }
        }
       // console.log(result)
        return [...result];
    }
}
