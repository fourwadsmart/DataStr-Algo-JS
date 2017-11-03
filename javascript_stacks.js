/** Stack Data Structure **/

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.len = len;
    this.clear = clear;
}


/* add elements to stack */
function push(element) {
    this.dataStore[this.top++] = element;
}

/* remove element from stack  */
function pop() {
    this.dataStore[--this.top];
}

/* return top element from stack */
function peek() {
    return this.dataStore[this.top-1];
}

/* return length of stack */
function len() {
    return this.top;
}

/* clear stack */
function clear() {
    this.dataStore = [];
    this.top = 0;
}


