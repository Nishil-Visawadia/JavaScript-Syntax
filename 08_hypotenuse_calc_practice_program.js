// hypotenuse c = sqrt(a * a + b * b)

let a;
let b;
let c;

// Easy way
/*
a = window.prompt("Enter side A: ");
a = Number(a);

b = window.prompt("Enter side B: ");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
console.log("Side C: ", c);
*/


// Difficult way

/*
<body>
    <label id="aLabel">Side A: </label><br>
    <input type="text" id="aTextBox"><br>
    <label id="bLabel">Side B: </label><br>
    <input type="text" id="bTextBox"><br>
    <button type="button" id="submitButton">Submit</button><br>
    <label id="cLabel"></label><br>
    <script src="8_hypotenuse_calc_practice_program.js"></script>
</body>
*/

/*
document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML ="Side C: " + c;
}
*/