// Merging two sorted subarrays properly

// My approach
// function merge(arr1, arr2) {
//   let i = 0,
//       j = 0;
//   let res = [];
//   while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//           res.push(arr1[i]);
//           i++;
//       } else if (arr2[j] < arr1[i]) {
//           res.push(arr2[j]);
//           j++;
//       } else {
//           res.push(arr1[i]);
//           i++;
//           j++;
//       }
//   }
//   if (i === arr1.length) {
//       res = res.concat(arr2.slice(j));
//   } else if (j === arr2.length) {
//       res = res.concat(arr1.slice(i));
//   }
//   return res;
// }

// Colt's approach
// function merge(arr1, arr2) {
//   let res = [],
//       i = 0,
//       j = 0;

//   while (i < arr1.length && j < arr2.length) {
//       if (arr1[i] < arr2[j]) {
//           res.push(arr[i]);
//           i++;
//       } else {
//           res.push(arr2[j]);
//           j++;
//       }
//   }

//   // add rest of the reamining subarray
//   while (i < arr1.length) {
//       res.push(arr1[i]);
//       i++;
//   }
//   while (j < arr2.length) {
//       res.push(arr2[j]);
//       j++;
//   }
//   return res;
// }

// --------------------------------

// Actual merge sort (Colt's solution)
// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   // Splitting into two halves
//   let mid = Math.floor(arr.length / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   // merging the two sorted halves
//   return merge(left, right);
// }

//Dream Team approach
function merge(arr1, arr2) {
    let result = [];
    let i = 0;
    let j = 0;
    //loop through arr1 and arr2
    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    //add remaining sub array
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

// console.log(merge([1,10,50],[2,14,32,89,99,1000]));

function mergeSort(arr) {
    //base case
    if(arr.length < 2) return arr;
    //recursive case
    //midle point - split into halves
    let mid = Math.floor(arr.length / 2);
    let firstHalf = mergeSort(arr.slice(0, mid))
    let secondHalf = mergeSort(arr.slice(mid))
    return merge(firstHalf, secondHalf)
}


