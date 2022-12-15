let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";


let fruits = document.getElementsByName("fruits");
console.log(fruits);
console.log(fruits[0]); //fruits[1] or fruits[2]

fruits.forEach(fruit => {
    if (fruit.checked) {
        console.log(fruit.value);
    }
});


let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";

let deserts = document.getElementsByClassName("deserts");
deserts[0].style.backgroundColor = "lightgreen";


// querySelector can select id, classname, tag or attribute
let element_1 = document.querySelector("#myTitle"); // # is used for id
element_1.style.backgroundColor = "lightblue";

let element_2 = document.querySelector(".deserts"); // . is for classname
element_2.style.backgroundColor = "lightblue";

let element_3 = document.querySelector("li"); // this is tag
element_3.style.backgroundColor = "lightblue";

let element_4 = document.querySelector("[for]"); // [] is used for attribute
element_4.style.backgroundColor = "lightblue";

// for querySelectorAll
let element_5 = document.querySelectorAll("li");
element_5.forEach(element => {
    element.style.backgroundColor = "lightblue";
});


/*
<body>
    <h1 id="myTitle">This is the Menu</h1>
    
    <input type = "radio" name = "fruits" value = "apple">
    <label for = "apple">apple</label><br>
    
    <input type = "radio" name = "fruits" value = "orange" checked = "checked">
    <label for = "orange">orange</label><br>
    
    <input type = "radio" name = "fruits" value = "banana">
    <label for = "banana">banana</label><br>

    <ul>
        <li>Carrots</li>
        <li>Potatoes</li>
        <li>Onions</li>
    </ul>
    
    <div class="deserts">ice cream</div>
    <div class="deserts">cake</div>
    <div class="deserts">pie</div>

    <script src="72_element_selectors.js"></script>
</body>
*/