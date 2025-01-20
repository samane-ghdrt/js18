// ? Question-3: Write a function that simulates the filter function using a callback function:
// todo-1: Your function should take an array and a callback function as arguments.
// todo-2: It should return the result of filtering based on the callback.
// todo-3: In the callback function, check if the number is greater than 2.

// const numbers = [1, 2, 3, 4, 5];

// const evenNumbers = simulateFilter(numbers, callback);
// console.log(evenNumbers); //>>> [3, 4, 5]

function simulateFilter(array, callback) {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  function callback(number) {
    return number > 2;
  }
  
  const filteredNumbers = simulateFilter(numbers, callback);
  console.log(filteredNumbers); // Output: [3, 4, 5]
  
  
  // Another example with an array of strings and a different callback:
  const words = ["apple", "banana", "kiwi", "orange"];
  
  function isLongerThanFour(word) {
    return word.length > 4;
  }
  
  const longWords = simulateFilter(words, isLongerThanFour);
  console.log(longWords); // Output: ["apple", "banana", "orange"]
  
  
  // Example using an arrow function for the callback:
  const evenNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const greaterThanFive = simulateFilter(evenNumbers, (number) => number > 5);
  console.log(greaterThanFive); // Output: [6, 7, 8]