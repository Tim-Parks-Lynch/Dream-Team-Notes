class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

//Doubly Linked list class
class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  //Push method - adding a new node to the end of DLL

  push(val) {
    //create a new Node using val
    const newNode = new Node(val);

    //if check: to check if it's an empty list => set newNode to be the 'head' and the 'tail'
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //set the 'next' property of the tail to be newNode
      this.tail.next = newNode;
      //set the newNode to be the tail of DLL
      newNode.prev = this.tail;
      //reset the newNode to be the 'tail' of the DLL
      this.tail = newNode;

    }
    // Increment the length of the list
    this.length++;
    return this;
  }

  pop() {
    // If there is no head, return undefined
    if (!this.head) return undefined;
    // Store the current tail in a variable to return later
    const curTail = this.tail;
    // If the length is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // Update the tail to be the previous Node.
      this.tail = curTail.prev;
      // Set the newTail's next to null
      this.tail.next = null;
      curTail.prev = null;
    }
    // Decrement the length
    this.length--;
    // Return the value removed;
    return curTail;
  }

  shift() {
    // If length is 0, return undefined
    if (this.length === 0) return undefined;
    // Store the current head property in a variable (we'll call it old head)
    const oldHead = this.head;
    // If the length is one
    if (this.length === 1) {
      // set the head and the tail to be null
      this.head = null;
      this.tail = null;
    } else {
      // Update the head to be the next of the old head
      this.head = oldHead.next;
      // Set the head's prev property to null
      this.head.prev = null;
      // Set the old head's next to null
      oldHead.next = null;
    }
    // Decrement the length
    this.length--;
    // Return old head
    return oldHead;
  }

  unshift(val) {
    // Create a new node with the value passed to the function
    const newNode = new Node(val);
    // If the length is 0
    if (!this.length) {
      // Set the head and the tail to be the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Set the prev property on the head of the list to be the new node
      this.head.prev = newNode;
      // Set the next property on the new node to be the head property
      newNode.next = this.head;
      // Update the head to be the new node
      this.head = newNode;
    }
    // Increment the length
    this.length++;
    // Return the list
    return this;
  }

  get(index) {
    // If the index is less than 0 or greater or equal to the length, return null
    if (index < 0 || index >= this.length) return null;

    const middle = Math.floor(this.length / 2)
    let currentNode;
    // If the index is less than or equal to half the length of the list
    if (index <= middle) {
      currentNode = this.head;
      let counter = 0;
      // Loop through the list starting from the head and loop towards the middle
      // Return the node once it is found
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      // If the index is greater than half the length of the list
      // ​Loop through the list starting from the tail and loop towards the middle
      let counter = this.length - 1;
      currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }

    // Return the node once it is found
    return currentNode;
  }

  set(index, value) {
    // Create a variable which is the result of the get method at the index passed to the function
    const setNode = this.get(index);
    // If the get method returns a valid node, set the value of that node to be the value passed to the function
    if (setNode) {
      setNode.val = value;
      // Return true
      return true;
    }
    // Otherwise, return false
    return false;
  }

  insert(index, newValue) {
    // If the index is less than zero or greater than or equal to the length return false
    if (index < 0 || index >= this.length) return false;
    // If the index is 0, unshift
    if (index === 0) return this.unshift(newValue)
    // If the index is the same as the length, push
    if (index === this.length) return this.push(newValue)
    // Use the get method to access the index -1
    const beforeNode = this.get(index - 1);
    // Set the next and prev properties on the correct nodes to link everything together
    const afterNode = beforeNode.next
    const newNode = new Node(newValue)

    newNode.next = afterNode;
    afterNode.prev = newNode;
    newNode.prev = beforeNode;
    afterNode = newNode;

    // Increment the length
    this.length++;
    // Return true
    return true;
  }

  remove(index) {
    // If the index is less than zero or greater than or equal to the length return undefined
    if (index < 0 || index >= this.length) return undefined;
    // If the index is 0, shift
    if (index === 0) return this.shift();
    // If the index is the same as the length-1, pop
    if (index === this.length - 1) return this.pop();
    // Use the get method to retrieve the item to be removed
    const removedNode = this.get(index);
    // Update the next and prev properties to remove the found node from the list
    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    // Set next and prev to null on the found node
    removedNode.next = null;
    removedNode.prev = null;
    // Decrement the length
    this.length--;
    // Return the removed node.
    return removedNode;
  }
}

const list = new DoublyLinkedList()
list.push("index: 0 - this")
list.push("index: 1 - is")
list.push("index: 2 - the")
list.push("index: 3 - freaking")
list.push("index: 4 - test")
console.log(list.remove(3))
console.log(list);
