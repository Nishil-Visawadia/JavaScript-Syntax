// inheritance = a child class can inherit all the
//               methods and properties from another class

class Animal {
    
    alive = true;

    eat() {
        console.log(`this ${this.name} is eating`);
    }
    sleep() {
        console.log(`this ${this.name} is sleeping`);
    }
}


class Rabbit extends Animal {
    
    name = "Rabbit";

    run() {
        console.log(`this ${this.name} is running`);
    }
}

class Fish extends Animal {
    
    name = "Fish";

    swim() {
        console.log(`this ${this.name} is swimming`);
    }
}

class Hawk extends Animal {
    
    name = "Hawk";

    fly() {
        console.log(`this ${this.name} is flying`);
    }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit);
console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();

console.log(fish);
console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(hawk);
console.log(hawk.alive);
hawk.eat();
hawk.sleep();
hawk.fly();