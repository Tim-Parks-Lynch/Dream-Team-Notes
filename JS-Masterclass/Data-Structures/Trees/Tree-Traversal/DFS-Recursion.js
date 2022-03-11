// RECURSIVE SOLUTIONS
class Node {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      if (val === currentNode.val) return 'number exists.'
      if (currentNode.val > val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  dfsPreOrder () {
    let visited  = []
    let current = this.root

    function dfsPreOrderHelper (node) {
      visited.push(node.val)
      if (node.left) {
        dfsPreOrderHelper(node.left)
      }
      if (node.right) {
        dfsPreOrderHelper(node.right)
      }
    }

    dfsPreOrderHelper(current)
    return visited
  }

  dfsPostOrder(){
    let visited = []
    let current = this.root

    function dfsPostOrderHelper(node) {
      if (node.left) {
        dfsPostOrderHelper(node.left)
      }
      if (node.right) {
        dfsPostOrderHelper(node.right)
      }

      visited.push(node.val)
    }
    dfsPostOrderHelper(current)
    return visited
  }

  dfsInOrder() {
    let visited = []
    let current = this.root

    function dfsInOrderHelper(node){
      if (node.left) {
        dfsInOrderHelper(node.left)
      }

      visited.push(node.val)

      if(node.right) {
        dfsInOrderHelper(node.right)
      }
    }
    dfsInOrderHelper(current)
    return visited
  }
}
