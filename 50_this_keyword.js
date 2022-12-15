// this = reference to a particular object
//        the object depends on the immediate context

const car1 = {
    model: "Mustang",
    color: "red",
    year: 2022,

    drive : function () {
        console.log(`You drive the ${this.model}`); // or ${car1.model}
    }
}
car1.drive();


const car2 = {
    model: "Corvette",
    color: "blue",
    year: 2023,

    drive : function () {
        console.log(`You drive the ${this.model}`); // or ${car2.model}
    }
}
car2.drive();


console.log(this);

this.name = "myWindow";
console.log(this.name);