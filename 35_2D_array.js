// 2D array = An array of arrays

let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats];

// to change elements in a 2D array, use row and column (it starts with 0)
groceryList[0][0] = "mangoes"; // apples are replaced with mangoes
groceryList[2][0] = "steak"; // steaks are replaced with eggs

for (let list of groceryList) {
    for (let food of list) {
        console.log(food);
    }
}