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



