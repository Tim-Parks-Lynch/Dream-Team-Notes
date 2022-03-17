class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(key) {
    if (!this.adjacencyList[key]) {
      this.adjacencyList[key] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].splice(this.adjacencyList[vertex1].indexOf(vertex2), 1);
    this.adjacencyList[vertex2].splice(this.adjacencyList[vertex2].indexOf(vertex1), 1);

    //Solution in Udemy
    // this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    // this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
  removeVertex(key) {
    while (this.adjacencyList[key].length > 0) {
      this.removeEdge(key, this.adjacencyList[key][0]);
    }
    delete this.adjacencyList[key];
  }

  DFS(start) { // accept a starting node
    // Create a stack to help use keep track of vertices (use a list/array)
    const stack = [];
    // Create a list to store the end result, to be returned at the very end
    const result = [];
    // Create an object to store visited vertices
    const visitedVertices = {};
    // Add the starting vertex to the stack, and mark it visited
    stack.push(start)
    // While the stack has something in it:
    while (stack.length) {
      // Pop the next vertex from the stack
      const vertex = stack.pop();
      // If that vertex hasn't been visited yet:
      if (!visitedVertices[vertex]) {
        // ​Mark it as visited
        visitedVertices[vertex] = true;
        // Add it to the result list
        result.push(vertex);
        // Push all of its neighbors into the stack
        this.adjacencyList[vertex].forEach(neighbour => {
          stack.push(neighbour)
        })
      }
    }
    // Return the result array
    return result;
  }
}


const g = new Graph()
g.addVertex("a")
g.addVertex("b")
g.addVertex("c")
g.addVertex("d")
g.addVertex("e")
g.addVertex("f")

g.addEdge("a", "b")
g.addEdge("b", "d")
g.addEdge("d", "f")
g.addEdge("d", "e")
g.addEdge("e", "c")
g.addEdge("c", "a")
g.addEdge("e", "f")


console.log(g.DFS("a"))
console.log(g.adjacencyList);

/**
 {
   "a": ["b", "d"],
   "b": ["a", "c"],
   "d": ["a", "c"],
   "c": ["b", "d"]
 }
 */
/**
 *    a
    /   \
   b     d
    \   /
      c
 */
