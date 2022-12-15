// method chaining = calling one method after another in one continous line of code.

let userName = "code";

let letter1 = userName.charAt(0);
letter1 = letter1.toUpperCase();

let letter2 = userName.charAt(0).toUpperCase().trim(); // this is method chaining

console.log(letter1);
console.log(letter2);