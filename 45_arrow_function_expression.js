// arrow function = compact alternative to traditional function expression
// =>


// traditional way
const greeting_1 = function(userName) {
    console.log(`Hello ${userName}`);
}
greeting_1("Nice");

// arrow function
const greeting_2 = (userName) => {
    console.log(`Hello ${userName}`);
}
greeting_2("Nice");


/* // traditional
const percent = function(x, y) {
    return x / y * 100;
}
*/

const percent = (x, y) => x / y * 100; // arrow

console.log(`${percent(75, 100)}%`);


let grades = [100, 50, 90, 60, 80, 70,];

// Function expression
/*
grades.sort(function(x, y) {
    return y - x;
});

grades.forEach(function(element) {
    console.log(element);
});
*/

// Arrow function
grades.sort((x, y) => y -x );
grades.forEach((element) => {console.log(element)});