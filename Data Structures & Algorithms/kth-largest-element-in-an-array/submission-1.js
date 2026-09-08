class MaxHeap {
    constructor() {
        this.heap = new Array();
    }
    push(val) {
        this.heap.push(val);
        let idx = this.heap.length - 1; 
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[idx] > this.heap[parent]) {
                [this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
            } else break;
            idx = parent;
        }
    }

    pop() {
        let res = this.heap[0];
        let last = this.heap.pop();
        let n = this.heap.length;
        let idx = 0;
        if (n > 0) {
            this.heap[0] = last
            while (true) {
                let largest = idx;
                let left = idx * 2 + 1;
                let right = idx * 2 + 2;
                if (left < n && this.heap[left] > this.heap[largest]) largest = left;
                if(right < n && this.heap[right] > this.heap[largest]) largest = right
                if(idx == largest) break
                [this.heap[idx], this.heap[largest]] = [this.heap[largest],this.heap[idx]]
                idx = largest
            }
        }
        return res
    }
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        if(nums.length == 1) return nums[0]
        const heap = new MaxHeap()
        for(const num of nums){
            heap.push(num)
        }
        for(let i = 0; i < k - 1; i++){
          heap.pop()
        }
        return heap.pop()

    }
}
