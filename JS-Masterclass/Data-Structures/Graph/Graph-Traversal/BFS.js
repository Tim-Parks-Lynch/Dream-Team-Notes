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
  BFS(start) {

  }
}
