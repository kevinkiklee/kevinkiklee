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

Understanding algorithms is fundamental to what we do.  It is not some abstract concept that you learn from a heavy textbook.  An algorithm is simply a set of instructions to perform a task.

---

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
