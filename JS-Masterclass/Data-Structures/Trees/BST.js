// A node in a BST needs to store a value, and also point to its left and right nodes.
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// The following class reprevsents the Binary Seacrh Tree Datastructure, along with the instance methods
class BinarySearchTree {
  constructor() {
    // A starting node is the only property needed to be maintained
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      // If we are adding a value equal to current, then just return undefined
      if (val === current.val) return undefined;

      // Rest of the logic remains the same
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        // We need not specify the condition of (val > current.val) as we have already handled the edge case of val === current
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  // Method to find if a value is present in the BST

  find(val) {
    // Check is there is no 'root' node and return false
    if (!this.root) return false;

    let currentNode = this.root;
    /* Colt's approach
    while (true) {
      // Check if the currentNode's value is equal to val, and return true
      if (currentNode.val === val) return true;

      // Check if the val parameter is lesser than the currentNode's val
      if (val < currentNode.val) {
        // Check if there is no 'left' node to the currentNode, and return false
        if (!currentNode.left) return false;

        // Otherwise, continue searching after setting the new currentNode to the 'left' property of the currentNode
        currentNode = currentNode.left;
      } else {
        // If this code is executed, it means that 'val' is greater than currentNode.val

        // Check if there is no node to the 'right' of currentNode, and return false
        if (!currentNode.right) return false;

        // Otherwise, continue searching after setting the new currentNode to be the 'right' property of the currentNode
        currentNode = currentNode.right;
      }
     } */
    while (currentNode) {
      if (currentNode.val < val) {
        currentNode = currentNode.right;
      } else if (currentNode.val > val) {
        currentNode = currentNode.left;
      } else {
        return true;
      }
    }
    return false;
  }
}
