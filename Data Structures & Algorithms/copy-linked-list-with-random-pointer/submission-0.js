// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
         const table = new Map()
         let newHead = null
         let tail = null
         let curr = head
        while(curr != null){
            let temp = new Node(curr.val)
            table.set(curr,temp)
            if(newHead == null) {
                newHead = temp
                tail = temp
            }
            else{
                 tail.next = temp
                 tail = temp
            }
            curr = curr.next
        }
        curr = head
        
        while(curr != null){
            
            let newHead = table.get(curr)
            newHead.random = table.get(curr.random)
            curr = curr.next
        }

        return newHead
    }
}
