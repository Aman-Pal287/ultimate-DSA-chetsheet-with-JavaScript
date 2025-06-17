//! leetCode(206). Reverse Linked List
//^iterative approach , and recursive approach homework hai

function reverseLL(head) {
    let prev = null , curr = head
    while(curr != null){
        let temp = curr.next
        curr.next = prev
        prev = curr
        curr = temp
    }
    return prev
}