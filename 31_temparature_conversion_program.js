document.getElementById("submitButton").onclick = function(){

    let temp;

    if (document.getElementById("cButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°C";
    }
    else if (document.getElementById("fButton").checked){
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById("tempLabel").innerHTML = temp + "°F";
    }
    else {
        document.getElementById("tempLabel").innerHTML = "Select a unit";
    }

}

function toCelsius(temp) {
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}

/*
<body>
    <label>Enter a Temperature: </label><br>
    <input type="text" id="textBox"><br><br>
    
    <label>Convert to: </label><br>

    <input type="radio" id="cButton" name="unit">
    <label>Celsius</label><br>

    <input type="radio" id="fButton" name="unit">
    <label>Farhenheit</label><br><br>

    <button type="button" id="submitButton">Submit</button><br><br>

    <label id="tempLabel"></label>

    <script src="31_temparature_conversion_program.js"></script>
</body>
*/