// callback = a function passed as an argument to another function.

// Ensures that a function is not going to run before a task is completed.
// Helps us develop asynchronous code.
// (When one function has to wait for another function)
// that helps us avoid errors and potential problems.

/*
let total = sum(2, 3);
displayConsole(total);
displayDOM(total);

function sum(a, b) {
    let result = a + b;
    return result;
}
*/
// Another way of writing this is callback function

sum(2, 3, displayConsole);
sum(2, 3, displayDOM);

function sum(a, b, callback) {
    let result = a + b;
    callback(result);
}

function displayConsole(output) {
    console.log(output);
}

function displayDOM(output) {
    document.getElementById("myLabel").innerHTML = output;
}

/*
<body>
    <label id="myLabel"></label>
    <script src="38_callback.js"></script>
</body>
*/