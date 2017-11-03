/* List Data Structure */

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // initializes an empty array to store list elements
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains;
    
}

// append element to the end of the list
function append(element) {
    this.dataStore[this.listSize++] = element;
}

// find element in the list
function find(element) {
    for(let i = 0; i<dataStore.length; i++) {
        if(this.dataStore[i] == element) {
            return i;
        }
        return -1;
    }
}

// remove an element in a list
function remove() {
    let foundAt = this.find(element);
    if(foundAt > -1) {
        this.dataStore.splice(foundAt, 1);
        --this.listSize;
        return true;
    }
    return false;
}

// determine the number of elements in a list
function length() {
    return this.listSize;
}

//retrieve a list elements
function toString() {
    return this.dataStore;
}

// insert an element into a list at a specified position
function insert(element, after) {
    let insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

// remove all elements from a list
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;   
}

// determine if a given value is in a list
function contains(element) {
    for(let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] == element) {
            return true;
        }
    }
    return false;
}

// functions to traverse a list

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize-1;
}

function prev() {
    if(this.pos > 0) {
        --this.pos;
    }
}

function next() {
    if (this.pos < this.listSize-1) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

