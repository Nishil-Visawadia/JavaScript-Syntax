// async = makes a function return a Promise

// using promises
const promise = new Promise((resolve, reject) => {
    
    let fileLoaded = true; // fileLoaded = false; for error message

    if (fileLoaded) {
        resolve("File loaded");
    }
    else {
        reject("File not loaded");
    }
} );

promise.then((value) => {console.log(value);})
       .catch((error) => {console.log(error);})


// using async function
async function loadFile() {
    let fileLoaded = true;

    if (fileLoaded) {
        return ("File loaded");
    }
    else {
        throw ("File not loaded");
    }
}

loadFile().then((value) => {console.log(value);})
          .catch((error) => {console.log(error);})