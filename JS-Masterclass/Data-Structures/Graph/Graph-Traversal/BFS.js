class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // To add a new vertex
  addVertex(vertex) {
    // check if there is already a key of the same name
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
  }

  // To add an undirected edge between two vertices
  addEdge(vertex1, vertex2) {
    // Search the adjacencyList for the keys of vertex1 and vertex2
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // push 'vertex2' to vertex1's value array
      this.adjacencyList[vertex1].push(vertex2);
      // push 'vertex1' to vertex2's value array
      this.adjacencyList[vertex2].push(vertex1);
    }
    return this.adjacencyList;
  }

  // To remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      // filter out the unwanted vertex
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );

      // return the new adjacenecyList
      return this.adjacencyList;
    }
  }

  // To remove a vertex;
  removeVertex(vertex) {
    // loop through all the elements stored in the value of key 'vertex' and call the removeEdge() method for all the pairs of vertices
    this.adjacencyList[vertex].map((v) => this.removeEdge(vertex, v));

    // delete the key of the 'vertex'
    delete this.adjacencyList[vertex];

    // return the new adjacencyList
    return this.adjacencyList;
  }

  // -----------------------
  // BFS Starts Here Onwards
  // ------------
  BFS(start) { // accept a starting vertex
    // Create a queue (you can use an array) and place the starting vertex in it
    const queue = []
    // Create an array to store the result and return it later
    const result = []
    // Create an object to store nodes visited
    const visitedNodes = {}
    // Mark the starting vertex as visited
    queue.push(start)
    visitedNodes[start] = true

    // Loop as long as there is anything in the queue
    while (queue.length) {
      const firstElement = queue.shift()
      // Remove the first vertex from the queue and push it into the array that stores nodes visited
      result.push(firstElement)
      // Loop over each vertex in the adjacency list for the vertex you are visiting.
      this.adjacencyList[firstElement].forEach((neighbor) => {
        // If it is not inside the object that stores nodes visited, mark it as visited
        if (!visitedNodes[neighbor]) {
          visitedNodes[neighbor] = true
          // enqueue that vertex
          queue.push(neighbor)
        }
      })

    }
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


console.log(g.BFS("a")) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(g.adjacencyList);

/** g.adjacency
{
  a: [ 'b', 'c' ],
  b: [ 'a', 'd' ],
  c: [ 'e', 'a' ],
  d: [ 'b', 'f', 'e' ],
  e: [ 'd', 'c', 'f' ],
  f: [ 'd', 'e' ]
}
 */
/**
 *    a
    /   \
   b     d
    \   /
      c
 */
