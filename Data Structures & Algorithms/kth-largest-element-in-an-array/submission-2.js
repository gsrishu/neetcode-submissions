class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {

        const heap = new MaxPriorityQueue()
        for(const num of nums) heap.enqueue(num)
        for(let i = 0; i < k -1; i++) heap.dequeue()
        return heap.dequeue() 
    }
}
