class Trie {
    constructor() {
        this.node = new Array(26);
        this.flag = false;
    }

    constains(char) {
        return this.node[char.charCodeAt(0) - "a".charCodeAt(0)];
    }
    put(char, newNode) {
        this.node[char.charCodeAt(0) - "a".charCodeAt(0)] = newNode;
    }
}
class PrefixTree {
    constructor() {
        this.head = new Trie();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let temp = this.head;
        for (const c of word) {
            if (!temp.constains(c)) {
                temp.put(c, new Trie());
            }
            temp = temp.constains(c)
        }
        temp.flag = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let temp = this.head
        for(const c of word){
            if(!temp.constains(c)) return false
            temp = temp.constains(c)
        }
      return temp.flag == true ? true : false
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let temp = this.head
        for(let char of prefix){
            if(!temp.constains(char)) return false
            temp = temp.constains(char)
        }
        return true
    }
}
