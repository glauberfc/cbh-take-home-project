# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
In my refactoring I tried to break the `deterministicPartitionKey` function into small functions, because that makes clear what each block of code is doing. In addition, I removed all nested `if` blocks to clarify the rules for each check. I would give each little function derived from `deterministicPartitionKey` a better name in a real day's work, because I would ask for more information to understand the business rules behind it, but this was the best I could do with the time and knowledge limitations for this challenge.
