class TrieData {
    constructor() {
        this.node = new Array(26);
        this.flag = false;
    }

    isInclude(char) {
        return this.node[char.charCodeAt(0) - "a".charCodeAt(0)];
    }

    setChar(char, node) {
        this.node[char.charCodeAt(0) - "a".charCodeAt(0)] = node;
    }
}
class PrefixTree {
    constructor() {
        this.head = new TrieData();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let temp = this.head;
        for (const c of word) {
            if (!temp.isInclude(c)) {
                temp.setChar(c, new TrieData());
            }
            temp = temp.isInclude(c);
        }
        temp.flag = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let temp = this.head;
        for (const c of word) {
            if (!temp.isInclude(c)) return false;
            temp = temp.isInclude(c);
        }

        return temp.flag == true ? true : false;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let temp = this.head;
        for (const c of prefix) {
            if (!temp.isInclude(c)) return false;
            temp = temp.isInclude(c);
        }

        return true;
    }
}
