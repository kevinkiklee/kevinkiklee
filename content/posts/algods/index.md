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

## Data Structures

Choosing the right data structure makes your code intuitive.  Being able to recognize when to use a hash map, an array, or a graph can be important in solving a problem.  Let's look a scheduling coding exercise that I recently helped someone try to solve.  Given an array of the start times and the duration of each appointments, structure the requests to maximize the number of hours worked in a day.

```js
const requests = [
  ['10:00am', '30'],
  ['10:15am', '45'],
  ['10:30am', '20'],
  ['11:00am', '40'],
  // And more
]
```

The first thing I did is convert the data into integers of the start time and the end time, in terms of minutes per day.  For example, 12:00am would be `0` and 11:59pm would be `1439` (there are 1440 minutes in a day):

```js
const requests = [
  [600, 630],
  [615, 660],
  [630, 650],
  [660, 700]
]
```

I recognized that it can be transformed into a graph problem, so I created a node:

```js
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

```js
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
  }
]
```

The 10:30am and 11:00am nodes are both children of the 10:00am node, because they do not overlap when the 10:00am node ends at 10:30am.  The 10:00am node does not have any parents because they is no appointment before that.

Voila!  Now it is just a simple graph problem.






The algorithm is the mind and the data structure is the body of computer science.
