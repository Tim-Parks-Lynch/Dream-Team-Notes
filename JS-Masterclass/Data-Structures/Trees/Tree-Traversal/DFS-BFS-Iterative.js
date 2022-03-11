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
  //ITERATIVE
  breadthFirstSearch() {
    //create a queue (can be an array) and a variable to store the values of visited nodes
    let queue = []
    let visited = []
    let currentNode = this.root
    //place root node in the queue
    if (!this.root) {
      return null
    }

    queue.push(currentNode)
    while (queue.length) {
      //remove first element in queue
      currentNode = queue.shift()
      //add the value of dequeued node to visited
      visited.push(currentNode.val)

    //checked if there is left node & push into queue
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      //checked if there is right node & push into queue
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    //return all visited values
    return visited
  }

  //Iterative In Order
  //Time Complexity: 0(n)
  dfsInOrder() {
    if (this.root === null) return null

    let stack = []
    let current = this.root
    let visited = []

    //checks if there is right node, adds node to the stack
    while (current !== null || stack.length > 0) {
      //checks if left node, adds value to the stack
      while (current !== null ) {
        stack.push(current)
        current = current.left
      }

      current = stack.pop()
      visited.push(current.val)
      current = current.right
    }

    return visited
  }

  //Iterative Pre Order
  dfsPreOrder () {
    if (this.root === null) return null

    let stack = []
    var current = this.root
    let visited = []

    while (current !== null || stack.length > 0) {

      while (current !== null ) {
        stack.push(current)
        visited.push(current.val)
        current = current.left
      }

      current = stack.pop()
      //IN ORDER PLACEMENT
      // visited.push(current.val)
      current = current.right
    }

    return visited
  }
  //Iterative Post Order Solution : METHOD 1
  // dfsPostOrder () {
  //   let list = []
  //   let stack = []
  //   if (this.root === null) return stack

  //   stack.push(this.root)
  //   let prev = null
  //   while (stack.length !== 0) {
  //     let current = stack[stack.length-1]

  //     if (prev === null || prev.left === current || prev.right === current) {
  //       if (current.left !== null) {
  //         stack.push(current.left)
  //       }
  //       else if (current.right !== null) {
  //         stack.push(current.right)
  //       }

  //       else {
  //         stack.pop()
  //         list.push(current.val)
  //       }
  //     }

  //     else if (current.left === prev) {
  //       if (current.right !== null) {
  //         stack.push(current.right)
  //       }
  //       else {
  //         stack.pop()
  //         list.push(current.val)
  //       }
  //     }

  //     else if (current.right === prev) {
  //       stack.pop()
  //       list.push(current.val)
  //     }
  //     prev = current
  //   }
  //   return list
  // }

  //ITERATIVE POST ORDER: METHOD 2
  dfsPostOrder() {
    var stack = [];
    let list = []
    let current = this.root
    while (true) {
      while (current !== null) {
        stack.push(current);
        stack.push(current);
        current = current.left;
      }

      // Check for empty stack
      if (stack.length === 0) return list;

      current = stack.pop();

      if (stack.length !== 0 && stack[stack.length - 1] === current) {
        current = current.right;
      }

      else {
        list.push(current.val);
        current = null;
      }
    }
  //return list
}
}
