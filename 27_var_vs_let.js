//  variable scope = where a variable is accessible

// let = variables are limited to block scope {}
// var = variables are limited to a function(){}


// let
for(let a = 1; a <= 3; a++){
    // console.log(a);
}
console.log(a);
// if this statement is declared outside the {} so the error is occured
// Uncaught ReferenceError: a is not defined at 27_var_vs_let.js:10


// var
for(var b = 1; b <= 3; b++){

}
console.log(b);
// here the b is displayed


doSomething();

function doSomething(){
    for(var c = 1; c <= 3; c++){
        // console.log(c);
    }
}
console.log(c);
// Uncaught ReferenceError: c is not defined at 27_var_vs_let.js:26


// global variable = is declared outside any function
// (if global, var will CHANGE browser's window properties)