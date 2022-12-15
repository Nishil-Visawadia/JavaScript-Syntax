// nested function = Functions inside other functions.
//                   Outer functions have access to inner functions.
//                   Inner functions are "hidden" from outside the outer function.
//                   used in closure (future video topic)

let userName = "Name";
let userInbox = 0;


// Normal way
// so here the functions can be accessed without even using login function
/*
displayUserName();
displayUserInbox();

function login() {
    displayUserName();
    displayUserInbox();
}
function displayUserName() {
    console.log(`Welcome ${userName}`);
}
function displayUserInbox() {
    console.log(`You have ${userInbox} new messages`);
}
*/


// Nested function
// here even if you access the inner function it will give an error
login();

function login() {
    displayUserName();
    displayUserInbox();

    function displayUserName() {
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox() {
        console.log(`You have ${userInbox} new messages`);
    }
}