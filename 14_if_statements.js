/*
    if statement = a basic form of decision making 
                    if a condition is true, then do something
                    if not, then do nothing
*/

let age = 21;

if (age >= 65){
    console.log("You are a senior citizen");
}
else if (age < 0){
    console.log("You aren't born");
}
else if (age >= 18){
    console.log("You are an adult");
}
else{
    console.log("You are a child");
}


let online = true;

if (online){
    console.log("You are online");
}
else{
    console.log("You are offline");
}