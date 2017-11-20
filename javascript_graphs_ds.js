/* ==============================================
               Graphs data structure
   ============================================== */


function Vertex(label) {
    this.label = label;
}



function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    
    for (let i = 0; i < this.vertices; i++) {
        this.adj[i] = [];
        this.adj[i].push(""); 
    }
    
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    
    this.dfs = dfs;
    this.bfs = bfs;
    this.marked = [];
    
    for (var i = 0; i < this.vertices; ++i) {
        this.marked[i] = false;
    }
    
    this.pathTo = pathTo;
    this.hasPathTo = hasPathTo;
    
}



function addEdge(v,w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}



/*
    displays the graph by showing a list of all vertices and the
    vertices that are adjacent to them. 
*/
function showGraph() {
    for(let i = 0; i < this.vertices; i++) {
        console.log(i + " -> ");
        for(let j = 0; j < this.vertices; j++) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }
    }
}


/* ==============================================
        Graph Search Algorithm: Depth First
   ============================================== */

// Depth First Search
function dfs(v) {
    this.marked[v] = true;
    // if statement for print is not required
    if (this.adj[v] != undefined) {
        console.log("Visited vertex: " + v);
    }
    
    for(let w in this.adj[v]) {
        if(!this.marked[w]) {
            this.dfs(w);
        }
    }
}



// Breadth First Search
function bfs(s) {
    let queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
        let v = queue.shift();
        if (v == undefined) {
            console.log("visited vertex: " + v);
        }
        for(let w in this.adj[v]) {
            if (!this.marked[w]) {
                this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }
} 



// findest shortest path function
function pathTo(v) {
    let source = 0;
    if (!this.hasPathTo(v)) {
        return undefined;
    }
    let path = [];
    
    for (let i = v; i != source; i = this.edgeTo[i]) {
        path.push(i);
    }
    path.push(s);
    return path;
}

function hasPathTo(v) {
    return this.marked[v];
}



