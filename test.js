//Binary heap
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    // Push the value into the values property on the heap
    this.values.push(element);
    // Bubble Up:
    // Create a variable called index which is the length of the values property - 1
    let index = this.values.length - 1;
    let currentVal = this.values[index]
    // Create a variable called parentIndex which is the floor of (index-1)/2
    console.log(currentVal);
    // Keep looping as long as the values element at the parentIndex is less than the values element at the child index
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      let parentVal = this.values[parentIndex]
      // once value.index < value.parent => break
      if (currentVal <= parentVal) {
        break
      }
      // Swap the value of the values element at the parentIndex with the value of the element property at the child index
      // Set the index to be the parentIndex, and start over!
      // otherwise, keep going until it reaches 0
      let temp = this.values[index];
      this.values[index] = this.values[parentIndex];
      this.values[parentIndex] = temp;
      index = parentIndex
    }
    return this.values;
  }

  /*extractMax() {
    // Swap the first value in the values property with the last one
    let firstVal = this.values[0];
    let lastVal = this.values[this.values.length - 1];
    let lastIndex = this.values.length - 1;
    [firstVal, lastVal] = [lastVal, firstVal];
    // Pop from the values property, so you can return the value at the end.
    const maxVal = this.values.pop();
    // Have the new root "sink down" to the correct spot..​
    // Your parent index starts at 0 (the root)
    let parentIndex = 0;
    let left, right
    while (lastIndex > parentIndex) {
      // Find the index of the left child: 2 * index + 1 (make sure its not out of bounds)
      left = 2 * parentIndex + 1;
      // Find the index of the right child: 2*index + 2 (make sure its not out of bounds)
      right = 2 * parentIndex + 2;
      // If the left or right child is greater than the element...swap. If both left and right children are larger, swap with the largest child.
      let leftVal = this.values[left]
      let rightVal = this.values[right]
      if (leftVal > firstVal && rightVal > firstVal) {
        if (leftVal > rightVal) {
          //  swap the firstVal with left

        } else {
          //  swap the firstVal with left

        }
      } else if (leftVal > firstVal) {
        //swap firstVal with left

      } else if (rightVal > firstVal) {
        //swap firstVal with right
      } else {
        break
      };

    }
    // The child index you swapped to now becomes the new parent index.
    // Keep looping and swapping until neither child is larger than the element.
    // Return the old root!
    return maxVal;
  }*/
}

const heap = new MaxBinaryHeap();
heap.insert(2)
heap.insert(3)
heap.insert(1)
heap.insert(5);
heap.insert(6);
console.log(heap);
