/**Resource: https://betterprogramming.pub/why-you-should-use-es6-sets-in-javascript-143d67d34e58 */
/**ARRAY */
// let setA = ['a','b','c','d'];

// // Remove element 'd'
// // Asymptotic runtime: O(|setA|)
// setA = setA.filter(element => element !== 'd');

// // Add element 'e' to setA
// // Asymptotic runtime: O(|setA|)
// setA = setA.filter(element => element !== 'e').push('e');

// // Check if element 'b' exists in setA
// // Asymptotic runtime: O(|setA|)
// console.log(setA.includes('b'));

/**ARRAY IMPLEMENTATION */
// let setA = ['a', 'b', 'c', 'd'];
// let setB = ['b', 'c', 'f'];
// let setC = ['b', 'c'];

// // Intersection of setA and setB.
// // Asymptotic runtime: O(|setA| * |setB|)
// function intersection(setA, setB) {
//   return setA.filter(element => setB.includes(element));
// }

// // Union of setA and setB
// // Asymptotic runtime: O(|setB| * max(|setA|, |setB|))
// function union(setA, setB) {
//   let intersectionSet = intersection(setA, setB);
//   return [
//     ...setA,
//     ...setB.filter(element => !intersectionSet.includes(element))
//   ];
// };

// // Subset relation
// // Asymptotic runtime: O(|setA| * |setB|)
// function isSubsetOf(setA, setB) {
//   return setA.every(element => setB.includes(element));
// }

// console.log('intersection', intersection(setA, setB)); // [ 'b', 'c' ]
// console.log('union', union(setA, setB)); // [ 'a', 'b', 'c', 'd', 'f' ]
// console.log('is setA subset of setB', isSubsetOf(setA, setB)); // false
// console.log('is setB subset of setA', isSubsetOf(setB, setA)); // false
// console.log('is setC subset of setA', isSubsetOf(setC, setA)); // true
// console.log('is setC subset of setB', isSubsetOf(setC, setB)); // true
// console.log('is setA subset of setC', isSubsetOf(setA, setC)); // false
// console.log('is setB subset of setC', isSubsetOf(setB, setC)); // false

/**OBJECT */


// let e = 'd'; // element to add
// let setA = {'a': true, 'b': true, 'c': true, 'd': true};

// // Remove element 'd'
// // Asymptotic runtime: O(1)
// setA = delete setA['d'];

// // Add element 'e' to setA
// // Asymptotic runtime: O(1)
// setA[e] = true;

// // Check if element 'b' exists in setA
// // Asymptotic runtime: O(1)
// console.log('b' in setA);

/**OBJECT IMPLEMENTATION */

// let setA = { 'a': true, 'b': true, 'c': true, 'd': true };
// let setB = { 'b': true, 'c': true, 'f': true };
// let setC = { 'b': true, 'c': true };

// // Intersection of setA and setB.
// // Asymptotic runtime: O(|setA| * |setB|)
// function intersection(setA, setB) {
//   let intersectionSet = {};
//   Object.keys(setA).filter(element => element in setB).forEach(element =>
//     intersectionSet[element] = true
//   );
//   return intersectionSet;
// }

// // Union of setA and setB
// // Asymptotic runtime: O(|setB| * max(|setA|, |setB|))
// function union(setA, setB) {
//   return { ...setA, ...setB };
// };

// // Subset relation
// // Asymptotic runtime: O(|setA| * |setB|)
// function isSubsetOf(setA, setB) {
//   return Object.keys(setA).every(element => element in setB);
// }

// console.log('intersection', intersection(setA, setB)); // { b: true, c: true }
// console.log('union', union(setA, setB)); // { a: true, b: true, c: true, d: true, f: true }
// console.log('is setA subset of setB', isSubsetOf(setA, setB)); // false
// console.log('is setB subset of setA', isSubsetOf(setB, setA)); // false
// console.log('is setC subset of setA', isSubsetOf(setC, setA)); // true
// console.log('is setC subset of setB', isSubsetOf(setC, setB)); // true
// console.log('is setA subset of setC', isSubsetOf(setA, setC)); // false
// console.log('is setB subset of setC', isSubsetOf(setB, setC)); // false

/**ES6 - set */


// let e = 'd'; // element to add
// let setA = new Set(['a', 'b', 'c']);

// // Remove element 'd'
// // Asymptotic runtime: O(1)
// setA.delete('d');

// // Add element 'e' to setA
// // Asymptotic runtime: O(1)
// setA.add(e);

// // Check if element 'b' exists in setA
// // Asymptotic runtime: O(1)
// console.log(setA.has('b'));

/**ES6 - Set implementation */
/**1. Relationship with Array */
let arr = ['a', 'b', 'c'];

// array to ES6 Set
let es6Set = new Set(arr);

// ES6 Set to array
arr = [...es6Set];

console.log(arr) // ['a', 'b', 'c']


let setA = new Set(['a', 'b', 'c', 'd']);
let setB = new Set(['b', 'c', 'f']);
let setC = new Set(['b', 'c']);

// Intersection of setA and setB.
// Asymptotic runtime: O(min(|setA|, |setB|))
function intersection(setA, setB) {
  let smallerSet = setA.size > setB.size ? setB : setA;
  let largerSet = setA.size > setB.size ? setA : setB;
  return new Set([...smallerSet].filter(element => largerSet.has(element)))
}

// Union of setA and setB
// Asymptotic runtime: O(|setA| + |setB|)
function union(setA, setB) {
  return new Set([...setA, ...setB]);
};

// Subset relation
// Asymptotic runtime: O(|setA|)
function isSubsetOf(setA, setB) {
  return [...setA].every(element => setB.has(element));
}

console.log('intersection', intersection(setA, setB));
console.log('union', union(setA, setB));
console.log('is setA subset of setB', isSubsetOf(setA, setB));
console.log('is setB subset of setA', isSubsetOf(setB, setA));
console.log('is setC subset of setA', isSubsetOf(setC, setA));
console.log('is setC subset of setB', isSubsetOf(setC, setB));
console.log('is setA subset of setC', isSubsetOf(setA, setC));
console.log('is setB subset of setC', isSubsetOf(setB, setC));
