/* ==============================================
            Hash data structure 
   ============================================== */


function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}


function table() {
    
}



/*
function simpleHash(data) {
    let total = 0;
    for(let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}
*/


function showDistro() {
    let n = 0;
    for (let i = 0; i < this.table.length; i++) {
        if(this.table[i] != undefined) {
            console.log(i + ": " + this.table[i]);
        }
    }
}


function put(data) {
    let pos = this.betterHash(data);
    this.table[pos] = data;   
}

function get() {
    
}

// better hashing to avoid collision
function betterHash(string) {
    const H = 41;
    let total = 0;
    for (let i = 0; i < string.length; ++i) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if (total < 0) {
        total += this.table.length-1;
    }
    return parseInt(total);
}



// hash integers
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function genStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = "";
        for (var j = 1; j <= 9; ++j) {
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50, 100);
        arr[i] = num;
    }
}
