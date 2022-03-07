# Singly Linked List

[Singly Linked List Code](Singly_Linked_List.js)

<details><summary>What is a linked list?</summary>

- A data structure that contains a head, tail and length property.
- Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

</details>

<details><summary>Singly Linked Lists</summary>

![Singly Linked List](img/sll-01.PNG)

-   They are a bunch of **nodes** connected to each other in a single direction, strating from the **head** (starting node) all the way up to the **tail** (last node). Each node **points** to the next node in the linked list.
-   Comparisions between SLL and Array :

    |                     Singly Linked List                     |                            Arrays                             |
    | :--------------------------------------------------------: | :-----------------------------------------------------------: |
    | Do not have indexing,Connected to next node using pointers |                       Indexed in order                        |
    |  Insertion and deletion at the start or end is very easy   | Insertion and deletion can be expensive, when comapred to SLL |
    |            Random access of data isn't allowed             |            Can access elements at a specific index            |

-   We define a class for a **Node** and use that to define a class for our SLL.

</details>
