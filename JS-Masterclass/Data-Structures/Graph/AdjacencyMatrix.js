class Graph {
  constructor(size = 1) {
    this.size = size;
    this.matrix = [];
    for (let i = 0; i < size; i++) {
      this.matrix.push([]);
      for (let j = 0; j < size; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }
  /**Our vertices are represented by the indices of our matrix. So, we just need to check that neither go outside the bounds of our matrix, and that they are not the same vertex. After that we just assign this.matrix[vertex1][vertex2] and this.matrix[vertex2][vertex1] to the weight. */
  addEdge(vertex1, vertex2, weight = 1) {
    if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
      console.log('invalid vertex');
    } else if (vertex1 === vertex2) {
      console.log('same vertex');
    } else {
      this.matrix[vertex1][vertex2] = weight;
      this.matrix[vertex2][vertex1] = weight;
    }
  }
  /**We check that the vertices are valid, and if so we just reset them to 0. */
  removeEdge(vertex1, vertex2) {
    if (vertex1 > this.size - 1 || vertex2 > this.size - 1) {
      console.log('invalid vertex');
    } else if (vertex1 === vertex2) {
      console.log('same vertex');
    } else {
      this.matrix[vertex1][vertex2] = 0;
      this.matrix[vertex2][vertex1] = 0;
    }
  }
  /**First we increase our size, then we push an empty array into our matrix. We need to add a 0 into the previously existing arrays, and at the same time fill our new array with 0s. */

  addVertex() {
    this.size++;
    this.matrix.push([]);
    for (let i = 0; i < this.size; i++) {
      this.matrix[i][this.size - 1] = 0;
      this.matrix[this.size - 1][i] = 0;
    }
  }
  /**First we check the validity of the vertex given (has to be within the bounds of the matrix). Then, we need to shift every element in each row left by 1, over writing the vertex we are removing. This takes care of our rows! We also need to shift every element up by one, over writing the column which represents our vertex. Finally we pop off the empty array, and decrease our size. */
  removeVertex(vertex) {
    if (vertex < 0 || vertex > this.size - 1) {
      console.log('Invalid vertex');
    } else {
      while (vertex < this.size - 1) {
        for (let i = 0; i < this.size; i++) {
          this.matrix[i][vertex] = graph[i][vertex + 1];
        }
        for (let i = 0; i < this.size; i++) {
          this.matrix[vertex][i] = this.matrix[vertex + 1][i];
        }
        vertex++;
      }
      this.matrix.pop();
      this.size--;
    }
  }
  /**go row by row, adding each element to a string to be printed out! */
  printMatrix() {
    for (let i = 0; i < this.size; i++) {
      let row = '';
      for (let j = 0; j < this.size; j++) {
        row += ` ${this.matrix[i][j]}`;
      }
      console.log(row);
    }
  }
}
