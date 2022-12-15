// rest parameters = represents an indefinite number of parameters
// ...               (packs arguments into an array).

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b));
console.log(sum(a, b, c));
console.log(sum(a, b, c, d));

/*
function sum2(a, b) {
    return a + b;
}

function sum3(a, b, c) {
    return a + b + c;
}

function sum4(a, b, c, d) {
    return a + b + c + d;
}
*/

// Every time we had to change the function to accept the paramters,
// so with the use of rest parameters this will be avoided and
// and value can be calculated with indefinite parameters

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number
    }
    return total;
}