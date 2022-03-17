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


  DFS_Recursive(startingVertex) { // Accept a starting node
    // the meaning of this.adjacencyList will change on line 47
    const graph = this.adjacencyList;
    // Create a list to store the end result, to be returned at the very end
    const result = [];
    // Create an object to store visited vertices
    const visitedVertices = {}
    // Create a helper function which accepts a vertex
    function helper(vertex) {
      // Base case: Should return early if the vertex is empty
      if (!vertex.length) return graph;
      const currentVertex = graph[vertex];
      // Otherwise, push that vertex into the result array.
      result.push(vertex)
      // Should place the vertex it accepts into the visited object
      visitedVertices[vertex] = true
      // Loop over all of the values in the adjacencyList for that vertex
      for (let adjacency of currentVertex) {
        // If any of those values have not been visited, recursively invoke the helper function with that vertex
        if (!visitedVertices[adjacency]) return helper(adjacency)
      }
    }
    // Invoke the helper function with the starting vertex
    helper(startingVertex);
    return result;
  }

  // Colt's solution
 /* DFS_Recursive(start) {
    const result = [];
    const visited = {};

    // store this.adjacencyList in this scope as well
    const adjacencyList = this.adjacencyList;

    // Invoke the helper funtion immediately, using 'start'
    (function helperDFS(node) {
      if (!node) return;

      result.push(node);
      visited[node] = true;

      // He has used a forEach to iterate
      adjacencyList[node].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return helperDFS(neighbour);
        }
      });
    })(start);

    return result;
  }*/

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


console.log(g.DFS_Recursive("a"))
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
