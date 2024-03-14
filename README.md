# Data Structures & Algorithms

## Topics Overview

### Algorithms Complexity Analysis

#### [X] Big O Notation

Good Code

-   readable
-   scalable
    -   memory: space complexity
    -   speed: time complexity

## Resources

### Big O

-   [Big O Cheat Sheet](https://zerotomastery.io/cheatsheets/big-o-cheat-sheet/?utm_source=udemy&utm_medium=coursecontent)
-   [Know Thy Complexities!](https://www.bigocheatsheet.com/)

## Problem solving approach

1. Understand the Problem

2. Explore Concrete Examples

3. Break It down

4. Solve/ Simplify

5. Look Back and Refactor

# Problem Solving Patterns

## Frequency Counters Pattern

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

# Recursion

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

-

# Linear Search

## Linear Search Big O

-   Best: O(1)
-   Worst: O(n)
-   Average: O(n)

## Binary Search

-   much faster form of search
-   rather than eliminating one element at a time, we eliminating half of the remaining elements at a time
-   only works on sorted array
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

# Sorting Algorithm

-   [visual algo](https://visualgo.net/en)

## Bubble Sort

-   idea: largest values bubbles up to the top

### Pseudocode

-   start loop: i = arr.length => > 0
    -   nested loop: j = 0; j < i -1; j++
    -   if arr[j] > arr[j+1] => swap

## Selection Sort

## Insertion Sort

## Merge Sort

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
