# Data Structures

<details><summary>What do they do?</summary>
Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data
</details>

<details><summary>Why so many?</summary>
Different data structures excel at different things.  Some are highly specialized, while others (like arrays) are more generally used.
</details>

## Table of Contents

1. [Class](#class)
2. [Singly Linked List](Singly_Linked_List)
3. [Doubly Linked List](Doubly_Linked_List)
4. [Stacks](Stacks)
5. [Queue](Queue)

## Class

**<details><summary>Definition</summary>**
Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are not shared with ES5 class-like semantics.
</details>

**<details><summary>Class Declaration</summary>**

- The method to create new objects must be called constructor
- The class keyword creates a constant, so you can not redefine it. Watch out for the syntax as well!

```js
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

</details>

**<details><summary>Creating objects from classes</summary>**

We use the new keyword

```js
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
```

</details>


**<details><summary>Instance Methods</summary>**

```js
class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
}

let firstStudent = new Student("Colt", "Steele");

firstStudent.fullName() // "Colt Steele"
```
</details>

**<details><summary>Class Methods</summary>**

```js

class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }

    static enrollStudents(...students){
        // maybe send an email here
    }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

Student.enrollStudents([firstStudent, secondStudent])

```

</details>
