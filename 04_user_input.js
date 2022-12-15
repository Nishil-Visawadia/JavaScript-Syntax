// How to accept input from user

// Easy way - with a window prompt

let username = window.prompt("What's your name ?");
console.log(username);

// Difficult way - HTML textbox

/*
<body>
    <label id="myLabel">Enter your name: </label><br>
    <input type="text" id="myText"><br>
    <button type="button" id="myButton">submit</button>
    <script src="4_user_input.js"></script>
</body>
*/

//let username;
document.getElementById("myButton").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}