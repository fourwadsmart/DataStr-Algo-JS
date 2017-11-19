/* ==============================================
                Binary tree data structure
   ============================================== */

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
    
}

function show() {
    return this.data;
}

function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
    this.removeNode = removeNode;
    
}

function insert(data) {
    let n = new Node(data, null, null);
    if (this.root == null) {
        this.root = n;
    }
    else {
        let current = this.root;
        let parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            }
            else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}



function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}



function preOrder(node) {
    if (!(node == null)) {
        console.log(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}



function getMin() {
    let current = this.root;
    while(!(current.left == null)) {
        current = current.left;
    }
    return current.data;
}

function getMax() {
    let current = this.root;
    while(!(current.right == null)) {
        current = current.right;
    }
    return current.data;
}


function find(data) {
    
}



function find(data) {
    let current = this.root;
    while(current.data != data) {
        if(data < current.data) {
            current = current.left;
        }
        else {
            current = current.right;
        }
        if (current == null) {
            return null;
        }
    }
    return current;
}



function remove(data) {
    let root = removeNode(this.root, data);
}

function removeNode(node, data) {
    if (node == null) {
        return null;
    }
    if (data == node.data) {
        //  node has children
        if (node.left == null && node.right == null) {
            return null;
        }
        // node has no left child
        if (node.left == null) {
            return node.right;
        }
        // node has no right child
        if (node.right == null) {
            return node.left;
        }
        // node has two children
        let tempNode = getSmallest(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    }
    else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    }
    else {
        node.right = removeNode(node.right, data);
        return node;
    }
}



// modify BST to add occurencies. ie, how many times grade appears

function Node(data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
    this.show = show;
}



function update(data) {
    let grade = this.find(data);
    grade.count++;
    return grade;
}


// display the grades
function prArray(arr) {
    putstr(arr[0].toString() + ' ');
    for (let i = 1; i < arr.length; ++i) {
        putstr(arr[i].toString() + ' ');
        if (i % 10 == 0) {
            putstr("\n");
        }
    }
}


// generate random grades
function genArray(length) {
    let arr = [];
    for (let i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
}


