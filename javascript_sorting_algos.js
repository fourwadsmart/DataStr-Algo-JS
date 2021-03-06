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
    // basic sorting algorithm
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
    
    // advanced sorting algorithm
    this.shellSort = sellSort;
    this.dynShellSort = dynShellSort;
    this.setGaps = setGaps; 
    this.gaps = [5, 3, 1];
    // mergesort algorithm
    this.mergeSort = mergeSort;
    this.mergeArrays = mergeArrays;
    // quicksort algorithm
    this.quickSort = quickSort;
    
    // store some data to the object
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
/********************************************************************/

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



/******************* Advanced Sorting Algorithms ********************/


/**
    Shell Sort in action **
**/


function setGaps(arr) {
    this.gaps = arr;
}



function shellSort() {
    
    let j; // make j available outside the for loop block scope
    
    for (let g = 0; g < this.gaps.length; g++) {
        
        for (let i = this.gaps[g]; i < this.dataStore.length; i++) {
            
            let temp = this.dataStore[i];
            
            for (j = i; j >= this.gaps[g] && this.dataStore[j-this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}



/**
    Shell Sort with a dynamically computed gap sequence **
**/

function dynShellSort() {
    let N = this.dataStore.length;
    let h = 1;
    while (h < N/3) {
        h = 3 * h + 1;
    }
    
    while(h >= 1) {
        for (let i = h; i < N; i++) {
            for (let j = i; j >= h && this.dataStore[j] < this.dataStore[j-h]; j -= h) {
                swap(this.dataStore, j, j-h);
            }
        }
        
        h = (h-1)/3;
    }
}



/*******************************************************************************/
/* Snippet of code to test the runtime of the two shellSort a algorithms above */
/*******************************************************************************/

var nums = new CArray(10000);
nums.setData();
var start = new Date().getTime();
nums.shellSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("Shellsort with hard-coded gap sequence: " + elapsed + " ms.");
nums.clear();
nums.setData();
start = new Date().getTime();
nums.dynShellSort();
stop = new Date().getTime();
console.log("Shellsort with dynamic gap sequence: " + elapsed + " ms.");


/**
    Merge Sort in action **
**/


function mergeSort(arr) {
    if (arr.length < 2) {
        return;
    }
    let step = 1;
    let left, right;
    while (step < arr.length) {
        left = 0;
        right = step;
        while (right + step <= arr.length) {
            mergeArrays(arr, left, left+step, right+step);
            left = right + step;
            right = left + step;
        }
        if (right < arr.length) {
            mergeArrays(arr, left, left + step, right, arr.length);
        }
        step *= 2;
    }
}




function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight) {
    let rightArr = new Array(stopRight - startRight + 1);
    let leftArr = new Array(stopLeft - startLeft + 1);
    
    let k = startRight;
    
    for (let i = 0; i < (rightArr.length-1); i++) {
        k++;
    }
    
    k = startLeft;
    
    for (let i = 0; i < (leftArr.length-1); i++) {
        leftArr[i] = arr[k];
        k++;
    }
    
    rightArr[rightArr.length-1] = Infinity; // a sentinel value
    leftArr[leftArr.length-1] = Infinity; // a sentinel value
    let m = 0;
    let n = 0;
    
    for (let k = startLeft; k < stopRight; k++) {
        if (leftArr[m] <= rightArr[n]) {
            arr[k] = leftArr[m];
            m++;
        }
        else {
            arr[k] = rightArr[n];
            n++;
        }
    }
    console.log("left array - ", leftArr);
    console.log("right array - ", rightArr);
}



/**
    Quick Sort in action **
**/
function quickSort() {
    if (list.length == 0) {
        return [];
    }
    let lesser = [];
    let greater = [];
    let pivot = list[0];
    
    for(let i = 1; i < list.length; i++) {
        if (list[i] < pivot) {
            lesser.push(list[i]);
        }
        else {
            greater.push(list[i]);
        }
        
    }
    return quickSort(lesser).concat(pivot, quickSort(greater));
}

 