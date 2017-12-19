/* ==============================================
           -  Sequencial search algo  -
   ============================================== */

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}



/* ==============================================
      - Self-organized Sequencial search algo -
   ============================================== */

function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            if (i > 0) {
                swap(arr,i,i-1);
            }
            return true;
        }
    }
    return false;
}

// self-organizing with 20/80 rule
function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data && i > (arr.length * 0.2)) {
            swap(arr,i,0);
            return true;
        }
        else if (arr[i] == data) {
            return true;
        }
    }
    return false;
}


function swap(arr, index, index1) {
    temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}


/* ==============================================
             -  Binary search algo  -
   ============================================== */

function binSearch(arr, data) {
    let upperBound = arr.length - 1;
    let lowerBound = 0;
    
    while (lowerBound <= upperBound) {
        let mid = Math.floor((upperBound + lowerBound)/2);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else 
            if (arr[mid] > data) {
                upperBound = mid - 1;
            }
        else {
            return mid;
        }
    }
    return -1;
}


/* ================================================
    Counting ocurrences in a array when performing
    binary search.
   ================================================ */

function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position-1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }
        for (var i = position+1; i < arr.length; ++i) {
            if (arr[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }
    }
    return count;
}






