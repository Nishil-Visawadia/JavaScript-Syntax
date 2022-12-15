// .addEventListener(event, function, useCapture) {}
// You can add many event handlers to one element.
// Even the same event that incokes different functions

const innerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv");

innerDiv.addEventListener("mouseover", changeRed);
innerDiv.addEventListener("mouseout", changeGreen);

function changeRed() {
    innerDiv.style.backgroundColor = "red";
}

function changeGreen() {
    innerDiv.style.backgroundColor = "lightgreen";
}

innerDiv.addEventListener("click", changeBlue);
outerDiv.addEventListener("click", changeBlue, true);
// if true then outer div will be handled first, else the inner div will be handled first

function changeBlue() {
    alert(`You selected ${this.id}`);
    this.style.backgroundColor = "lightblue";
}

/*
<body>
    <div id="outerDiv">
    <div id="innerDiv"></div>
    </div>
    <script src="77_addEventListener().js"></script>
</body>
*/

/*
#innerDiv{
    background-color: lightgreen;
    width: 100px;
    height: 100px;
    border: 1px solid;
}
#outerDiv{
    background-color: lightgreen;
    width: 200px;
    height: 200px;
}
*/