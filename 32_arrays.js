// array = think of it as a variable
//         that can store multiple values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

let fruits = ["apple", "orange", "banana"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[3]);

// fruits[0] = "coconut"; // fruits[1] or fruits[2]

fruits.push("lemon"); // add an element
console.log(fruits);
// Output = ['apple', 'orange', 'banana', 'lemon']

fruits.pop(); // remove last element
console.log(fruits);
// Output = ['apple', 'orange', 'banana']

fruits.unshift("mango"); // add element to the beginning
console.log(fruits);
// Ouptut = ['mango', 'apple', 'orange', 'banana']

fruits.shift(); // remove element from the beginning
console.log(fruits);
// Output = ['apple', 'orange', 'banana']

console.log(fruits.at(1)); // display the 1st index of array
// Output = orange

console.log(fruits.join("-")); // join the array
// Output = apple-orange-banana

console.log(fruits.reverse()) // reverse the array
// Output = ['banana', 'orange', 'apple']

console.log([5, 6, 7].fill(1)); // fills a number 
// Output = [1, 1, 1]

console.log([5, 6].includes(5)); // check if the value exits
// Output = true

console.log([3, 4, 5, 6].map((num) => num + 6 ));
// Returns a new array containing the results of invoking a function on every element in the calling array.
// Output = [9, 10, 11, 12] // addition of the array by 6

console.log([5, 6].find((num) => num > 4));
// Returns the found element in the calling array, if some element in the array satisfies the testing function, or undefined if not found.
// Output = 5

console.log([5, 6].some((num) => num > 5));
// Returns the found element in the calling array, if some element in the array satisfies the testing function, or undefined if not found.
// Output = true

console.log([4, 5, 6].filter((num) => num > 4));
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Output = [5, 6]

console.log([3, 4, 5, 6].every((num) => num > 5));
// Returns true if every element in the calling array satisfies the testing function.
// Output = false

console.log([4, 5, 6].findIndex((num) => num > 4));
// Returns the found index in the calling array, if an element in the array satisfies the testing function, or -1 if not found.
// Output = 1 (the element 5)

console.log([2, 4, 5, 6].reduce((acc, num) => acc + num));
// Executes a user-supplied "reducer" callback function on each element of the array (from left to right), to reduce it to a single value.
// The easiest-to-understand case for reduce() is to return the sum of all the elements in an array
// Output = 17

// let length = fruits.length;
// console.log(length);

// let index = fruits.indexOf("apple");
// if you search for a value which is not in the array then it will display -1
// console.log(index);