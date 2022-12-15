// Map = object that holds key-value pairs of any data type

const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
]);

/*
let shoppingCart = 0;
shoppingCart += store.get("t-shirt");
shoppingCart += store.get("underwear");
console.log(shoppingCart);
*/

// get statement
console.log(store.get("t-shirt"));

// set statement
console.log(store.set("hat", 40));

// delete statement
store.delete("hat");

// has statement
console.log(store.has("t-shirt"));
console.log(store.has("hat"));

// size statement
console.log(store.size);

store.forEach((value, key) => {console.log(`${key} $${value}`);});