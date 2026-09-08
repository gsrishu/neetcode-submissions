/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        
        //first don't reverse the if current count is less than k

        let temp = head
        let count = 0
        while(count < k){

            if(temp == null) return head
            temp = temp.next
            count++
        }

        let currentHead =  this.reverseKGroup(temp,k)
        temp = head, count = 0
        while(count < k){
            let nextNode = temp.next
            temp.next = currentHead
            currentHead = temp
            temp = nextNode
            count++
        }
        return currentHead
    }
}
