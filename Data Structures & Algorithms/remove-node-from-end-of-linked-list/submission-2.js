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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let i = 0
        let temp = head
        while(temp!=null){
            temp = temp.next
            i++
        }
        temp = head
        let prev = null,next=null
        let count = 0
        while(temp!=null){
              next = temp.next
            if(count == i-n){
                if(count == 0){
                    head = head.next
                }else{
                    prev.next = next
                }
                return head
            }
            prev = temp
            temp = next
            count++

        }
        return head
    }
}
