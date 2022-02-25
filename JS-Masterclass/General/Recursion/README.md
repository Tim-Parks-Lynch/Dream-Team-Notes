# Recursion

## Knowledge

- A process (a function in our case) that calls itself

**<details><summary>1. Use Cases</summary>**

- JSON.parse / JSON.stringify
- document.getElementById and DOM traversal algorithms
- Object traversal
- Very common with more complex algorithms
- It's sometimes a cleaner alternative to iteration
</details>

**<details><summary>2. How recursive functions work</summary>**
Invoke the same function with a different input until you reach your base case!
- Base case: The condition when the recursion ends.
- Recursive Call
</details>

**3. Call Stack**

```js
function takeShower(){
    return "Showering!"
}

function eatBreakfast(){
    let meal = cookFood()
    return `Eating ${meal}`
}

function cookFood(){
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready to go to work!")
}

wakeUp()
```

**4. When things go wrong**

- No base case
- Forgetting to return or returning the wrong thing!
- Stack overflow!

### Simple examples

- Count down
```js
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
```

- sumRange

```js
function sumRange(num){
   if(num === 1) return 1;
   return num + sumRange(num-1);
}
```
- factorial

```js
function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}
```
### Helper methods recursion

```js
function outer(input){

    var outerScopedVariable = []

    function helper(helperInput){
        // modify the outerScopedVariable
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable;

}
```
Another example:
```js
function collectOddValues(arr){

    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(arr)

    return result;

}
```

### Pure Recursion

- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign, or the spread operator

```js
function collectOddValues(arr){
    let newArr = [];

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}
```

### BIG O

- Measuring time complexity is relatively simple. You can measure the time complexity of a recursive function as then number of recursive calls you need to make relative to the input
- Measuring space complexity is a bit more challenging. You can measure the space complexity of a recursive function as the maximum number of functions on the call stack at a given time, since the call stack requires memory.


### Tail Call Optimization

- ES2015 allows for tail call optimization, where you can make some function calls without growing the call stack.
- By using the return keyword in a specific fashion we can extract output from a function without keeping it on the call stack.
- Unfortunately this has not been implemented across multiple browsers so it is not reasonable to implement in production code.


### Recap

- A recursive function is a function that invokes itself
- Your recursive functions should always have a base case and be invoked with different input each time
- When using recursion, it's often essential to return values from one function to another to extract data from each function call
- Helper method recursion is an alternative that allows us to use an external scope in our recursive functions
- Pure recursion eliminates the need for helper method recursion, but can be trickier to understand at first
