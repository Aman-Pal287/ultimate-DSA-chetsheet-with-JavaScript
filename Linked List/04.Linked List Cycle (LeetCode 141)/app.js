//! Linked List Cycle (LeetCode 141)

function linkedListCycle(head) {
    if (head == null || head.next == null) return false

    let fast = head, slow = head
    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if (fast == slow) return true
    }

}


//! Linked List Cycle 2 (LeetCode 142)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    if (head == null || head.next == null) return null

    let fast = head, slow = head
    while (fast != null && fast.next != null) {
        fast = fast.next.next
        slow = slow.next
        if (fast == slow) {
            let entry = head;
            while (entry !== slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry;
        }
    }
    return null
};