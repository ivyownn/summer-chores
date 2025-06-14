# summer-chores

This project simulates a Saturday morning chore routine using JavaScript and explores two approaches to handling asynchronous behavior: **callbacks** and **promises**. It also shows how someone might get tired and fall asleep before completing all their tasks.

## Project Description

On Saturdays, a person works through a list of chores in a specific order. Each task takes time, and after completing each one (except the first), there's a chance they might fall asleep and not continue. If they successfully complete all the chores, a celebratory message is logged to the console.

## Chores in Order

1. Mow the yard
2. Use the weed eater
3. Trim the hedges
4. Collect firewood
5. Water the garden

## Files Included

summer-chores/
├── callbackVersion.js # Chore routine using callback functions
├── promiseVersion.js # Rewritten routine using Promises
├── README.md # Project overview and documentation
└── UpdatedREADME.md # Project overview and documentation

## Concepts Practiced

- Asynchronous programming in JavaScript
- Callback functions and nested logic
- Promises and method chaining
- `setTimeout` for simulating delay
- Random events using `Math.random()`

## How to Run

### Requirements:

- [Node.js](https://nodejs.org/) must be installed

### Run the **callback version**:

node callbackVersion.js

### Run the **promise version**:

node promiseVersion.js

## promiseVersion.js

### NOTE:

This version of the Summer Chores project rewrites the original callback-based implementation using **JavaScript Promises**.

### What's Different:

- Each chore function returns a Promise.
- Promises resolve when the task is successfully completed.
- Promises reject if the person falls asleep.
- The `doSummerChores` function uses `.then()` chaining and `.catch()` to handle the flow and possible errors.

This approach improves readability and makes it easier to manage asynchronous code without deep nesting.

## asyncAwaitVersion.js

This version uses **async/await** to handle the asynchronous flow of the summer chores.

### Benefits:

- Cleaner and more readable than nested callbacks or chained `.then()` statements
- Easier to handle `try/catch` logic for potential errors (like falling asleep!)
- Each chore function remains the same as in the Promise version

### Usage:

```js
doSummerChores("Jordan");
```
