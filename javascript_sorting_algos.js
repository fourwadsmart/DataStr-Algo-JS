/* ==============================================
            Sorting Data Structure & Algo
   ============================================== */

/*
    Array test bed class
*/
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    
    for (let i = 0; i < numElements; i++) {
        this.dataStore[i] = i;
    }
    
}

function setData() {
    for (let i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements+1));
    }
}

function clear() {
    for (let i = 0; i < this.dataStore.length; i++) {
        this.dataStore[i] = 0;
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function toString() {
    let retstr = "";
    for (let i = 0; i < this.dataStore.length; i++) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}



/**
    Bubble Sort in action **
**/

function bubbleSort() {
    let numElements = this.dataStore.length;
    let temp;
    for (let outer = numElements; outer >=2; outer--) {
        for (let inner = 0; inner <= outer-1; inner++) {
            if (this.dataStore[inner] > this.dataStore[inner+1]) {
                swap (this.dataStore, inner, inner+1);
            }
        }
        console.log(this.toString());
    }
}


/**
    Selection Sort in action **
**/

function selectionSort() {
    let min, temp;
    for (let outer = 0; outer <= this.dataStore.length-2; outer++) {
        min = outer;
        for (let inner = outer + 1; 
             inner <= this.dataStore.length-1; inner++) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
            }
            
        }
        this.swap(this.dataStore, outer, min);
    }
}



/**
    Insertion Sort in action **
**/

function insertionSort() {
    let temp, inner;
    for (let outer = 1; outer <= this.dataStore.length-1; outer++) {
        temp = this.dataStore[outer];
        inner = outer;
        while (inner > 0 && (this.dataStore[inner-1] >= temp)) {
            this.dataStore[inner] = this.dataStore[inner-1];
            inner--;
        }
        this.dataStore[inner] = temp;
    }
}




/********************************************************************/
/* Snippet of code to test the runtime of the three algorithm above */

var numElements = 100;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("Elapsed time for the bubble sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the selection sort on " +
numElements + " elements is: " + elapsed + " milliseconds.");
start = new Date().getTime();
nums.insertionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("Elapsed time for the insertion sort on " + 
numElements + " elements is: " + elapsed + " milliseconds.");

/********************************************************************/



/**
    Insertion Sort in action **
**/



