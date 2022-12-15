// await = makes an async function wait for a Promise

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

// await keyword
async function startProcess() {
    try {
        let message = await loadFile();
        console.log(message);
    }
    catch (error) {
        console.log(error);
    }
}
startProcess();