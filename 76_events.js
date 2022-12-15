// event = some action that the user or the browser does
//         many HTML elements contain event attributes


// const element = document.getElementById("myButton");
// element.onclick = doSomething;


// const element = document.body;
// element.onload = doSomething;


// const element = document.getElementById("myText");
// element.onchange = doSomething;


// const element = document.getElementById("myDiv");
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;

// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;

function doSomething() {
    // alert("You did something");
    element.style.backgroundColor = "pink";
}
function doSomethingElse() {
    element.style.backgroundColor = "aquamarine";
}


/*
<body>
    <button id="myButton">button</button>
    <input id="myText">
    <div id="myDiv"></div>
    <script src="76_events.js"></script>
</body>
*/

/*
#myDiv{
    background-color: aquamarine;
    width: 100px;
    height: 100px;
}
*/