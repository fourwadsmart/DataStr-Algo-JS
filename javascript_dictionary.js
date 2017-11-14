/* ==============================================
        Javascript dictionary data structure
   ============================================== */


function Dictionary() {
    this.datastore = [];
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
    this.showAllSorted = showAllSorted;
}

/* Add new new key value pair to the dictionary */
function add(key, value) {
    this.datastore[key] = value;
    
}


/* Find key and return it's value */
function find(key) {
    return this.datastore[key];

}

/* Remove key value pair from dictionary */
function remove(key) {
    delete this.datastore[key];

}

/* See all value pairs in dictionary */
function showAll() {
    for (let key in this.datastore) {
        console.log(key + ' -> ' + this.datastore[key]);
    }
}



    /*****************************
          Auxiliary functions
    ******************************/


/* count how many elements in a dictionary */
function count() {
    let n = 0;
    for (let key in this.datastore) {
        n++;
    }
    return n++;
}

/* Delete all data from dictionary */
function clear() {
    for (let key in this.datastore) {
        delete this.datastore[key];
    }
}


/* Sort keys in dictionary then show all */
function showAllSorted() {
    let obj = Object.keys(this.datastore).sort();
    for (let key in obj) {
        console.log(obj[key] + " -> " + this.datastore[obj[key]]);
    }
}



