class MedianFinder {
    constructor() {
        this.minHeap = new MinPriorityQueue();
        this.maxHeap = new MaxPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        if (this.maxHeap.size() == 0 || num <= this.maxHeap.front()) this.maxHeap.enqueue(num);
        else this.minHeap.enqueue(num);

        while (this.minHeap.size() > this.maxHeap.size() )
            this.maxHeap.enqueue(this.minHeap.dequeue());
        while (this.maxHeap.size() > this.minHeap.size() + 1)
            this.minHeap.enqueue(this.maxHeap.dequeue());
    }

    /**
     * @return {number}
     */
    findMedian() {
        let size = (this.minHeap.size() + this.maxHeap.size()) % 2;

        if (size == 0) return (this.minHeap.front() + this.maxHeap.front()) / 2;

        return this.maxHeap.front();
    }
}
