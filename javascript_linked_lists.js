/* Linked list data structure */


/* class for adding node to Linked List */
function Node(element) {
    this.element = element;
    this.next = null;
}


/* Linked List class with housekeeping functions */
function LList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}


/* find item in linked list */
function find(item) {
    let currNode = this.head;
    
    while(currNode.element != item) {
        currNode = curNode.next;
    }
    return currNode;
}


/* insert item into a linked list */
function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}


/* display element of an linked list */
function display() {
    let currNode = this.head;
    while(!(currNode.next == null)) {
        print(currNode.next.element);
        curr.Node = currNode.next;
    }
}



function remove() {
    
}





