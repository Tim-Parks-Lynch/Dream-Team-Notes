// Implemented using a min binary heap
// Node class, to store a value and a priority
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

// the minBinaryHeap class that's been changed to be called a Priority Queue
class PriorityQueue {
  constructor() {
    // Stores an array of nodes
    this.nodes = [];
  }



  // the helper method 'bubbleUp'
  bubbleUp() {
    // Store the index of the latestNode
    let childIndex = this.nodes.length - 1;

    // Store the last childNode added to the queue
    let childNode = this.nodes[childIndex];
    let parentIndex, parentNode;

    // loop until the correct position is found
    while (childIndex > 0) {
      // find the index of its parent nodes
      parentIndex = Math.floor((childIndex - 1) / 2);

      // Store the parentNode
      parentNode = this.nodes[parentIndex];

      // If childNode's priority is greater in value than the parentNode's priority, end the loop
      if (childNode.priority >= parentNode.priority) break;

      // Otherwise, swap them
      this.nodes[parentIndex] = childNode;
      this.nodes[childIndex] = parentNode;

      // Set the new childIndex to be the current parentIndex
      childIndex = parentIndex;
    }
  }
  // sinkDown() helper method, similar to the logic used in max binary heaps
  sinkDown() { }

}
