# Analyzing Performance of Arrays and Objects Notes
## The BIG O of Objects

Unordered data structures, key value pairs

**When to use Objects?**

- When you don't need order
- When you need fast access / insertion and removal


**Big O of Objects**

- Insertion - O(1)
- Removal - O(1)
- Searching - O(n)
- Access - O(1)

**Big O of Objects Methods**

- Objects.keys - O(n)
- Objects.value - O(n)
- Objects.entries - O(n)
- hasOwnProperty - O(1)

## The BIG O of Arrays Methods

Ordered lists

**When to use Arrays?**

- When you need order
- When you need fast access / insertion and removal (sort of ...)

**Big O of Arrays**

- Insertion - It depends...
- Removal - It depends...
- Searching - O(n)
- Access - O(1)


**Big O of Array Operations**

- push/pop - O(1)
- shift/unshift - O(n)
- concat - O(n)
- slice/splice - O(n)
- sort - O(N * logN)
- forEach/map/filter/reduce/etc. - O(n)
