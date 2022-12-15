class Car{
    constructor(model, year, color) {
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lamborghini", 2022, "yellow");

displayInfo(car1);
displayInfo(car2);
displayInfo(car3);

changeColor(car3, "gold");
displayInfo(car3); // car3 object is accessed by displayInfo function

function displayInfo(car){
    // here car is parameter name
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
    console.log(""); // "\n"
}

function changeColor(car, color) {
    car.color = color;
}