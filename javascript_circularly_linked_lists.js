/* ==============================================
            Linked List Data Structure 
   ============================================== */


/* ==============================================
                Circularly Link List 
   ============================================== */


// class for adding node to Linked List
function Node(element) {
    this.element = element;
    this.next = null;
}


// Linked List class with housekeeping functions
function LList() {
    this.head = new Node("head");
    this.head.next = this.head; /* pointing back to the head which makes the list circular */
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findPrevious = findPrevious;
}


// find item in linked list
function find(item) {
    let currNode = this.head;
    
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}


// insert item into a linked list
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}


// display element of a linked list
function display() {
    let currNode = this.head;
    while(!(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}


// find previous element bofore the one to be removed
function findPrevious(item) {
    let currNode = this.head;
    while(!(currNode.next == null) && (currNode.next.element != item)) {
        currNode = currNode.next;
    }
    return currNode;
}


// Removing Nodes from a Linked List
function remove(item) {
    let  prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
        prevNode.next = prevNode.next.next;
    }
}

