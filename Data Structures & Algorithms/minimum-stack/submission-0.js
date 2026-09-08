class MinStack {
    constructor() {
        this.stack = new Array()
        this.topIndex = 0
        this.minStack = new Array()
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack[this.topIndex] = val
        this.topIndex == 0 ? this.minStack[this.topIndex] = val : this.minStack[this.topIndex] = Math.min(this.minStack[this.topIndex - 1], val)
        this.topIndex++

    }

    /**
     * @return {void}
     */
    pop() {
        this.topIndex--
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.topIndex - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        
        return  this.minStack[this.topIndex - 1]
    }
}
