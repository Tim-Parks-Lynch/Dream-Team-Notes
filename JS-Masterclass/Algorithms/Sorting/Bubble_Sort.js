// UNOPTIMIZED VERSION OF BUBBLE SORT
// function bubbleSort(arr){
//   for(var i = arr.length; i > 0; i--){
//     for(var j = 0; j < i - 1; j++){
//       console.log(arr, arr[j], arr[j+1]);
//       if(arr[j] > arr[j+1]){
//         var temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//     console.log("ONE PASS COMPLETE!");
//   }
//   return arr;
// }

// // ES2015 Version
// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//   };

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//       }
//     }
//   }
//   return arr;
//}

//OPTIMIZED VERSION

// If there were no swaps done in one full pass, that means that the array is already sorted, so there is no need for any more passes to be made
// function bubbleSort(arr) {
//   let noSwaps;
//   for (let i = arr.length; i > 0; i--) {
//       noSwaps = true;
//       for (let j = 0; j < i - 1; j++) {
//           if (arr[j + 1] < arr[j]) {
//               // Swap
//               [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
//               // Make 'noSwaps' false
//               noSwaps = false;
//           }
//       }
//       // End the iterations if there were no swaps made in one full pass
//       if (noSwaps) {
//           break;
//       }
//   }
//   return arr;
// }
// console.log(bubbleSort([8,1,2,3,4,5,6,7]));
