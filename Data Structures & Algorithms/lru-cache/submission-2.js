class LRUCacheNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new LRUCacheNode(-1, -1);
        this.tail = new LRUCacheNode(-1, -1);
        this.head.next = this.tail; 
        this.tail.prev = this.head; 
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.map.has(key)) {
            return -1;
        }

        let mostRecentlyUsed = this.map.get(key);
        let leftNode = mostRecentlyUsed.prev;
        let rightNode = mostRecentlyUsed.next;
        leftNode.next = rightNode;
        rightNode.prev = leftNode;

        let headNext = this.head.next;
        this.head.next = mostRecentlyUsed;
        mostRecentlyUsed.prev = this.head;
        headNext.prev = mostRecentlyUsed;
        mostRecentlyUsed.next = headNext;
        return mostRecentlyUsed.val;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // If key already exists
        if (this.map.has(key)) {
            let mostRecentlyUsed = this.map.get(key);
            mostRecentlyUsed.val = value;
            let leftNode = mostRecentlyUsed.prev;
            let rightNode = mostRecentlyUsed.next;
            leftNode.next = rightNode;
            rightNode.prev = leftNode;
            let headNext = this.head.next;
            this.head.next = mostRecentlyUsed;
            mostRecentlyUsed.prev = this.head;
            headNext.prev = mostRecentlyUsed;
            mostRecentlyUsed.next = headNext;
            return;
        }
        // If cache is full, remove least recently used
        if (this.map.size === this.capacity) {
            let leastUsed = this.tail.prev;
            this.map.delete(leastUsed.key);
            leastUsed.prev.next = this.tail;
            this.tail.prev = leastUsed.prev;
        }

        //create new node
        let newNode = new LRUCacheNode(key, value);

        let temp = this.head.next;
        this.head.next = newNode;
        newNode.prev = this.head;
        newNode.next = temp;
        temp.prev = newNode;
        this.map.set(key, newNode);
    }
}
