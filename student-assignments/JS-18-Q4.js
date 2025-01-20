/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/



function sumWithPromise(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num1 < 0 || num2 < 0) {
        reject("Negative numbers are not allowed.");
      } else {
        const sum = num1 + num2;
        resolve(sum);
      }
    }, 500); // Half a second delay
  });
}

// Example usage:
sumWithPromise(5, 3)
  .then((result) => {
    console.log("The sum is:", result); // Output: The sum is: 8 (after 0.5s)
  })
  .catch((error) => {
    console.error("Error:", error);
  });

sumWithPromise(-2, 4)
  .then((result) => {
    console.log("The sum is:", result);
  })
  .catch((error) => {
    console.error("Error:", error); // Output: Error: Negative numbers are not allowed. (after 0.5s)
  });

sumWithPromise(2, -4)
  .then((result) => {
    console.log("The sum is:", result);
  })
  .catch((error) => {
    console.error("Error:", error); // Output: Error: Negative numbers are not allowed. (after 0.5s)
  });

sumWithPromise(7, 0)
.then((result) => {
    console.log("The sum is:", result); // Output: The sum is: 7 (after 0.5s)
  })
  .catch((error) => {
    console.error("Error:", error);
  });