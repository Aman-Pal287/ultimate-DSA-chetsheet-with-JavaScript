//! Design a link list to various operations

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkList {
    constructor() {
        this.head = null
        this.size = 0
    }
    insertAtFirst(val) {
        this.size++
        const newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode
            return
        }
        newNode.next = this.head
        this.head = newNode
    }
    insertAtLast(val) {
        this.size++
        const newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode
            return
        }
        let temp = this.head
        while (temp.next != null) {
            temp = temp.next
        }
        temp.next = newNode
    }
    deleteAtFirst() {
        if (this.head == null) {
            console.log("empty list");
            return
        }
        this.size--
        this.head = this.head.next
    }
    deleteAtLast() {
        if (this.head == null) {
            console.log("empty list");
            return
        }

        this.size--
        if (this.head.next == null) {
            this.head = null
            return
        }

        let temp = this.head
        while (temp.next.next != null) {
            temp = temp.next
        }
        temp.next = temp.next.next

    }


    insertAtPosition(index, val) {
        if (index < 0 || index > this.size) {
            console.log("Invalid Index");
            return;
        }
        this.size++;
        let newNode = new Node(val)
        if (this.head == null) {
            this.head = newNode
            return
        }


        let temp = this.head
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next
        }

        newNode.next = temp.next
        temp.next = newNode
    }
    deletetAtIndex(index) {
        if (index <= 0 || index >= this.size) {
            console.log("invalid index");
            return
        }
        if (this.head == null) {
            console.log("list is empty");
            return
        }
        this.size--
        let temp = this.head
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next
        }
        temp.next = temp.next.next
    }

    printLL() {
        if (this.head == null) {
            console.log("empty list");
            return
        }
        let temp = this.head
        while (temp != null) {
            process.stdout.write(temp.val + "->")
            temp = temp.next
        }
        console.log('null');

    }

}


let obj = new LinkList()

obj.insertAtFirst(10)
obj.insertAtFirst(20)
obj.insertAtFirst(30)
obj.insertAtFirst(40)
obj.insertAtFirst(50)
obj.insertAtFirst(100)
obj.insertAtLast(500)
// obj.deleteAtFirst()
// obj.deleteAtLast()
obj.insertAtPosition(2, 250)
obj.deletetAtIndex(2)

obj.printLL()