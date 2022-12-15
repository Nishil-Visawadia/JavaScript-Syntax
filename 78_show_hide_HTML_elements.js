const myButton = document.querySelector("#myButton");
const myImage = document.querySelector("#myImage");

myButton.addEventListener("click", () => {
    /*
    if (myImage.style.display == "none") {
        myImage.style.display = "block";
    }
    else {
        myImage.style.display = "none";
    }
    */

    if (myImage.style.visibility == "hidden") {
        myImage.style.visibility = "visible";
    } 
    else {
        myImage.style.visibility = "hidden";
    }
})
// if we use myImage.style.visibility the space will be reserved, while using .display it shifts elements up.

/*
<body>
    <button id="myButton">Toggle</button><br>
    <!--<img id="myImage" src="image.jpg" style="display: none;"></img>-->
    <img id="myImage" src="image.jpg" style="visibility: hidden;"></img>
    <p>Press the button</p>
    <script src="78_show_hide_HTML_elements.js"></script>
</body>
*/

/*
#myImage{
    width: 300px;
}
*/