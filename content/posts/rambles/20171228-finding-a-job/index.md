---
title: "Finding a job after a coding bootcamp"
summary: "You just finished your coding bootcamp, and you have just reached the starting line.  The real challenge begins now!"
cover: '/covers/moneymouth.png'
date: "2017-12-28"
time: "15:33"
category: "rambles"
tags:
  - guide
---

This is Part II.  Part I can be found here: [Preparing for a coding bootcamp](/rambles/preparing-for-a-coding-bootcamp)

---

## Table of Contents
* [Portfolio Project](#portfolio-project)
* [Study Material](#study-material)
  * [Algorithms & Data Structures](#algorithms--data-structures)
  * [JavaScript Fundamentals](#javascript-fundamentals)
  * [Web Application Architecture](#web-application-architecture)
* [Applying to jobs](#applying-to-jobs)

---

Congratulations!  You just finished your coding bootcamp, and you have just reached the starting line!  The real challenge begins now.

## Portfolio Project

You should have built a project at your coding bootcamp.  Polish it.  It is the only proof of your skillset.

When you meet someone at a networking meetup, you want to point them to your project and its GitHub.  Since you are at a coding event, there is a good chance that there are laptops everywhere.  Type in your URL, and provide a concrete and absolute proof of what you can do.

The aesthetics matter.  Most likely, the first person seeing your application will be a recruiter who does not understand how cleverly you solved a `N+1` query problem.  The recruiter will play around on your app for about 30 seconds to a minute (I have measured this with Google Analytics).  Make sure that your project is presentable and visually pleasing.

#### If you do not have a portfolio
Clone a well-known non-trivial web application such as Slack, Spotify, AirBnB, Facebook, Strava, or Asana.  For example, I cloned Slack - [SlackOff](http://www.slackoff.today/).

You have 15 seconds to explain your project during the phone screen.  You do not want to waste it by saying "I made this dating app that matches people based on the side of the bed they sleep on.  I swear, it's based on science!"  You want to say "I cloned Slack using React/Redux front-end, Rails/PSQL back-end, and Pusher websocket API for live chat functionality."

You are not trying to get on Shark Tank.  You are a coder, and it is not your job to come up with creative app ideas.  Focus on what your actual job is:  code.  Also, you are not a designer.  By cloning a well-established app, you don't have to worry about the design.  It is already using UX/UI that has been refined by the best professionals.

> **Build or polish the portfolio project**

## Study Material

Here are the topics you should have basic understanding of:

* Web application architecture
  * Front-end framework (React+Redux)
  * Back-end framework (Node/Rails)
  * Database (SQL/MongoDB)
  * Local development environment setup
  * REST architecture

* JavaScript fundamentals
  * Callbacks and first-class functions
  * Closure
  * Context and `this`
  * `bind`, `apply`, and `call`
  * `let`, `const`, and `var`
  * `map`, `reduce`, and `filter`
  * DOM traversal and manipulation

* CS fundamentals
  * Time and space complexity i.e. `O(n)`
  * Object-oriented programming
  * Recursion

* Other fundamentals
  * Version control system (Git)
  * Flexbox / Responsive CSS
  * Test-driven development
  * How to Google

The above is the bare minimum.  If you do not have a general grasp of the above tiny list, solidify your knowledge.  You will be talking about these subjects at your interviews.

You will be asked difficult questions at the interviews.  You do not want to be standing there embarrassed in front of the whiteboard.

Nobody hands out $90k+ out of the goodness of the heart.  They will ask you the same questions they ask fresh CS graduates.  The goal is to impress them: "If someone who only started coding less than half a year ago can answer difficult questions better than someone who studied CS for 4 years, this person must have incredible potential."

The learning does not stop after a coding bootcamp (nor when you get a job).

### Algorithms & Data Structures

* **Algorithms**
  * Bubble sort
  * Merge sort
  * Quick sort
  * Quick sort in place
  * Heap sort
  * Binary search
  * Depth-first and breadth-first tree search

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

These are common whiteboard questions.  Pick one topic per day, and keep cycling through the list.  By the third time, you will get it.  Memorize the APIs of each subject.  For example, a `stack` has `push` and `pop` operations.  A binary search tree has a `height` operation.

Try to solve it on your own first, then study the standard implementations.  These have been researched by people far smarter than you and I.  Learn how they solved it.

> **Run through the above list at least twice**

### JavaScript Fundamentals

* Callbacks and first-class functions
* Closure
* Context and `this`
* `bind`, `apply`, and `call`
* `let`, `const`, and `var`
* `map`, `reduce`, and `filter`
* DOM traversal and manipulation

These are some of the most common initial phone screen questions to filter candidates.  Be ready to smoothly explain these concepts at the drop of a dime.

> **Master the JavaScript fundamentals**

### Web Application Architecture

* What happens when a user enters a URL in the browser?
  * Describe the entire process from the browser to your database, then back to the browser.
* How would you design a multiplayer tic tac toe game for 10 million users per month?
* How would you design a URL shortener like [bit.ly](https://bit.ly)?
* What is a load balancer?
* Where are the caching layers?
* What is a CDN and how does it work?
* What is database sharding?

These are some of the most important questions, but unfortunately, not all bootcamps teach them.  I have been asked architecture questions at three on-sites, and all resulted in an offer.  Being able to answer these questions is how you convert your on-site into an offer.

You are competing against hundreds of other coding bootcamp grads for the same position.  You need a way to distinguish yourself from the pack.

True story:  I was at an on-site for an amazing company.  After the phone screen, they told me they were going to ask me an architecture question at the on-site.  I was concerned.  I knew nothing about the subject, and there was to be absolutely no BS-ing allowed since my interviewer was a MIT CS grad.  I frantically Googled trying to learn this substantial subject over a weekend (*lol*).

Then I finally came across this article:  [Scalable Web Architecture and Distributed Systems](http://www.aosabook.org/en/distsys.html) (Chapter 1 of the book).  I read it several times that weekend, and attempted my best to digest the material.  I whiteboarded what I learned to a friend twice.  It worked.  I was asked *"How would you design a multiplayer tic tac toe game for 10 million users per month?"*.  I applied the concepts learned from the article to solve the problem.  And I got the offer.

Use the above article as the starting point, and start Googling each concept.

> **Study architecture and scalability fundamentals**

## Applying to jobs

This is purely a numbers game.

During WW2, there was a study conducted in finding the factor that produced the most casualties.  It was not the training.  It was not the equipment either.  It was simply the number of bullets fired.  The same approach works very well in the job search.

Your goal is to apply to 8 companies a day.  Dedicate your morning to submitting applications, then work on your portfolio project or study Algo&DS in the afternoon.  Split your piles into two:  a copy-paste pile for the companies you aren't interested in, and an interested pile where you will spend time crafting your cover letter (like one of the companies listed above).

Apply to every single entry/mid-level positions.  Never reject yourself from the company.  You have no idea what the company is looking for.

This is the most difficult phase.  You will have heartbreaks.  You will go for weeks without hearing back from anywhere.  The impostor syndrome will surface, but remind yourself that there are real software engineers that cannot clone Slack.  Keep going and the next thing you know you will be getting ready to start your new job.

> **Apply to at least 40 companies a week**

# Have Fun!

I hope this guide can provide some structure to your journey.  This guide is currently under construction, and will be constantly receiving updates.  If you would like to be notified when the final version is published please follow me on [Twitter](https://twitter.com/kevinkiklee)!

---

This is Part II.

Part I can be found here: [Preparing for a coding bootcamp](/rambles/preparing-for-a-coding-bootcamp)
