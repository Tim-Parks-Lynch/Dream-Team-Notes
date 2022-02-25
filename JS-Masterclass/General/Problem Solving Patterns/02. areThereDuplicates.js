/**
 Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates amoung the arguments passed in. You can solve this using frequency counter pattern OR the multiple pointers pattern.

****** Examples:
areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a', 'b', 'c', 'a' ) // true

****** Restrictions:
Time - O(n)
Space - O(n)

****** Bonus:
Time - O(n log n)
Space - O(1)

*/


// Multiple Pointers
function areThereDuplicates(...args) {
  // Two pointers
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length){
    if(args[start] === args[next]){
        return true
    }
    start++
    next++
  }
  return false;
}

// // One Liner

// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }
// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a' )); // true
