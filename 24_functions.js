// function = Define code once, and use it many times.
//            To perform some code, call the function name.

console.log("Happy Birthday!");
console.log("Happy Birthday dear ___");
console.log("You are ___ years old!");


function startProgram(){
    let userName = "Name";
    let age = 21;
    happyBirthday(userName, age); // here function inside another function is called
}

function happyBirthday(userName, age){
    console.log("Happy Birthday!");
    console.log("Happy Birthday dear",userName);
    console.log("You are", age,"years old!");
}
startProgram();