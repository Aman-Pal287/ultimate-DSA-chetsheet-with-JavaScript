//! leetCode(876) Middle of the linked list(Tortoise and hare algorithm)

//^ brut-force method itereative approach

var middleNode = function (head) {
    let size = 0, temp = head
    while (temp != null) {
        temp = temp.next
        size++
    }

    let mid = Math.floor(size / 2)

    temp = head
    for (let i = 0; i < mid; i++) {
        temp = temp.next
    }

    return temp

};


//^ optimized ( Tortoise and hare algorithm or fast and slow pointer)
var middleNode = function (head) {
    let slow = head, fast = head
    while(fast != null && fast.next != null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow

};