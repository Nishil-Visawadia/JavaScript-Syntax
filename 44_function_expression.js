// function expression = function without a name (anonymous function)
//                       avoid polluting the global scope with names
//                       Write it, then forget about it

const greeting = function() {
    console.log("Hello!");
}

greeting();

let count = 0;

/*
function increaseCount() {
    count+=1;
    document.getElementById("myLabel").innerHTML = count;
}

function decreaseCount() {
    count-=1;
    document.getElementById("myLabel").innerHTML = count;
}
*/
// the above is an older way

document.getElementById("increaseButton").onclick = function() {
    count += 1;
    document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function() {
    count -= 1;
    document.getElementById("myLabel").innerHTML = count;
}

/*
<body>
    <label id="myLabel">0</label><br>
    <button id="decreaseButton">Decrease</button> <!--onclick="decreaseCount()"-->
    <button id="increaseButton">Increase</button> <!--onclick="increaseCount()"-->
    <script src="44_function_expression.js"></script>
</body>
*/