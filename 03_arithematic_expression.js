/*
    Arithematic expression is a combination of ...
    operands (values, variables, etc.)
    operators ( + - * / % )
    that can be evaluated to a value
    ex. y = x + 5;
*/

let students = 20;

students = students + 1; // Addition
students += 1; // Augmented Assignment operator
console.log("Addition:",students);

students = students - 1; // Subtraction
students -= 1;
console.log("Subtraction:",students);

students = students * 2; // Multiplication
students *= 2;
console.log("Multiplication:",students);

students = students / 2; // Division
students /= 2;
console.log("Division:",students);

let extra_students = students % 3; // Modulus
console.log("Modulus:",extra_students);

/*
    Operator Precedence:
    1. Parenthesis ()
    2. Exponents
    3. Multiplication & Division
    4. Addition & Subtraction
*/

let result = 1 + 2 * (3 + 4);
console.log(result);

result = (1 + 2) * (3 + 4);
console.log(result);