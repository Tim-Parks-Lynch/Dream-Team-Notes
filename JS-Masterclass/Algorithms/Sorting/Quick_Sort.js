// placing the pivot element in its correct position

// Colt's solution
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivot) {
          swapIdx++;
          [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
      }
  }
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
  return swapIdx;
}

// console.log(pivot([26, 23, 44, 17, 1]));
/*  26, 23, 44, 17, 1  pivot = 1
    26, 23, 44, 17, 1  pivot = 1
    26, 23, 17, 44, 1  pivot = 2
    26, 23, 17, 1, 44  pivot = 3
*********make a swap between idx 3 and 0********
    1, 23, 17, 26, 44
   */

// --------------------------------------------------------------------
// Actual quick sort function
function quickSort(arr, left = 0, right = arr.length - 1) {
  // Base case is that the left and right pointers don't overlap, after which we'll be left with an array of 1 item
  if (left < right) {
      let pivotIndex = pivot(arr, left, right);
      // For left subarray, which is everything to the left of the pivot element
      quickSort(arr, left, pivotIndex - 1);
      // For the right sub array, which is everything to the right of the pivot element
      quickSort(arr, pivotIndex + 1, right);
  }
  // Return the array, when it's of length 1 i.e, left === right
  return arr;
}
