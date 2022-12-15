const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
    let guess = document.getElementById("guessField").value;
    guesses += 1;

    if (guess == answer) {
        alert(`${answer} is the number. It took you ${guesses} guesses`);
    }
    else if(guess < answer) {
        alert("Too small");
    }
    else {
        alert("Too large");
    }
}
console.log(answer);

/*
<body>
    <h1>Number Guessing Game</h1>
    <p>Pick a number between 1- 10</p>
    <label>Enter a guess</label>

    <input id="guessField"><br>
    <input id="submitButton" type="submit">
    <script src="30_number_guessing_game.js"></script>
</body>
*/