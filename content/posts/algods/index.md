---
title: "Algorithms & Data Structures"
cover: "/covers/algorithm.png"
date: "2017-12-30"
time: "11:41"
category: "algods"
sticky: true
tags:
  - algorithm
  - data structures
---

The goal of studying these fundamentals is to write code that utilizes the right data structure with an acceptable time and space complexity.

You will most likely never implement a heap nor a heapsort.  However, when you are studying [JavaScript Concurrency Model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop) on MDN, and there is a big square that just says "Heap", you need to understand what that represents.

## Algorithms

Understanding algorithms is fundamental to what we do.  It is not some abstract concept that you learn from a heavy textbook.  An algorithm is simply a set of instructions to perform a task.

One of the engineers was writing a custom object deep search function.  There was an obfuscated object from a third-party which we weren't supposed to look inside.  We had to find a value nested in this massive object, and it could change positions whenever the publisher wanted to.  That's why he wrote his own search.  We did not import `lodash` or other helpers because we focused heavily on mobile optimization.  Keeping out site fast and light was important.

His implementation was a recursive depth-first search algorithm ([Wiki](https://en.wikipedia.org/wiki/Depth-first_search)), similar to:

```javascript
const hasValue = (object, value) => {
  for (const key in object) {
    const current = object[key]

    if (typeof current === 'object') {
      return hasValue(current, value)
    } else if (current === value) {
      return true
    }
  }

  return false
}
```

DFS algorithm for a tree takes a path and traverses all the way down to the last node, then returns back up to traverse the next child's path.

I noticed that the value he was looking for was only two levels in deep.  I suggested he take a look at a breadth-first search algorithm ([Wiki](https://en.wikipedia.org/wiki/Breadth-first_search)) similar to this:

```javascript
const hasValue = (object, value) => {
  const queue = [object]

  while (queue.length > 0) {
    const item = queue.shift()

    if (typeof item === 'object') {
      Object.keys(item).forEach(key => {
        queue.push(item[key])
      })
    } else if (item === value) {
      return true
    }
  }

  return false
}
```

BFS algorithm utilizes a queue to traverse through down each level of depth.  The node's children are queued for sequential processing.  If the value is shallow in depth, BFS is a better algorithm because it does not travel all the way down to the end of each path.

This is a real-life example of where algorithm knowledge comes into play.

## Data Structures

Choosing the right data structure makes your code intuitive.  Being able to recognize when to use a hash map, an array, or a graph can be important in solving a problem.

Let's look at a scheduling coding exercise that I recently helped someone try to solve: Given an array of the start times and the duration of each appointments, structure the requests to maximize the number of hours worked in a day.

```javascript
const requests = [
  ['10:00am', '30'],
  ['10:15am', '45'],
  ['10:30am', '20'],
  ['11:00am', '40'],
  // And more
]
```

I converted the data into the start time and the end time, in terms of minutes per day.  For example, `12:00am` would be `0` and `11:59pm` would be `1439` (there are 1440 minutes in a day):

```javascript
const requests = [
  [600, 630],
  [615, 660],
  [630, 650],
  [660, 700]
]
```

I recognized that it can be transformed into a graph problem, so I created a node:

```javascript
class Node {
  constructor(startTime, endTime) {
    this.startTime = startTime;
    this.startTime = endTime;
    this.duration = endTime - startTime;
    this.parents = [];
    this.children = [];
  }
}
```

I ran it through an algorithm that connect all the nodes, and this was the result:

```javascript
const nodes = [
  {
    startTime: 600,
    endTime: 630,
    duration: 30,
    parents: [],
    children: [
      // Reference to [630, 650] node,
      // Reference to [660, 700] node
    ]
  },
  // Other nodes
]
```

The `10:30am` and `11:00am` nodes are both children of the `10:00am` node, because they do not overlap when the `10:00am` node ends at `10:30am`.  The `10:00am` node does not have any parents because there is no appointment before that.

Now, it is a simple graph problem.  Generate every possible path starting from each node, and compare the score of each path.  The score of the path is the sum of its node's duration.  Pick the path with the highest score, which is the optimal set of appointments.

Transforming the data structure to one that I was familiar with helped me see the solution to the problem.  Though it is not the most optimal solution in terms of time and space complexity, I find the solution more intuitive to understand and explain, since it involves a common data structure and a simple traversal operation.

This is just a simple example describing how understanding basic data structures can help you solve a problem.

---

I will be writing a series of articles covering the fundamentals of the following subjects:

* **Algorithms**
  * Bubble sort
  * Merge sort
  * Quick sort
  * Quick sort in place
  * Heap sort
  * Binary search
  * Depth-first and breadth-first tree search
  * And more

* **Data Structures**
  * Queue
  * Stack
  * Single and double linked list
  * Static and dynamic array with a ring buffer
  * Heap
  * Hash map
  * Binary search tree
  * Graph
  * LRU Cache
  * Trie
  * And more

Please follow me on [Twitter](https://twitter.com/kevinkiklee) to find out when they are published!

- Kevin
