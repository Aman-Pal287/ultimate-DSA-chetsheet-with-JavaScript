//! Merge Two Sorted Lists (LeetCode 21)

//^ iterative appraoch
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(-1)
    let temp = dummy
    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            temp.next = l1
            l1 = l1.next
        } else {
            temp.next = l2
            l2 = l2.next
        }
        temp = temp.next
    }

    if (l1 == null) temp.next = l2
    else temp.next = l1

    return dummy.next
};


//^ recursive appraoch
function mergeTwoSortedLL(l1, l2) {
    if (l1 == null) return l2
    if (l2 == null) return l1

    if (l1.val < l2.val) {
        l1.next = mergeTwoSortedLL(l1.next, l2)
        return l1
    }else{
        l2.next = mergeTwoSortedLL(l1, l2.next)
        return l2
    }

}