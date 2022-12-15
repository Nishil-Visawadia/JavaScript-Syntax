// object = A group of properties and methods
//          properties = what an object has (name, colour, year)
//          methods = what an object can do (if we create car object two possible methods are accelerate and brake)
//          use . to access properties / methods

const car1 = {
    model: "Mustang",
    color: "red",
    year: 2022,

    drive: function() {
        console.log("You are driving the car");
    },
    brake: function() {
        console.log("You stepped on the brakes of the car");
    }
}

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);

car1.drive();
car1.brake();


const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2023,

    drive: function() {
        console.log("You are driving the car");
    },
    brake: function() {
        console.log("You stepped on the brakes of the car");
    }
}

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);

car2.drive();
car2.brake();