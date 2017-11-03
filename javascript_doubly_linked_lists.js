/* ==============================================
            Linked List Data Structure 
   ============================================== */



/* ==============================================
                Doubly Link List 
   ============================================== */


/* class for adding node to Linked List */
function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}


/* Linked List class with housekeeping functions */
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}


/* find item in linked list */
function find(item) {
    let currNode = this.head;
    
    while(currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}


/* insert item into a linked list */
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    newNode.prev = current;
    current.next = newNode;
}


/* display element of a linked list */
function display() {
    let currNode = this.head;
    while(!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}


/* Removing Nodes from a Linked List */
function remove(item) {
    let  currNode = this.find(item);
    if (!(currNode.next == null)) {
        currNode.prev.next = currNode.next;
        currNode.next.prev = currNode.prev;
        currNode.next = null;
        currNode.prev = null;
    }
}


/* Find last element in double linked list */
function findLast() {
    let currNode = this.head;
    while (!(currNode.next == null)) {
        currNode = currNode.next;
    }
    return currNode;
}


/* Display linked list in reverse */
function dispReverse() {
    let currNode = this.head;
    currNode = this.findLast();
    while (!(currNode.prev == null)) {
        console.log(currNode.element);
        currNode = currNode.prev;
    }
}

