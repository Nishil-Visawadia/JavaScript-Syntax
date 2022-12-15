document.getElementById("myButton").onclick = function() {
    
    const myCheckBox = document.getElementById("myCheckBox");

    const visaButton = document.getElementById("visaButton");
    const mastercardButton = document.getElementById("mastercardButton");
    const paypalButton = document.getElementById("paypalButton");

    if(myCheckBox.checked){
        console.log("You are subscribed");
    }
    else{
        console.log("You are not subscribed");
    }

    if(visaButton.checked){
        console.log("You are paying with a Visa");
    }
    else if(mastercardButton.checked){
        console.log("You are paying with a MasterCard");
    }
    else if(paypalButton.checked){
        console.log("You are paying with a PayPal");
    }
    else{
        console.log("You must select a payment method");
    }
}

/*
<body>
    <label for="myCheckBox">Subscribe</label>
    <input type="checkbox" id="myCheckBox"><br>

    <label for="visaButton">Visa</label>
    <input type="radio" name="card" id="visaButton">
    <label for="mastercardButton">MasterCard</label>
    <input type="radio" name="card" id="mastercardButton">
    <label for="paypalButton">PayPal</label>
    <input type="radio" name="card" id="paypalButton"><br>

    <button id="myButton">Submit</button>

    <script src="15_checked_property.js"></script>
</body>
*/