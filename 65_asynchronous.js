// synchronous code = In an ordered sequence.
//                    Step-by-step linear instructions
//                    (start now, finish now)

// asynchronous code = Out of sequence
//                     Ex. Access a database
//                         Fetch a file
//                         Tasks that take time
//                     (start now, finish sometime later)

// synchronous code
console.log("START");
console.log("This step is synchronous");
console.log("END");

// asynchronous code
console.log("START");
setTimeout(() => console.log("This step is asynchronous"), 5000);
console.log("END");