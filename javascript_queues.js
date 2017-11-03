/* Queue Data Structure */

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}



/* enqueue function: add element to queue data structure */

function enqueue(element) {
    this.dataStore.push(element);
}


/* dequeue function: remove element from queue data structure */

function dequeue() {
    this.dataStore.shift();
}


/* return front element of the queue */

function front() {
    return this.dataStore[0];
}


/* return back element of the queue */

function back() {
    return this.dataStore[this.dataStore.length-1];
}


/* return all element of the queue in one string */

function toString() {
    let str = "";
    
    for(let i = 0; i < this.dataStore.length; i++) {
        str += this.dataStore[i] + "\n";
    }
    return str;
}


/* return true or false whether queue is empty or not */

function empty() {
    if(this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}

/* count how many element are in queue */

function count () {
    return this.dataStore.length;
}