# Data Structures & Algorithms

## Topics Overview

### Algorithms Complexity Analysis

#### [X] Big O Notation

## Resources

# 1 Big O

-   [Big O Cheat Sheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)
-   [Know Thy Complexities!](https://www.bigocheatsheet.com/)

# 2 Problem solving approach

-   [problem solving](https://cs.slides.com/colt_steele/problem-solving-patterns)

1. Understand the Problem

2. Explore Concrete Examples

3. Break It down

4. Solve/ Simplify

5. Look Back and Refactor

# 3 Problem Solving Patterns

## Frequency Counters Pattern

-   Related to hash table
-   Using objects, sets to collect value/frequencies of values
-   Can often avoid nested loop or O(n^2) operations with arrays/strings

## Multiple Pointers

-   Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on certain condition
-   Very efficient for solving problems with minimal space complexity as well

## Sliding Window

-   Create a window: can either be an array or number from one position to another
-   Depending on certain condition, the window either increases or closes (and a new window is created)
-   Useful for keeping track of a subset of data in an array/string

## Divide and Conquer

-   dividing a data set into smaller chunks then repeating a process with a subset of data
-   Can extremely decrease time complexity

# 4. Recursion

-   [Call stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)

## Two part of recursion

-   Base case: condition to end the recursion
-   Different input

## Recursion pitfalls

-   No base case
-   Forget to return or returning the wrong thing
-   stack overflow

## Helper method recursion

-   create a recursion method inside function to do recursion tasks

## Pure Recursion

-   don't mutate the arr

# 5. Searching Algorithm

## 5.1 Linear Search Big O

-   Best: O(1)
-   Worst: O(n)
-   Average: O(n)

## 5.2 Binary Search

-   much faster form of search: eliminate 50% of searching time
-   rather than eliminating one element at a time, we eliminating half of the remaining elements at a time
-   only works on SORTED
-   idea: divide and conquer

### Pseudocode

-   input: sorted array, a value
-   output: index of value in sorted array
-   create left pointer at start
-   create right pointer at end
-   while left pointer right pointer
    -   create middle pointer
    -   if value > middle => move the left up
    -   if value < middle => move the right down
    -   if value = middle return index
-   If never find the value, return -1

### BIG O

-   worst: O(log n)

## 5.3 Naive String Search

### Pseudo code

-   loop over the long string
-   loop over the short string
-   if the char don't match, break out the inner loop
-   if the char match, the inner loop can finish and the match found, increment the count
-   return the count

# 6. Sorting Algorithm

-   [visual algo](https://visualgo.net/en)

## 6.1 Bubble Sort

-   idea: largest values bubbles up to the top
-   time complexity: O(n^2)
-   space complexity: O(1)

### Pseudocode

-   start loop: i = arr.length => > 0
    -   nested loop: j = 0; j < i -1; j++
    -   if arr[j] > arr[j+1] => swap

## 6.2 Selection Sort

### Idea

-   similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

### Pseudocode

-   Store the first element as the smallest value
-   Compare this item to next item in the array until find a smaller number
-   If smaller number is found, designate that smaller number to new min number, and continue until the end of the array
-   if min number is not the value at the initial, swap the two values

### Big O

-   time complexity: O(n^2)
-   space complexity: O(1)

## 6.3 Insertion Sort

### Idea

### Pseudocode

-   start picking the second element in the array
-   compare the second element with the one before it and swap if necessary
-   continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place
-   repeat until the array is sorted

### Big O

-

## 6.4 Merge Sort

### Merging two array

1. Idea

-   function merging two sorted arrays
-   this function should run in O(n+m) time and O(n+m) space and should not modify the parameters passes to it

2. Pseudocode

-   create empty array, take a look at smallest values in each input array
-   While loop through all element of two array
    -   If value in first array < value in second array, push it to the results then move on to next value in first array
    -   If value in second array < value in first array....

### mergeSort

1. Idea

-   Exploit the fact that array of 0 or 1 element always sorted
-   Using recursion, mid, left, right pointers and slice to break down the input array into array with empty or one element
-   Using merged sorted array function to merge

2. Pseudocode

3. Big O
    - best: O(nlogn)
    - average: O(nlogn)
    - worst: O(nlogn)
    - space complexity: O(n)

## 6.5 Quick Sort

## 6.6 Radix Sort

# 7. Data Structure

## 7.1 Single Linked Lists

### what is a linked list

-   data structure contains a head, tail and length property
-   Linked lists consists of nodes, and each nodes has a value, a pointer to another node or null

### Linked Lists vs Array

| Lists                                 | Arrays                                  |
| ------------------------------------- | --------------------------------------- |
| No indexes                            | indexes in order                        |
| connect via nodes with a next pointer | Insertion and deletion can be expensive |
| Random access is not allowed          | Access specific index quickly           |

### Implement insertion, removal, and traversal methods

-   [Data Structures in JavaScript: Singly Linked Lists](https://blog.bitsrc.io/data-structures-in-javascript-single-linked-lists-7df02408ebbc)

## 7.2 Double Linked Lists

## 7.3 Stacks and Queues

### What is stack

-   all concept where LIFO
-   add and remove at O(1)

### Where stacks used

-   Managing function invocation
-   undo/ redo
-   routing (history object)

### Implement stacks

-   using arrays
-   using linked list

### Big O of stacks

-   insertion O(1)
-   removal O(1)
-   accession O(n)
-   search O(n)

### Queues

-   Data structure FIFO
-   use in: background tasks, uploading resources, printing, task processing

### Big O of queue

-   insertion O(1)
-   removal O(1)
-   accession O(n)
-   search O(n)

## 7.4 Binary Search Trees

### what is a tree

-   a data structure that consists of nodes in a parent/ child relationship
-   Lists: linear
-   Trees: nonlinear

### Tree terminology

-   Root
-   Child
-   Parent
-   Sibling
-   Leaf
-   Edge: the arrow

### Uses for Trees

-   HTML DOM
-   Network routing
-   Abstract syntax tree
-   AI
-   Folder in OS

### Binary tree

### Binary search tree

-   parent have max 2 nodes
-   every left children < parent
-   every right children > parent

### Big O of BST

| avg     | worst |
| ------- | ----- |
| O(logn) | O(n)  |

## 7.5 TRee Traversal

### Breath-first Search - BFS

-   take advantage of Queue - FIFO
-   visit the list and keep track of what visited

### Depth-first Search - DFS

1. InOrder

-   visit the most left first, then parent node, then right, then root and to most right

2. PostOrder
   Idea

-   visit all children before visit the parent nodes and the root
-   this mean we will push the cur node to store after recursively loop through the tree

3. PreOrder
   Idea

-   visit the root first
-   then left
-   then right

    Steps - Recursively

-   Create a var to store the values of nodes visited
-   Store the root node of the BST in a variable called current
-   Write a helper function which accepted a node

    -   push the value of the node to the var that stores the values
    -   if the node has left property, call the helper with the left property on the node
    -   if the node has right property, call the helper with the right property on the node

    ### When to use DFS - BFS

    DFS and BFS time complexity are same, we need to visit all nodes once. The different is space complexity when we need to store visited node to the Queue

    1. DFS

    -   goal is depp => dfs reach deep more faster

    2. BFS

    -   goal is shallow => bfs

    3. In reality

    -   BFS take a lot of memory make it impractical even in case DFS is not optimal

    4. DFS types

    -   [When to use Preorder, Postorder, and Inorder Binary Search Tree Traversal strategies](https://stackoverflow.com/questions/9456937/when-to-use-preorder-postorder-and-inorder-binary-search-tree-traversal-strate)

## 7.6 Binary Heaps

### Definition

-   Similar BST with some different rules:

    -   MaxBinaryHeap Parent nodes are > children nodes
    -   MinBinaryHeap parent < children
    -   for any parent index n (index start at 0)
        -   left child is stored at 2n + 1
        -   right child is at 2n + 2
    -   for child index n
        -   parent (n-1)/2

    1. Max Binary Heap

    -   Each parent has at most two children
    -   parent > children
    -   siblings can > or <, =
    -   as compact as possible: all children node are as full as they can be and left children are filled out first

    2. Min Binary Heap

    -   Parent < children

### Why do we need this?

    -   Priority Queue
    -   Graph Traversal

### Priority Queue

    1. Definition
    - a data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities
    2. Implement Priority Queue base on binary heap

### Big O of Heaps

-   useful for sorting, and implement other data structures like priority queue
-   time complexity insert and extract: O(logn)

## 7.7 Hash Table

-   What a hash table is
-   Define what a hashing algorithm
-   what make good a good hashing algorithm
-   how collision occur in a hash table

### What is hash table

-   store in key-value pairs
-   like array but not store in ordered
-   unlike array, hash table fast for: finding, adding, removing
-   hash table is commonly used

### Hash function

What make a good hash

-   fast (like constant time)
-   doesn't cluster outputs at specific indices, but distributed uniformly
-   deterministic (same input yields same output)

### Dealing with Collisions

1. Separate Chaining

-   at each index in our array we store values using a more sophisticated data structure (eg. an array or linked list)
-   this allow us to store multiple key-value pairs at the same index => store more than size

-   Pseudocode - set
    -   accept key, value
    -   hashed the key
    -   store the key-value pair in the hash table array via separate chaining
-   Pseudocode - get

    -   accept key
    -   hashed the key
    -   receive the key-value pair in hash table
        -   if the key-value pair is array - loop through the array and check for the right key
    -   if the key isn't found, return undefined

-   keys/ values methods: each value in values array should be unique

2. Linear Probing

-   when we find a collision, we search through the array to find the next empty slot
-   this allow us to store single key-value at each index => store as size

### Big O

Average case

-   Insert: O(1)
-   Deletion: O(1)
-   Access: O(1)

### Other resources

-   [hash table 1](https://www.youtube.com/watch?v=dMyhU07qcgs&ab_channel=TheBrownBox)

-   [hash table 2](https://www.youtube.com/watch?v=KqMMXJNlOGA&list=PL4394wATl1l8WYu-OkoQ-FWf15Lt1u2yi&index=2&ab_channel=DataStructuresandAlgorithms)

## 7.8 Graph

## 7.9 Graph Traversal

# 8 Dijkstra's Algorithm

# 9 Dynamic programming

# Other Resources

-   [Cấu trúc dữ liệu & giải thuật](https://cautrucdulieugiaithuat.wordpress.com/)
-   [Blind 75](https://www.techinterviewhandbook.org/best-practice-questions/)
