// switch = statement that examines a value
//          for a match against many case clauses.
//          More efficient than many "else if" statements

let grade="A";

switch(grade){
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed barely!");
        break;
    case "F":
        console.log("You failed!");
        break;
    default:
        console.log(grade,"is not a valid grade!");
}

let number = 90;

switch(true){
    case number >= 90:
        console.log("You did great!");
        break;
    case number >= 75:
        console.log("You did good!");
        break;
    case number >= 60:
        console.log("You did okay!");
        break;
    case number >= 40:
        console.log("You passed barely!");
        break;
    case number < 40:
        console.log("You failed!");
        break;
    default:
        console.log(number,"is not a valid number!");
}