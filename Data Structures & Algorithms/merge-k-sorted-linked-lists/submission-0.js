/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
class MinHeap {
    constructor() {
        this.h = [];
    }

    push(x) {
        let h = this.h;
        h.push(x);

        let i = h.length - 1;

        while (i > 0) {
            let p = (i - 1) >> 1;

            if (h[p].val <= h[i].val) break;

            [h[p], h[i]] = [h[i], h[p]];

            i = p;
        }
    }

    pop() {
        let h = this.h;

        let res = h[0];
        let last = h.pop();

        if (h.length) {
            h[0] = last;

            let i = 0;

            while (true) {
                let l = i * 2 + 1;
                let r = i * 2 + 2;
                let s = i;

                if (
                    l < h.length &&
                    h[l].val < h[s].val
                ) {
                    s = l;
                }

                if (
                    r < h.length &&
                    h[r].val < h[s].val
                ) {
                    s = r;
                }

                if (s === i) break;

                [h[i], h[s]] = [h[s], h[i]];

                i = s;
            }
        }

        return res;
    }

    peek() {
        return this.h[0];
    }

    size() {
        return this.h.length;
    }
}
class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
      const heap = new MinHeap()

      for(const node of lists){
        if(node != null){
            heap.push(node)
        }
      }
      let head = new ListNode()
      let tail = head
      while(heap.size() > 0){
         let nextMin = heap.pop()
         tail.next = nextMin
         tail = tail.next

         //move the corresponding list
         if(nextMin.next != null){
            heap.push(nextMin.next)

         }
      }
      return head.next
       
    }
}
