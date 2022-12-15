// Type Conversion = change the datatype of a value to another
//                   (Strings, Numbers, Booleans)

let age = window.prompt("How old are you ?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;

console.log("Happy Birthday !! You are",age,"years old");

//Second Way
let x;
let y;
let z;

x = Number("3.14"); // if Number("word") output will be NaN
y = String(3.14);
z = Boolean("hello"); // if Boolean("") output will be false

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);