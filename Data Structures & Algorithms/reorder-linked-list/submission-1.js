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
     * @return {void}
     */
    reorderList(head) {
        if (head == null) return;
        let slow = head;
        let fast = head;
        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        let second = slow.next;
        slow.next = null;
        let prev = null;
        while (second != null) {
            let next = second.next;
            second.next = prev;
            prev = second;
            second = next;
        }

        let first = head;
        second = prev;

        while (first != null && second != null) {
            let firstNext = first.next;
            let secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }

        // while (head != null) {
        //     console.log(head.val);
        //     head = head.next;
        // }
    }
}
