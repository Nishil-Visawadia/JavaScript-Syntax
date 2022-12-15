let count = 0;

document.getElementById("decreaseButton").onclick = function() {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetButton").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("increaseButton").onclick = function() {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

/*
<body>
    <label id="countLabel">0</label><br>
    <div class="center">
    <button id="decreaseButton" type="button">Decrease</button>
    <button id="resetButton" type="button">Reset</button>
    <button id="increaseButton" type="button">Increase</button></div>
    <script src="9_counter_program.js"></script>
</body>
*/

/*
#countLabel{
    display:block;
    text-align: center;
    font-size: 50px;
}

.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
*/