// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH condition must be true)
// || OR (EITHER condition can be true)


let temp1 = 15;

if (temp1 > 0 && temp1 < 30){
    console.log("the weather is good");
}
else{
    console.log("the weather is bad");
}


let temp2 = 50;

if (temp2 <= 0 || temp2 >= 30){
    console.log("the weather is bad");
}
else{
    console.log("the weather is good");
}

// multiple contitions
let sunny = true; // sunny = false

if (temp1 > 0 && temp1 < 30 && sunny){
    console.log("the weather is good");
}
else{
    console.log("the weather is bad");
}