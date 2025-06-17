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