let x;
let y;
let z;

document.getElementById("rollButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xLabel").innerHTML = x;
    document.getElementById("yLabel").innerHTML = y;
    document.getElementById("zLabel").innerHTML = z;
}

/*
<body>
    <label id="xLabel">0</label><br>
    <label id="yLabel">0</label><br>
    <label id="zLabel">0</label><br>
    <button id="rollButton" type="button">Roll</button>
    <script src="10_random_number_generator.js"></script>
</body>
*/