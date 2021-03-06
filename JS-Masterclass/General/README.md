# Big-O Algorithm Notes

## Simplifying Big O Expressions

**Calculate runtime efficiently**

- Constants don't matter
- Smaller terms don't matter
- Big-O Shorthands:
 1. Arithmetic operations are constant
 2. Variable assignment is constant
 3. Accessing elements in an array (by index) or object (by key) is constant
 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop


## Space Complexity

### Auxiliary Space Complexity
Refer to space required by the algo, not including space taken up by the inputs

### Space Complexity

- Most primitives (booleans, numbers, undefined, null) are constant space
- Strings require O(n) space (where n is the string length)
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

### Logs and Section

Logarithm



# Big-O Algorithm Complexity Cheat Sheet
Shows [Big-O](https://en.wikipedia.org/wiki/Big_O_notation) time and space complexities of common algorithms used in .NET and Computer Science. You can see which collection type or sorting algorithm to use at a glance to write the most efficient code. This is also useful for those studying Computer Science in University or for technical interview tests where Big-O notation questions can be fairly common depending on the type of company you are apply to.

## View The Cheat Sheet

#### [HTML](https://rawgit.com/rehansaeed/.NET-Big-O-Algorithm-Complexity-Cheat-Sheet/main/Cheat%20Sheet.html)
#### [PDF](https://github.com/jackie-ng/JS-Algorithms-and-Data-Structures-Practices/blob/main/Notes/Cheat%20Sheet.pdf)
#### [PNG](https://github.com/jackie-ng/JS-Algorithms-and-Data-Structures-Practices/blob/main/Notes/Cheat%20Sheet.png)

![Big-O Algorithm Complexity Cheat Sheet](Cheat%20Sheet.png)

#### Cheatsheet Credits

All credit goes to the creator of the Big-O Algorithm Complexity Cheat Sheet [Eric Rowell](https://twitter.com/ericdrowell) and the many contributors to it. You can find the original [here](http://bigocheatsheet.com/). I simply added .NET specific bits to it.
