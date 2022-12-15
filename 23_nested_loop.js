// Nested loop = a loop inside of another loop

let symbol = window.prompt("Enter a symbol");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of columns');

for(let i = 1; i <= rows; i+=1) {
    for(let j = 1; j <= columns; j++) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}

/*
<body>
    <label id="myRectangle">My Rectangle<br></label>
    <script src="23_nested_loop.js"></script>
</body>
*/