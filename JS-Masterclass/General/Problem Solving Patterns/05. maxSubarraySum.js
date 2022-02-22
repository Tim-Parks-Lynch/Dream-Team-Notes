/**
 Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
 console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
 console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
 console.log(maxSubarraySum([-3, 4, 0, -1, 6, -1], 2)); // 5
 console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
 console.log(maxSubarraySum([2, 3], 3)); // null

 Time: O(n)
 Space: O(1)
 *  */
 function maxSubarraySum(arr, num){
  if (arr.length < num) return null;

  let total = 0;
  for (let i=0; i<num; i++){
     total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
     currentTotal += arr[i] - arr[i-num];
     total = Math.max(total, currentTotal);
  }
  return total;
}
