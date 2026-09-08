class Trie {
    constructor() {
        this.node = new Array(26);
        this.flag = false;
    }

    isExists(char) {
        return this.node[char.charCodeAt(0) - "a".charCodeAt(0)];
    }

    setChar(char, newNode) {
        this.node[char.charCodeAt(0) - "a".charCodeAt(0)] = newNode;
    }
}
class WordDictionary {
    constructor() {
        this.head = new Trie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let temp = this.head;
        for (const c of word) {
            if (!temp.isExists(c)) {
                temp.setChar(c, new Trie());
            }
            temp = temp.isExists(c);
        }
        temp.flag = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        const len = word.length;
        function findWord(head, index) {
            if (index == len) return head.flag;
            const c = word[index];
            if (c == ".") {
                for (let i = 0; i < 26; i++) {
                    if (head.node[i] !== undefined) {
                        const char = String.fromCharCode(i + 97);
                        if (findWord(head.isExists(char), index + 1)) return true;
                    }
                }
                return false;
            }
            if (head.isExists(c) == undefined) return false;
            return findWord(head.isExists(c), index + 1);
        }
        return findWord(this.head, 0);
    }
}
